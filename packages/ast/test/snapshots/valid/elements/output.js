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
              text: "Bill"
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
          name: "from",
          attributes: [],
          subElements: [],
          textContents: [
            {
              type: "XMLTextContent",
              position: { startOffset: 35, endOffset: 37 },
              text: "Tim"
            }
          ],
          position: { startOffset: 29, endOffset: 44 },
          syntax: {
            openName: { image: "from", startOffset: 30, endOffset: 33 },
            openBody: { startOffset: 29, endOffset: 34 },
            closeName: { image: "from", startOffset: 40, endOffset: 43 }
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
          position: { startOffset: 45, endOffset: 45 },
          text: "\n"
        }
      ],
      position: { startOffset: 0, endOffset: 52 },
      syntax: {
        openName: { image: "note", startOffset: 1, endOffset: 4 },
        openBody: { startOffset: 0, endOffset: 5 },
        closeName: { image: "note", startOffset: 48, endOffset: 51 }
      }
    },
    position: { startOffset: 0, endOffset: 53 }
  }
};
