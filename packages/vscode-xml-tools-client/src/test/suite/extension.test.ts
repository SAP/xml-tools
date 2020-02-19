import * as path from "path";
import { getDocUri, activate, sleep } from "./helper";
import * as vscode from "vscode";
import { promises as fs } from "fs";
import { expect } from "chai";
import { TextDocument } from "vscode-languageclient";

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
const docUri = getDocUri(docPath);

describe("Extension Test", () => {
  before(async function() {
    TextDocument.create(docPath, "xml", 0, "");
    await vscode.workspace.openTextDocument(docUri);
    await activate();
    //wait for extension to load
    await sleep(2000);
  });
  it("Test diagnostic text - lexing errors", async function() {
    let content = `<note!>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note>`;
    await setContent(content);
    await testDiagnostics([
      {
        severity: vscode.DiagnosticSeverity.Error,
        message:
          "unexpected character: ->!<- at offset: 5, skipped 1 characters.",
        range: toRange(0, 5, 0, 6),
        source: SYNTAX_ERROR_MSG
      }
    ]);
  });

  it("Test diagnostic text - parsing errors", async function() {
    let content = `<note>
  <to a=>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note`;
    await setContent(content);
    await testDiagnostics([
      {
        severity: vscode.DiagnosticSeverity.Error,
        message: "Expecting token of type --> STRING <-- but found --> '>' <--",
        range: toRange(1, 8, 1, 8),
        source: SYNTAX_ERROR_MSG
      },
      {
        severity: vscode.DiagnosticSeverity.Error,
        message: "Expecting token of type --> CLOSE <-- but found --> '' <--",
        range: toRange(5, null, 0, 0),
        source: SYNTAX_ERROR_MSG
      }
    ]);
  });

  it("Test diagnostic text - Multiple errors", async function() {
    let content = `<note>
  <to a=>Tove</to>
  <from a=>Jani</from>
  <heading a=>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note>`;
    await setContent(content);
    await testDiagnostics([
      {
        severity: vscode.DiagnosticSeverity.Error,
        message: "Expecting token of type --> STRING <-- but found --> '>' <--",
        range: toRange(1, 8, 1, 8),
        source: SYNTAX_ERROR_MSG
      },
      {
        severity: vscode.DiagnosticSeverity.Error,
        message: "Expecting token of type --> STRING <-- but found --> '>' <--",
        range: toRange(2, 10, 2, 10),
        source: SYNTAX_ERROR_MSG
      },
      {
        severity: vscode.DiagnosticSeverity.Error,
        message: "Expecting token of type --> STRING <-- but found --> '>' <--",
        range: toRange(3, 13, 3, 13),
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
    await vscode.workspace.openTextDocument(docUri);
    await fs.writeFile(docPath, content);
    await sleep(2000);
    await vscode.window.showTextDocument(docUri);
  }

  async function testDiagnostics(expectedDiagnostics: vscode.Diagnostic[]) {
    let actualDiagnostics: vscode.Diagnostic[] = vscode.languages.getDiagnostics(
      docUri
    );
    console.log(JSON.stringify(actualDiagnostics));
    console.log(JSON.stringify(expectedDiagnostics));
    expect(actualDiagnostics.length).to.equal(expectedDiagnostics.length);

    expectedDiagnostics.forEach((expectedDiagnostic, i) => {
      const actualDiagnostic = actualDiagnostics[i];
      expect(actualDiagnostic.message).to.equal(expectedDiagnostic.message);
      expect(actualDiagnostic.range).to.deep.equal(expectedDiagnostic.range);
    });
  }
});
