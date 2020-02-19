const {
  createConnection,
  TextDocuments,
  ProposedFeatures
} = require("vscode-languageserver");

const { validateDocument } = require("./language-services");

const connection = createConnection(ProposedFeatures.all);
const documents = new TextDocuments();

connection.onInitialize(() => {
  return {
    capabilities: {
      textDocumentSync: documents.syncKind
    }
  };
});

documents.onDidChangeContent(async event => {
  const diagnostics = await validateDocument(event.document);
  connection.sendDiagnostics({ uri: event.document.uri, diagnostics });
});

documents.listen(connection);
connection.listen();
