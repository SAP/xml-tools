const { workspace, window } = require("vscode");
const { resolve } = require("path");
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

  const meta = require(resolve(__dirname, "..", "package.json"));
  const outChannel = window.createOutputChannel(meta.displayName);
  let clientOptions = {
    documentSelector: [{ scheme: "file", language: "xml" }],
    synchronize: {
      fileEvents: workspace.createFileSystemWatcher("**/*.xml"),
    },
    outputChannel: outChannel,
  };

  client = new LanguageClient(
    meta.name,
    meta.displayName,
    serverOptions,
    clientOptions
  );

  // https://github.com/microsoft/vscode-languageserver-node/blob/bb85e80617c7f0cb64dad9dad852219e2da7c4c9/jsonrpc/src/node/test/connection.test.ts#L484-L507
  client.start();
  initSWAInLangServer(client, meta);
}

/**
 * @param {BaseLanguageClient} client
 * @param {object} meta
 * @returns {Promise<void>}
 */
async function initSWAInLangServer(client, meta) {
  await client.onReady();
  // Due to limitations in the SWA library, the usage analytics does not work currently on the VSCode engine
  client.sendRequest("initSWA", meta.publisher, meta.name);
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
