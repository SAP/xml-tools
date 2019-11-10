const { map, filter, difference } = require("lodash");
const { tokenToOffsetPosition } = require("./utils");

/**
 * @param {XMLElement} elem
 * @param {XSSElement} schema
 *
 * @returns {ValidationIssue[]}
 */
function validateRequiredAttributes(elem, schema) {
  const requiredAttribsDef = filter(
    schema.attributes,
    _ => _.required === true
  );
  const requiredAttribNames = map(requiredAttribsDef, _ => _.key);

  const actualAttribNames = map(elem.attributes, _ => _.key);
  const missingAttributesNames = difference(
    requiredAttribNames,
    actualAttribNames
  );

  // This elementName must always exist, otherwise we could not locate the relevant schema definition
  // so this validation could have never executed...
  const errPosition = tokenToOffsetPosition(elem.syntax.openName);
  const issues = map(missingAttributesNames, _ => {
    return {
      msg: `Missing Required Attribute: <${_}>`,
      node: elem,
      severity: "error",
      position: errPosition
    };
  });
  return issues;
}

module.exports = {
  validateRequiredAttributes: validateRequiredAttributes
};
