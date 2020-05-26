const { accept } = require("@xml-tools/ast");
const { defaultsDeep, flatMap } = require("lodash");

function validate(options) {
  const actualOptions = defaultsDeep(options, {
    validators: {
      attribute: [],
      element: [],
    },
  });

  let issues = [];

  const validateVisitor = {
    visitXMLElement: function (node) {
      const newIssues = flatMap(actualOptions.validators.element, (validator) =>
        validator(node)
      );
      issues = issues.concat(newIssues);
    },
    visitXMLAttribute: function (node) {
      const newIssues = flatMap(
        actualOptions.validators.attribute,
        (validator) => validator(node)
      );
      issues = issues.concat(newIssues);
    },
  };

  accept(actualOptions.doc, validateVisitor);

  return issues;
}

module.exports = {
  validate: validate,
};
