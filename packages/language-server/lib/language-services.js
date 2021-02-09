const { DiagnosticSeverity, Range } = require("vscode-languageserver");
const { map, forEach } = require("lodash");
const { parse } = require("@xml-tools/parser");
const { buildAst } = require("@xml-tools/ast");
const { checkConstraints } = require("@xml-tools/constraints");

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
      ),
    },
    severity: DiagnosticSeverity.Error,
  };
}

/**
 * @param {TextDocument} document
 * @param {import("@xml-tools/validation").ValidationIssue} issue
 * @returns {import("vscode-languageserver-types").Diagnostic}
 */
function constraintIssueToDiagnostic(document, issue) {
  return {
    message: issue.msg,
    range: {
      start: document.positionAt(issue.position.startOffset),
      // Chevrotain Token positions are non-inclusive for endOffsets
      end: document.positionAt(issue.position.endOffset + 1),
    },
    severity: toDiagnosticSeverity(issue.severity),
  };
}

/**
 * @param {"info" | "warning" | "error"} issueSeverity
 * @returns {import("vscode-languageserver-types").DiagnosticSeverity}
 */
function toDiagnosticSeverity(issueSeverity) {
  switch (issueSeverity) {
    case "error":
      return DiagnosticSeverity.Error;
    case "warning":
      return DiagnosticSeverity.Warning;
    case "info":
      return DiagnosticSeverity.Information;
    /* istanbul ignore next -- runtime check */
    default:
      throw Error("Non Exhaustive Match");
  }
}

/**
 * @param {TextDocument} document
 * @param {object} opts
 * @param {string} opts.consumer
 *
 * @returns {import("vscode-languageserver-types").Diagnostic[]}
 */
async function validateDocument(document, opts) {
  let diagnostics = [];
  if (document.languageId === "xml") {
    const { cst, tokenVector, lexErrors, parseErrors } = parse(
      document.getText()
    );
    const ast = buildAst(cst, tokenVector);
    const constraintsIssues = checkConstraints(ast);

    diagnostics = [
      ...map(lexErrors, (_) => lexingErrorToDiagnostic(document, _)),
      ...map(parseErrors, (_) => parsingErrorToDiagnostic(document, _)),
      ...map(constraintsIssues, (_) =>
        constraintIssueToDiagnostic(document, _)
      ),
    ];
  }

  forEach(diagnostics, (_) => (_.source = opts.consumer));

  return diagnostics;
}

module.exports = {
  validateDocument: validateDocument,
  toDiagnosticSeverity: toDiagnosticSeverity,
};
