import { expect } from "chai";

import { validateDocument, SYNTAX_ERROR_MSG } from "../src/serverHelper";

import {
  TextDocument,
  Diagnostic,
  DiagnosticSeverity,
  Position
} from "vscode-languageserver";

describe("Test XML Language Server", () => {
  it("Test parsing error validation in xml document", async () => {
    const doc: TextDocument = createTextDocument("xml", ">");
    const pos: Position = { line: 0, character: 0 };
    const diagnostic: Diagnostic = {
      message: "Expecting token of type --> OPEN <-- but found --> '>' <--",
      range: {
        start: pos,
        end: pos
      },
      severity: DiagnosticSeverity.Error,
      source: SYNTAX_ERROR_MSG
    };

    const expectedDiagnostics: Diagnostic[] = [diagnostic];
    const diagnostics = await validateDocument(doc);
    expect(diagnostics).to.deep.equal(expectedDiagnostics);
  });

  it("Test lexing error validation in xml document", async () => {
    const doc: TextDocument = createTextDocument("xml", "<a></!>");
    const start: Position = { line: 0, character: 5 };
    const end: Position = { line: 0, character: 6 };
    const diagnostic1: Diagnostic = {
      message: `unexpected character: ->!<- at offset: 5, skipped 1 characters.`,
      range: {
        start: start,
        end: end
      },
      severity: DiagnosticSeverity.Error,
      source: SYNTAX_ERROR_MSG
    };

    const pos: Position = { line: 0, character: 6 };
    const diagnostic2: Diagnostic = {
      message: `Expecting token of type --> Name <-- but found --> '>' <--`,
      range: {
        start: pos,
        end: pos
      },
      severity: DiagnosticSeverity.Error,
      source: SYNTAX_ERROR_MSG
    };

    const expectedDiagnostics: Diagnostic[] = [diagnostic1, diagnostic2];
    const diagnostics = await validateDocument(doc);
    expect(diagnostics).to.deep.equal(expectedDiagnostics);
  });

  it("Test no syntax validation in non xml document", async () => {
    const doc: TextDocument = createTextDocument("txt", ">");
    const diagnostics = await validateDocument(doc);
    expect(diagnostics).to.deep.equal([]);
  });
});

function createTextDocument(languageId: string, content: string): TextDocument {
  return TextDocument.create("uri", languageId, 0, content);
}
