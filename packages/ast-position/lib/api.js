const { AstPositionVisitor } = require("./ast-position");
const { accept } = require("@xml-tools/ast");

/**
 * @param {XMLDocument} xmlDoc
 * @param {number} offset
 * @returns {AstPosition | undefined}
 */
function astPositionAtOffset(xmlDoc, offset) {
  const positionVisitor = new AstPositionVisitor(offset);
  accept(xmlDoc, positionVisitor);
  return positionVisitor.position;
}

module.exports = {
  astPositionAtOffset,
};
