const { expect } = require("chai");
const { readFileSync } = require("fs");
const { resolve, basename } = require("path");
const { parse } = require("@xml-tools/parser");
const { partialRight } = require("lodash");

const {
  modifyAstForAssertions,
  assertParentPropsAreValid
} = require("./utils");
const { buildAst } = require("../");

function executeSampleTest(dirPath, assertNoErrors) {
  it("Can build an AST for a valid XML", () => {
    const inputPath = resolve(dirPath, "input.xml");
    const inputText = readFileSync(inputPath).toString("utf8");
    const { cst, lexErrors, parseErrors } = parse(inputText);
    if (assertNoErrors === true) {
      expect(lexErrors).to.be.empty;
      expect(parseErrors).to.be.empty;
    }
    const ast = buildAst(cst);
    assertParentPropsAreValid(ast);
    modifyAstForAssertions(ast);
    const expectedOutput = require(resolve(dirPath, "output.js")).ast;
    expect(ast).to.deep.eql(expectedOutput);
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
