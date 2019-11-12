const {
  executeValidSampleTest,
  testNameFromDir
} = require("../../../sample-test");
describe(`${testNameFromDir(__dirname)}`, () => {
  executeValidSampleTest(__dirname);
});
