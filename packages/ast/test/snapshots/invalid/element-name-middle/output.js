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
            closeName: { image: "to", startOffset: 21, endOffset: 22 },
            openBody: { startOffset: 11, endOffset: 14 },
            closeBody: { startOffset: 19, endOffset: 23 },
            attributesRange: { startOffset: 15, endOffset: 13 }
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
          syntax: {
            openName: { image: "ad", startOffset: 30, endOffset: 31 },
            guessedAttributesRange: { startOffset: 33, endOffset: 36 }
          }
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
            closeName: { image: "from", startOffset: 49, endOffset: 52 },
            openBody: { startOffset: 37, endOffset: 42 },
            closeBody: { startOffset: 47, endOffset: 53 },
            attributesRange: { startOffset: 43, endOffset: 41 }
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
            closeName: { image: "city", startOffset: 69, endOffset: 72 },
            openBody: { startOffset: 59, endOffset: 64 },
            closeBody: { startOffset: 67, endOffset: 73 },
            attributesRange: { startOffset: 65, endOffset: 63 }
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
        closeName: { image: "note", startOffset: 77, endOffset: 80 },
        openBody: { startOffset: 0, endOffset: 5 },
        closeBody: { startOffset: 75, endOffset: 81 },
        attributesRange: { startOffset: 6, endOffset: 4 }
      }
    },
    position: { startOffset: 0, endOffset: 82 }
  }
};
