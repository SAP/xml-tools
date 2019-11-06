module.exports = {
  ast: {
    type: "XMLDocument",
    rootElement: {
      type: "XMLElement",
      namespaces: [],
      name: "note",
      attributes: [
        {
          type: "XMLAttribute",
          position: { startOffset: 6, endOffset: 16 },
          key: "attr1",
          value: "666",
          syntax: {
            key: { image: "attr1", startOffset: 6, endOffset: 10 },
            value: { image: '"666"', startOffset: 12, endOffset: 16 }
          }
        },
        {
          type: "XMLAttribute",
          position: { startOffset: 18, endOffset: 23 },
          key: "attr2",
          value: null,
          syntax: { key: { image: "attr2", startOffset: 18, endOffset: 22 } }
        }
      ],
      subElements: [],
      textContents: [],
      position: { startOffset: 0, endOffset: 23 },
      syntax: { openName: { image: "note", startOffset: 1, endOffset: 4 } }
    },
    position: { startOffset: 0, endOffset: 23 }
  }
};
