const { parse } = require("@xml-tools/parser");
const { buildAst } = require("@xml-tools/ast");
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
  const { cst, tokenVector } = parse(realXmlText);
  const ast = buildAst(cst, tokenVector);
  const suggestions = getSuggestions({
    cst,
    tokenVector,
    ast,
    offset: offset,
    providers: {
      attributeValue: [
        schemaSuggestionsProviders.schemaAttributeValueCompletion,
      ],
      attributeName: [schemaSuggestionsProviders.schemaAttributeNameCompletion],
      elementName: [schemaSuggestionsProviders.schemaElementNameCompletion],
    },
  });
  return suggestions;
}

module.exports = {
  suggestionsBySchema: suggestionsBySchema,
};
