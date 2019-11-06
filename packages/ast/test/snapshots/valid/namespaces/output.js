module.exports = {
  ast: {
    type: "XMLDocument",
    rootElement: {
      type: "XMLElement",
      namespaces: [{ prefix: "f", uri: "https://blah.com/furniture" }],
      name: "table",
      attributes: [
        {
          type: "XMLAttribute",
          position: { startOffset: 10, endOffset: 45 },
          key: "xmlns:f",
          value: "https://blah.com/furniture",
          syntax: {
            key: { image: "xmlns:f", startOffset: 10, endOffset: 16 },
            value: {
              image: '"https://blah.com/furniture"',
              startOffset: 18,
              endOffset: 45
            }
          }
        }
      ],
      subElements: [
        {
          type: "XMLElement",
          namespaces: [{ prefix: "f", uri: "https://blah.com/furniture" }],
          name: "name",
          attributes: [],
          subElements: [],
          textContents: [
            {
              type: "XMLTextContent",
              position: { startOffset: 60, endOffset: 69 },
              text: "Some Chair"
            }
          ],
          position: { startOffset: 52, endOffset: 78 },
          syntax: {
            openName: { image: "f:name", startOffset: 53, endOffset: 58 },
            openBody: { startOffset: 52, endOffset: 59 },
            closeName: { image: "f:name", startOffset: 72, endOffset: 77 }
          },
          ns: "f"
        },
        {
          type: "XMLElement",
          namespaces: [{ prefix: "f", uri: "https://blah.com/furniture" }],
          name: "width",
          attributes: [],
          subElements: [],
          textContents: [
            {
              type: "XMLTextContent",
              position: { startOffset: 93, endOffset: 94 },
              text: "50"
            }
          ],
          position: { startOffset: 84, endOffset: 104 },
          syntax: {
            openName: { image: "f:width", startOffset: 85, endOffset: 91 },
            openBody: { startOffset: 84, endOffset: 92 },
            closeName: { image: "f:width", startOffset: 97, endOffset: 103 }
          },
          ns: "f"
        },
        {
          type: "XMLElement",
          namespaces: [{ prefix: "f", uri: "https://blah.com/furniture" }],
          name: "length",
          attributes: [],
          subElements: [],
          textContents: [
            {
              type: "XMLTextContent",
              position: { startOffset: 120, endOffset: 121 },
              text: "67"
            }
          ],
          position: { startOffset: 110, endOffset: 132 },
          syntax: {
            openName: { image: "f:length", startOffset: 111, endOffset: 118 },
            openBody: { startOffset: 110, endOffset: 119 },
            closeName: { image: "f:length", startOffset: 124, endOffset: 131 }
          },
          ns: "f"
        }
      ],
      textContents: [
        {
          type: "XMLTextContent",
          position: { startOffset: 47, endOffset: 51 },
          text: "\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 79, endOffset: 83 },
          text: "\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 105, endOffset: 109 },
          text: "\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 133, endOffset: 133 },
          text: "\n"
        }
      ],
      position: { startOffset: 1, endOffset: 143 },
      syntax: {
        openName: { image: "f:table", startOffset: 2, endOffset: 8 },
        openBody: { startOffset: 1, endOffset: 46 },
        closeName: { image: "f:table", startOffset: 136, endOffset: 142 }
      },
      ns: "f"
    },
    position: { startOffset: 0, endOffset: 144 }
  }
};
