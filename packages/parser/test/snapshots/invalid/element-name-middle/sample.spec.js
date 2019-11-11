const {
  executeInValidSampleTest,
  testNameFromDir
} = require("../../../sample-test");
describe(`${testNameFromDir(__dirname)}`, () => {
  executeInValidSampleTest(__dirname);
});
