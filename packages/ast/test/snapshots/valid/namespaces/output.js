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
          position: { startOffset: 10 },
          key: "xmlns:f",
          value: "https://blah.com/furniture",
          syntax: {
            key: { image: "xmlns:f", startOffset: 10 },
            value: { image: '"https://blah.com/furniture"', startOffset: 18 }
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
              position: { startOffset: 60 },
              text: "Some Chair"
            }
          ],
          position: { startOffset: 52 },
          syntax: {
            openName: { image: "f:name", startOffset: 53 },
            closeName: { image: "f:name", startOffset: 72 }
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
              position: { startOffset: 93 },
              text: "50"
            }
          ],
          position: { startOffset: 84 },
          syntax: {
            openName: { image: "f:width", startOffset: 85 },
            closeName: { image: "f:width", startOffset: 97 }
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
              position: { startOffset: 120 },
              text: "67"
            }
          ],
          position: { startOffset: 110 },
          syntax: {
            openName: { image: "f:length", startOffset: 111 },
            closeName: { image: "f:length", startOffset: 124 }
          },
          ns: "f"
        }
      ],
      textContents: [
        {
          type: "XMLTextContent",
          position: { startOffset: 47 },
          text: "\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 79 },
          text: "\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 105 },
          text: "\n    "
        },
        { type: "XMLTextContent", position: { startOffset: 133 }, text: "\n" }
      ],
      position: { startOffset: 1 },
      syntax: {
        openName: { image: "f:table", startOffset: 2 },
        closeName: { image: "f:table", startOffset: 136 }
      },
      ns: "f"
    },
    position: { startOffset: 0 }
  }
};
