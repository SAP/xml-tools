import { expect } from "chai";
import {
  TextDocument,
  Diagnostic,
  DiagnosticSeverity,
  Position
} from "vscode-languageserver";

import { validateDocument, SYNTAX_ERROR_MSG } from "../src/language-services";

describe("the XML Language Services", () => {
  it("will detect a parsing error in an xml document", async () => {
    const doc: TextDocument = createTextDocument("xml", ">");
    const pos: Position = { line: 0, character: 0 };
    const expectedDiagnostics: Diagnostic[] = [
      {
        message: "Expecting token of type --> OPEN <-- but found --> '>' <--",
        range: {
          start: pos,
          end: pos
        },
        severity: DiagnosticSeverity.Error,
        source: SYNTAX_ERROR_MSG
      }
    ];
    const diagnostics = await validateDocument(doc);
    expect(diagnostics).to.deep.equal(expectedDiagnostics);
  });

  it("will detect a lexing error in an xml document", async () => {
    const doc: TextDocument = createTextDocument("xml", "<a></!>");
    const start: Position = { line: 0, character: 5 };
    const pos: Position = { line: 0, character: 6 };

    const expectedDiagnostics: Diagnostic[] = [
      {
        message: `unexpected character: ->!<- at offset: 5, skipped 1 characters.`,
        range: {
          start: start,
          end: pos
        },
        severity: DiagnosticSeverity.Error,
        source: SYNTAX_ERROR_MSG
      },
      {
        message: `Expecting token of type --> Name <-- but found --> '>' <--`,
        range: {
          start: pos,
          end: pos
        },
        severity: DiagnosticSeverity.Error,
        source: SYNTAX_ERROR_MSG
      }
    ];
    const diagnostics = await validateDocument(doc);
    expect(diagnostics).to.deep.equal(expectedDiagnostics);
  });

  it("will not detect any error in a none XML document", async () => {
    const doc: TextDocument = createTextDocument("txt", ">");
    const diagnostics = await validateDocument(doc);
    expect(diagnostics).to.deep.equal([]);
  });
});

function createTextDocument(languageId: string, content: string): TextDocument {
  return TextDocument.create("uri", languageId, 0, content);
}
