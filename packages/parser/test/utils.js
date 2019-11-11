const { has, forEach, flatMap, identity } = require("lodash");

function transformCstForAssertions(cstNode) {
  if (has(cstNode, "children")) {
    reduceLocationInfo(cstNode.location);
    const allChildren = flatMap(cstNode.children, identity);
    forEach(allChildren, transformCstForAssertions);
  } else if (has(cstNode, "image")) {
    reduceTokenInfo(cstNode);
  } else {
    throw Error("None Exhaustive Match");
  }
}

function reduceLocationInfo(loc) {
  if (isNaN(loc.startOffset)) {
    loc.startOffset = null;
  }

  if (isNaN(loc.endOffset)) {
    loc.endOffset = null;
  }
  delete loc.startLine;
  delete loc.endLine;
  delete loc.startColumn;
  delete loc.endColumn;
}

function reduceTokenInfo(tok) {
  if (isNaN(tok.startOffset)) {
    tok.startOffset = null;
  }

  if (isNaN(tok.endOffset)) {
    tok.endOffset = null;
  }
  delete tok.startLine;
  delete tok.endLine;
  delete tok.startColumn;
  delete tok.endColumn;
  delete tok.tokenTypeIdx;
  tok.tokenType = tok.tokenType.name;
}

module.exports = {
  transformCstForAssertions: transformCstForAssertions
};
