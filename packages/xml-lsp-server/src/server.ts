import {
  createConnection,
  TextDocuments,
  TextDocument,
  TextDocumentChangeEvent,
  Diagnostic,
  DiagnosticSeverity,
  ProposedFeatures,
  InitializeParams,
  DidChangeConfigurationNotification,
  Range
} from "vscode-languageserver";
import { ILexingError, IRecognitionException } from "chevrotain";
import { parse } from "@xml-tools/parser";

const GENERIC_XML_MSG = "XML parsing error";
const diagnosticsCache = new Map<string, Map<string, Diagnostic[]>>();

// Create a connection for the server
let connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager
let documents: TextDocuments = new TextDocuments();

let hasConfigurationCapability: boolean = false;
let hasWorkspaceFolderCapability: boolean = false;
let hasDiagnosticRelatedInformationCapability: boolean = false;

connection.onInitialize((params: InitializeParams) => {
  let capabilities = params.capabilities;

  // Does the client support the `workspace/configuration` request?
  // If not, we will fall back using global settings
  hasConfigurationCapability = !!(
    capabilities.workspace && !!capabilities.workspace.configuration
  );
  hasWorkspaceFolderCapability = !!(
    capabilities.workspace && !!capabilities.workspace.workspaceFolders
  );
  hasDiagnosticRelatedInformationCapability = !!(
    capabilities.textDocument &&
    capabilities.textDocument.publishDiagnostics &&
    capabilities.textDocument.publishDiagnostics.relatedInformation
  );

  return {
    capabilities: {
      textDocumentSync: documents.syncKind
    }
  };
});

connection.onInitialized(() => {
  if (hasConfigurationCapability) {
    // Register for all configuration changes
    connection.client.register(
      DidChangeConfigurationNotification.type,
      undefined
    );
  }
  if (hasWorkspaceFolderCapability) {
    connection.workspace.onDidChangeWorkspaceFolders(_event => {
      connection.console.log("Workspace folder change event received.");
    });
  }
});

connection.onDidChangeConfiguration(change => {
  // Revalidate all open text documents
  documents.all().forEach(validateDocument);
});

// The content of a text document has changed
documents.onDidChangeContent((event: TextDocumentChangeEvent) => {
  validateDocument(event.document);
});

async function validateDocument(document: TextDocument): Promise<void> {
  if (document.languageId === "xml") {
    const { cst, tokenVector, lexErrors, parseErrors } = parse(
      document.getText()
    );
    let diagnostics: Diagnostic[] = [
      ...lexErrors.map(lexingErrorToDiagnostic(document)),
      ...parseErrors.map(parseErrorToDiagnostic(document))
    ];
    if (hasDiagnosticRelatedInformationCapability) {
      diagnostics = addRelatedInfoToDiagnostic(document, diagnostics);
    }
    connection.sendDiagnostics({ uri: document.uri, diagnostics });
  }
}

const lexingErrorToDiagnostic = (document: TextDocument) => (
  error: ILexingError
): Diagnostic => ({
  message: error.message,
  range: Range.create(
    document.positionAt(error.offset),
    document.positionAt(error.offset + error.length)
  ),
  severity: DiagnosticSeverity.Error,
  source: "lexer"
});

const parseErrorToDiagnostic = (document: TextDocument) => (
  error: IRecognitionException
): Diagnostic => ({
  message: error.message,
  range: {
    start: document.positionAt(error.token.startOffset),
    end: document.positionAt(error.token.endOffset!)
  },
  severity: DiagnosticSeverity.Error,
  source: "parser"
});

function addRelatedInfoToDiagnostic(
  document: TextDocument,
  diagnostics: Diagnostic[]
): Diagnostic[] {
  diagnostics.forEach(diagnostic => {
    diagnostic.relatedInformation = [
      {
        location: {
          uri: document.uri,
          range: Object.assign({}, diagnostic.range)
        },
        message: GENERIC_XML_MSG
      }
    ];
  });
  return diagnostics;
}

documents.onDidOpen((event: TextDocumentChangeEvent) => {
  if (event.document.languageId === "xml") {
    diagnosticsCache.set(event.document.uri, new Map());
  }
});

documents.onDidClose((event: TextDocumentChangeEvent) => {
  if (event.document.languageId === "xml") {
    diagnosticsCache.delete(event.document.uri);
  }
});

// Make the document manager listen on the connection
documents.listen(connection);

// Listen on the connection
connection.listen();
