const { map, filter, difference } = require("lodash");
const { tokenToOffsetPosition } = require("./utils");

/**
 * @param {XMLElement} elem
 * @param {XSSElement} schema
 *
 * @returns {ValidationIssue[]}
 */
function validateRequiredSubElements(elem, schema) {
  const requiredSubElemsDef = filter(schema.elements, _ => _.required === true);
  const requiredElemNames = map(requiredSubElemsDef, _ => _.name);

  const actualSubElemNameNames = map(elem.subElements, _ => _.name);
  const missingSubElemNames = difference(
    requiredElemNames,
    actualSubElemNameNames
  );

  // This elementName must always exist, otherwise we could not locate the relevant schema definition
  // so this validation could have never executed...
  const errPosition = tokenToOffsetPosition(elem.syntax.openName);
  const issues = map(missingSubElemNames, _ => {
    return {
      msg: `Missing Required Sub-Element: <${_}>`,
      node: elem,
      severity: "error",
      position: errPosition
    };
  });
  return issues;
}

module.exports = {
  validateRequiredSubElements: validateRequiredSubElements
};
