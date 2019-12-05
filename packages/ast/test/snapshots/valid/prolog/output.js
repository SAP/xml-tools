module.exports = {
  ast: {
    type: "XMLDocument",
    rootElement: {
      type: "XMLElement",
      namespaces: [],
      name: "note",
      attributes: [],
      subElements: [],
      textContents: [],
      position: { startOffset: 39, endOffset: 51 },
      syntax: {
        openName: { image: "note", startOffset: 40, endOffset: 43 },
        closeName: { image: "note", startOffset: 47, endOffset: 50 },
        openBody: { startOffset: 39, endOffset: 44 },
        closeBody: { startOffset: 45, endOffset: 51 }
      }
    },
    position: { startOffset: 0, endOffset: 52 },
    prolog: {
      type: "XMLProlog",
      attributes: [
        {
          type: "XMLAttribute",
          position: { startOffset: 6, endOffset: 18 },
          key: "version",
          value: "1.0",
          syntax: {
            key: { image: "version", startOffset: 6, endOffset: 12 },
            value: { image: '"1.0"', startOffset: 14, endOffset: 18 }
          }
        },
        {
          type: "XMLAttribute",
          position: { startOffset: 20, endOffset: 35 },
          key: "encoding",
          value: "UTF-8",
          syntax: {
            key: { image: "encoding", startOffset: 20, endOffset: 27 },
            value: { image: '"UTF-8"', startOffset: 29, endOffset: 35 }
          }
        }
      ],
      position: { startOffset: 0, endOffset: 37 }
    }
  }
};
