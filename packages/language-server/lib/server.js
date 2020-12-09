const {
  createConnection,
  ProposedFeatures,
  TextDocuments,
  TextDocumentSyncKind,
} = require("vscode-languageserver");
const { SWATracker } = require("@sap/swa-for-sapbas-vsx");
const { TextDocument } = require("vscode-languageserver-textdocument");
const { validateDocument } = require("./language-services");
const { setGlobalSWA, getSWA } = require("./swa");

const connection = createConnection(ProposedFeatures.all);
const documents = new TextDocuments(TextDocument);

connection.onInitialize(() => {
  return {
    capabilities: {
      textDocumentSync: TextDocumentSyncKind.Full,
    },
  };
});

documents.onDidChangeContent(async (event) => {
  const diagnostics = await validateDocument(event.document);
  connection.sendDiagnostics({ uri: event.document.uri, diagnostics });

  if (diagnostics.length > 0) {
    // The language server (currently) only exposes **syntactic** XML diagnostics.
    getSWA().track("Syntax Issues Detected", [{ number: diagnostics.length }]);
  }
});

documents.listen(connection);
connection.listen();

connection.onRequest("initSWA", (publisher, extName) => {
  // The SWA
  const swa = new SWATracker(publisher, extName, (err) => {
    // Currently this would get sent to the client's output channel when
    // running via the UI5-Lang-Assistant VSCode ext.
    console.error(err);
  });
  setGlobalSWA(swa);
});
