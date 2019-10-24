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
          position: { startOffset: 6 },
          key: "attr1",
          value: "666",
          syntax: {
            key: { image: "attr1", startOffset: 6 },
            value: { image: '"666"', startOffset: 12 }
          }
        },
        {
          type: "XMLAttribute",
          position: { startOffset: 18 },
          key: "attr2",
          value: null,
          syntax: { key: { image: "attr2", startOffset: 18 } }
        }
      ],
      subElements: [],
      textContents: [],
      position: { startOffset: 0 },
      syntax: { openName: { image: "note", startOffset: 1 } }
    },
    position: { startOffset: 0 }
  }
};
