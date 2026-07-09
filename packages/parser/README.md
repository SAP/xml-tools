[![npm (scoped)](https://img.shields.io/npm/v/@xml-tools/parser.svg)](https://www.npmjs.com/package/@xml-tools/parser)

# @xml-tools/parser

A Fault Tolerant XML Parser which produces a [Concrete Syntax Tree][cst].

This means that the Parser will **not** stop on the first error and instead attempt to perform automatic error recovery.
This also means that the CST outputted by the Parser may only have **partial** results.
For example, In a valid XML an attribute must always have a value, however in the CST produced
by this parser an attribute's value may be missing as the XML Text input is not necessarily valid.

The CST produced by this parser is often used as the input for other packages in the xml-tools scope, e.g:

- [@xml-tools/ast](../ast) As the input for building an XML AST.
- [@xml-tools/content-assist](../content-assist) As part of the input for the content assist APIs.

## Installation

With npm:

- `npm install @xml-tools/parser`

With Yarn

- `yarn add @xml-tools/parser`

## Usage

Please see the [TypeScript Definitions](./api.d.ts) for full API details.

A simple usage example:

```javascript
const { parse } = require("@xml-tools/parser");

const xmlText = `<note>
                     <to>Bill</to>
                     <from>Tim</from>
                 </note>
`;

const { cst, lexErrors, parseErrors } = parse(xmlText);
console.log(cst.children["element"][0].children["Name"][0].image); // -> note
```

### CST Structure

The parser outputs a Concrete Syntax Tree (CST) using **Chevrotain**. 

For example, given the following XML input:
```xml
<xs:element name="api" />
```

The resulting `cst` object for the document has the following structure:
```json
{
  "name": "document",
  "children": {
    "element": [
      {
        "name": "element",
        "children": {
          "OPEN": [{ "image": "<" }],
          "Name": [{ "image": "xs:element" }],
          "attribute": [
            {
              "name": "attribute",
              "children": {
                "Name": [{ "image": "name" }],
                "EQUALS": [{ "image": "=" }],
                "STRING": [{ "image": "\"api\"" }]
              }
            }
          ],
          "SLASH_CLOSE": [{ "image": "/>" }]
        }
      }
    ]
  }
}
```

Every property in `children` is an array containing the matched tokens (`IToken`) or nested rule nodes (`CstNode`). For full details on all available node structures (such as `prolog`, `docTypeDecl`, and `content`), see the [TypeScript Definitions](./api.d.ts).


## Support

Please open [issues](https://github.com/SAP/xml-tols/issues) on github.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

[cst]: https://en.wikipedia.org/wiki/Parse_tree
