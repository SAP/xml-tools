const { validate } = require("@xml-tools/validation");
const {
  validateUniqueAttributeKeys,
} = require("./constraints/unique-attribute-keys");
const {
  validateTagClosingNameMatch,
} = require("./constraints/tag-closing-name-match");

/**
 * @param {XMLDocument} ast
 * @returns {ValidationIssue[]}
 */
function checkConstraints(ast) {
  const constraintIssues = validate({
    doc: ast,
    validators: {
      element: [validateTagClosingNameMatch, validateUniqueAttributeKeys],
    },
  });

  return constraintIssues;
}

module.exports = {
  checkConstraints,
};
