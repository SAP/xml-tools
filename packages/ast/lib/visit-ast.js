const { forEach } = require("lodash");
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
      visitor.visitXMLDocument(node);
      break;
    }
    case "XMLProlog": {
      visitor.visitXMLProlog(node);
      break;
    }
    case "XMLElement": {
      visitor.visitXMLElement(node);
      break;
    }
    case "XMLAttribute": {
      visitor.visitXMLAttribute(node);
      break;
    }
    case "XMLTextContent": {
      visitor.visitXMLTextContent(node);
      break;
    }
    default:
      throw Error("None Exhaustive Match");
  }

  const astChildren = getAstChildrenReflective(node);
  forEach(astChildren, childNode => {
    accept(childNode, visitor);
  });
}

module.exports = {
  accept: accept
};
