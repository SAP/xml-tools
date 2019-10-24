module.exports = {
  ast: {
    type: "XMLDocument",
    rootElement: {
      type: "XMLElement",
      namespaces: [],
      name: "top",
      attributes: [],
      subElements: [
        {
          type: "XMLElement",
          namespaces: [],
          name: "nested",
          attributes: [
            {
              type: "XMLAttribute",
              position: { startOffset: 19 },
              key: "attr1",
              value: "666",
              syntax: {
                key: { image: "attr1", startOffset: 19 },
                value: { image: '"666"', startOffset: 25 }
              }
            },
            {
              type: "XMLAttribute",
              position: { startOffset: 31 },
              key: "attr2",
              value: null,
              syntax: { key: { image: "attr2", startOffset: 31 } }
            }
          ],
          subElements: [],
          textContents: [],
          position: { startOffset: 11 },
          syntax: { openName: { image: "nested", startOffset: 12 } }
        },
        {
          type: "XMLElement",
          namespaces: [],
          name: "nest2",
          attributes: [],
          subElements: [],
          textContents: [
            {
              type: "XMLTextContent",
              position: { startOffset: 50 },
              text: "hello world"
            }
          ],
          position: { startOffset: 43 },
          syntax: {
            openName: { image: "nest2", startOffset: 44 },
            closeName: { image: "nest2", startOffset: 63 }
          }
        },
        {
          type: "XMLElement",
          namespaces: [],
          name: "nested3",
          attributes: [
            {
              type: "XMLAttribute",
              position: { startOffset: 84 },
              key: "attr5",
              value: "1",
              syntax: {
                key: { image: "attr5", startOffset: 84 },
                value: { image: '"1"', startOffset: 90 }
              }
            }
          ],
          subElements: [],
          textContents: [
            { type: "XMLTextContent", position: { startOffset: 94 }, text: " " }
          ],
          position: { startOffset: 75 },
          syntax: {
            openName: { image: "nested3", startOffset: 76 },
            closeName: { image: "nested3", startOffset: 97 }
          }
        }
      ],
      textContents: [
        {
          type: "XMLTextContent",
          position: { startOffset: 5 },
          text: "\r\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 69 },
          text: "\r\n    "
        },
        { type: "XMLTextContent", position: { startOffset: 105 }, text: "\r\n" }
      ],
      position: { startOffset: 0 },
      syntax: {
        openName: { image: "top", startOffset: 1 },
        closeName: { image: "top", startOffset: 109 }
      }
    },
    position: { startOffset: 0 }
  }
};
