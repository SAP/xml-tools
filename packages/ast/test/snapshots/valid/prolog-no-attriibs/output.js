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
              position: { startOffset: 41 },
              text: "Bill"
            }
          ],
          position: { startOffset: 37 },
          syntax: {
            openName: { image: "to", startOffset: 38 },
            closeName: { image: "to", startOffset: 47 }
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
              position: { startOffset: 73 },
              text: "Tim"
            }
          ],
          position: { startOffset: 67 },
          syntax: {
            openName: { image: "from", startOffset: 68 },
            closeName: { image: "from", startOffset: 78 }
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
          position: { startOffset: 31 },
          text: "\r\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 50 },
          text: "\r\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 56 },
          text: "hello\r\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 83 },
          text: "\r\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 89 },
          text: "world\r\n"
        }
      ],
      position: { startOffset: 0 },
      syntax: {
        openName: { image: "note", startOffset: 1 },
        closeName: { image: "note", startOffset: 98 }
      }
    },
    position: { startOffset: 0 }
  }
};
