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

connection.onInitialize((params) => {
  if (params && params.initializationOptions) {
    const { publisher, name } = params.initializationOptions;
    if (publisher !== undefined && name !== undefined) {
      // Currently ("@sap/swa-for-sapbas-vsx": "1.1.5") would not perform any usage analytics
      // when running inside an Language Server process which was initialized from VSCode.
      // It would only run in BAS.
      const swa = new SWATracker(publisher, name, (err) => {
        // Currently this would get sent to the client's output channel when
        // running via the UI5-Lang-Assistant VSCode ext.
        console.error(err);
      });
      setGlobalSWA(swa);
    }
  }

  return {
    capabilities: {
      textDocumentSync: TextDocumentSyncKind.Full,
    },
  };
});

documents.onDidChangeContent(async (event) => {
  const diagnostics = await validateDocument(event.document);
  connection.sendDiagnostics({ uri: event.document.uri, diagnostics });
  // We are only interested in "real" issues detected, and the first time a document is opened
  // is our best approximation. The issue we are trying to workout is that this many syntax errors
  // would be "detected" while a document is being edited, so they are not really meaningful...
  const isFirstTimeOpened =
    (event && event.document && event.document.version) === 1;
  if (diagnostics.length > 0 && isFirstTimeOpened) {
    try {
      const fileUri = event.document.uri ? event.document.uri : "NO_URI";
      // The language server (currently) only exposes **syntactic** XML diagnostics.
      getSWA().track("Syntax Issues Detected", [fileUri, diagnostics.length]);
    } catch (e) {
      console.error(`Error during usage analytics:\n\t${e.message}`);
    }
  }
});

documents.listen(connection);
connection.listen();
