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
<root>
  <child attr="value">Hello World</child>
  <empty/>
</root>
```

The resulting `cst` object for the document has the following structure (whitespace `chardata` nodes omitted for brevity):

```jsonc
{
  "name": "document",
  "children": {
    "element": [
      // top-level element(s)
      {
        "name": "element",
        "children": {
          "OPEN": [{ "image": "<" }],
          "Name": [{ "image": "root" }],
          "START_CLOSE": [{ "image": ">" }],

          "content": [
            // child content lives here
            {
              "name": "content",
              "children": {
                "element": [
                  // nested child elements
                  {
                    "name": "element",
                    "children": {
                      "OPEN": [{ "image": "<" }],
                      "Name": [{ "image": "child" }],
                      "attribute": [
                        {
                          "name": "attribute",
                          "children": {
                            "Name": [{ "image": "attr" }],
                            "EQUALS": [{ "image": "=" }],
                            "STRING": [{ "image": "\"value\"" }]
                          }
                        }
                      ],
                      "START_CLOSE": [{ "image": ">" }],
                      "content": [
                        {
                          "name": "content",
                          "children": {
                            "chardata": [
                              {
                                "name": "chardata",
                                "children": {
                                  "TEXT": [{ "image": "Hello World" }]
                                }
                              }
                            ]
                          }
                        }
                      ],
                      "SLASH_OPEN": [{ "image": "</" }],
                      "END_NAME": [{ "image": "child" }],
                      "END": [{ "image": ">" }]
                    }
                  },
                  {
                    "name": "element", // self-closing: <empty/>
                    "children": {
                      "OPEN": [{ "image": "<" }],
                      "Name": [{ "image": "empty" }],
                      "SLASH_CLOSE": [{ "image": "/>" }]
                    }
                  }
                ]
              }
            }
          ],

          "SLASH_OPEN": [{ "image": "</" }],
          "END_NAME": [{ "image": "root" }],
          "END": [{ "image": ">" }]
        }
      }
    ]
  }
}
```

Every property in `children` is an array of matched tokens (`IToken`) or nested rule nodes (`CstNode`). For full details on all node types (such as `prolog`, `docTypeDecl`, `content`, and `chardata`), see the [TypeScript Definitions](./api.d.ts).

## Support

Please open [issues](https://github.com/SAP/xml-tols/issues) on github.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

[cst]: https://en.wikipedia.org/wiki/Parse_tree
