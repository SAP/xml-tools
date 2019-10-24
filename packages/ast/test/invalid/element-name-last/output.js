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
              position: { startOffset: 16 },
              text: "bobi"
            }
          ],
          position: { startOffset: 12 },
          syntax: {
            openName: { image: "to", startOffset: 13 },
            closeName: { image: "to", startOffset: 22 }
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
              position: { startOffset: 37 },
              text: "john"
            }
          ],
          position: { startOffset: 31 },
          syntax: {
            openName: { image: "from", startOffset: 32 },
            closeName: { image: "from", startOffset: 43 }
          }
        },
        {
          type: "XMLElement",
          namespaces: [],
          name: "ad",
          attributes: [],
          subElements: [],
          textContents: [],
          position: { startOffset: 54 },
          syntax: { openName: { image: "ad", startOffset: 55 } }
        }
      ],
      textContents: [
        {
          type: "XMLTextContent",
          position: { startOffset: 6 },
          text: "\r\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 25 },
          text: "\r\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 48 },
          text: "\r\n    "
        }
      ],
      position: { startOffset: 0 },
      syntax: {
        openName: { image: "note", startOffset: 1 },
        closeName: { image: "note", startOffset: 61 }
      }
    },
    position: { startOffset: 0 }
  }
};
