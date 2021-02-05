const { resolve } = require("path");
const { expect } = require("chai");
const { TextDocument, DiagnosticSeverity } = require("vscode-languageserver");

const { toDiagnosticSeverity } = require("../lib/language-services");

const {
  validateDocument,
  SYNTAX_ERROR_MSG,
} = require("../lib/language-services");
const { SERVER_PATH } = require("../lib/api");

describe("the XML Language Services", () => {
  it("will get the correct path to server module", async () => {
    const serverPath = resolve(__dirname, "../", "lib", "server.js");
    expect(SERVER_PATH).to.deep.equal(serverPath);
  });

  it("will detect a parsing error in an xml document", async () => {
    const doc = createTextDocument("xml", ">");
    const pos = { line: 0, character: 0 };
    const expectedDiagnostics = [
      {
        message: "Expecting token of type --> OPEN <-- but found --> '>' <--",
        range: {
          start: pos,
          end: pos,
        },
        severity: DiagnosticSeverity.Error,
        source: SYNTAX_ERROR_MSG,
      },
    ];
    const diagnostics = await validateDocument(doc);
    expect(diagnostics).to.deep.equal(expectedDiagnostics);
  });

  it("will detect a lexing error in an xml document", async () => {
    const doc = createTextDocument("xml", "<a></!>");
    const start = { line: 0, character: 5 };
    const pos = { line: 0, character: 6 };

    const expectedDiagnostics = [
      {
        message: `unexpected character: ->!<- at offset: 5, skipped 1 characters.`,
        range: {
          start: start,
          end: pos,
        },
        severity: DiagnosticSeverity.Error,
        source: SYNTAX_ERROR_MSG,
      },
      {
        message: `Expecting token of type --> Name <-- but found --> '>' <--`,
        range: {
          start: pos,
          end: pos,
        },
        severity: DiagnosticSeverity.Error,
        source: SYNTAX_ERROR_MSG,
      },
    ];
    const diagnostics = await validateDocument(doc);
    expect(diagnostics).to.deep.equal(expectedDiagnostics);
  });

  it("will detect a well-formedness issue in an xml document", async () => {
    const xmlSnippet = "<a></bc>";
    const doc = createTextDocument("xml", xmlSnippet);

    const diagnostics = await validateDocument(doc);
    expect(diagnostics).to.have.lengthOf(2);
    expect(diagnostics).to.deep.include.members([
      {
        message: 'opening tag: "a" must match closing tag: "bc"',
        range: {
          start: {
            line: 0,
            character: xmlSnippet.indexOf("a"),
          },
          end: {
            line: 0,
            character: xmlSnippet.indexOf("a"),
          },
        },
        severity: 1,
        source: "well-formedness",
      },
      {
        message: 'closing tag: "bc" must match opening tag: "a"',
        range: {
          start: {
            line: 0,
            character: xmlSnippet.indexOf("bc"),
          },
          end: {
            line: 0,
            character: xmlSnippet.indexOf("bc") + 1,
          },
        },
        severity: 1,
        source: "well-formedness",
      },
    ]);
  });

  it("will not detect any error in a none XML document", async () => {
    const doc = createTextDocument("txt", ">");
    const diagnostics = await validateDocument(doc);
    expect(diagnostics).to.deep.equal([]);
  });

  context("severity transformations", () => {
    it("will transform `error` severity correctly", () => {
      expect(toDiagnosticSeverity("error")).to.equal(DiagnosticSeverity.Error);
    });

    it("will transform `warning` severity correctly", () => {
      expect(toDiagnosticSeverity("warning")).to.equal(
        DiagnosticSeverity.Warning
      );
    });

    it("will transform `info` severity correctly", () => {
      expect(toDiagnosticSeverity("info")).to.equal(
        DiagnosticSeverity.Information
      );
    });
  });
});

/**
 * @param {string} languageId
 * @param {string} content
 */
function createTextDocument(languageId, content) {
  return TextDocument.create("uri", languageId, 0, content);
}
