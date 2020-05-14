const { expect } = require("chai");
const { isXMLNamespaceKey, getXMLNamespaceKeyPrefix } = require("../");

describe("The XML-Tools Common Utils", () => {
  context("isXMLNamespaceKey", () => {
    it("will return true for attribute name starting with xmlns:", () => {
      expect(isXMLNamespaceKey({ key: "xmlns:a", includeEmptyPrefix: true })).to
        .be.true;
      expect(isXMLNamespaceKey({ key: "xmlns:a", includeEmptyPrefix: false }))
        .to.be.true;
    });

    it("will return true for attribute name starting with xmlns: that contains dots", () => {
      expect(
        isXMLNamespaceKey({ key: "xmlns:a.b.c", includeEmptyPrefix: true })
      ).to.be.true;
      expect(
        isXMLNamespaceKey({ key: "xmlns:a.b.c", includeEmptyPrefix: false })
      ).to.be.true;
    });

    it("will return true for the default namespace attribute", () => {
      expect(isXMLNamespaceKey({ key: "xmlns", includeEmptyPrefix: true })).to
        .be.true;
      expect(isXMLNamespaceKey({ key: "xmlns", includeEmptyPrefix: false })).to
        .be.true;
    });

    it("will return true for xmlns attribute without a name when includeEmptyPrefix is true", () => {
      expect(isXMLNamespaceKey({ key: "xmlns:", includeEmptyPrefix: true })).to
        .be.true;
    });

    it("will return false for xmlns attribute without a name when includeEmptyPrefix is false", () => {
      expect(isXMLNamespaceKey({ key: "xmlns:", includeEmptyPrefix: false })).to
        .be.false;
    });

    it("will return false for the non-xmlns attribute", () => {
      expect(isXMLNamespaceKey({ key: "abc", includeEmptyPrefix: true })).to.be
        .false;
      expect(isXMLNamespaceKey({ key: "abc", includeEmptyPrefix: false })).to.be
        .false;
    });

    it("will return false for non-xmlns attribute that starts with xmlns", () => {
      expect(isXMLNamespaceKey({ key: "xmlnst", includeEmptyPrefix: true })).to
        .be.false;
      expect(isXMLNamespaceKey({ key: "xmlnst", includeEmptyPrefix: false })).to
        .be.false;
    });

    it("will return false for attribute name starting with xmlns: that contains additional colons", () => {
      expect(
        isXMLNamespaceKey({ key: "xmlns:a.b:c", includeEmptyPrefix: true })
      ).to.be.false;
      expect(
        isXMLNamespaceKey({ key: "xmlns:a.b:c", includeEmptyPrefix: false })
      ).to.be.false;
    });

    it("will return false for undefined", () => {
      expect(isXMLNamespaceKey({ key: undefined, includeEmptyPrefix: true })).to
        .be.false;
      expect(isXMLNamespaceKey({ key: undefined, includeEmptyPrefix: false }))
        .to.be.false;
    });

    it("will return false for null", () => {
      expect(isXMLNamespaceKey({ key: null, includeEmptyPrefix: true })).to.be
        .false;
      expect(isXMLNamespaceKey({ key: null, includeEmptyPrefix: false })).to.be
        .false;
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
