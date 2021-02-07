const { readFile: readFileCallback } = require("fs");
const { resolve } = require("path");
const { promisify } = require("util");
const { workspace } = require("vscode");
const { LanguageClient, TransportKind } = require("vscode-languageclient");
const { SERVER_PATH } = require("@xml-tools/language-server");

const readFile = promisify(readFileCallback);

let client;

async function activate(context) {
  const debugOptions = { execArgv: ["--nolazy", "--inspect=6009"] };

  const serverOptions = {
    run: { module: SERVER_PATH, transport: TransportKind.ipc },
    debug: {
      module: SERVER_PATH,
      transport: TransportKind.ipc,
      options: debugOptions,
    },
  };

  const meta = JSON.parse(
    await readFile(resolve(context.extensionPath, "package.json"), "utf8")
  );

  /**
   * @type {import("@xml-tools/language-server).ServerInitializationOptions}
   */
  const initializationOptions = {
    consumerName: meta.displayName,
  };

  let clientOptions = {
    documentSelector: [{ scheme: "file", language: "xml" }],
    synchronize: {
      fileEvents: workspace.createFileSystemWatcher("**/*.xml"),
    },
    initializationOptions: initializationOptions,
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
