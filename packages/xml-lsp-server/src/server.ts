import {
  TextDocumentChangeEvent,
  Diagnostic,
  InitializeParams,
  DidChangeConfigurationNotification
} from "vscode-languageserver";
import { configureSettings, validateDocument } from "./serverHelper";

const diagnosticsCache = new Map<string, Map<string, Diagnostic[]>>();
const settings = configureSettings();
const connection = settings.connection;
const documents = settings.documents;

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;

connection.onInitialize((params: InitializeParams) => {
  const capabilities = params.capabilities;

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

// The content of a text document has changed
documents.onDidChangeContent((event: TextDocumentChangeEvent) => {
  validateDocument(connection, event.document);
});

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
