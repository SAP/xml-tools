module.exports = {
  // Common settings for JS Files.
  extends: [
    "eslint:recommended",
    "plugin:eslint-comments/recommended",
    // Disables all formatting related rules as formatting is handled by prettier, not eslint.
    "prettier",
  ],
  parserOptions: {
    // Targeting modern nodejs versions
    // Consult with: https://kangax.github.io/compat-table/es2016plus/
    ecmaVersion: 2018,
  },
  env: {
    commonjs: true,
    mocha: true,
    node: true,
    es6: true,
  },
  rules: {
    "eslint-comments/require-description": ["error", { ignore: [] }],
  },
};
