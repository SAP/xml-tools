const { difference, map, filter, has, pickBy } = require("lodash");
const { DEFAULT_NS } = require("@xml-tools/ast");

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
  if (match === null) {
    return [];
  }
  // If there is no prefix, use the default namespace prefix
  const namespacePrefix = match[1] ? match[1] : DEFAULT_NS;
  const elementNamespaceUri = elementNode.namespaces[namespacePrefix];
  const possibleElements = filter(
    xssElement.elements,
    _ =>
      has(_, "namespace") === false ||
      (_.namespace && _.namespace === elementNamespaceUri)
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

  if (namespacePrefix === undefined || namespacePrefix === DEFAULT_NS) {
    // Can't really suggest anything for the `implicit` default namespace...
    const namespacesWithoutDefault = pickBy(
      elementNode.namespaces,
      (val, key) => key !== DEFAULT_NS
    );
    const namespaceSuggestions = map(
      namespacesWithoutDefault,
      (uri, prefix) => ({
        text: prefix,
        label: prefix,
        commitCharacter: ":",
        isNamespace: true
      })
    );
    return [...namespaceSuggestions, ...suggestions];
  }
  return suggestions;
}

module.exports = {
  elementNameCompletion: elementNameCompletion
};
