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
              position: { startOffset: 39 },
              text: "Bill"
            }
          ],
          position: { startOffset: 35 },
          syntax: {
            openName: { image: "to", startOffset: 36 },
            closeName: { image: "to", startOffset: 45 }
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
              position: { startOffset: 69 },
              text: "Tim"
            }
          ],
          position: { startOffset: 63 },
          syntax: {
            openName: { image: "from", startOffset: 64 },
            closeName: { image: "from", startOffset: 74 }
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
          position: { startOffset: 30 },
          text: "\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 48 },
          text: "\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 53 },
          text: "hello\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 79 },
          text: "\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 84 },
          text: "world\n"
        }
      ],
      position: { startOffset: 0 },
      syntax: {
        openName: { image: "note", startOffset: 1 },
        closeName: { image: "note", startOffset: 92 }
      }
    },
    position: { startOffset: 0 }
  }
};
