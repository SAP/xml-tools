const { resolve } = require("path");
const { runTests } = require("@vscode/test-electron");

async function main() {
  try {
    // NODE_OPTIONS set by nyc for coverage instrumentation are not supported
    // in Electron/VS Code packaged apps and cause the test runner to fail.
    // Clear them before launching VS Code to avoid this issue.
    delete process.env.NODE_OPTIONS;

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
      // Required for headless CI environments (Jenkins, etc.) where no
      // display server is available. Without these flags Electron refuses
      // to start and the test run fails immediately.
      launchArgs: ["--headless", "--disable-gpu", "--no-sandbox"],
    });
  } catch (err) {
    // Log the underlying error so CI logs actually show what went wrong.
    console.error("Failed to run tests:", err);
    process.exit(1);
  }
}

main();
