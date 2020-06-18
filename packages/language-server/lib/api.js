const { existsSync } = require("fs");
const { resolve } = require("path");

// for use in productive flows
const bundledPath = resolve(__dirname, "..", "dist", "server.js");
// for dev flows
const sourcesPath = resolve(__dirname, "server.js");

// We assume that if the `node_modules` directory exists then we are running
// in development mode, We rely on the fact that the bundled .vsix file of the
// VSCode extension excludes the this package's `node_modules` folder (among others).
// Note this logic would not work with yarn 2.0 / npm 8 / pnpm as `node_modules`
// is no longer created by those package managers.
const isDevelopmentRun = existsSync(resolve(__dirname, "..", "node_modules"));

let serverPath;
/* istanbul ignore else - no tests (yet?) on bundled artifacts */
if (isDevelopmentRun) {
  serverPath = sourcesPath;
} else {
  serverPath = bundledPath;
}

module.exports = {
  SERVER_PATH: serverPath,
};
