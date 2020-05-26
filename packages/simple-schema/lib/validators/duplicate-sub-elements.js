const { map, forEach, includes, filter, groupBy } = require("lodash");
const { tokenToOffsetPosition } = require("./utils");

/**
 * @param {XMLElement} elem
 * @param {XSSElement} schema
 *
 * @returns {ValidationIssue[]}
 */
function validateDuplicateSubElements(elem, schema) {
  const allowedDupElem = filter(
    schema.elements,
    (_) => _.cardinality === "many"
  );
  const allowedDupElemNames = map(allowedDupElem, (_) => _.name);

  const actualSubElemByName = groupBy(elem.subElements, (_) => _.name);
  const issues = [];
  forEach(actualSubElemByName, (dupElements, dupElementsName) => {
    const allowedDup = includes(allowedDupElemNames, dupElementsName);
    const hasConfiguration = schema.elements[dupElementsName] !== undefined;
    const hasDuplicates = dupElements.length > 1;

    if (allowedDup === false && hasDuplicates && hasConfiguration) {
      forEach(dupElements, (dupElem) => {
        issues.push({
          msg: `Duplicate Sub-Element: <${dupElem.name}> only a single occurrence of this Sub-Element is allowed here.`,
          node: dupElem,
          severity: "error",
          // safe assumption that we have an `openName` (see above condition)
          position: tokenToOffsetPosition(dupElem.syntax.openName),
        });
      });
    }
  });

  return issues;
}

module.exports = {
  validateDuplicateSubElements: validateDuplicateSubElements,
};
