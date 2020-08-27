[![npm (scoped)](https://img.shields.io/npm/v/@xml-tools/ast.svg)](https://www.npmjs.com/package/@xml-tools/ast)

# @xml-tools/ast

Utilities for building and traversing an XML **A**bstract **S**yntax **T**ree ([AST][ast]).

There are two things which distinguish this AST from most others ASTs:

1. This AST can represent a **partially valid** XML, in practice this means virtually all properties on
   the AST are optional and may have undefined values.
2. This AST contains **additional syntactic information** to enable additional linting & formatting flows, for example:
   - the original position and value of an attribute's value (including the quotes).
   - The original positions and values of an XMLElement's open/close names.

The input for constructing the AST is a CST which is created by the [@xml-tools/parser](../parser) package.

The AST structure is used as part of the input for the [@xml-tools/content-assist](../content-assist) APIs.

## Installation

With npm:

- `npm install @xml-tools/ast`

With Yarn

- `yarn add @xml-tools/ast`

## Usage

Please see the [TypeScript Definitions](./api.d.ts) for full API details.

A simple usage example:

```javascript
const { parse } = require("xml-tools/parser");
const { buildAst, accept } = require("xml-tools/ast");

const xmlText = `<note>
                     <to>Bill</to>
                     <from>Tim</from>
                 </note>
`;

const { cst, tokenVector } = parse(xmlText);
const xmlDocAst = buildAst(cst, tokenVector);
console.log(xmlDocAst.rootElement.name); // -> note

// A Visitor allows us to invoke actions on the XML ASTNodes without worrying about
// The XML AST structure / traversal method.
const printVisitor = {
  // Will be invoked once for each Element node in the AST.
  visitXMLElement: function (node) {
    console.log(node.name);
  },

  // An XML AST Visitor may have other methods as well, see the api.d.ts file/
};

// Invoking the Visitor
accept(xmlDocAst, printVisitor); // -> note, Bill, Tim
```

## Support

Please open [issues](https://github.com/SAP/xml-tols/issues) on github.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).
