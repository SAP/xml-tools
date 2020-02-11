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
  const possibleSuggestionsWithoutExistingSingular = applicableElements(
    xssElement.elements,
    elementNode.subElements,
    possibleElements
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
      (uri, prefix) => prefix !== DEFAULT_NS
    );
    const applicableNamespaces = pickBy(
      namespacesWithoutDefault,
      (uri, prefix) => {
        const possibleElements = filter(
          xssElement.elements,
          element =>
            has(element, "namespace") === true && element.namespace === uri
        );
        const possibleSuggestionsWithoutExistingSingular = applicableElements(
          xssElement.elements,
          elementNode.subElements,
          possibleElements
        );
        const namespaceHasApplicableElements =
          possibleSuggestionsWithoutExistingSingular.length > 0;
        return namespaceHasApplicableElements;
      }
    );
    const namespaceSuggestions = map(applicableNamespaces, (uri, prefix) => ({
      text: prefix,
      label: prefix,
      commitCharacter: ":",
      isNamespace: true
    }));
    return [...namespaceSuggestions, ...suggestions];
  }
  return suggestions;
}

function applicableElements(xssElements, subElements, possibleElements) {
  const allPossibleSuggestions = map(possibleElements, element => element.name);
  const notSingularElem = filter(
    xssElements,
    element => element.cardinality === "many"
  );
  const notSingularElemNames = map(notSingularElem, element => element.name);
  const existingElemNames = map(subElements, element => element.name);
  const existingSingular = difference(existingElemNames, notSingularElemNames);
  return (possibleSuggestionsWithoutExistingSingular = difference(
    allPossibleSuggestions,
    existingSingular
  ));
}

module.exports = {
  elementNameCompletion: elementNameCompletion
};
