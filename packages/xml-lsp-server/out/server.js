"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function(resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_languageserver_1 = require("vscode-languageserver");
const parser_1 = require("@xml-tools/parser");
const SYNTAX_ERROR_MSG = "Syntax error";
const diagnosticsCache = new Map();
// Create a connection for the server
let connection = vscode_languageserver_1.createConnection(
  vscode_languageserver_1.ProposedFeatures.all
);
// Create a simple text document manager
let documents = new vscode_languageserver_1.TextDocuments();
let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;
connection.onInitialize(params => {
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
      vscode_languageserver_1.DidChangeConfigurationNotification.type,
      undefined
    );
  }
  if (hasWorkspaceFolderCapability) {
    connection.workspace.onDidChangeWorkspaceFolders(_event => {
      connection.console.log("Workspace folder change event received.");
    });
  }
  documents.all().forEach(validateDocument);
});
connection.onDidChangeConfiguration(change => {
  // Revalidate all open text documents
  documents.all().forEach(validateDocument);
});
// The content of a text document has changed
documents.onDidChangeContent(event => {
  validateDocument(event.document);
});
function validateDocument(document) {
  return __awaiter(this, void 0, void 0, function*() {
    if (document.languageId === "xml") {
      const { cst, tokenVector, lexErrors, parseErrors } = parser_1.parse(
        document.getText()
      );
      let diagnostics = [
        ...lexErrors.map(lexingErrorToDiagnostic(document)),
        ...parseErrors.map(parsingErrorToDiagnostic(document))
      ];
      connection.sendDiagnostics({ uri: document.uri, diagnostics });
    }
  });
}
const lexingErrorToDiagnostic = document => error => ({
  message: error.message,
  range: vscode_languageserver_1.Range.create(
    document.positionAt(error.offset),
    document.positionAt(error.offset + error.length)
  ),
  severity: vscode_languageserver_1.DiagnosticSeverity.Error,
  source: SYNTAX_ERROR_MSG
});
const parsingErrorToDiagnostic = document => error => ({
  message: error.message,
  range: {
    start: document.positionAt(error.token.startOffset),
    end: document.positionAt(error.token.endOffset)
  },
  severity: vscode_languageserver_1.DiagnosticSeverity.Error,
  source: SYNTAX_ERROR_MSG
});
documents.onDidOpen(event => {
  if (event.document.languageId === "xml") {
    diagnosticsCache.set(event.document.uri, new Map());
  }
});
documents.onDidClose(event => {
  if (event.document.languageId === "xml") {
    diagnosticsCache.delete(event.document.uri);
  }
});
// Make the document manager listen on the connection
documents.listen(connection);
// Listen on the connection
connection.listen();
//# sourceMappingURL=server.js.map
