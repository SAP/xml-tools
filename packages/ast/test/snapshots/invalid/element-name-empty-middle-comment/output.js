module.exports = {
  ast: {
    type: "XMLDocument",
    rootElement: {
      type: "XMLElement",
      namespaces: [],
      name: "note",
      attributes: [],
      subElements: [
        {
          type: "XMLElement",
          namespaces: [],
          name: "to",
          attributes: [],
          subElements: [],
          textContents: [
            {
              type: "XMLTextContent",
              position: { startOffset: 15, endOffset: 18 },
              text: "bobi"
            }
          ],
          position: { startOffset: 11, endOffset: 23 },
          syntax: {
            openName: { image: "to", startOffset: 12, endOffset: 13 },
            openBody: { startOffset: 11, endOffset: 14 },
            closeName: { image: "to", startOffset: 21, endOffset: 22 }
          }
        },
        {
          type: "XMLElement",
          namespaces: [],
          name: null,
          attributes: [],
          subElements: [],
          textContents: [],
          position: { startOffset: 29, endOffset: 29 },
          syntax: {}
        },
        {
          type: "XMLElement",
          namespaces: [],
          name: "from",
          attributes: [],
          subElements: [],
          textContents: [
            {
              type: "XMLTextContent",
              position: { startOffset: 70, endOffset: 73 },
              text: "john"
            }
          ],
          position: { startOffset: 64, endOffset: 80 },
          syntax: {
            openName: { image: "from", startOffset: 65, endOffset: 68 },
            openBody: { startOffset: 64, endOffset: 69 },
            closeName: { image: "from", startOffset: 76, endOffset: 79 }
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
          position: { startOffset: 24, endOffset: 28 },
          text: "\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 81, endOffset: 81 },
          text: "\n"
        }
      ],
      position: { startOffset: 0, endOffset: 88 },
      syntax: {
        openName: { image: "note", startOffset: 1, endOffset: 4 },
        openBody: { startOffset: 0, endOffset: 5 },
        closeName: { image: "note", startOffset: 84, endOffset: 87 }
      }
    },
    position: { startOffset: 0, endOffset: 89 }
  }
};
