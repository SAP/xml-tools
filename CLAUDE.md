# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

XML-Tools is a Yarn monorepo of libraries and tooling for XML editor services. The packages implement the full stack for XML language support in IDEs: parsing, AST, content assist, validation, and a VS Code extension (`xml-toolkit`).

## Commands

### Root (runs across all packages)

```sh
yarn                  # install all dependencies
yarn ci               # full CI build (lint + test + coverage across all packages)
yarn test             # run all tests
yarn coverage         # run tests with merged coverage report
yarn lint:validate    # ESLint check
yarn format:validate  # Prettier check
```

### Per sub-package (run inside `packages/<name>/`; available scripts vary by package)

```sh
yarn test             # run tests for this package
yarn coverage:run     # run coverage where the package defines this script
yarn snapshots:update # update parser/AST snapshots only (review diffs carefully)
yarn ci               # full CI build for this package only
```

### Release

```sh
yarn run release:version  # bump versions via Lerna (follow CLI prompts)
```

## Architecture

Yarn workspaces monorepo. All packages live under `packages/`:

| Package                      | Description                                                                                                  |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `@xml-tools/parser`          | Fault-tolerant XML parser; outputs a Concrete Syntax Tree (CST)                                              |
| `@xml-tools/ast`             | Converts the CST to an Abstract Syntax Tree (AST)                                                            |
| `@xml-tools/ast-position`    | Utilities for mapping source positions to AST nodes                                                          |
| `@xml-tools/content-assist`  | Extensible content assist (auto-complete) API for XML                                                        |
| `@xml-tools/validation`      | Extensible validation API for XML                                                                            |
| `@xml-tools/constraints`     | Built-in XML constraint validations                                                                          |
| `@xml-tools/simple-schema`   | Simple XML schema as a plain JavaScript object literal                                                       |
| `@xml-tools/language-server` | XML Language Server (LSP) built on the above libraries                                                       |
| `@xml-tools/common`          | Shared utilities used across packages                                                                        |
| `xml-toolkit`                | VS Code extension — XML language editor support (syntax validation, content assist, hover, go-to-definition) |

## Key Dependencies

- **[Chevrotain](https://chevrotain.io/)** — parser toolkit used by `@xml-tools/parser`
- **[vscode-languageserver](https://www.npmjs.com/package/vscode-languageserver)** — LSP protocol implementation used by `@xml-tools/language-server`

## Testing

[Mocha](https://mochajs.org/) + [Istanbul/nyc](https://istanbul.js.org/) for unit tests and coverage. Two packages (`@xml-tools/parser` and `@xml-tools/ast`) use **snapshot testing** for serialized CST/AST output — snapshots live alongside test files and must be manually reviewed when updated.

```sh
yarn test                  # run all tests (root)
yarn coverage              # run tests with merged coverage (root)
yarn coverage:run          # run coverage where defined by the package
yarn snapshots:update      # update parser/AST snapshots only (review diffs before committing)
```

100% test coverage is enforced for all productive code.

## CI/CD

CircleCI pipeline (`.circleci/`). Releases use [Lerna](https://lerna.js.org/) independent mode — each package has its own version. The `RELEASE` tag build on CircleCI publishes changed packages to npm.

Release steps:

1. `yarn run release:version` — Lerna bumps versions and generates changelogs
2. Push the `RELEASE` tag; CircleCI publishes to npm via `yarn run release:publish`
