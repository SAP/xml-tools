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
              text: "Bill"
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
              text: "Tim"
            }
          ],
          position: { startOffset: 31 },
          syntax: {
            openName: { image: "from", startOffset: 32 },
            closeName: { image: "from", startOffset: 42 }
          }
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
        { type: "XMLTextContent", position: { startOffset: 47 }, text: "\r\n" }
      ],
      position: { startOffset: 0 },
      syntax: {
        openName: { image: "note", startOffset: 1 },
        closeName: { image: "note", startOffset: 51 }
      }
    },
    position: { startOffset: 0 }
  }
};
