const { map, includes, forEach } = require("lodash");
const { tokenToOffsetPosition } = require("./utils");

const NAMESPACE_ATTRRIBUTE_PATTERN = /^xmlns(:[^=]*)?$/;
/**
 * @param {XMLElement} elem
 * @param {XSSElement} schema
 *
 * @returns {ValidationIssue[]}
 */
function validateUnknownAttributes(elem, schema) {
  // This validation is only relevant if the Schema disallows unknown attributes.
  if (schema.attributesType !== "closed") {
    return [];
  }
  const allowedAttribNames = map(schema.attributes, _ => _.key);

  const issues = [];
  forEach(elem.attributes, attrib => {
    /* istanbul ignore else - Defensive programming, but cannot
     * reproduce this branch with current error recovery heuristics
     */
    if (attrib.key !== null) {
      if (
        includes(allowedAttribNames, attrib.key) === false &&
        NAMESPACE_ATTRRIBUTE_PATTERN.test(attrib.key) === false
      ) {
        issues.push({
          msg: `Unknown Attribute: <${
            attrib.key
          }> only [${allowedAttribNames.toString()}] attributes are allowed`,
          node: attrib,
          severity: "error",
          // safe assumption that we have a `key` token (see above condition)
          position: tokenToOffsetPosition(attrib.syntax.key)
        });
      }
    }
  });
  return issues;
}

module.exports = {
  validateUnknownAttributes: validateUnknownAttributes
};
