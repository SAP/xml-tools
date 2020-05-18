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
              position: { startOffset: 15, endOffset: 18 },
              text: "bobi"
            }
          ],
          position: { startOffset: 11, endOffset: 23 },
          syntax: {
            openName: { image: "to", startOffset: 12, endOffset: 13 },
            closeName: { image: "to", startOffset: 21, endOffset: 22 },
            isSelfClosing: false,
            openBody: { startOffset: 11, endOffset: 14 },
            closeBody: { startOffset: 19, endOffset: 23 },
            attributesRange: { startOffset: 15, endOffset: 13 }
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
              position: { startOffset: 35, endOffset: 38 },
              text: "john"
            }
          ],
          position: { startOffset: 29, endOffset: 45 },
          syntax: {
            openName: { image: "from", startOffset: 30, endOffset: 33 },
            closeName: { image: "from", startOffset: 41, endOffset: 44 },
            isSelfClosing: false,
            openBody: { startOffset: 29, endOffset: 34 },
            closeBody: { startOffset: 39, endOffset: 45 },
            attributesRange: { startOffset: 35, endOffset: 33 }
          }
        },
        {
          type: "XMLElement",
          namespaces: {},
          name: "ad",
          attributes: [],
          subElements: [],
          textContents: [],
          position: { startOffset: 51, endOffset: 53 },
          syntax: {
            openName: { image: "ad", startOffset: 52, endOffset: 53 },
            guessedAttributesRange: { startOffset: 55, endOffset: 55 }
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
          position: { startOffset: 46, endOffset: 50 },
          text: "\n    "
        }
      ],
      position: { startOffset: 0, endOffset: 61 },
      syntax: {
        openName: { image: "note", startOffset: 1, endOffset: 4 },
        closeName: { image: "note", startOffset: 57, endOffset: 60 },
        isSelfClosing: false,
        openBody: { startOffset: 0, endOffset: 5 },
        closeBody: { startOffset: 55, endOffset: 61 },
        attributesRange: { startOffset: 6, endOffset: 4 }
      }
    },
    position: { startOffset: 0, endOffset: 62 }
  }
};
