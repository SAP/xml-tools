const { DiagnosticSeverity, Range } = require("vscode-languageserver");
const { parse } = require("@xml-tools/parser");

const SYNTAX_ERROR_MSG = "Syntax error";

const lexingErrorToDiagnostic = document => error => ({
  message: error.message,
  range: Range.create(
    document.positionAt(error.offset),
    document.positionAt(error.offset + error.length)
  ),
  severity: DiagnosticSeverity.Error,
  source: SYNTAX_ERROR_MSG
});

const parsingErrorToDiagnostic = document => error => ({
  message: error.message,
  range: {
    start: document.positionAt(error.token.startOffset),
    end: document.positionAt(error.token.endOffset ? error.token.endOffset : 0)
  },
  severity: DiagnosticSeverity.Error,
  source: SYNTAX_ERROR_MSG
});

/**
 * @param {TextDocument} document
 * @returns {Diagnostic[]}
 */
async function validateDocument(document) {
  let diagnostics = [];
  if (document.languageId === "xml") {
    const { lexErrors, parseErrors } = parse(document.getText());
    diagnostics = [
      ...lexErrors.map(lexingErrorToDiagnostic(document)),
      ...parseErrors.map(parsingErrorToDiagnostic(document))
    ];
  }
  return diagnostics;
}

module.exports = {
  validateDocument: validateDocument,
  SYNTAX_ERROR_MSG: SYNTAX_ERROR_MSG
};
