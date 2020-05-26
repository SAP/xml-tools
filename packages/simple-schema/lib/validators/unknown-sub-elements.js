const { map, forEach, includes } = require("lodash");
const { tokenToOffsetPosition } = require("./utils");

/**
 * @param {XMLElement} elem
 * @param {XSSElement} schema
 *
 * @returns {ValidationIssue[]}
 */
function validateUnknownSubElements(elem, schema) {
  // This validation is only relevant if the Schema disallows unknown elements.
  if (schema.elementsType !== "closed") {
    return [];
  }

  const allowedElemNames = map(schema.elements, (_) => _.name);

  const issues = [];
  forEach(elem.subElements, (subElem) => {
    if (subElem.name !== null) {
      if (includes(allowedElemNames, subElem.name) === false) {
        issues.push({
          msg: `Unknown Sub-Element: <${
            subElem.name
          }> only [${allowedElemNames.toString()}] Sub-Elements are allowed`,
          node: subElem,
          severity: "error",
          // safe assumption that we have an `openName` (see above condition)
          position: tokenToOffsetPosition(subElem.syntax.openName),
        });
      }
    }
  });

  return issues;
}

module.exports = {
  validateUnknownSubElements: validateUnknownSubElements,
};
