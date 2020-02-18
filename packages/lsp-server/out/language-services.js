"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_languageserver_1 = require("vscode-languageserver");
const parser_1 = require("@xml-tools/parser");
exports.SYNTAX_ERROR_MSG = "Syntax error";
const lexingErrorToDiagnostic = document => error => ({
  message: error.message,
  range: vscode_languageserver_1.Range.create(
    document.positionAt(error.offset),
    document.positionAt(error.offset + error.length)
  ),
  severity: vscode_languageserver_1.DiagnosticSeverity.Error,
  source: exports.SYNTAX_ERROR_MSG
});
const parsingErrorToDiagnostic = document => error => ({
  message: error.message,
  range: {
    start: document.positionAt(error.token.startOffset),
    end: document.positionAt(error.token.endOffset ? error.token.endOffset : 0)
  },
  severity: vscode_languageserver_1.DiagnosticSeverity.Error,
  source: exports.SYNTAX_ERROR_MSG
});
async function validateDocument(document) {
  let diagnostics = [];
  if (document.languageId === "xml") {
    const { lexErrors, parseErrors } = parser_1.parse(document.getText());
    diagnostics = [
      ...lexErrors.map(lexingErrorToDiagnostic(document)),
      ...parseErrors.map(parsingErrorToDiagnostic(document))
    ];
  }
  return diagnostics;
}
exports.validateDocument = validateDocument;
//# sourceMappingURL=language-services.js.map
