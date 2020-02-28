import * as path from "path";
import * as vscode from "vscode";
import { promises as fs } from "fs";
import { expect } from "chai";

const SYNTAX_ERROR_MSG = "Syntax error";
const docPath = path.resolve(
  __dirname,
  "..",
  "..",
  "..",
  "src",
  "test",
  "testFixure",
  "test.xml"
);
const docUri = vscode.Uri.file(docPath);

describe("XML for VSCode extension", () => {
  before(async function() {
    await vscode.workspace.openTextDocument(docUri);
  });

  after(async function() {
    // Clear the xml document
    await setContent("");
  });

  it("Will show lexing error in problems view", async function() {
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
        source: SYNTAX_ERROR_MSG
      }
    ]);
  });

  it("Will show parsing errors in problems view", async function() {
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
        source: SYNTAX_ERROR_MSG
      },
      {
        severity: vscode.DiagnosticSeverity.Error,
        message: "Expecting token of type --> CLOSE <-- but found --> '' <--",
        range: toRange(6, null, 0, 0),
        source: SYNTAX_ERROR_MSG
      }
    ]);
  });

  it("Will show multiple errors in problems view", async function() {
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
        source: SYNTAX_ERROR_MSG
      },
      {
        severity: vscode.DiagnosticSeverity.Error,
        message: "Expecting token of type --> STRING <-- but found --> '>' <--",
        range: toRange(3, 16, 3, 16),
        source: SYNTAX_ERROR_MSG
      },
      {
        severity: vscode.DiagnosticSeverity.Error,
        message: "Expecting token of type --> STRING <-- but found --> '>' <--",
        range: toRange(4, 19, 4, 19),
        source: SYNTAX_ERROR_MSG
      }
    ]);
  });

  function toRange(sLine: number, sChar: number, eLine: number, eChar: number) {
    const start = new vscode.Position(sLine, sChar);
    const end = new vscode.Position(eLine, eChar);
    return new vscode.Range(start, end);
  }

  async function setContent(content: string) {
    await fs.writeFile(docPath, content);
    await sleep(1000);
    await vscode.window.showTextDocument(docUri);
  }

  async function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function testDiagnostics(
    docUri: vscode.Uri,
    expectedDiagnostics: vscode.Diagnostic[]
  ) {
    const actualDiagnostics: vscode.Diagnostic[] = vscode.languages.getDiagnostics(
      docUri
    );
    expect(expectedDiagnostics).to.deep.equal(actualDiagnostics);
  }
});
