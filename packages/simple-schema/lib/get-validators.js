const { validateAttributeValue } = require("./validators/attribute-value");

const {
  validateDuplicateSubElements,
} = require("./validators/duplicate-sub-elements");

const {
  validateRequiredAttributes,
} = require("./validators/required-attributes");

const {
  validateRequiredSubElements,
} = require("./validators/required-sub-elements");

const {
  validateUnknownAttributes,
} = require("./validators/unknown-attributes");

const {
  validateUnknownSubElements,
} = require("./validators/unknown-sub-elements");

const { findAttributeXssDef, findElementXssDef } = require("./path");

function getSchemaValidators(schema) {
  const attributeValidator = buildAttributeValidator(schema);
  const elementValidator = buildElementValidator(schema);

  return {
    attribute: attributeValidator,
    element: elementValidator,
  };
}

/**
 * @param {SimpleSchema} schema
 */
function buildAttributeValidator(schema) {
  return (attributeNode) => {
    let issues = [];
    const xssAttributeDef = findAttributeXssDef(attributeNode, schema);

    if (xssAttributeDef !== undefined) {
      const attributeValueIssues = validateAttributeValue(
        attributeNode,
        xssAttributeDef
      );
      issues = issues.concat(attributeValueIssues);
    }

    return issues;
  };
}

/**
 * @param {SimpleSchema} schema
 */
function buildElementValidator(schema) {
  return (elementNode) => {
    let issues = [];
    const xssElementDef = findElementXssDef(elementNode, schema);

    if (xssElementDef !== undefined) {
      const duplicateElementsIssues = validateDuplicateSubElements(
        elementNode,
        xssElementDef
      );
      const requiredAttributesIssues = validateRequiredAttributes(
        elementNode,
        xssElementDef
      );
      const requiredSubElementsIssues = validateRequiredSubElements(
        elementNode,
        xssElementDef
      );
      const unknownAttributesIssues = validateUnknownAttributes(
        elementNode,
        xssElementDef
      );
      const unknownSubElementsIssues = validateUnknownSubElements(
        elementNode,
        xssElementDef
      );
      issues = issues.concat(
        duplicateElementsIssues,
        requiredAttributesIssues,
        requiredSubElementsIssues,
        unknownAttributesIssues,
        unknownSubElementsIssues
      );
    }

    return issues;
  };
}

module.exports = {
  getSchemaValidators: getSchemaValidators,
};
