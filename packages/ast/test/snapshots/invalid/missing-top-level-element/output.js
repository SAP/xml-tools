module.exports = {
  ast: {
    type: "XMLDocument",
    rootElement: null,
    position: { startOffset: 0 },
    prolog: {
      type: "XMLProlog",
      attributes: [
        {
          type: "XMLAttribute",
          position: { startOffset: 6 },
          key: "version",
          value: "1.0",
          syntax: {
            key: { image: "version", startOffset: 6 },
            value: { image: '"1.0"', startOffset: 14 }
          }
        },
        {
          type: "XMLAttribute",
          position: { startOffset: 20 },
          key: "encoding",
          value: "UTF-8",
          syntax: {
            key: { image: "encoding", startOffset: 20 },
            value: { image: '"UTF-8"', startOffset: 29 }
          }
        }
      ],
      position: { startOffset: 0 }
    }
  }
};
