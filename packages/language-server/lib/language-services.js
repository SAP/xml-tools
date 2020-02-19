const { DiagnosticSeverity, Range } = require("vscode-languageserver");
const { map } = require("lodash");
const { parse } = require("@xml-tools/parser");

const SYNTAX_ERROR_MSG = "Syntax error";

/**
 * @param {TextDocument} document
 * @param {import("chevrotain").ILexingError} error
 * @returns {import("vscode-languageserver-types").Diagnostic}
 */
function lexingErrorToDiagnostic(document, error) {
  return {
    message: error.message,
    range: Range.create(
      document.positionAt(error.offset),
      document.positionAt(error.offset + error.length)
    ),
    severity: DiagnosticSeverity.Error,
    source: SYNTAX_ERROR_MSG
  };
}

/**
 * @param {TextDocument} document
 * @param {import("chevrotain").ILexingError} error
 * @returns {import("vscode-languageserver-types").Diagnostic}
 */
function parsingErrorToDiagnostic(document, error) {
  return {
    message: error.message,
    range: {
      start: document.positionAt(error.token.startOffset),
      end: document.positionAt(
        error.token.endOffset ? error.token.endOffset : 0
      )
    },
    severity: DiagnosticSeverity.Error,
    source: SYNTAX_ERROR_MSG
  };
}

/**
 * @param {TextDocument} document
 * @returns {import("vscode-languageserver-types").Diagnostic[]}
 */
async function validateDocument(document) {
  let diagnostics = [];
  if (document.languageId === "xml") {
    const { lexErrors, parseErrors } = parse(document.getText());
    diagnostics = [
      ...map(lexErrors, _ => lexingErrorToDiagnostic(document, _)),
      ...map(parseErrors, _ => parsingErrorToDiagnostic(document, _))
    ];
  }
  return diagnostics;
}

module.exports = {
  validateDocument: validateDocument,
  SYNTAX_ERROR_MSG: SYNTAX_ERROR_MSG
};
