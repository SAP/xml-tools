const { workspace } = require("vscode");
const { LanguageClient, TransportKind } = require("vscode-languageclient");
const { SERVER_PATH } = require("@xml-tools/language-server");

let client;

function activate() {
  const debugOptions = { execArgv: ["--nolazy", "--inspect=6009"] };

  const serverOptions = {
    run: { module: SERVER_PATH, transport: TransportKind.ipc },
    debug: {
      module: SERVER_PATH,
      transport: TransportKind.ipc,
      options: debugOptions,
    },
  };

  let clientOptions = {
    documentSelector: [{ scheme: "file", language: "xml" }],
    synchronize: {
      fileEvents: workspace.createFileSystemWatcher("**/*.xml"),
    },
  };

  client = new LanguageClient(
    "XMLforVSCode",
    "XML For VSCode",
    serverOptions,
    clientOptions
  );

  client.start();
}

function deactivate() {
  /* istanbul ignore if - scenario that cannot be reached in productive code */
  if (!client) {
    return undefined;
  }
  return client.stop();
}

module.exports = {
  activate: activate,
  deactivate: deactivate,
};
