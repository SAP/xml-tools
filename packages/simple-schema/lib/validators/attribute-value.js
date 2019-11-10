const { isRegExp, isArray, includes, has } = require("lodash");
const { tokenToOffsetPosition } = require("./utils");

/**
 * @param {XMLAttribute} attributeNode
 * @param {XSSAttribute }xssAttribute
 *
 * @returns {ValidationIssue[]}
 */
function validateAttributeValue(attributeNode, xssAttribute) {
  const issues = [];

  const valueDef = xssAttribute.value;

  // An XSS Attribute definition may not specify any constraints on a value
  if (has(xssAttribute, "value") === false) {
    return issues;
  }

  const actualValue = attributeNode.value;
  if (actualValue === null) {
    // we cannot validate a partial attribute AST without an actual value...
    return issues;
  }

  // This is always safe because at this point we know the attribute has a value
  const errPosition = tokenToOffsetPosition(attributeNode.syntax.value);
  /* istanbul ignore else  defensive programming */
  if (isRegExp(valueDef)) {
    if (valueDef.test(actualValue) === false) {
      issues.push({
        msg: `Expecting Value matching <${valueDef.toString()}> but found <${actualValue}>`,
        node: attributeNode,
        severity: "error",
        position: errPosition
      });
    }
  } else if (isArray(valueDef)) {
    if (includes(valueDef, actualValue) === false) {
      issues.push({
        msg: `Expecting one of <${valueDef.toString()}> but found <${actualValue}>`,
        node: attributeNode,
        severity: "error",
        position: errPosition
      });
    }
  } else {
    /* istanbul ignore next  defensive programming */
    throw Error("None Exhaustive Match");
  }

  return issues;
}

module.exports = {
  validateAttributeValue: validateAttributeValue
};
