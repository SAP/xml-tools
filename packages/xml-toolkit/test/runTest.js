const { resolve } = require("path");
const { runTests } = require("vscode-test");

async function main() {
  try {
    // The path to the extension test environment
    // Passed to --extensionTestsEnv
    const extensionTestsEnv = {
      path: resolve(__dirname, "..", "..", "test", "suite", "textFixure"),
    };

    // The folder containing the Extension Manifest package.json
    // Passed to `--extensionDevelopmentPath`
    const extensionDevelopmentPath = resolve(__dirname, "..");

    // The path to the extension test script
    // Passed to --extensionTestsPath
    const extensionTestsPath = resolve(__dirname, "suite", "index");

    // Download VS Code, unzip it and run the integration test
    await runTests({
      extensionTestsEnv,
      extensionDevelopmentPath,
      extensionTestsPath,
    });
  } catch (err) {
    console.error("Failed to run tests");
    process.exit(1);
  }
}

main();
