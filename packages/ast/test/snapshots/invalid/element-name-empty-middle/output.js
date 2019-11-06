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
              position: { startOffset: 41, endOffset: 44 },
              text: "john"
            }
          ],
          position: { startOffset: 35, endOffset: 51 },
          syntax: {
            openName: { image: "from", startOffset: 36, endOffset: 39 },
            openBody: { startOffset: 35, endOffset: 40 },
            closeName: { image: "from", startOffset: 47, endOffset: 50 }
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
          position: { startOffset: 52, endOffset: 52 },
          text: "\n"
        }
      ],
      position: { startOffset: 0, endOffset: 59 },
      syntax: {
        openName: { image: "note", startOffset: 1, endOffset: 4 },
        openBody: { startOffset: 0, endOffset: 5 },
        closeName: { image: "note", startOffset: 55, endOffset: 58 }
      }
    },
    position: { startOffset: 0, endOffset: 60 }
  }
};
