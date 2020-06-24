const { forEach, isFunction } = require("lodash");
const { getAstChildrenReflective } = require("./utils");

/**
 * @param {XMLAstNode} node
 * @param {XMLAstVisitor} visitor
 *
 * @returns {void}
 */
function accept(node, visitor) {
  switch (node.type) {
    case "XMLDocument": {
      if (isFunction(visitor.visitXMLDocument)) {
        visitor.visitXMLDocument(node);
      }
      break;
    }
    case "XMLProlog": {
      if (isFunction(visitor.visitXMLProlog)) {
        visitor.visitXMLProlog(node);
      }
      break;
    }
    case "XMLPrologAttribute": {
      if (isFunction(visitor.visitXMLPrologAttribute)) {
        visitor.visitXMLPrologAttribute(node);
      }
      break;
    }
    case "XMLElement": {
      if (isFunction(visitor.visitXMLElement)) {
        visitor.visitXMLElement(node);
      }
      break;
    }
    case "XMLAttribute": {
      if (isFunction(visitor.visitXMLAttribute)) {
        visitor.visitXMLAttribute(node);
      }
      break;
    }
    case "XMLTextContent": {
      if (isFunction(visitor.visitXMLTextContent)) {
        visitor.visitXMLTextContent(node);
      }
      break;
    }
    /* istanbul ignore next  defensive programming */
    default:
      throw Error("None Exhaustive Match");
  }

  const astChildren = getAstChildrenReflective(node);
  forEach(astChildren, (childNode) => {
    accept(childNode, visitor);
  });
}

module.exports = {
  accept: accept,
};
