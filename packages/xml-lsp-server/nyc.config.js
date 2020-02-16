const nycConfigTypeScript = require("@istanbuljs/nyc-config-typescript");

module.exports = {
  ...nycConfigTypeScript,
  include: ["src/**/*.ts"],
  reporter: ["text", "lcov"],
  "check-coverage": true,
  all: true,
  branches: 100,
  lines: 100,
  functions: 100,
  statements: 100
};
