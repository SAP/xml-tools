const { difference, map, filter } = require("lodash");

/**
 *
 * Note that the Element (XML/XSS) are of the parent node of the element
 *   in which content assist was requested.
 *
 * @param {XMLElement} elementNode
 * @param {XSSElement} xssElement
 *
 * @returns {CompletionSuggestion[]}
 */
function elementNameCompletion(elementNode, xssElement, prefix = "") {
  const allPossibleSuggestions = map(xssElement.elements, _ => _.name);
  const notSingularElem = filter(
    xssElement.elements,
    _ => _.cardinality === "many"
  );
  const notSingularElemNames = map(notSingularElem, _ => _.name);
  const existingElemNames = map(elementNode.subElements, _ => _.name);
  const existingSingular = difference(existingElemNames, notSingularElemNames);
  const possibleSuggestionsWithoutExistingSingular = difference(
    allPossibleSuggestions,
    existingSingular
  );

  const possibleNewSuggestionsMatchingPrefix = filter(
    possibleSuggestionsWithoutExistingSingular,
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
  elementNameCompletion: elementNameCompletion
};
