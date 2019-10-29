module.exports = {
  ast: {
    type: "XMLDocument",
    rootElement: {
      type: "XMLElement",
      namespaces: [],
      name: "table",
      attributes: [
        {
          type: "XMLAttribute",
          position: { startOffset: 10 },
          key: "xmlns:f",
          value: null,
          syntax: { key: { image: "xmlns:f", startOffset: 10 } }
        }
      ],
      subElements: [
        {
          type: "XMLElement",
          namespaces: [],
          name: "name",
          attributes: [],
          subElements: [],
          textContents: [
            {
              type: "XMLTextContent",
              position: { startOffset: 32 },
              text: "Some Chair"
            }
          ],
          position: { startOffset: 24 },
          syntax: {
            openName: { image: "f:name", startOffset: 25 },
            closeName: { image: "f:name", startOffset: 44 }
          },
          ns: "f"
        },
        {
          type: "XMLElement",
          namespaces: [],
          name: "width",
          attributes: [],
          subElements: [],
          textContents: [
            {
              type: "XMLTextContent",
              position: { startOffset: 65 },
              text: "50"
            }
          ],
          position: { startOffset: 56 },
          syntax: {
            openName: { image: "f:width", startOffset: 57 },
            closeName: { image: "f:width", startOffset: 69 }
          },
          ns: "f"
        },
        {
          type: "XMLElement",
          namespaces: [],
          name: "length",
          attributes: [],
          subElements: [],
          textContents: [
            {
              type: "XMLTextContent",
              position: { startOffset: 92 },
              text: "67"
            }
          ],
          position: { startOffset: 82 },
          syntax: {
            openName: { image: "f:length", startOffset: 83 },
            closeName: { image: "f:length", startOffset: 96 }
          },
          ns: "f"
        }
      ],
      textContents: [
        {
          type: "XMLTextContent",
          position: { startOffset: 19 },
          text: "\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 51 },
          text: "\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 77 },
          text: "\n    "
        },
        { type: "XMLTextContent", position: { startOffset: 105 }, text: "\n" }
      ],
      position: { startOffset: 1 },
      syntax: {
        openName: { image: "f:table", startOffset: 2 },
        closeName: { image: "f:table", startOffset: 108 }
      },
      ns: "f"
    },
    position: { startOffset: 0 }
  }
};
