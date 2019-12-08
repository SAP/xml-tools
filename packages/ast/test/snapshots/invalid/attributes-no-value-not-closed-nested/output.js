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
              position: { startOffset: 18, endOffset: 28 },
              key: "attr1",
              value: "666",
              syntax: {
                key: { image: "attr1", startOffset: 18, endOffset: 22 },
                value: { image: '"666"', startOffset: 24, endOffset: 28 }
              }
            },
            {
              type: "XMLAttribute",
              position: { startOffset: 30, endOffset: 35 },
              key: "attr2",
              value: null,
              syntax: {
                key: { image: "attr2", startOffset: 30, endOffset: 34 }
              }
            }
          ],
          subElements: [],
          textContents: [],
          position: { startOffset: 10, endOffset: 35 },
          syntax: {
            openName: { image: "nested", startOffset: 11, endOffset: 16 },
            guessedAttributesRange: { startOffset: 18, endOffset: 40 }
          }
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
              position: { startOffset: 48, endOffset: 58 },
              text: "hello world"
            }
          ],
          position: { startOffset: 41, endOffset: 66 },
          syntax: {
            openName: { image: "nest2", startOffset: 42, endOffset: 46 },
            closeName: { image: "nest2", startOffset: 61, endOffset: 65 },
            openBody: { startOffset: 41, endOffset: 47 },
            closeBody: { startOffset: 59, endOffset: 66 },
            attributesRange: { startOffset: 48, endOffset: 46 }
          }
        },
        {
          type: "XMLElement",
          namespaces: [],
          name: "nested3",
          attributes: [
            {
              type: "XMLAttribute",
              position: { startOffset: 81, endOffset: 89 },
              key: "attr5",
              value: "1",
              syntax: {
                key: { image: "attr5", startOffset: 81, endOffset: 85 },
                value: { image: '"1"', startOffset: 87, endOffset: 89 }
              }
            }
          ],
          subElements: [],
          textContents: [
            {
              type: "XMLTextContent",
              position: { startOffset: 91, endOffset: 91 },
              text: " "
            }
          ],
          position: { startOffset: 72, endOffset: 101 },
          syntax: {
            openName: { image: "nested3", startOffset: 73, endOffset: 79 },
            closeName: { image: "nested3", startOffset: 94, endOffset: 100 },
            openBody: { startOffset: 72, endOffset: 90 },
            closeBody: { startOffset: 92, endOffset: 101 },
            attributesRange: { startOffset: 81, endOffset: 89 }
          }
        }
      ],
      textContents: [
        {
          type: "XMLTextContent",
          position: { startOffset: 5, endOffset: 9 },
          text: "\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 67, endOffset: 71 },
          text: "\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 102, endOffset: 102 },
          text: "\n"
        }
      ],
      position: { startOffset: 0, endOffset: 108 },
      syntax: {
        openName: { image: "top", startOffset: 1, endOffset: 3 },
        closeName: { image: "top", startOffset: 105, endOffset: 107 },
        openBody: { startOffset: 0, endOffset: 4 },
        closeBody: { startOffset: 103, endOffset: 108 },
        attributesRange: { startOffset: 5, endOffset: 3 }
      }
    },
    position: { startOffset: 0, endOffset: 109 }
  }
};
