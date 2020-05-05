module.exports = {
  ast: {
    type: "XMLDocument",
    rootElement: {
      type: "XMLElement",
      namespaces: {},
      name: "note",
      attributes: [],
      subElements: [
        {
          type: "XMLElement",
          namespaces: {},
          name: "to",
          attributes: [],
          subElements: [],
          textContents: [
            {
              type: "XMLTextContent",
              position: { startOffset: 39, endOffset: 42 },
              text: "Bill"
            }
          ],
          position: { startOffset: 35, endOffset: 47 },
          syntax: {
            openName: { image: "to", startOffset: 36, endOffset: 37 },
            closeName: { image: "to", startOffset: 45, endOffset: 46 },
            isSelfClosing: false,
            openBody: { startOffset: 35, endOffset: 38 },
            closeBody: { startOffset: 43, endOffset: 47 },
            attributesRange: { startOffset: 39, endOffset: 37 }
          }
        },
        {
          type: "XMLElement",
          namespaces: {},
          name: "from",
          attributes: [],
          subElements: [],
          textContents: [
            {
              type: "XMLTextContent",
              position: { startOffset: 69, endOffset: 71 },
              text: "Tim"
            }
          ],
          position: { startOffset: 63, endOffset: 78 },
          syntax: {
            openName: { image: "from", startOffset: 64, endOffset: 67 },
            closeName: { image: "from", startOffset: 74, endOffset: 77 },
            isSelfClosing: false,
            openBody: { startOffset: 63, endOffset: 68 },
            closeBody: { startOffset: 72, endOffset: 78 },
            attributesRange: { startOffset: 69, endOffset: 67 }
          }
        }
      ],
      textContents: [
        {
          type: "XMLTextContent",
          position: { startOffset: 6, endOffset: 10 },
          text: "\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 30, endOffset: 34 },
          text: "\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 48, endOffset: 52 },
          text: "\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 53, endOffset: 62 },
          text: "hello\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 79, endOffset: 83 },
          text: "\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 84, endOffset: 89 },
          text: "world\n"
        }
      ],
      position: { startOffset: 0, endOffset: 96 },
      syntax: {
        openName: { image: "note", startOffset: 1, endOffset: 4 },
        closeName: { image: "note", startOffset: 92, endOffset: 95 },
        isSelfClosing: false,
        openBody: { startOffset: 0, endOffset: 5 },
        closeBody: { startOffset: 90, endOffset: 96 },
        attributesRange: { startOffset: 6, endOffset: 4 }
      }
    },
    position: { startOffset: 0, endOffset: 97 }
  }
};
