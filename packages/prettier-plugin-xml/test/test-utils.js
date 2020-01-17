const { format } = require("prettier");
const { expect } = require("chai");
const { readFileSync } = require("fs");
const { resolve, relative } = require("path");

const pluginPath = resolve(__dirname, "../");
function testSample(testFolder, isExclusive) {
  const testCaseFunc = isExclusive ? it.only : it;
  const inputPath = resolve(testFolder, "input.xml");
  const expectedPath = resolve(testFolder, "output.xml");
  const relativeInputPath = relative(__dirname, inputPath);

  let inputContents;
  let expectedContents;

  before(() => {
    inputContents = readFileSync(inputPath, "utf8");
    expectedContents = readFileSync(expectedPath, "utf8");
  });

  testCaseFunc(`can format <${relativeInputPath}>`, () => {
    const actual = format(inputContents, {
      parser: "xml",
      plugins: [pluginPath]
    });

    expect(normalizeNewlines(actual)).to.equal(
      normalizeNewlines(expectedContents)
    );
  });

  it(`performs a stable formatting for <${relativeInputPath}>`, () => {
    const onePass = format(inputContents, {
      parser: "xml",
      plugins: [pluginPath]
    });

    const secondPass = format(onePass, {
      parser: "xml",
      plugins: [pluginPath]
    });
    expect(onePass).to.equal(secondPass);
  });
}

/**
 * To avoid OS related line terminator issues
 */
function normalizeNewlines(text) {
  return text.replace(/\r\n/g, "\n");
}

module.exports = {
  testSample
};
