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
          name: "ad",
          attributes: [],
          subElements: [],
          textContents: [],
          position: { startOffset: 29, endOffset: 31 },
          syntax: { openName: { image: "ad", startOffset: 30, endOffset: 31 } }
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
              position: { startOffset: 43, endOffset: 46 },
              text: "john"
            }
          ],
          position: { startOffset: 37, endOffset: 53 },
          syntax: {
            openName: { image: "from", startOffset: 38, endOffset: 41 },
            openBody: { startOffset: 37, endOffset: 42 },
            closeName: { image: "from", startOffset: 49, endOffset: 52 }
          }
        },
        {
          type: "XMLElement",
          namespaces: [],
          name: "city",
          attributes: [],
          subElements: [],
          textContents: [
            {
              type: "XMLTextContent",
              position: { startOffset: 65, endOffset: 66 },
              text: "ny"
            }
          ],
          position: { startOffset: 59, endOffset: 73 },
          syntax: {
            openName: { image: "city", startOffset: 60, endOffset: 63 },
            openBody: { startOffset: 59, endOffset: 64 },
            closeName: { image: "city", startOffset: 69, endOffset: 72 }
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
          position: { startOffset: 54, endOffset: 58 },
          text: "\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 74, endOffset: 74 },
          text: "\n"
        }
      ],
      position: { startOffset: 0, endOffset: 81 },
      syntax: {
        openName: { image: "note", startOffset: 1, endOffset: 4 },
        openBody: { startOffset: 0, endOffset: 5 },
        closeName: { image: "note", startOffset: 77, endOffset: 80 }
      }
    },
    position: { startOffset: 0, endOffset: 82 }
  }
};
