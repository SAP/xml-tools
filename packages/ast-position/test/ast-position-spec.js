const { expect } = require("chai");
const { buildAst } = require("@xml-tools/ast");
const { parse } = require("@xml-tools/parser");
// Testing the npm package `main` exports by requiring the folder where the `package.json` resides.
const { astPositionAtOffset } = require("../");

describe("AST Position visitor", () => {
  it("will get xml attribute key", () => {
    const xmlSnippet = `
      <mvc:View 
        xmlns:mvc="sap.ui.core.mvc" 
        xmlns="sap.m"> 
        <List showSeparat⇶ors = "All"></List>
      </mvc:View>`;
    const astNodeInPosition = getXMLPositionFromSnippet(xmlSnippet);

    expect(astNodeInPosition).to.exist;
    expect(astNodeInPosition.kind).to.equal("XMLAttributeKey");
    expect(astNodeInPosition.astNode.key).to.equal("showSeparators");
  });

  it("will get xml attribute value", () => {
    const xmlSnippet = `
      <mvc:View 
        xmlns:mvc="sap.ui.core.mvc" 
        xmlns="sap.m"> 
        <List showSeparators = "All⇶"></List>
      </mvc:View>`;
    const astNodeInPosition = getXMLPositionFromSnippet(xmlSnippet);

    expect(astNodeInPosition).to.exist;
    expect(astNodeInPosition.kind).to.equal("XMLAttributeValue");
    expect(astNodeInPosition.astNode.value).to.equal("All");
  });

  it("will get xml element open name", () => {
    const xmlSnippet = `
      <mvc:View 
        xmlns:mvc="sap.ui.core.mvc" 
        xmlns="sap.m"> 
        <Lis⇶t></List>
      </mvc:View>`;
    const astNodeInPosition = getXMLPositionFromSnippet(xmlSnippet);

    expect(astNodeInPosition).to.exist;
    expect(astNodeInPosition.kind).to.equal("XMLElementOpenName");
    expect(astNodeInPosition.astNode.name).to.equal("List");
  });

  it("will get xml element close name", () => {
    const xmlSnippet = `
      <mvc:View 
        xmlns:mvc="sap.ui.core.mvc" 
        xmlns="sap.m"> 
        <customData></customDa⇶ta>
      </mvc:View>`;
    const astNodeInPosition = getXMLPositionFromSnippet(xmlSnippet);

    expect(astNodeInPosition).to.exist;
    expect(astNodeInPosition.kind).to.equal("XMLElementCloseName");
    expect(astNodeInPosition.astNode.name).to.equal("customData");
  });

  it("Out of element - before open tag", () => {
    const xmlSnippet = `
      ⇶<mvc:View 
        xmlns:mvc="sap.ui.core.mvc" 
        xmlns="sap.m"> 
        <List></List>
      </mvc:View>`;

    const astNodeInPosition = getXMLPositionFromSnippet(xmlSnippet);
    expect(astNodeInPosition).to.be.undefined;
  });

  it("Out of element - after close tag", () => {
    const xmlSnippet = `
      <mvc:View 
        xmlns:mvc="sap.ui.core.mvc" 
        xmlns="sap.m"> 
        <List></List>
      </mvc:View>⇶`;

    const astNodeInPosition = getXMLPositionFromSnippet(xmlSnippet);
    expect(astNodeInPosition).to.be.undefined;
  });

  it("Out of element - between elements", () => {
    const xmlSnippet = `
      <mvc:View 
        xmlns:mvc="sap.ui.core.mvc" 
        xmlns="sap.m"> 
        <List>⇶</List>
      </mvc:View>`;

    const astNodeInPosition = getXMLPositionFromSnippet(xmlSnippet);
    expect(astNodeInPosition).to.be.undefined;
  });

  it("Out of attribute - before attribute", () => {
    const xmlSnippet = `
      <mvc:View 
        xmlns:mvc="sap.ui.core.mvc" 
        xmlns="sap.m"> 
        <List ⇶ showSeparators = "All"></List>
      </mvc:View>`;

    const astNodeInPosition = getXMLPositionFromSnippet(xmlSnippet);
    expect(astNodeInPosition).to.be.undefined;
  });

  it("Out of attribute - between attributes", () => {
    const xmlSnippet = `
      <mvc:View 
        xmlns:mvc="sap.ui.core.mvc" 
        xmlns="sap.m"> 
        <List showSeparators = "All"⇶ busy="false"></List>
      </mvc:View>`;

    const astNodeInPosition = getXMLPositionFromSnippet(xmlSnippet);
    expect(astNodeInPosition).to.be.undefined;
  });

  it("Out of attribute - between key to vale", () => {
    const xmlSnippet = `
      <mvc:View 
        xmlns:mvc="sap.ui.core.mvc" 
        xmlns="sap.m"> 
        <List showSeparators =⇶ "All"></List>
      </mvc:View>`;

    const astNodeInPosition = getXMLPositionFromSnippet(xmlSnippet);
    expect(astNodeInPosition).to.be.undefined;
  });

  function getXMLPositionFromSnippet(xmlSnippet) {
    const xmlText = xmlSnippet.replace("⇶", "");
    const offset = xmlSnippet.indexOf("⇶");
    const { cst, tokenVector } = parse(xmlText);
    const xmlDoc = buildAst(cst, tokenVector);
    return astPositionAtOffset(xmlDoc, offset);
  }
});
