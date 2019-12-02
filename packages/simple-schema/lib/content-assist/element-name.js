const { difference, map, filter, find } = require("lodash");

// https://www.w3.org/TR/2009/REC-xml-names-20091208/#NT-PrefixedName
const NAMESPACE_PATTERN = /^(?:([^:]*):)?([^:]*)$/;
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
  const match = prefix.match(NAMESPACE_PATTERN);
  if (!match) {
    return [];
  }
  const namespacePrefix = match[1];
  const namespace = find(
    elementNode.namespaces,
    _ => _.prefix === namespacePrefix
  );
  const possibleElements = filter(
    xssElement.elements,
    _ =>
      !_.namespace ||
      (_.namespace && namespace && _.namespace === namespace.uri)
  );
  const allPossibleSuggestions = map(possibleElements, _ => _.name);
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

  const suggestions = map(possibleSuggestionsWithoutExistingSingular, _ => {
    return {
      text: _,
      label: _
    };
  });

  if (!namespacePrefix) {
    const namespaces = filter(elementNode.namespaces, _ => !!_.prefix);
    const namespaceSuggestions = map(namespaces, _ => ({
      text: _.prefix,
      label: _.prefix,
      commitCharacter: ":",
      isNamespace: true
    }));
    return [...namespaceSuggestions, ...suggestions];
  }
  return suggestions;
}

module.exports = {
  elementNameCompletion: elementNameCompletion
};
