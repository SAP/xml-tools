import {
  createConnection,
  TextDocuments,
  TextDocument,
  IConnection,
  Diagnostic,
  DiagnosticSeverity,
  IPCMessageReader,
  IPCMessageWriter
} from "vscode-languageserver";

import { ILexingError, IRecognitionException } from "chevrotain";
import { parse } from "@xml-tools/parser";

export const SYNTAX_ERROR_MSG = "Syntax error";

export interface Settings {
  connection: IConnection;
  documents: TextDocuments;
}

export function configureSettings(): Settings {
  const settings: Settings = {
    connection: createConnection(
      new IPCMessageReader(process),
      new IPCMessageWriter(process)
    ),
    documents: new TextDocuments()
  };
  return settings;
}

const lexingErrorToDiagnostic = (document: TextDocument) => (
  error: ILexingError
): Diagnostic => ({
  message: error.message,
  range: {
    start: document.positionAt(error.offset),
    end: document.positionAt(error.offset + error.length)
  },
  severity: DiagnosticSeverity.Error,
  source: SYNTAX_ERROR_MSG
});

const parsingErrorToDiagnostic = (document: TextDocument) => (
  error: IRecognitionException
): Diagnostic => ({
  message: error.message,
  range: {
    start: document.positionAt(error.token.startOffset),
    end: document.positionAt(error.token.endOffset)
  },
  severity: DiagnosticSeverity.Error,
  source: SYNTAX_ERROR_MSG
});

export async function validateDocument(
  connection: IConnection,
  document: TextDocument
): Promise<void> {
  if (document.languageId === "xml") {
    const { cst, tokenVector, lexErrors, parseErrors } = parse(
      document.getText()
    );
    const diagnostics: Diagnostic[] = [
      ...lexErrors.map(lexingErrorToDiagnostic(document)),
      ...parseErrors.map(parsingErrorToDiagnostic(document))
    ];
    connection.sendDiagnostics({ uri: document.uri, diagnostics });
  }
}
