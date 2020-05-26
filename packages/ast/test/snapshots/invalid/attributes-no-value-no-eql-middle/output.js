module.exports = {
  ast: {
    type: "XMLDocument",
    rootElement: {
      type: "XMLElement",
      namespaces: {},
      name: "note",
      attributes: [
        {
          type: "XMLAttribute",
          position: { startOffset: 6, endOffset: 16 },
          key: "attr1",
          value: "666",
          syntax: {
            key: { image: "attr1", startOffset: 6, endOffset: 10 },
            value: { image: '"666"', startOffset: 12, endOffset: 16 },
          },
        },
        {
          type: "XMLAttribute",
          position: { startOffset: 18, endOffset: 22 },
          key: "attr2",
          value: null,
          syntax: { key: { image: "attr2", startOffset: 18, endOffset: 22 } },
        },
        {
          type: "XMLAttribute",
          position: { startOffset: 24, endOffset: 34 },
          key: "attr3",
          value: "111",
          syntax: {
            key: { image: "attr3", startOffset: 24, endOffset: 28 },
            value: { image: '"111"', startOffset: 30, endOffset: 34 },
          },
        },
      ],
      subElements: [],
      textContents: [],
      position: { startOffset: 0, endOffset: 43 },
      syntax: {
        openName: { image: "note", startOffset: 1, endOffset: 4 },
        closeName: { image: "note", startOffset: 39, endOffset: 42 },
        isSelfClosing: false,
        openBody: { startOffset: 0, endOffset: 36 },
        closeBody: { startOffset: 37, endOffset: 43 },
        attributesRange: { startOffset: 6, endOffset: 35 },
      },
    },
    position: { startOffset: 0, endOffset: 44 },
  },
};
