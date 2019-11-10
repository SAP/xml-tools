const { getSuggestions } = require("@xml-tools/content-assist");
const { getSchemaSuggestionsProviders } = require("../../");

/**
 *
 * @param {string} xmlText
 * @param {SimpleSchema} schema
 * @returns {ValidationIssue[] | *}
 */
function suggestionsBySchema(xmlText, schema) {
  const schemaSuggestionsProviders = getSchemaSuggestionsProviders(schema);
  const realXmlText = xmlText.replace("⇶", "");
  const offset = xmlText.indexOf("⇶");
  const suggestions = getSuggestions({
    text: realXmlText,
    offset: offset,
    providers: {
      attributeValue: [
        schemaSuggestionsProviders.schemaAttributeValueCompletion
      ],
      attributeName: [schemaSuggestionsProviders.schemaAttributeNameCompletion],
      elementName: [schemaSuggestionsProviders.schemaElementNameCompletion]
    }
  });
  return suggestions;
}

module.exports = {
  suggestionsBySchema: suggestionsBySchema
};
