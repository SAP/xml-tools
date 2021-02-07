const { resolve } = require("path");
const vscode = require("vscode");
const fs = require("fs").promises;
const { deactivate } = require("../../lib/extension");
const deepEqualInAnyOrder = require("deep-equal-in-any-order");
const chai = require("chai");
const { expect } = chai;
chai.use(deepEqualInAnyOrder);

const docPath = resolve(
  __dirname,
  "..",
  "..",
  "test",
  "testFixure",
  "test.xml"
);
const docUri = vscode.Uri.file(docPath);

describe("XML for VSCode extension", () => {
  before(async function () {
    await vscode.workspace.openTextDocument(docUri);
    await vscode.window.showTextDocument(docUri);
    // We need to explicitly wait for extension to load
    await sleep(1000);
  });

  after(async function () {
    await setContent("");
    const extensionStatus = await deactivate();
    expect(extensionStatus).to.equal(undefined);
  });

  it("Will show lexing error in problems view", async function () {
    const content = `
      <note!>
        <to>Tove</to>
        <from>Jani</from>
        <heading>Reminder</heading>
        <body>Don't forget me this weekend!</body>
      </note>`;
    await setContent(content);
    await testDiagnostics(docUri, [
      {
        severity: vscode.DiagnosticSeverity.Error,
        message:
          "unexpected character: ->!<- at offset: 12, skipped 1 characters.",
        range: toRange(1, 11, 1, 12),
        source: "XML Toolkit",
      },
    ]);
  });

  it("Will show parsing errors in problems view", async function () {
    const content = `
      <note>
        <to a=>Tove</to>
        <from>Jani</from>
        <heading>Reminder</heading>
        <body>Don't forget me this weekend!</body>
      </note`;
    await setContent(content);
    await testDiagnostics(docUri, [
      {
        severity: vscode.DiagnosticSeverity.Error,
        message: "Expecting token of type --> STRING <-- but found --> '>' <--",
        range: toRange(2, 14, 2, 14),
        source: "XML Toolkit",
      },
      {
        severity: vscode.DiagnosticSeverity.Error,
        message: "Expecting token of type --> CLOSE <-- but found --> '' <--",
        range: toRange(6, null, 0, 0),
        source: "XML Toolkit",
      },
    ]);
  });

  it("Will show multiple errors in problems view", async function () {
    const content = `
      <note>
        <to a=>Tove</to>
        <from a=>Jani</from>
        <heading a=>Reminder</heading>
        <body>Don't forget me this weekend!</body>
      </note>`;
    await setContent(content);
    await testDiagnostics(docUri, [
      {
        severity: vscode.DiagnosticSeverity.Error,
        message: "Expecting token of type --> STRING <-- but found --> '>' <--",
        range: toRange(2, 14, 2, 14),
        source: "XML Toolkit",
      },
      {
        severity: vscode.DiagnosticSeverity.Error,
        message: "Expecting token of type --> STRING <-- but found --> '>' <--",
        range: toRange(3, 16, 3, 16),
        source: "XML Toolkit",
      },
      {
        severity: vscode.DiagnosticSeverity.Error,
        message: "Expecting token of type --> STRING <-- but found --> '>' <--",
        range: toRange(4, 19, 4, 19),
        source: "XML Toolkit",
      },
    ]);
  });

  function toRange(sLine, sChar, eLine, eChar) {
    const start = new vscode.Position(sLine, sChar);
    const end = new vscode.Position(eLine, eChar);
    return new vscode.Range(start, end);
  }

  async function setContent(content) {
    await fs.writeFile(docPath, content);
    await sleep(1000);
  }

  async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function testDiagnostics(docUri, expectedDiagnostics) {
    const actualDiagnostics = vscode.languages.getDiagnostics(docUri);
    expect(expectedDiagnostics).to.deep.equalInAnyOrder(actualDiagnostics);
  }
});
