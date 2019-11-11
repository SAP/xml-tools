const { expect } = require("chai");
const { readFileSync } = require("fs");
const { resolve, basename } = require("path");
const { partialRight } = require("lodash");

const { transformCstForAssertions } = require("./utils");
const { parse } = require("../");

function executeSampleTest(dirPath, assertNoErrors) {
  it("Can Parse an XML text", () => {
    const inputPath = resolve(dirPath, "input.xml");
    const inputText = readFileSync(inputPath).toString("utf8");
    const simpleNewLinesInput = inputText.replace(/\r\n/g, "\n");
    const { cst, lexErrors, parseErrors } = parse(simpleNewLinesInput);
    if (assertNoErrors === true) {
      expect(lexErrors).to.be.empty;
      expect(parseErrors).to.be.empty;
    }
    transformCstForAssertions(cst);
    const expectedOutput = require(resolve(dirPath, "output.js")).cst;
    expect(cst).to.deep.eql(expectedOutput);
  });
}

function testNameFromDir(dirPath) {
  return basename(dirPath);
}

module.exports = {
  executeValidSampleTest: partialRight(executeSampleTest, true),
  executeInValidSampleTest: partialRight(executeSampleTest, false),
  testNameFromDir: testNameFromDir
};
