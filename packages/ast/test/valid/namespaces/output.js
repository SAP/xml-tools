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
          position: { startOffset: 11 },
          key: "xmlns:f",
          value: "https://blah.com/furniture",
          syntax: {
            key: { image: "xmlns:f", startOffset: 11 },
            value: { image: '"https://blah.com/furniture"', startOffset: 19 }
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
              position: { startOffset: 62 },
              text: "Some Chair"
            }
          ],
          position: { startOffset: 54 },
          syntax: {
            openName: { image: "f:name", startOffset: 55 },
            closeName: { image: "f:name", startOffset: 74 }
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
              position: { startOffset: 96 },
              text: "50"
            }
          ],
          position: { startOffset: 87 },
          syntax: {
            openName: { image: "f:width", startOffset: 88 },
            closeName: { image: "f:width", startOffset: 100 }
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
              position: { startOffset: 124 },
              text: "67"
            }
          ],
          position: { startOffset: 114 },
          syntax: {
            openName: { image: "f:length", startOffset: 115 },
            closeName: { image: "f:length", startOffset: 128 }
          },
          ns: "f"
        }
      ],
      textContents: [
        {
          type: "XMLTextContent",
          position: { startOffset: 48 },
          text: "\r\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 81 },
          text: "\r\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 108 },
          text: "\r\n    "
        },
        { type: "XMLTextContent", position: { startOffset: 137 }, text: "\r\n" }
      ],
      position: { startOffset: 2 },
      syntax: {
        openName: { image: "f:table", startOffset: 3 },
        closeName: { image: "f:table", startOffset: 141 }
      },
      ns: "f"
    },
    position: { startOffset: 0 }
  }
};
