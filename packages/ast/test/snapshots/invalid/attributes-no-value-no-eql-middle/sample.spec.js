const {
  executeInValidSampleTest,
  testNameFromDir,
} = require("../../../sample-test");

// TODO: should we disable single token deletion in this case?
describe(`${testNameFromDir(__dirname)}`, () => {
  executeInValidSampleTest(__dirname);
});
