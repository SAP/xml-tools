const { difference, map } = require("lodash");

/**
 * @param {XMLElement} elementNode
 * @param {XSSElement} xssElement
 *
 * @returns {CompletionSuggestion[]}
 */
function attributeNameCompletion(elementNode, xssElement) {
  const possibleSuggestions = map(xssElement.attributes, (_) => _.key);
  const existingAttribNames = map(elementNode.attributes, (_) => _.key);
  const possibleNewSuggestions = difference(
    possibleSuggestions,
    existingAttribNames
  );

  const suggestions = map(possibleNewSuggestions, (_) => {
    return {
      text: _,
      label: _,
      commitCharacter: "=",
    };
  });

  return suggestions;
}

module.exports = {
  attributeNameCompletion: attributeNameCompletion,
};
