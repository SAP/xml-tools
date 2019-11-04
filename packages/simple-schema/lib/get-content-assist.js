const { attributeNameCompletion } = require("./content-assist/attribute-name");
const {
  attributeValueCompletion
} = require("./content-assist/attribute-value");
const { elementNameCompletion } = require("./content-assist/element-name");
const { findElementXssDef, findAttributeXssDef } = require("./path");

function getSchemaSuggestionsProviders(schema) {
  const attributeNameProvider = buildAttributeNameProvider(schema);
  const attributeValueProvider = buildAttributeValueProvider(schema);
  const elementNameProvider = buildElementNameProvider(schema);

  return {
    schemaElementNameCompletion: elementNameProvider,
    schemaAttributeNameCompletion: attributeNameProvider,
    schemaAttributeValueCompletion: attributeValueProvider
  };
}

/**
 * @param {SimpleSchema} schema
 */
function buildAttributeNameProvider(schema) {
  return ({ element, prefix }) => {
    const xssElementDef = findElementXssDef(element, schema);
    return attributeNameCompletion(element, xssElementDef, prefix);
  };
}

/**
 * @param {SimpleSchema} schema
 */
function buildElementNameProvider(schema) {
  return ({ element, prefix }) => {
    // Note we are finding the definition for the element's parent
    // Because the information on possible sibling elements exists there...
    const xssElementDef = findElementXssDef(element.parent, schema);
    return elementNameCompletion(element.parent, xssElementDef, prefix);
  };
}

/**
 * @param {SimpleSchema} schema
 */
function buildAttributeValueProvider(schema) {
  return ({ attribute, prefix }) => {
    const attributeXssDef = findAttributeXssDef(attribute, schema);
    return attributeValueCompletion(attribute, attributeXssDef, prefix);
  };
}

module.exports = {
  getSchemaSuggestionsProviders: getSchemaSuggestionsProviders
};
