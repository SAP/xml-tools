[![npm (scoped)](https://img.shields.io/npm/v/@xml-tools/validation.svg)](https://www.npmjs.com/package/@xml-tools/validation)

# @xml-tools/validation

APIs which assist in implementing Validations / Diagnostics logic for XML.

## Installation

With npm:

- `npm install @xml-tools/validation`

With Yarn

- `yarn add @xml-tools/validation`

## Usage

Please see the [TypeScript Definitions](./api.d.ts) for full API details.

A simple usage example:

```javascript
const { parse } = require("xml-tools/parser");
const { buildAst } = require("xml-tools/ast");
const { validate } = require("xml-tools/validation");

const xmlText = `<note>
                     <to>Bill</to>
                 </note>
`;

const { cst, tokenVector } = parse(xmlText);
const xmlDocAst = buildAst(cst, tokenVector);
const issues = validate({
  doc: xmlDocAst,
  validators: {
    element: [
      (node) => {
        if (node.name === "note") {
          const hasFrom = node.subElements.find(
            (subNode) => subNode.name === "from"
          );
          if (hasFrom === undefined) {
            return [
              {
                msg: "A Note Element **must** have a `from` subElement",
                node: node,
              },
            ];
          }
        }
        return [];
      },
    ],
  },
});

console.log(issues[0].msg); // -> "A Note Element **must** have a `from` subElement"
// Issue position can be extracted from the relevant ASTNode.
console.log(issues[0].node.position.endLine); // -> 3
```

## Support

Please open [issues](https://github.com/SAP/xml-tols/issues) on github.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

Copyright (c) 2019-2020 SAP SE or an SAP affiliate company. All rights reserved.
This file is licensed under the Apache Software License, v. 2 except as noted otherwise in the [LICENSE file](../../LICENSE).

[ast]: https://en.wikipedia.org/wiki/Abstract_syntax_tree
