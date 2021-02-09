const { expect } = require("chai");
const { parse } = require("@xml-tools/parser");
const { buildAst } = require("@xml-tools/ast");
const {
  validateUniqueAttributeKeys,
} = require("../../lib/constraints/unique-attribute-keys");

describe("unique attribute keys constraint", () => {
  context("no issues", () => {
    it("will not detect any issues for a valid XML with attributes", () => {
      const xmlText = `<person name="Donald" lastname="Duck" age="87">`;
      const { cst, tokenVector } = parse(xmlText);
      const document = buildAst(cst, tokenVector);
      const element = document.rootElement;
      const result = validateUniqueAttributeKeys(element);

      expect(result).to.be.empty;
    });

    it("will not detect any issues for a valid XML without attributes", () => {
      const xmlText = `<person>`;
      const { cst, tokenVector } = parse(xmlText);
      const document = buildAst(cst, tokenVector);
      const element = document.rootElement;
      const result = validateUniqueAttributeKeys(element);

      expect(result).to.be.empty;
    });
  });

  context("positive constraint checks", () => {
    it("detects a duplicate attribute keys", () => {
      const xmlText = `<person name="Donald" lastname="Duck" age="87" name="Bamba">`;

      const { cst, tokenVector } = parse(xmlText);
      const document = buildAst(cst, tokenVector);
      const element = document.rootElement;
      const result = validateUniqueAttributeKeys(element);

      const donaldNameAttrib = element.attributes[0];
      const bambaNameAttrib = element.attributes[3];

      expect(result).to.have.lengthOf(2);
      expect(result).to.deep.include.members([
        {
          msg: 'duplicate attribute: "name"',
          severity: "error",
          node: donaldNameAttrib,
          position: {
            startOffset: donaldNameAttrib.syntax.key.startOffset,
            endOffset: donaldNameAttrib.syntax.key.endOffset,
          },
        },
        {
          msg: 'duplicate attribute: "name"',
          severity: "error",
          node: bambaNameAttrib,
          position: {
            startOffset: bambaNameAttrib.syntax.key.startOffset,
            endOffset: bambaNameAttrib.syntax.key.endOffset,
          },
        },
      ]);
    });
  });
});
