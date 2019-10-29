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
              position: { startOffset: 18 },
              key: "attr1",
              value: "666",
              syntax: {
                key: { image: "attr1", startOffset: 18 },
                value: { image: '"666"', startOffset: 24 }
              }
            },
            {
              type: "XMLAttribute",
              position: { startOffset: 30 },
              key: "attr2",
              value: null,
              syntax: { key: { image: "attr2", startOffset: 30 } }
            }
          ],
          subElements: [],
          textContents: [],
          position: { startOffset: 10 },
          syntax: { openName: { image: "nested", startOffset: 11 } }
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
              position: { startOffset: 48 },
              text: "hello world"
            }
          ],
          position: { startOffset: 41 },
          syntax: {
            openName: { image: "nest2", startOffset: 42 },
            closeName: { image: "nest2", startOffset: 61 }
          }
        },
        {
          type: "XMLElement",
          namespaces: [],
          name: "nested3",
          attributes: [
            {
              type: "XMLAttribute",
              position: { startOffset: 81 },
              key: "attr5",
              value: "1",
              syntax: {
                key: { image: "attr5", startOffset: 81 },
                value: { image: '"1"', startOffset: 87 }
              }
            }
          ],
          subElements: [],
          textContents: [
            { type: "XMLTextContent", position: { startOffset: 91 }, text: " " }
          ],
          position: { startOffset: 72 },
          syntax: {
            openName: { image: "nested3", startOffset: 73 },
            closeName: { image: "nested3", startOffset: 94 }
          }
        }
      ],
      textContents: [
        {
          type: "XMLTextContent",
          position: { startOffset: 5 },
          text: "\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 67 },
          text: "\n    "
        },
        { type: "XMLTextContent", position: { startOffset: 102 }, text: "\n" }
      ],
      position: { startOffset: 0 },
      syntax: {
        openName: { image: "top", startOffset: 1 },
        closeName: { image: "top", startOffset: 105 }
      }
    },
    position: { startOffset: 0 }
  }
};
