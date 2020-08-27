[![CircleCI](https://circleci.com/gh/SAP/xml-tools.svg?style=svg)](https://circleci.com/gh/SAP/xml-tools)
[![Coverage Status](https://coveralls.io/repos/github/SAP/xml-tools/badge.svg?branch=master)](https://coveralls.io/github/SAP/xml-tools?branch=master)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![dependentbot](https://api.dependabot.com/badges/status?host=github&repo=SAP/xml-tools)](https://dependabot.com/)
[![REUSE status](https://api.reuse.software/badge/github.com/SAP/xml-tools)](https://api.reuse.software/info/github.com/SAP/xml-tools)

# XML-Tools

XML-Tools is an npm [mono-repo][mono-repo] that contains tools & libraries for [Extensible Markup Language][xml] (XML).
These tools & libraries are mainly focused on capabilities for implementing Editor Services flows in IDEs, for example:
Content Assist and Diagnostics.

It currently contains the following packages:

- [![npm-xml-tools-parser][npm-xml-tools-parser-image]][npm-xml-tools-parser-url] [@xml-tools/parser](./packages/parser) A Fault Tolerant XML Parser which outputs a [Concrete Syntax Tree][cst].
- [![npm-xml-tools-ast][npm-xml-tools-ast-image]][npm-xml-tools-ast-url] [@xml-tools/ast](./packages/ast) XML [Abstract Syntax Tree][ast].
- [![npm-xml-tools-ast-position][npm-xml-tools-ast-position-image]][npm-xml-tools-ast-position-url] [@xml-tools/ast-position](./packages/ast-position) XML Abstract Syntax Tree position utilities.
- [![npm-xml-tools-content-assist][npm-xml-tools-content-assist-image]][npm-xml-tools-content-assist-url] [@xml-tools/content-assist](./packages/content-assist) Extensible Content Assist APIs for XML.
- [![npm-xml-tools-validation][npm-xml-tools-validation-image]][npm-xml-tools-validation-url] [@xml-tools/validation](./packages/validation) Extensible Validation APIs for XML.
- [![npm-xml-tools-simple-schema][npm-xml-tools-simple-schema-image]][npm-xml-tools-simple-schema-url] [@xml-tools/simple-schema](./packages/simple-schema) Simple XML Schema represented as a JavaScript object literal.
- [![npm-xml-tools-language-server][npm-xml-tools-language-server-image]][npm-xml-tools-language-server-url] [@xml-tools/language-server](./packages/language-server) XML Language Server.
- [![npm-xml-tools-common][npm-xml-tools-common-image]][npm-xml-tools-common-url] [@xml-tools/common](./packages/common) Shared Utilities for xml-tools packages.

[npm-xml-tools-parser-image]: https://img.shields.io/npm/v/@xml-tools/parser.svg
[npm-xml-tools-parser-url]: https://www.npmjs.com/package/@xml-tools/parser
[npm-xml-tools-ast-image]: https://img.shields.io/npm/v/@xml-tools/ast.svg
[npm-xml-tools-ast-url]: https://www.npmjs.com/package/@xml-tools/ast
[npm-xml-tools-ast-position-image]: https://img.shields.io/npm/v/@xml-tools/ast-position.svg
[npm-xml-tools-ast-position-url]: https://www.npmjs.com/package/@xml-tools/ast-position
[npm-xml-tools-content-assist-image]: https://img.shields.io/npm/v/@xml-tools/content-assist.svg
[npm-xml-tools-content-assist-url]: https://www.npmjs.com/package/@xml-tools/content-assist
[npm-xml-tools-validation-image]: https://img.shields.io/npm/v/@xml-tools/validation.svg
[npm-xml-tools-validation-url]: https://www.npmjs.com/package/@xml-tools/validation
[npm-xml-tools-simple-schema-image]: https://img.shields.io/npm/v/@xml-tools/simple-schema.svg
[npm-xml-tools-simple-schema-url]: https://www.npmjs.com/package/@xml-tools/simple-schema
[npm-xml-tools-language-server-image]: https://img.shields.io/npm/v/@xml-tools/language-server.svg
[npm-xml-tools-language-server-url]: https://www.npmjs.com/package/@xml-tools/language-server
[npm-xml-tools-common-image]: https://img.shields.io/npm/v/@xml-tools/common.svg
[npm-xml-tools-common-url]: https://www.npmjs.com/package/@xml-tools/common

## Support

Please open [issues](https://github.com/SAP/xml-tools/issues) on github.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

[mono-repo]: https://github.com/babel/babel/blob/master/doc/design/monorepo.md
[xml]: https://github.com/babel/babel/blob/master/doc/design/monorepo.md
[ast]: https://en.wikipedia.org/wiki/Abstract_syntax_tree
[cst]: https://en.wikipedia.org/wiki/Parse_tree
