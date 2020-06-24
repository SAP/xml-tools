const { forEach } = require("lodash");
const { expect } = require("chai");

const { accept } = require("../");

function modifyAstForAssertions(astNode) {
  // Avoid comparing cyclic structures
  accept(astNode, parentRemoverVisitor);
  // Reduce verbosity of assertions
  accept(astNode, positionReducerVisitor);
}

function removeParentProps(astNode) {
  accept(astNode, parentRemoverVisitor);
}

/**
 * @type {XMLAstVisitor}
 */
const parentRemoverVisitor = {
  visitXMLDocument: (node) => {
    // top level XML Doc does not have a parent...
  },
  visitXMLProlog: (node) => {
    delete node.parent;
  },
  visitXMLPrologAttribute: (node) => {
    delete node.parent;
  },
  visitXMLElement: (node) => {
    delete node.parent;
  },
  visitXMLAttribute: (node) => {
    delete node.parent;
  },
  visitXMLTextContent: (node) => {
    delete node.parent;
  },
};

/**
 * @type {XMLAstVisitor}
 */
const positionReducerVisitor = {
  visitXMLDocument: (node) => {
    reduceNodePoseInfo(node);
  },
  visitXMLProlog: (node) => {
    reduceNodePoseInfo(node);
  },
  visitXMLPrologAttribute: (node) => {
    reduceNodePoseInfo(node);
  },
  visitXMLElement: (node) => {
    reduceNodePoseInfo(node);
  },
  visitXMLAttribute: (node) => {
    reduceNodePoseInfo(node);
  },
  visitXMLTextContent: (node) => {
    reduceNodePoseInfo(node);
  },
};

function reduceNodePoseInfo(node) {
  reducePositionInfo(node.position);

  forEach(node.syntax, (tok) => {
    reducePositionInfo(tok);
  });
}

function reducePositionInfo(pos) {
  delete pos.startColumn;
  delete pos.endColumn;
  delete pos.startLine;
  delete pos.endLine;
}

function assertParentPropsAreValid(astNode) {
  accept(astNode, parentPropsValidatorVisitor);
}

/**
 * @type {XMLAstVisitor}
 */
const parentPropsValidatorVisitor = {
  visitXMLDocument: (node) => {
    // top level XML Doc does not have a parent...
  },
  visitXMLProlog: (node) => {
    expect(node.parent.prolog).to.eql(node);
  },
  visitXMLElement: (node) => {
    const parent = node.parent;
    if (parent.type === "XMLDocument") {
      expect(parent.rootElement).to.eql(node);
    } else {
      expect(parent.subElements).to.include(node);
    }
  },
  visitXMLAttribute: (node) => {
    expect(node.parent.attributes).to.include(node);
  },
  visitXMLTextContent: (node) => {
    expect(node.parent.textContents).to.include(node);
  },
};

module.exports = {
  modifyAstForAssertions: modifyAstForAssertions,
  positionReducerVisitor: positionReducerVisitor,
  assertParentPropsAreValid: assertParentPropsAreValid,
};
