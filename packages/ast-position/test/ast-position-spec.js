const { expect } = require("chai");
const { TextDocument } = require("vscode-languageserver");
const { buildAst } = require("@xml-tools/ast");
const { parse } = require("@xml-tools/parser");
const { getAstNodeInPosition } = require("../lib/api");

describe("AST Position visitor", () => {
  it("will get xml attribute key", () => {
    const xmlSnippet = `
    <mvc:View 
      xmlns:mvc="sap.ui.core.mvc" 
      xmlns="sap.m"> 
      <List showSeparat⇶ors = "All"></List>
    </mvc:View>`;
    const astNodeInPosition = getXMLNodeFromVisitor(xmlSnippet);
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
    const astNodeInPosition = getXMLNodeFromVisitor(xmlSnippet);
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
    const astNodeInPosition = getXMLNodeFromVisitor(xmlSnippet);
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
    const astNodeInPosition = getXMLNodeFromVisitor(xmlSnippet);
    expect(astNodeInPosition).to.exist;
    expect(astNodeInPosition.kind).to.equal("XMLElementCloseName");
    expect(astNodeInPosition.astNode.name).to.equal("customData");
  });

  it("Out of element - before open tag", () => {
    const xmlSnippet = `
    <mvc:View 
      xmlns:mvc="sap.ui.core.mvc" 
      xmlns="sap.m"> 
      ⇶<List></List>
      </mvc:View>`;
    const astNodeInPosition = getXMLNodeFromVisitor(xmlSnippet);
    expect(astNodeInPosition).to.not.exist;
  });

  it("Out of element - after close tag", () => {
    const xmlSnippet = `
    <mvc:View 
      xmlns:mvc="sap.ui.core.mvc" 
      xmlns="sap.m"> 
      <List></List>⇶
      </mvc:View>`;
    const astNodeInPosition = getXMLNodeFromVisitor(xmlSnippet);
    expect(astNodeInPosition).to.not.exist;
  });

  it("Out of element - between elements", () => {
    const xmlSnippet = `
    <mvc:View 
      xmlns:mvc="sap.ui.core.mvc" 
      xmlns="sap.m"> 
      <List>⇶</List>
      </mvc:View>`;
    const astNodeInPosition = getXMLNodeFromVisitor(xmlSnippet);
    expect(astNodeInPosition).to.not.exist;
  });

  it("Out of attribute - before attribute", () => {
    const xmlSnippet = `
    <mvc:View 
      xmlns:mvc="sap.ui.core.mvc" 
      xmlns="sap.m"> 
      <List ⇶ showSeparators = "All"></List>
      </mvc:View>`;
    const astNodeInPosition = getXMLNodeFromVisitor(xmlSnippet);
    expect(astNodeInPosition).to.not.exist;
  });

  it("Out of attribute - between attributes", () => {
    const xmlSnippet = `
    <mvc:View 
      xmlns:mvc="sap.ui.core.mvc" 
      xmlns="sap.m"> 
      <List showSeparators = "All"⇶ busy="false"></List>
      </mvc:View>`;
    const astNodeInPosition = getXMLNodeFromVisitor(xmlSnippet);
    expect(astNodeInPosition).to.not.exist;
  });

  it("Out of attribute - between key to vale", () => {
    const xmlSnippet = `
    <mvc:View 
      xmlns:mvc="sap.ui.core.mvc" 
      xmlns="sap.m"> 
      <List showSeparators =⇶ "All"></List>
      </mvc:View>`;
    const astNodeInPosition = getXMLNodeFromVisitor(xmlSnippet);
    expect(astNodeInPosition).to.not.exist;
  });

  function createTextDocument(languageId, content) {
    return TextDocument.create("uri", languageId, 0, content);
  }

  function getXMLNodeFromVisitor(xmlSnippet) {
    const xmlText = xmlSnippet.replace("⇶", "");
    const offset = xmlSnippet.indexOf("⇶");
    const { cst, tokenVector } = parse(xmlText);
    const ast = buildAst(cst, tokenVector);
    return getAstNodeInPosition(ast, offset);
  }
});
