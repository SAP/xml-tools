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
          position: { startOffset: 11 },
          key: "xmlns:f",
          value: null,
          syntax: { key: { image: "xmlns:f", startOffset: 11 } }
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
              position: { startOffset: 34 },
              text: "Some Chair"
            }
          ],
          position: { startOffset: 26 },
          syntax: {
            openName: { image: "f:name", startOffset: 27 },
            closeName: { image: "f:name", startOffset: 46 }
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
              position: { startOffset: 68 },
              text: "50"
            }
          ],
          position: { startOffset: 59 },
          syntax: {
            openName: { image: "f:width", startOffset: 60 },
            closeName: { image: "f:width", startOffset: 72 }
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
              position: { startOffset: 96 },
              text: "67"
            }
          ],
          position: { startOffset: 86 },
          syntax: {
            openName: { image: "f:length", startOffset: 87 },
            closeName: { image: "f:length", startOffset: 100 }
          },
          ns: "f"
        }
      ],
      textContents: [
        {
          type: "XMLTextContent",
          position: { startOffset: 20 },
          text: "\r\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 53 },
          text: "\r\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 80 },
          text: "\r\n    "
        },
        { type: "XMLTextContent", position: { startOffset: 109 }, text: "\r\n" }
      ],
      position: { startOffset: 2 },
      syntax: {
        openName: { image: "f:table", startOffset: 3 },
        closeName: { image: "f:table", startOffset: 113 }
      },
      ns: "f"
    },
    position: { startOffset: 0 }
  }
};
