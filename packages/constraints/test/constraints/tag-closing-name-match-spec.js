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
    it("will not detect any issues when the opening tag name is missing", () => {
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

    it("will not detect any issues when the closing tag name is missing", () => {
      const xmlText = `
        <note>
          <to>Bill</to>
          <from>Tim</from>
        </>`;

      const { cst, tokenVector } = parse(xmlText);
      const document = buildAst(cst, tokenVector);
      const element = document.rootElement;
      const result = validateTagClosingNameMatch(element);

      expect(result).to.be.empty;
    });

    it("will not detect any issues when both tag names are missing", () => {
      const xmlText = `
        <>
          <to>Bill</to>
          <from>Tim</from>
        </>`;

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

      expect(result).to.have.lengthOf(2);
      expect(result).to.deep.include.members([
        {
          msg: 'tags mismatch: "note" must match closing tag: "note-typo"',
          severity: "error",
          node: element,
          position: {
            startOffset: element.syntax.openName.startOffset,
            endOffset: element.syntax.openName.endOffset,
          },
        },
        {
          msg: 'tags mismatch: "note-typo" must match opening tag: "note"',
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
});
