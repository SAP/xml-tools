class AstPositionVisitor {
  constructor(offset) {
    this.offset = offset;
    this.position = undefined;
  }

  visitXMLElement(node) {
    const openName = node.syntax.openName;
    const closeName = node.syntax.closeName;
    if (this.isOffsetInRange(openName)) {
      this.position = { kind: "XMLElementOpenName", astNode: node };
    } else if (this.isOffsetInRange(closeName)) {
      this.position = { kind: "XMLElementCloseName", astNode: node };
    }
  }

  visitXMLAttribute(node) {
    const key = node.syntax.key;
    const value = node.syntax.value;

    if (this.isOffsetInRange(key)) {
      this.position = { kind: "XMLAttributeKey", astNode: node };
    } else if (this.isOffsetInRange(value)) {
      this.position = { kind: "XMLAttributeValue", astNode: node };
    }
  }

  isOffsetInRange(position) {
    return (
      position !== undefined &&
      position.startOffset <= this.offset &&
      position.endOffset >= this.offset
    );
  }
}

module.exports = {
  AstPositionVisitor: AstPositionVisitor,
};
