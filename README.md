[![CircleCI](https://circleci.com/gh/SAP/xml-tools.svg?style=svg)](https://circleci.com/gh/SAP/xml-tools)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

# XML-Tools

XML-Tools is an npm [mono-repo][mono-repo] that contains tools & libraries for [Extensible Markup Language][xml] (XML).
These tools & libraries are mainly focused on capabilities for implementing Editor Services flows in IDEs, for example:
Content Assist and Diagnostics.

It currently contains the following packages:

- [![npm-xml-tools-parser][npm-xml-tools-parser-image]][npm-xml-tools-parser-url] [@xml-tools/parser](./packages/parser) A Fault Tolerant XML Parser which outputs a [Concrete Syntax Tree][cst].
- [![npm-xml-tools-ast][npm-xml-tools-ast-image]][npm-xml-tools-ast-url] [@xml-tools/ast](./packages/ast) XML [Abstract Syntax Tree][ast].
- [![npm-xml-tools-content-assist][npm-xml-tools-content-assist-image]][npm-xml-tools-content-assist-url] [@xml-tools/content-assist](./packages/content-assist) Extensible Content Assist APIs for XML.
- [![npm-xml-tools-validation][npm-xml-tools-validation-image]][npm-xml-tools-validation-url] [@xml-tools/validation](./packages/validation) Extensible Validation APIs for XML.

[npm-xml-tools-parser-image]: https://img.shields.io/npm/v/@xml-tools/parser.svg
[npm-xml-tools-parser-url]: https://www.npmjs.com/package/@xml-tools/parser
[npm-xml-tools-ast-image]: https://img.shields.io/npm/v/@xml-tools/ast.svg
[npm-xml-tools-ast-url]: https://www.npmjs.com/package/@xml-tools/ast
[npm-xml-tools-content-assist-image]: https://img.shields.io/npm/v/@xml-tools/content-assist.svg
[npm-xml-tools-content-assist-url]: https://www.npmjs.com/package/@xml-tools/content-assist
[npm-xml-tools-validation-image]: https://img.shields.io/npm/v/@xml-tools/validation.svg
[npm-xml-tools-validation-url]: https://www.npmjs.com/package/@xml-tools/validation

## Support

Please open [issues](https://github.com/SAP/xml-tools/issues) on github.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
This file is licensed under the Apache Software License, v. 2 except as noted otherwise in the [LICENSE file](./LICENSE).

[mono-repo]: https://github.com/babel/babel/blob/master/doc/design/monorepo.md
[xml]: https://github.com/babel/babel/blob/master/doc/design/monorepo.md
[ast]: https://en.wikipedia.org/wiki/Abstract_syntax_tree
[cst]: https://en.wikipedia.org/wiki/Parse_tree
