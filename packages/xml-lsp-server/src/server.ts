import {
  createConnection,
  TextDocuments,
  TextDocumentChangeEvent,
  ProposedFeatures
} from "vscode-languageserver";
import { validateDocument } from "./serverHelper";

const connection = createConnection(ProposedFeatures.all);
const documents = new TextDocuments();

connection.onInitialize(() => {
  return {
    capabilities: {
      textDocumentSync: documents.syncKind
    }
  };
});

documents.onDidChangeContent(async (event: TextDocumentChangeEvent) => {
  const diagnostics = await validateDocument(event.document);
  connection.sendDiagnostics({ uri: event.document.uri, diagnostics });
});

documents.listen(connection);

connection.listen();
