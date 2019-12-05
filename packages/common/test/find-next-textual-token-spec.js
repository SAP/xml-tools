const { expect } = require("chai");
const { parse } = require("@xml-tools/parser");
const { findNextTextualToken } = require("../");

describe("The XML-Tools Common Utils", () => {
  context("findNextTextualToken", () => {
    it("can find the next textual token in a valid XML", () => {
      const xmlText = `<note>
        <to>Bill</to>
        <from>Tim</from>
      </note>`;

      const { tokenVector } = parse(xmlText);
      // "28" is the endOffset of `<to>Bill</to>`
      const nextTextualToken = findNextTextualToken(tokenVector, 27);
      expect(nextTextualToken.image).to.eql("<");
      expect(nextTextualToken.startOffset).to.eql(37);
    });

    it("will return null when there is no following textual token", () => {
      const xmlText = `<note>
        <to>Bill</to> 
        `;

      const { tokenVector } = parse(xmlText);
      // "28" is the endOffset of `<to>Bill</to>`
      const nextTextualToken = findNextTextualToken(tokenVector, 27);
      expect(nextTextualToken).to.be.null;
    });
  });
});
