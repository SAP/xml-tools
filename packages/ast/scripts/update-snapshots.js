"use strict";
const { parse } = require("@xml-tools/parser");
const { modifyAstForAssertions } = require("../test/utils");
const klawSync = require("klaw-sync");
const { resolve } = require("path");
const { readFileSync, writeFileSync } = require("fs");
const { format } = require("prettier");

const testsDir = resolve(__dirname, "..", "test");
const { buildAst } = require("../");

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
  const { cst, tokenVector } = parse(simpleNewLinesInput);
  const ast = buildAst(cst, tokenVector);
  modifyAstForAssertions(ast);
  const snapshotOutput = `module.exports = { ast : ${JSON.stringify(ast)}}`;
  const formattedSnapshotOutput = format(snapshotOutput, { parser: "babel" });
  const outputFilePath = fileDesc.path.replace(/input.xml$/, "output.js");
  console.log(`writing <${outputFilePath}>`);
  writeFileSync(outputFilePath, formattedSnapshotOutput);
});
