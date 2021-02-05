[![npm (scoped)](https://img.shields.io/npm/v/@xml-tools/constraints.svg)](https://www.npmjs.com/package/@xml-tools/constraints)

# @xml-tools/constraints

Validations for XML constraints.

The following constraints are currently implemented:

- Uniqueness of attribute keys inside the same element.
- Element opening tag name must be identical to the element closing tag name.

## Installation

With npm:

- `npm install @xml-tools/constraints`

With Yarn

- `yarn add @xml-tools/constraints`

## Usage

Please see the [TypeScript Definitions](./api.d.ts) for full API details.

A simple usage example:

```javascript
const { parse } = require("@xml-tools/parser");
const { buildAst } = require("@xml-tools/ast");
const { checkConstraints } = require("@xml-tools/constraints");

const xmlText = `
        <note>
          <to>Bill</to>
          <from>Tim</from>
        </note-typo>`;

const { cst, tokenVector } = parse(xmlText);
const document = buildAst(cst, tokenVector);
const validationIssues = checkConstraints(document);
console.log(validationIssues[0].msg); // --> 'opening tag: "note" must match closing tag: "note-typo"
```

## Support

Please open [issues](https://github.com/SAP/xml-tols/issues) on github.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).
