class AstPositionVisitor {
  constructor(offset) {
    this.offset = offset;
  }
  visitXMLElement(node) {
    const openName = node.syntax.openName;
    const closeName = node.syntax.closeName;
    if (this.isOffsetInRange(openName)) {
      this.astContext = { kind: "XMLElementOpenName", astNode: node };
    }

    if (this.isOffsetInRange(closeName)) {
      this.astContext = { kind: "XMLElementCloseName", astNode: node };
    }
  }

  visitXMLAttribute(node) {
    const key = node.syntax.key;
    const value = node.syntax.value;

    if (this.isOffsetInRange(key)) {
      this.astContext = { kind: "XMLAttributeKey", astNode: node };
    }

    if (this.isOffsetInRange(value)) {
      this.astContext = { kind: "XMLAttributeValue", astNode: node };
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
  AstPositionVisitor: AstPositionVisitor
};
