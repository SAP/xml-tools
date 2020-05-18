const { AstPositionVisitor } = require("./ast-position");
const { accept } = require("@xml-tools/ast");

function getAstNodeInPosition(ast, offset) {
  const visitor = new AstPositionVisitor(offset);
  accept(ast, visitor);
  return visitor.astContext;
}

module.exports = {
  getAstNodeInPosition: getAstNodeInPosition
};
