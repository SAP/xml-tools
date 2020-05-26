"use strict";
const klawSync = require("klaw-sync");
const { resolve } = require("path");
const { readFileSync, writeFileSync } = require("fs");
const { format } = require("prettier");

const { transformCstForAssertions } = require("../test/utils");
const { parse } = require("../");

const testsDir = resolve(__dirname, "..", "test");

const sampleFiles = klawSync(testsDir, { nodir: true });
const xmlSampleFiles = sampleFiles.filter((fileDesc) => {
  if (fileDesc.path.includes("node_modules")) {
    return false;
  }
  return fileDesc.path.endsWith("input.xml");
});

xmlSampleFiles.forEach((fileDesc) => {
  const xmlInput = readFileSync(fileDesc.path, "utf8");
  const simpleNewLinesInput = xmlInput.replace(/\r\n/g, "\n");
  console.log(`Reading <${fileDesc.path}>`);
  const { cst } = parse(simpleNewLinesInput);
  transformCstForAssertions(cst);
  const snapshotOutput = `module.exports = { cst : ${JSON.stringify(cst)}}`;
  const formattedSnapshotOutput = format(snapshotOutput, { parser: "babel" });
  const outputFilePath = fileDesc.path.replace(/input.xml$/, "output.js");
  console.log(`writing <${outputFilePath}>`);
  writeFileSync(outputFilePath, formattedSnapshotOutput);
});
