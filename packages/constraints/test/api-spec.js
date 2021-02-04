const { expect } = require("chai");
const { parse } = require("@xml-tools/parser");
const { buildAst } = require("@xml-tools/ast");
const { checkConstraints } = require("../");

describe("the constraints sub-package apis", () => {
  it("can detect validation issues using `checkConstraints` api", () => {
    const xmlText = `
        <note>
          <to>Bill</to>
          <from>Tim</from>
        </note-typo>`;

    const { cst, tokenVector } = parse(xmlText);
    const document = buildAst(cst, tokenVector);
    const validationIssues = checkConstraints(document);
    const element = document.rootElement;
    expect(validationIssues).to.have.lengthOf(2);
    expect(validationIssues).to.deep.include.members([
      {
        msg: 'opening tag: "note" must match closing tag: "note-typo"',
        severity: "error",
        node: element,
        position: {
          startOffset: element.syntax.openName.startOffset,
          endOffset: element.syntax.openName.endOffset,
        },
      },
      {
        msg: 'closing tag: "note-typo" must match opening tag: "note"',
        severity: "error",
        node: element,
        position: {
          startOffset: element.syntax.closeName.startOffset,
          endOffset: element.syntax.closeName.endOffset,
        },
      },
    ]);
  });
});
