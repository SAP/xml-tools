module.exports = {
  ast: {
    type: "XMLDocument",
    rootElement: {
      type: "XMLElement",
      namespaces: {},
      name: "table",
      attributes: [
        {
          type: "XMLAttribute",
          position: { startOffset: 10, endOffset: 17 },
          key: "xmlns:f",
          value: null,
          syntax: { key: { image: "xmlns:f", startOffset: 10, endOffset: 16 } }
        }
      ],
      subElements: [
        {
          type: "XMLElement",
          namespaces: {},
          name: "name",
          attributes: [],
          subElements: [],
          textContents: [
            {
              type: "XMLTextContent",
              position: { startOffset: 32, endOffset: 41 },
              text: "Some Chair"
            }
          ],
          position: { startOffset: 24, endOffset: 50 },
          syntax: {
            openName: { image: "f:name", startOffset: 25, endOffset: 30 },
            closeName: { image: "f:name", startOffset: 44, endOffset: 49 },
            openBody: { startOffset: 24, endOffset: 31 },
            closeBody: { startOffset: 42, endOffset: 50 },
            attributesRange: { startOffset: 32, endOffset: 30 }
          },
          ns: "f"
        },
        {
          type: "XMLElement",
          namespaces: {},
          name: "width",
          attributes: [],
          subElements: [],
          textContents: [
            {
              type: "XMLTextContent",
              position: { startOffset: 65, endOffset: 66 },
              text: "50"
            }
          ],
          position: { startOffset: 56, endOffset: 76 },
          syntax: {
            openName: { image: "f:width", startOffset: 57, endOffset: 63 },
            closeName: { image: "f:width", startOffset: 69, endOffset: 75 },
            openBody: { startOffset: 56, endOffset: 64 },
            closeBody: { startOffset: 67, endOffset: 76 },
            attributesRange: { startOffset: 65, endOffset: 63 }
          },
          ns: "f"
        },
        {
          type: "XMLElement",
          namespaces: {},
          name: "length",
          attributes: [],
          subElements: [],
          textContents: [
            {
              type: "XMLTextContent",
              position: { startOffset: 92, endOffset: 93 },
              text: "67"
            }
          ],
          position: { startOffset: 82, endOffset: 104 },
          syntax: {
            openName: { image: "f:length", startOffset: 83, endOffset: 90 },
            closeName: { image: "f:length", startOffset: 96, endOffset: 103 },
            openBody: { startOffset: 82, endOffset: 91 },
            closeBody: { startOffset: 94, endOffset: 104 },
            attributesRange: { startOffset: 92, endOffset: 90 }
          },
          ns: "f"
        }
      ],
      textContents: [
        {
          type: "XMLTextContent",
          position: { startOffset: 19, endOffset: 23 },
          text: "\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 51, endOffset: 55 },
          text: "\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 77, endOffset: 81 },
          text: "\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 105, endOffset: 105 },
          text: "\n"
        }
      ],
      position: { startOffset: 1, endOffset: 115 },
      syntax: {
        openName: { image: "f:table", startOffset: 2, endOffset: 8 },
        closeName: { image: "f:table", startOffset: 108, endOffset: 114 },
        openBody: { startOffset: 1, endOffset: 18 },
        closeBody: { startOffset: 106, endOffset: 115 },
        attributesRange: { startOffset: 10, endOffset: 17 }
      },
      ns: "f"
    },
    position: { startOffset: 0, endOffset: 116 }
  }
};
