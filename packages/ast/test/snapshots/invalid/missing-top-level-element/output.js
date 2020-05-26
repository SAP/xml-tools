module.exports = {
  ast: {
    type: "XMLDocument",
    rootElement: null,
    position: { startOffset: 0, endOffset: 39 },
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
            value: { image: '"1.0"', startOffset: 14, endOffset: 18 },
          },
        },
        {
          type: "XMLAttribute",
          position: { startOffset: 20, endOffset: 35 },
          key: "encoding",
          value: "UTF-8",
          syntax: {
            key: { image: "encoding", startOffset: 20, endOffset: 27 },
            value: { image: '"UTF-8"', startOffset: 29, endOffset: 35 },
          },
        },
      ],
      position: { startOffset: 0, endOffset: 37 },
    },
  },
};
