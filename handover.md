# Handover Topics

## Table of Contents

- [1. Orientation](#1-orientation)
  - [Monorepo/package map and dependency flow](#monorepopackage-map-and-dependency-flow)
  - [Public API typing and drift risk](#public-api-typing-and-drift-risk)
- [2. XML Parsing Foundation](#2-xml-parsing-foundation)
  - [Chevrotain for CST Parser](#chevrotain-for-cst-parser)
  - [Parser lexer modes and XML grammar limits](#parser-lexer-modes-and-xml-grammar-limits)
  - [Fault Tolerance in the CST Parser](#fault-tolerance-in-the-cst-parser)
- [3. AST Layer](#3-ast-layer)
  - [CST to AST conversion contract](#cst-to-ast-conversion-contract)
  - [Namespace handling](#namespace-handling)
  - [AST position utilities](#ast-position-utilities)
- [4. Editor-Service APIs](#4-editor-service-apis)
  - [Content-assist architecture](#content-assist-architecture)
  - [Validation and constraints pipeline](#validation-and-constraints-pipeline)
  - [Simple schema package](#simple-schema-package)
- [5. Language Server And VS Code Delivery](#5-language-server-and-vs-code-delivery)
  - [LSP what is it](#lsp-what-is-it)
  - [Language server behavior](#language-server-behavior)
  - [Sub-process for LSP](#sub-process-for-lsp)
  - [VS Code extension package (`xml-toolkit`)](#vs-code-extension-package-xml-toolkit)
  - [VSIX packaging workaround](#vsix-packaging-workaround)
- [6. Consumers And Integration](#6-consumers-and-integration)
  - [Consumer in UI5 Language Assistant](#consumer-in-ui5-language-assistant)
  - [Other Consumers (XML prettier plugin)](#other-consumers-xml-prettier-plugin)
- [7. Project Operations And Maintenance](#7-project-operations-and-maintenance)
  - [Build/test/coverage policy](#buildtestcoverage-policy)
  - [Maintenance notes / known sharp edges](#maintenance-notes--known-sharp-edges)

## 1. Orientation

### Monorepo/package map and dependency flow

This repository is a Yarn/Lerna monorepo.
Most packages are public npm packages under `@xml-tools/*`; `xml-toolkit` is the private VS Code extension package.

The packages are:

- [`@xml-tools/parser`][parser-package] lexes and parses XML text into a Chevrotain CST, token vector, lexing errors, and parsing errors.
- [`@xml-tools/ast`][ast-package] converts the CST and token vector into a partial XML AST with semantic fields plus selected syntax ranges.
- [`@xml-tools/content-assist`][content-assist-package] identifies what kind of completion was requested at a given offset and delegates to user-provided providers.
- [`@xml-tools/validation`][validation-package] provides a generic visitor-based validation API over the AST.
- [`@xml-tools/constraints`][constraints-package] provides built-in XML well-formedness checks used by the language server.
- [`@xml-tools/simple-schema`][simple-schema-package] turns a simple object-literal schema into validators and completion providers.
- [`@xml-tools/language-server`][language-server-package] exposes XML diagnostics through LSP.
- [`xml-toolkit`][xml-toolkit-package] packages the language server as a VS Code extension.

### Public API typing and drift risk

Implementation code is plain CommonJS JavaScript, but each package exposes TypeScript declarations, for example [`packages/parser/api.d.ts`][parser-api-dts]. The declarations are the practical public contract.

- Public entry points are usually package `lib/api.js` and `api.d.ts` files, for example [`packages/parser/lib/api.js`][parser-api-js] and [`packages/parser/api.d.ts`][parser-api-dts].
- Package CI runs `tsc api.d.ts` to type-check the declaration file.
- The implementation is not compiled from TypeScript, so declaration drift is possible.
- When behavior and docs disagree, inspect source files such as [`api.d.ts`][parser-api-dts], [`lib/api.js`][parser-api-js], and tests before trusting [`README.md`][root-readme] examples.

## 2. XML Parsing Foundation

### Chevrotain for CST Parser

The parser is implemented with [Chevrotain](https://chevrotain.io/docs/) in [`packages/parser/lib/parser.js`][parser-js].

- The parser produces a Concrete Syntax Tree, which preserves grammar-level structure for downstream AST building and content-assist logic.
- `parse()` in [`packages/parser/lib/api.js`][parser-api-js] reuses a single parser instance for performance; assigning `xmlParser.input` resets parser state.
- `BaseXmlCstVisitor` is exported so other packages can traverse the XML CST without duplicating grammar knowledge.

### Parser lexer modes and XML grammar limits

The lexer is defined in [`packages/parser/lib/lexer.js`][lexer-js] and uses two Chevrotain modes.

- `OUTSIDE` mode handles text outside tags: comments, CDATA, DOCTYPE, entity refs, char refs, whitespace, XML declaration open, processing instructions, opening tags, closing tags, and text.
- `INSIDE` mode handles tag internals: names, attributes, strings, equals, `/`, `>`, `?>`, and `/>`.
- Some invalid tokens are intentionally categorized as valid token types to improve recovery, for example invalid `<` handling inside a tag.
- Full [DTD](https://en.wikipedia.org/wiki/Document_type_definition) parsing is intentionally not implemented. Internal DTD subsets are skipped/ignored rather than modeled as a complete grammar.

### Fault Tolerance in the CST Parser

The parser is designed for editor tooling, so it must return useful structure even when the XML is incomplete or invalid.
For example, editor tooling still need to provide an autocomplete suggestion while the user is typing and the current
document is invalid.

- Chevrotain recovery is enabled with `recoveryEnabled: true`.
- `parse()` returns both `lexErrors` and `parseErrors` instead of throwing on the first problem.
- The CST may be partial; downstream code must tolerate missing nodes and inserted recovery tokens.
- Single-token deletion (one of Chevrotain recovery algorithms) recovery is disabled around selected element-name and attribute positions to avoid consuming important following XML; see the [element-name guard][parser-element-name-recovery-guard], [attribute guard][parser-attribute-recovery-guard], and [`canRecoverWithSingleTokenDeletion()` override][parser-single-token-deletion-override].
- The custom [`findReSyncTokenType()` override][parser-resync-override] exists as a Chevrotain recovery workaround for token-category-aware resync. This was fixed upstream in Chevrotain; see [issue #1055][chevrotain-resync-issue-1055] and [PR #1756][chevrotain-resync-pr-1756].
- Snapshot tests under [`packages/parser/test/snapshots`][parser-snapshots] document both valid and invalid XML recovery behavior.

## 3. AST Layer

### CST to AST conversion contract

[`@xml-tools/ast`][ast-package] converts parser output into a simpler tree used by validation, content assist, schema logic, and position utilities.

A CST is the parser-shaped tree: it mirrors grammar rules and tokens, including nodes such as `document`, `element`, `attribute`, token arrays, recovery artifacts, and parse-level structure. It is useful when code needs to reason about exact parser output or partial syntax.

An AST is the consumer-shaped tree: it removes most grammar mechanics and exposes XML concepts directly, such as documents, elements, attributes, text content, namespaces, parent links, and selected source ranges. Consumers usually want the AST because it answers XML questions without requiring them to understand Chevrotain CST details.

- Entry point: [`buildAst(cst, tokenVector)`][ast-build-entry].
- The AST is designed for editor-time, partially valid XML: the [AST declaration documents that some mandatory properties may be `InvalidSyntax`][ast-api-partial-contract], and [`InvalidSyntax` is currently `null`][ast-api-invalid-syntax-type].
- [Element nodes][ast-element-type] and [attribute nodes][ast-attribute-type] expose semantic XML data such as names, attributes, children, text, namespaces, and attribute key/value data.
- AST nodes also carry selected syntax ranges, for example [`openName`, `closeName`, `openBody`, `closeBody`, `attributesRange`, and guessed attribute ranges][ast-syntax-ranges]. These ranges are what diagnostics, content assist, position mapping, and formatter-like consumers rely on.
- [Parent links are assigned][ast-parent-links] so consumers can navigate from an attribute, text node, or child element back to its containing element/document.

### Namespace handling

Namespace handling is part of AST construction and shared common utilities.

- Namespace attributes are detected using [`isXMLNamespaceKey()`][xml-ns-key] from [`@xml-tools/common`][common-package].
- `xmlns` represents the default namespace.
- `xmlns:prefix` represents a named namespace prefix.
- [`DEFAULT_NS`][ast-default-ns] is used internally as a safe key for default namespace entries.
- [Namespace declarations are propagated][ast-namespace-propagation] through the element tree so each element can inspect the namespace scope available at that point.

### AST position utilities

[`@xml-tools/ast-position`][ast-position-package] answers "what AST thing is at this text offset?" for a small set of syntax positions.

- Entry point: [`astPositionAtOffset(ast, offset)`][ast-position-api].
- Supported positions are implemented in [`AstPositionVisitor`][ast-position-visitor]: element opening names, element closing names, attribute keys, and attribute values.
- This is a small helper over AST syntax ranges. It is narrower than content assist because it classifies existing syntax at an offset rather than detecting completion scenarios around missing or partial syntax.

## 4. Editor-Service APIs

### Content-assist architecture

[`@xml-tools/content-assist`][content-assist-package] is a framework for classifying completion context, not a source of domain-specific suggestions. Its job is to answer "what kind of completion is being requested here?" from the XML syntax around the cursor. For example, the same cursor offset can mean "suggest an element name", "suggest an attribute name", "suggest an attribute value", or "suggest element content". The package stops at that boundary: it identifies the scenario and passes structured context to consumer-owned providers, while UI5/schema/project-specific logic decides what suggestions are actually valid.

- Consumers call [`getSuggestions()`][content-assist-get-suggestions-api] with parser/AST inputs and their own providers.
- Providers are grouped by high-level scenarios: [`elementContent`, `elementName`, `attributeName`, and `attributeValue`][content-assist-provider-map-api].
- Example: at `<person nam⇶>`, content assist should call an attribute-name provider with `person` as the element and `nam` as the prefix. At `<person gender="f⇶">`, it should call an attribute-value provider for `gender` with prefix `f`.
- Provider scenario examples and callback arguments are documented in the [`api.d.ts` provider declarations][content-assist-provider-examples-api].
- Providers can receive a consumer-specific `context` object, so UI5/schema/project state can stay outside this package.

### Validation and constraints pipeline

Validation is the generic extension point for finding problems in AST nodes. It separates traversal and issue collection from the actual validation rules: the package walks the AST, while consumers provide small validators that decide what is wrong for their domain. This lets the same XML tree support generic XML checks, schema-based checks, UI5-specific checks, or any other consumer-specific diagnostics without changing the parser or AST packages.

- [`@xml-tools/validation`][validation-package] exposes a small [`validate({ doc, validators })` contract][validation-api-contract].
- Validators are plain functions: element validators receive `XMLElement`, attribute validators receive `XMLAttribute`, and both return validation issues.
- A [`ValidationIssue`][validation-issue-api] is intentionally generic: message, AST node, optional severity, and optional precise position.
- [`@xml-tools/constraints`][constraints-package] is the built-in XML well-formedness layer on top of validation; its public API is [`checkConstraints(ast)`][constraints-api-contract].
- Current constraints cover [duplicate attributes][constraint-unique-attribute-keys] and [mismatched tag names][constraint-tag-closing-name-match], wired through [`checkConstraints()`][constraints-check-constraints-impl]. The language server turns parser errors and validation/constraint issues into editor diagnostics.

### Simple schema package

[`@xml-tools/simple-schema`][simple-schema-package] is a deliberately small schema format, not [XSD](https://www.w3.org/XML/Schema). It exists for consumers that have a constrained XML vocabulary and need practical editor features without implementing a full XML Schema processor. The schema is just a JavaScript object literal, so it is easy to construct from application metadata, test directly, and pass into validation or completion providers.

The important tradeoff is expressiveness versus simplicity. Simple schema can describe common editor-service needs: element names, required elements, `single` versus `many` cardinality, allowed attributes, required attributes, open/closed child-element or attribute sets, and simple attribute values such as enums or regular expressions. It does not try to model the full XSD feature set: complex types, imports/includes, full datatype semantics, substitution groups, identity constraints, or schema resolution.

- It is useful when a consumer wants validation and completions from the same small schema object.
- The [schema type][simple-schema-type-api] is the contract for what can be expressed.
- The package exposes two high-level products: [`getSchemaValidators(schema)` and `getSchemaSuggestionsProviders(schema)`][simple-schema-entrypoints-api].
- Example: a `person` element with a single-cardinality `age` child should not suggest another `age`, but a `many` child can still be suggested.

## 5. Language Server And VS Code Delivery

### LSP what is it

The Language Server Protocol separates editor clients from language-service logic.

- The editor extension is the LSP client.
- The XML language server is a separate process that receives document events and returns diagnostics.
- This split lets the same language-service logic be reused by different editors or tools.
- In this repo the LSP layer currently exposes diagnostics, not full completion/hover/formatting features.

### Language server behavior

The language server implementation is small and diagnostics-focused.

- [`packages/language-server/lib/server.js`][language-server-js] creates the LSP connection and `TextDocuments` manager.
- On initialize, it reads `initializationOptions.consumer`; otherwise it uses the default consumer name.
- Capabilities currently advertise `TextDocumentSyncKind.Full` only.
- On document content change, the server calls `validateDocument()` and sends diagnostics.
- `validateDocument()` only validates documents with `languageId === "xml"`.
- Diagnostic sources are set to the `consumer` value so downstream tools can display who produced the issue.

### Sub-process for LSP

The language server is intended to run out of process.

- [`@xml-tools/language-server`][language-server-package] exposes `SERVER_PATH` as its public API.
- Consumers launch the server module by path rather than importing server internals.
- The VS Code extension starts it with `TransportKind.ipc`.
- This process boundary is important for LSP clients and is also why packaging must keep the language-server files available by path.

### VS Code extension package (`xml-toolkit`)

[`packages/xml-toolkit`][xml-toolkit-package] is the VS Code extension that ships XML diagnostics to users.

- It activates on `onLanguage:xml`.
- `activate()` creates a `LanguageClient` with run/debug server options pointing at `SERVER_PATH`.
- It reads its own [`package.json`][xml-toolkit-package-json] display name and passes it as the language-server `consumer` initialization option.
- The client selects file-backed XML documents and watches `**/*.xml`.
- The extension bundle excludes `@xml-tools/language-server` because the server runs as a separate module by path.

### VSIX packaging workaround

VSIX packaging has non-obvious assumptions and should be treated carefully.

- [`packages/xml-toolkit/scripts/package-vsix.js`][package-vsix-js] hot-patches `vsce` dependency discovery with `proxyquire`.
- The workaround exists because workspace dependency discovery did not work correctly for this package shape.
- Root [`package.json`][root-package-json] uses Yarn `nohoist` so `@xml-tools/language-server` exists inside `packages/xml-toolkit/node_modules`.
- [`packages/xml-toolkit/.vscodeignore`][xml-toolkit-vscodeignore] excludes most `node_modules` but re-includes the language-server package subset needed at runtime.
- The script temporarily changes the extension `main` from `./lib/extension` to `./dist/extension` for packaging and restores it afterward.
- This flow can break if `vsce`, Yarn workspace layout, `nohoist`, or [`packages/xml-toolkit/.vscodeignore`][xml-toolkit-vscodeignore] assumptions change.

## 6. Consumers And Integration

### Consumer in UI5 Language Assistant

UI5 Language Assistant is an important consumer because it builds UI5-specific XML language features on top of generic XML infrastructure.

- XML parsing and AST construction can be reused before applying UI5 semantics.
- Content-assist providers can use UI5 project metadata and framework knowledge while relying on this repo for syntactic context.
- Validation can combine generic XML constraints with UI5-specific validators.
- The handover should clarify which logic belongs in `xml-tools` versus which belongs in UI5-specific packages.

### Other Consumers (XML prettier plugin)

Other consumers can use the parser/AST packages without adopting the language server.

- Formatters can use parser and AST syntax ranges to understand original XML structure.
- Linters or custom validators can use `@xml-tools/validation` and AST visitors directly.
- Completion implementations can use `@xml-tools/content-assist` with their own provider output type.
- Consumers should be told which APIs are stable public APIs and which internals are package-private implementation details.

## 7. Project Operations And Maintenance

### Build/test/coverage policy

Development uses Yarn workspaces and Lerna.

- Install dependencies with `yarn` from the repository root.
- Root `yarn ci` runs formatting validation, lint validation, per-package CI, coverage merge, and legal copy tasks.
- Each package has its own `ci`, `test`, and coverage scripts.
- Productive JavaScript code is expected to have 100% coverage unless an exclusion is explicitly justified in source.
- `api.d.ts` files, such as [`packages/parser/api.d.ts`][parser-api-dts], are checked with `tsc api.d.ts`; they are part of package CI.
- Parser and AST packages use snapshot tests for serialized CST/AST output.
- Snapshot updates are done with package `snapshots:update` scripts and must be manually reviewed before accepting the changed output.
- Root coverage is merged by [`scripts/merge-coverage.js`][merge-coverage-js] and uploaded by CircleCI/Coveralls for the Node 22 job.

### Maintenance notes / known sharp edges

These are the main areas to call out explicitly during handover.

- Parser recovery behavior is subtle. Small grammar or token changes can affect many invalid-XML scenarios.
- `canRecoverWithSingleTokenDeletion()` is intentionally restricted in some contexts to avoid losing following XML elements or attributes.
- `findReSyncTokenType()` has an upstream Chevrotain TODO and should be reviewed carefully before changing Chevrotain versions.
- Snapshot changes are not automatically safe; they can hide parser/AST regressions.
- [`api.d.ts`][parser-api-dts] files can drift from JavaScript implementation because there is no TypeScript source compilation step.
- VSIX packaging relies on `vsce` internals, Yarn `nohoist`, and exact [`packages/xml-toolkit/.vscodeignore`][xml-toolkit-vscodeignore] behavior.
- Some contribution docs mention older Node versions while CircleCI currently tests newer Node images.
- [`README.md`][root-readme] examples are useful for orientation, but tests and [`api.d.ts`][parser-api-dts] are usually more reliable for exact behavior.

[parser-package]: https://github.com/SAP/xml-tools/tree/929b51da5feb3db775429a9044890ea530d71486/packages/parser
[ast-package]: https://github.com/SAP/xml-tools/tree/929b51da5feb3db775429a9044890ea530d71486/packages/ast
[content-assist-package]: https://github.com/SAP/xml-tools/tree/929b51da5feb3db775429a9044890ea530d71486/packages/content-assist
[validation-package]: https://github.com/SAP/xml-tools/tree/929b51da5feb3db775429a9044890ea530d71486/packages/validation
[constraints-package]: https://github.com/SAP/xml-tools/tree/929b51da5feb3db775429a9044890ea530d71486/packages/constraints
[simple-schema-package]: https://github.com/SAP/xml-tools/tree/929b51da5feb3db775429a9044890ea530d71486/packages/simple-schema
[language-server-package]: https://github.com/SAP/xml-tools/tree/929b51da5feb3db775429a9044890ea530d71486/packages/language-server
[common-package]: https://github.com/SAP/xml-tools/tree/929b51da5feb3db775429a9044890ea530d71486/packages/common
[ast-position-package]: https://github.com/SAP/xml-tools/tree/929b51da5feb3db775429a9044890ea530d71486/packages/ast-position
[xml-toolkit-package]: https://github.com/SAP/xml-tools/tree/929b51da5feb3db775429a9044890ea530d71486/packages/xml-toolkit
[parser-api-js]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/packages/parser/lib/api.js
[parser-api-dts]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/packages/parser/api.d.ts
[parser-js]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/packages/parser/lib/parser.js
[lexer-js]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/packages/parser/lib/lexer.js
[parser-snapshots]: https://github.com/SAP/xml-tools/tree/929b51da5feb3db775429a9044890ea530d71486/packages/parser/test/snapshots
[parser-element-name-recovery-guard]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/packages/parser/lib/parser.js#L100-L112
[parser-attribute-recovery-guard]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/packages/parser/lib/parser.js#L142-L155
[parser-single-token-deletion-override]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/packages/parser/lib/parser.js#L176-L181
[parser-resync-override]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/packages/parser/lib/parser.js#L183-L203
[ast-build-entry]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/packages/ast/lib/build-ast.js#L22-L35
[ast-api-partial-contract]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/packages/ast/api.d.ts#L13-L30
[ast-api-invalid-syntax-type]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/packages/ast/api.d.ts#L216
[ast-element-type]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/packages/ast/api.d.ts#L54-L127
[ast-attribute-type]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/packages/ast/api.d.ts#L138-L156
[ast-parent-links]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/packages/ast/lib/build-ast.js#L261-L264
[ast-syntax-ranges]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/packages/ast/lib/build-ast.js#L365-L453
[xml-ns-key]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/packages/common/lib/xml-ns-key.js#L1-L54
[ast-default-ns]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/packages/ast/lib/constants.js#L1-L3
[ast-namespace-propagation]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/packages/ast/lib/build-ast.js#L270-L306
[ast-position-api]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/packages/ast-position/lib/api.js#L4-L17
[ast-position-visitor]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/packages/ast-position/lib/ast-position.js#L1-L39
[content-assist-get-suggestions-api]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/packages/content-assist/api.d.ts#L10-L30
[content-assist-provider-map-api]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/packages/content-assist/api.d.ts#L32-L37
[content-assist-provider-examples-api]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/packages/content-assist/api.d.ts#L75-L194
[validation-api-contract]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/packages/validation/api.d.ts#L8-L16
[validation-issue-api]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/packages/validation/api.d.ts#L18-L36
[constraints-api-contract]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/packages/constraints/api.d.ts#L3-L8
[constraint-unique-attribute-keys]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/packages/constraints/lib/constraints/unique-attribute-keys.js#L7-L37
[constraint-tag-closing-name-match]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/packages/constraints/lib/constraints/tag-closing-name-match.js#L5-L44
[constraints-check-constraints-impl]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/packages/constraints/lib/api.js#L13-L22
[simple-schema-type-api]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/packages/simple-schema/api.d.ts#L14-L45
[simple-schema-entrypoints-api]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/packages/simple-schema/api.d.ts#L47-L77
[language-server-js]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/packages/language-server/lib/server.js
[xml-toolkit-package-json]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/packages/xml-toolkit/package.json
[package-vsix-js]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/packages/xml-toolkit/scripts/package-vsix.js
[root-package-json]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/package.json
[xml-toolkit-vscodeignore]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/packages/xml-toolkit/.vscodeignore
[merge-coverage-js]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/scripts/merge-coverage.js
[root-readme]: https://github.com/SAP/xml-tools/blob/929b51da5feb3db775429a9044890ea530d71486/README.md
[chevrotain-resync-issue-1055]: https://github.com/Chevrotain/chevrotain/issues/1055
[chevrotain-resync-pr-1756]: https://github.com/Chevrotain/chevrotain/pull/1756
