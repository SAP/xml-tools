const server = require("vscode-languageserver");

const textDocument = require("vscode-languageserver-textdocument");

const { validateDocument } = require("./language-services");

const connection = server.createConnection(server.ProposedFeatures.all);
const documents = new server.TextDocuments(textDocument.TextDocument);

connection.onInitialize(() => {
  return {
    capabilities: {
      textDocumentSync: server.TextDocumentSyncKind.Full
    }
  };
});

documents.onDidChangeContent(async event => {
  const diagnostics = await validateDocument(event.document);
  connection.sendDiagnostics({ uri: event.document.uri, diagnostics });
});

documents.listen(connection);
connection.listen();
