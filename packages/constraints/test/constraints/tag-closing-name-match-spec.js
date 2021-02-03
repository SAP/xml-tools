const { expect } = require("chai");
const { parse } = require("@xml-tools/parser");
const { buildAst } = require("@xml-tools/ast");
const {
  validateTagClosingNameMatch,
} = require("../../lib/constraints/tag-closing-name-match");

describe("tag closing name constraint", () => {
  context("no issues", () => {
    it("will not detect any issues for valid XML", () => {
      const xmlText = `
        <note>
          <to Bill />
          <from>Tim</from>
        </note>`;

      const { cst, tokenVector } = parse(xmlText);
      const document = buildAst(cst, tokenVector);
      const element = document.rootElement;
      const result = validateTagClosingNameMatch(element);

      expect(result).to.be.empty;
    });
  });

  context("unable to validate", () => {
    it("will not detect any issues when the tag name is missing", () => {
      const xmlText = `
        <>
          <to>Bill</to>
          <from>Tim</from>
        </note>`;

      const { cst, tokenVector } = parse(xmlText);
      const document = buildAst(cst, tokenVector);
      const element = document.rootElement;
      const result = validateTagClosingNameMatch(element);

      expect(result).to.be.empty;
    });
  });

  context("positive constraint checks", () => {
    it("detects a mis-aligned closing tag", () => {
      const xmlText = `
        <note>
          <to>Bill</to>
          <from>Tim</from>
        </note-typo>`;

      const { cst, tokenVector } = parse(xmlText);
      const document = buildAst(cst, tokenVector);
      const element = document.rootElement;
      const result = validateTagClosingNameMatch(element);

      expect(result).to.have.lengthOf(1);
      expect(result[0]).to.deep.equal({
        msg: 'closing tag: "note-typo must match opening tag: "note"',
        severity: "error",
        node: element,
        position: {
          startOffset: element.syntax.closeName.startOffset,
          endOffset: element.syntax.closeName.endOffset,
        },
      });
    });
  });
});
