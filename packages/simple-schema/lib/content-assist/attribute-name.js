const { difference, map, filter } = require("lodash");

/**
 * @param {XMLElement} elementNode
 * @param {XSSElement} xssElement
 *
 * @returns {CompletionSuggestion[]}
 */
function attributeNameCompletion(elementNode, xssElement, prefix = "") {
  const possibleSuggestions = map(xssElement.attributes, _ => _.key);
  const existingAttribNames = map(elementNode.attributes, _ => _.key);
  const possibleNewSuggestions = difference(
    possibleSuggestions,
    existingAttribNames
  );
  const possibleNewSuggestionsMatchingPrefix = filter(
    possibleNewSuggestions,
    _ => _.startsWith(prefix)
  );

  const suggestions = map(possibleNewSuggestionsMatchingPrefix, _ => {
    return {
      text: _.substring(prefix.length),
      label: _
    };
  });

  return suggestions;
}

module.exports = {
  attributeNameCompletion: attributeNameCompletion
};
