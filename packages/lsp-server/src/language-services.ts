import {
  TextDocument,
  Diagnostic,
  DiagnosticSeverity,
  Range
} from "vscode-languageserver";

import { ILexingError, IRecognitionException } from "chevrotain";
import { parse } from "@xml-tools/parser";

export const SYNTAX_ERROR_MSG = "Syntax error";

const lexingErrorToDiagnostic = (document: TextDocument) => (
  error: ILexingError
): Diagnostic => ({
  message: error.message,
  range: Range.create(
    document.positionAt(error.offset),
    document.positionAt(error.offset + error.length)
  ),
  severity: DiagnosticSeverity.Error,
  source: SYNTAX_ERROR_MSG
});

const parsingErrorToDiagnostic = (document: TextDocument) => (
  error: IRecognitionException
): Diagnostic => ({
  message: error.message,
  range: {
    start: document.positionAt(error.token.startOffset),
    end: document.positionAt(error.token.endOffset ? error.token.endOffset : 0)
  },
  severity: DiagnosticSeverity.Error,
  source: SYNTAX_ERROR_MSG
});

export async function validateDocument(
  document: TextDocument
): Promise<Diagnostic[]> {
  let diagnostics: Diagnostic[] = [];
  if (document.languageId === "xml") {
    const { lexErrors, parseErrors } = parse(document.getText());
    diagnostics = [
      ...lexErrors.map(lexingErrorToDiagnostic(document)),
      ...parseErrors.map(parsingErrorToDiagnostic(document))
    ];
  }
  return diagnostics;
}
