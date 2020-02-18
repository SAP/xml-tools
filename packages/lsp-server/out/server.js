"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_languageserver_1 = require("vscode-languageserver");
const language_services_1 = require("./language-services");
const connection = vscode_languageserver_1.createConnection(
  vscode_languageserver_1.ProposedFeatures.all
);
const documents = new vscode_languageserver_1.TextDocuments();
connection.onInitialize(() => {
  return {
    capabilities: {
      textDocumentSync: documents.syncKind
    }
  };
});
documents.onDidChangeContent(async event => {
  const diagnostics = await language_services_1.validateDocument(
    event.document
  );
  connection.sendDiagnostics({ uri: event.document.uri, diagnostics });
});
documents.listen(connection);
connection.listen();
//# sourceMappingURL=server.js.map
