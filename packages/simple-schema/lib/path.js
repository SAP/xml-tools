const { drop, dropRight, map, forEach, last, first } = require("lodash");

/**
 * @param {XMLAttribute} attribNode
 * @param {SimpleSchema} schema
 */
function findAttributeXssDef(attribNode, schema) {
  // Currently No support for Prolog Attributes in Simple XML Schema
  if (attribNode.parent && attribNode.parent.type === "XMLProlog") {
    return undefined;
  }
  const xssElement = findElementXssDef(attribNode.parent, schema);

  let xssAttribute = undefined;
  if (xssElement !== undefined) {
    const attributeName = attribNode.key;
    xssAttribute = xssElement.attributes[attributeName];
  }

  return xssAttribute;
}

/**
 * @param {XMLElement} node
 * @param {SimpleSchema} schema
 */
function findElementXssDef(node, schema) {
  const ancestors = getAstNodeAncestors(node);
  const elementsPath = map(ancestors, "name");

  const rootElement = first(elementsPath);
  // Root Element mis-match, The Schema cannot provide any attribute validations for this XML AST.
  if (rootElement !== schema.name) {
    return undefined;
  }
  let xssElement = schema;
  forEach(drop(elementsPath), (elemName) => {
    // traverse subElements
    xssElement = xssElement.elements[elemName];
    if (xssElement === undefined) {
      return false;
    }
  });

  return xssElement;
}

/**
 * @param {XMLAstNode} node
 *
 * @returns {XMLAstNode[]} - The Ancestors do not include the XMLDocument
 */
function getAstNodeAncestors(node) {
  const ancestors = [];
  ancestors.push(node);
  let currAncestor = node.parent;
  while (
    currAncestor !== undefined &&
    // The Simple Schema only starts at the root Element (not the Root Document).
    currAncestor.type !== "XMLDocument"
  ) {
    ancestors.push(currAncestor);
    currAncestor = currAncestor.parent;
  }
  ancestors.reverse();

  return ancestors;
}

module.exports = {
  findAttributeXssDef: findAttributeXssDef,
  findElementXssDef: findElementXssDef,
};
