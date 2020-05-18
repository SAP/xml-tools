const { getAstNodeInPosition } = require("../lib/api");
const { buildAst } = require("@xml-tools/ast");
const { expect } = require("chai");
const { TextDocument } = require("vscode-languageserver");
const { parse } = require("@xml-tools/parser");

describe("AST Position visitor", () => {
  it("will get xml attribute key", () => {
    const xmlSnippet = `
    <mvc:View 
      xmlns:mvc="sap.ui.core.mvc" 
      xmlns="sap.m"> 
      <List showSeparat@ors = "All">
    </mvc:View>`;
    const astNodeInPosition = getXMLNodeFromVisitor(xmlSnippet);
    expect(astNodeInPosition.kind).to.equal("XMLKeyAttribute");
    expect(astNodeInPosition.astNode.key).to.equal("showSeparators");
  });

  it("will get xml attribute value", () => {
    const xmlSnippet = `
    <mvc:View 
      xmlns:mvc="sap.ui.core.mvc" 
      xmlns="sap.m"> 
      <List showSeparators = "All@">
    </mvc:View>`;
    const astNodeInPosition = getXMLNodeFromVisitor(xmlSnippet);
    expect(astNodeInPosition.kind).to.equal("XMLValueAttribute");
    expect(astNodeInPosition.astNode.value).to.equal("All");
  });

  it("will get xml element open name", () => {
    const xmlSnippet = `
    <mvc:View 
      xmlns:mvc="sap.ui.core.mvc" 
      xmlns="sap.m"> 
      <Lis@t></List>
    </mvc:View>`;
    const astNodeInPosition = getXMLNodeFromVisitor(xmlSnippet);
    expect(astNodeInPosition.kind).to.equal("XMLElementOpenName");
    expect(astNodeInPosition.astNode.name).to.equal("List");
  });

  it("will get xml element close name", () => {
    const xmlSnippet = `
    <mvc:View 
      xmlns:mvc="sap.ui.core.mvc" 
      xmlns="sap.m"> 
      <customData></customDa@ta>
    </mvc:View>`;
    const astNodeInPosition = getXMLNodeFromVisitor(xmlSnippet);
    expect(astNodeInPosition.kind).to.equal("XMLElementCloseName");
    expect(astNodeInPosition.astNode.name).to.equal("customData");
  });

  function createTextDocument(languageId, content) {
    return TextDocument.create("uri", languageId, 0, content);
  }

  function getXMLNodeFromVisitor(xmlSnippet) {
    const xmlText = xmlSnippet.replace("@", "");
    const offset = xmlSnippet.indexOf("@");
    const doc = createTextDocument("xml", xmlText);
    const documentText = doc.getText();
    const { cst, tokenVector } = parse(documentText);
    const ast = buildAst(cst, tokenVector);
    return getAstNodeInPosition(ast, offset);
  }
});
