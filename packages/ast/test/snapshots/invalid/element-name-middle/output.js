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
              text: "bobi"
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
          name: "ad",
          attributes: [],
          subElements: [],
          textContents: [],
          position: { startOffset: 29 },
          syntax: { openName: { image: "ad", startOffset: 30 } }
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
              position: { startOffset: 43 },
              text: "john"
            }
          ],
          position: { startOffset: 37 },
          syntax: {
            openName: { image: "from", startOffset: 38 },
            closeName: { image: "from", startOffset: 49 }
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
              position: { startOffset: 65 },
              text: "ny"
            }
          ],
          position: { startOffset: 59 },
          syntax: {
            openName: { image: "city", startOffset: 60 },
            closeName: { image: "city", startOffset: 69 }
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
        {
          type: "XMLTextContent",
          position: { startOffset: 54 },
          text: "\n    "
        },
        { type: "XMLTextContent", position: { startOffset: 74 }, text: "\n" }
      ],
      position: { startOffset: 0 },
      syntax: {
        openName: { image: "note", startOffset: 1 },
        closeName: { image: "note", startOffset: 77 }
      }
    },
    position: { startOffset: 0 }
  }
};
