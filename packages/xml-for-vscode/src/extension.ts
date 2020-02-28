import { workspace, ExtensionContext } from "vscode";
import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind
} from "vscode-languageclient";
import { SERVER_PATH } from "@xml-tools/language-server";

let client: LanguageClient;

export function activate(context: ExtensionContext) {
  let debugOptions = { execArgv: ["--nolazy", "--inspect=6009"] };

  let serverOptions: ServerOptions = {
    run: { module: SERVER_PATH, transport: TransportKind.ipc },
    debug: {
      module: SERVER_PATH,
      transport: TransportKind.ipc,
      options: debugOptions
    }
  };

  let clientOptions: LanguageClientOptions = {
    documentSelector: [{ scheme: "file", language: "xml" }],
    synchronize: {
      fileEvents: workspace.createFileSystemWatcher("**/*.xml")
    }
  };

  client = new LanguageClient(
    "XMLforVSCode",
    "XML For VSCode",
    serverOptions,
    clientOptions
  );

  client.start();
}

export function deactivate(): Thenable<void> | undefined {
  if (!client) {
    return undefined;
  }
  return client.stop();
}
