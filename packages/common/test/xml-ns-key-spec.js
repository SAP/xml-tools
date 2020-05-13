const { expect } = require("chai");
const { isXMLNamespaceKey, getXMLNamespaceKeyPrefix } = require("../");

describe("The XML-Tools Common Utils", () => {
  context("isXMLNamespaceKey", () => {
    it("will return true for attribute name starting with xmlns:", () => {
      expect(isXMLNamespaceKey("xmlns:a", true)).to.be.true;
      expect(isXMLNamespaceKey("xmlns:a", false)).to.be.true;
    });

    it("will return true for attribute name starting with xmlns: that contains dots", () => {
      expect(isXMLNamespaceKey("xmlns:a.b.c", true)).to.be.true;
      expect(isXMLNamespaceKey("xmlns:a.b.c", false)).to.be.true;
    });

    it("will return true for the default namespace attribute", () => {
      expect(isXMLNamespaceKey("xmlns", true)).to.be.true;
      expect(isXMLNamespaceKey("xmlns", false)).to.be.true;
    });

    it("will return true for xmlns attribute without a name when includeEmptyPrefix is true", () => {
      expect(isXMLNamespaceKey("xmlns:", true)).to.be.true;
    });

    it("will return false for xmlns attribute without a name when includeEmptyPrefix is false", () => {
      expect(isXMLNamespaceKey("xmlns:", false)).to.be.false;
    });

    it("will return false for the non-xmlns attribute", () => {
      expect(isXMLNamespaceKey("abc", true)).to.be.false;
      expect(isXMLNamespaceKey("abc", false)).to.be.false;
    });

    it("will return false for non-xmlns attribute that starts with xmlns", () => {
      expect(isXMLNamespaceKey("xmlnst", true)).to.be.false;
      expect(isXMLNamespaceKey("xmlnst", false)).to.be.false;
    });

    it("will return false for attribute name starting with xmlns: that contains additional colons", () => {
      expect(isXMLNamespaceKey("xmlns:a.b:c", true)).to.be.false;
      expect(isXMLNamespaceKey("xmlns:a.b:c", false)).to.be.false;
    });

    it("will return false for undefined", () => {
      expect(isXMLNamespaceKey(undefined, true)).to.be.false;
      expect(isXMLNamespaceKey(undefined, false)).to.be.false;
    });

    it("will return false for null", () => {
      expect(isXMLNamespaceKey(null, true)).to.be.false;
      expect(isXMLNamespaceKey(null, false)).to.be.false;
    });
  });

  context("getNamespaceKeyPrefix", () => {
    it("will return the name without xmlns prefix for xmlns attribute with name", () => {
      expect(getXMLNamespaceKeyPrefix("xmlns:abc")).to.eql("abc");
    });

    it("will return the name without xmlns prefix for xmlns attribute with name that contains dots", () => {
      expect(getXMLNamespaceKeyPrefix("xmlns:abc.efg")).to.eql("abc.efg");
    });

    it("will return empty string when prefix is empty", () => {
      expect(getXMLNamespaceKeyPrefix("xmlns:")).to.be.empty;
    });

    it("will return undefined when key does not start with xmlns", () => {
      expect(getXMLNamespaceKeyPrefix("abc")).to.be.undefined;
    });

    it("will return undefined when key starts with xmlns but is not an xmlns key", () => {
      expect(getXMLNamespaceKeyPrefix("xmlns*")).to.be.undefined;
    });

    it("will return undefined for undefined", () => {
      expect(getXMLNamespaceKeyPrefix(undefined)).to.be.undefined;
    });

    it("will return undefined for null", () => {
      expect(getXMLNamespaceKeyPrefix(null)).to.be.undefined;
    });
  });
});
