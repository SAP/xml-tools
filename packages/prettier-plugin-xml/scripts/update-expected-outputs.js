const klawSync = require("klaw-sync");
const { resolve, basename } = require("path");
const { readFileSync, writeFileSync } = require("fs");
const { forEach } = require("lodash");
const { format } = require("prettier");

const rootPluginDir = resolve(__dirname, "../");
const testDir = resolve(__dirname, "../test");
const sampleFiles = klawSync(testDir, {
  traverseAll: true,
  filter: fileDesc => {
    return basename(fileDesc.path) === "input.xml";
  }
});

forEach(sampleFiles, fileDesc => {
  console.log(`Reading <${fileDesc.path}>`);
  const xmlSampleText = readFileSync(fileDesc.path, "utf8");
  const newExpectedText = format(xmlSampleText, {
    parser: "xml",
    plugins: [rootPluginDir]
  });

  const outputFilePath = fileDesc.path.replace(/input.xml$/, "output.xml");
  console.log(`writing <${outputFilePath}>`);
  writeFileSync(outputFilePath, newExpectedText);
});
