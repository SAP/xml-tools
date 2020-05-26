const { expect } = require("chai");
const { parse } = require("@xml-tools/parser");
const { buildAst, accept } = require("../../");

describe("The XML AST Visitor", () => {
  it("can traverse AST Elements", () => {
    const inputText = `<note>
      <to>Bill</to>
      <from>Tim</from>
    </note>
    `;

    let visitedCounter = 0;
    const visitor = {
      visitXMLElement: function (node) {
        expect(["to", "from", "note"]).to.include(node.name);
        visitedCounter++;
      },
    };

    const astNode = getAst(inputText);
    accept(astNode, visitor);
    expect(visitedCounter).to.eql(3);
  });

  it("can traverse AST TextContents", () => {
    const inputText = `<note>
      <to>Bill</to>
      <from>Tim</from>
    </note>
    `;

    let visitedCounter = 0;
    const visitor = {
      visitXMLTextContent: function (node) {
        // ignore whitespace TextNodes
        if (/^\s+$/.test(node.text) === false) {
          expect(["Bill", "Tim", "note"]).to.include(node.text);
          visitedCounter++;
        }
      },
    };

    const astNode = getAst(inputText);
    accept(astNode, visitor);
    expect(visitedCounter).to.eql(2);
  });

  it("can traverse AST Attributes", () => {
    const inputText = `<?xml version="1.0" encoding="UTF-8"?>
    <note>
      <to foo="123">Bill</to>
      <from bar="456">Tim</from>
    </note>
    `;

    let visitedCounter = 0;
    const visitor = {
      visitXMLAttribute: function (node) {
        expect(["foo", "bar", "version", "encoding"]).to.include(node.key);
        visitedCounter++;
      },
    };

    const astNode = getAst(inputText);
    accept(astNode, visitor);
    expect(visitedCounter).to.eql(4);
  });

  it("can traverse AST Prolog", () => {
    const inputText = `<?xml version="1.0" encoding="UTF-8"?>
    <note>
    </note>
    `;

    let visitedCounter = 0;
    const visitor = {
      visitXMLProlog: function (node) {
        expect(node.attributes).to.have.lengthOf(2);
        expect(node.attributes[0].key).to.eql("version");
        expect(node.attributes[1].key).to.eql("encoding");
        visitedCounter++;
      },
    };

    const astNode = getAst(inputText);
    accept(astNode, visitor);
    expect(visitedCounter).to.eql(1);
  });

  it("can traverse XML Document AST", () => {
    const inputText = `<note>
        <from>foo</from>
        <to>bar</to>
    </note>
    `;

    let visitedCounter = 0;
    const visitor = {
      visitXMLDocument: function (node) {
        expect(node.rootElement.name).to.eql("note");
        visitedCounter++;
      },
    };

    const astNode = getAst(inputText);
    accept(astNode, visitor);
    expect(visitedCounter).to.eql(1);
  });
});

function getAst(text) {
  const { cst, tokenVector } = parse(text);
  const ast = buildAst(cst, tokenVector);
  return ast;
}
