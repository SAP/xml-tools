const { expect } = require("chai");
const { readFileSync, readdirSync } = require("fs");
const prettier = require("prettier");

const rootTestDirectory = "test";

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

const scenarioDirectories = getDirectories(rootTestDirectory);

describe("Running scenarios against sample input/output", () => {
  for (let i = 0; i < scenarioDirectories.length; i++) {
    const scenario = scenarioDirectories[i];
    const testPath = `${rootTestDirectory}/${scenario}`;
    it(scenario, () => {
      const inputContent = readFileSync(`${testPath}/input.xml`, "utf-8");
      const outputContent = readFileSync(`${testPath}/output.xml`, "utf-8");

      const formatted = prettier.format(inputContent, {
        parser: "xml",
        plugins: ["."]
      });

      expect(formatted).to.eql(outputContent);
    });
  }
});
