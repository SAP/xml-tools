const {
  createConnection,
  ProposedFeatures,
  TextDocuments,
  TextDocumentSyncKind,
} = require("vscode-languageserver");
const { TextDocument } = require("vscode-languageserver-textdocument");
const { has } = require("lodash");
const { validateDocument } = require("./language-services");
const { DEFAULT_CONSUMER_NAME } = require("./constants");

const connection = createConnection(ProposedFeatures.all);
const documents = new TextDocuments(TextDocument);

let consumerName;

connection.onInitialize((params) => {
  if (has(params, "initializationOptions.consumerName")) {
    consumerName = params.initializationOptions.consumerName;
  } else {
    consumerName = DEFAULT_CONSUMER_NAME;
  }

  return {
    capabilities: {
      textDocumentSync: TextDocumentSyncKind.Full,
    },
  };
});

documents.onDidChangeContent(async (event) => {
  const diagnostics = await validateDocument(event.document, { consumerName });
  connection.sendDiagnostics({ uri: event.document.uri, diagnostics });
});

documents.listen(connection);
connection.listen();
