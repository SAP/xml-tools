// TODO: extract to top level nyc config.
module.exports = {
  include: ["lib/**/*.js"],
  // Not yet sure how to implement an Integration test for the LSP Server
  exclude: ["lib/server.js"],
  reporter: ["text", "lcov"],
  "check-coverage": true,
  all: true,
  branches: 100,
  lines: 100,
  functions: 100,
  statements: 100,
};
