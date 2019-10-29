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
              position: { startOffset: 15 },
              text: "Bill"
            }
          ],
          position: { startOffset: 11 },
          syntax: {
            openName: { image: "to", startOffset: 12 },
            closeName: { image: "to", startOffset: 21 }
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
              position: { startOffset: 35 },
              text: "Tim"
            }
          ],
          position: { startOffset: 29 },
          syntax: {
            openName: { image: "from", startOffset: 30 },
            closeName: { image: "from", startOffset: 40 }
          }
        }
      ],
      textContents: [
        {
          type: "XMLTextContent",
          position: { startOffset: 6 },
          text: "\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 24 },
          text: "\n    "
        },
        { type: "XMLTextContent", position: { startOffset: 45 }, text: "\n" }
      ],
      position: { startOffset: 0 },
      syntax: {
        openName: { image: "note", startOffset: 1 },
        closeName: { image: "note", startOffset: 48 }
      }
    },
    position: { startOffset: 0 }
  }
};
