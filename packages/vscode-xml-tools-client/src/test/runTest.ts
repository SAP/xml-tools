import * as path from "path";
import { runTests } from "vscode-test";

async function main() {
  try {
    // The path to the extension test environment
    // Passed to --extensionTestsEnv
    const extensionTestsEnv = {
      path: path.resolve(
        __dirname,
        "..",
        "..",
        "src",
        "test",
        "suite",
        "textFixure"
      )
    };

    // The path to the extension test script
    // Passed to --extensionTestsPath
    const extensionDevelopmentPath = path.resolve(__dirname, "..", "..");
    console.log(extensionDevelopmentPath);

    // The folder containing the Extension Manifest package.json
    // Passed to `--extensionDevelopmentPath`

    const extensionTestsPath = path.resolve(__dirname, "suite", "index");
    console.log(extensionTestsPath);

    // Download VS Code, unzip it and run the integration test
    await runTests({
      extensionTestsEnv,
      extensionDevelopmentPath,
      extensionTestsPath
    });
  } catch (err) {
    console.error("Failed to run tests");
    process.exit(1);
  }
}

main();
