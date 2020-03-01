module.exports = {
  include: ["lib/**/*.js"],
  reporter: ["text", "lcov"],
  "check-coverage": true,
  all: true,
  lines: 90,
  functions: 90,
  statements: 90
};
