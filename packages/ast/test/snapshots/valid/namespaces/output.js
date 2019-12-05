module.exports = {
  ast: {
    type: "XMLDocument",
    rootElement: {
      type: "XMLElement",
      namespaces: [
        { uri: "https://blah.com/furniture", prefix: "f" },
        { uri: "https://blah.com/default" }
      ],
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
        },
        {
          type: "XMLAttribute",
          position: { startOffset: 47, endOffset: 78 },
          key: "xmlns",
          value: "https://blah.com/default",
          syntax: {
            key: { image: "xmlns", startOffset: 47, endOffset: 51 },
            value: {
              image: '"https://blah.com/default"',
              startOffset: 53,
              endOffset: 78
            }
          }
        }
      ],
      subElements: [
        {
          type: "XMLElement",
          namespaces: [
            { uri: "https://blah.com/furniture", prefix: "f" },
            { uri: "https://blah.com/default" }
          ],
          name: "name",
          attributes: [],
          subElements: [],
          textContents: [
            {
              type: "XMLTextContent",
              position: { startOffset: 93, endOffset: 102 },
              text: "Some Chair"
            }
          ],
          position: { startOffset: 85, endOffset: 111 },
          syntax: {
            openName: { image: "f:name", startOffset: 86, endOffset: 91 },
            closeName: { image: "f:name", startOffset: 105, endOffset: 110 },
            openBody: { startOffset: 85, endOffset: 92 },
            closeBody: { startOffset: 103, endOffset: 111 }
          },
          ns: "f"
        },
        {
          type: "XMLElement",
          namespaces: [
            { uri: "https://blah.com/furniture", prefix: "f" },
            { uri: "https://blah.com/default" }
          ],
          name: "width",
          attributes: [],
          subElements: [],
          textContents: [
            {
              type: "XMLTextContent",
              position: { startOffset: 126, endOffset: 127 },
              text: "50"
            }
          ],
          position: { startOffset: 117, endOffset: 137 },
          syntax: {
            openName: { image: "f:width", startOffset: 118, endOffset: 124 },
            closeName: { image: "f:width", startOffset: 130, endOffset: 136 },
            openBody: { startOffset: 117, endOffset: 125 },
            closeBody: { startOffset: 128, endOffset: 137 }
          },
          ns: "f"
        },
        {
          type: "XMLElement",
          namespaces: [
            { uri: "https://blah.com/furniture", prefix: "f" },
            { uri: "https://blah.com/default" }
          ],
          name: "length",
          attributes: [],
          subElements: [],
          textContents: [
            {
              type: "XMLTextContent",
              position: { startOffset: 153, endOffset: 154 },
              text: "67"
            }
          ],
          position: { startOffset: 143, endOffset: 165 },
          syntax: {
            openName: { image: "f:length", startOffset: 144, endOffset: 151 },
            closeName: { image: "f:length", startOffset: 157, endOffset: 164 },
            openBody: { startOffset: 143, endOffset: 152 },
            closeBody: { startOffset: 155, endOffset: 165 }
          },
          ns: "f"
        },
        {
          type: "XMLElement",
          namespaces: [
            { uri: "https://blah.com/furniture", prefix: "f" },
            { uri: "https://blah.com/default" }
          ],
          name: "description",
          attributes: [],
          subElements: [],
          textContents: [
            {
              type: "XMLTextContent",
              position: { startOffset: 184, endOffset: 195 },
              text: "Awsome Chair"
            }
          ],
          position: { startOffset: 171, endOffset: 209 },
          syntax: {
            openName: {
              image: "description",
              startOffset: 172,
              endOffset: 182
            },
            closeName: {
              image: "description",
              startOffset: 198,
              endOffset: 208
            },
            openBody: { startOffset: 171, endOffset: 183 },
            closeBody: { startOffset: 196, endOffset: 209 }
          }
        }
      ],
      textContents: [
        {
          type: "XMLTextContent",
          position: { startOffset: 80, endOffset: 84 },
          text: "\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 112, endOffset: 116 },
          text: "\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 138, endOffset: 142 },
          text: "\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 166, endOffset: 170 },
          text: "\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 210, endOffset: 210 },
          text: "\n"
        }
      ],
      position: { startOffset: 1, endOffset: 220 },
      syntax: {
        openName: { image: "f:table", startOffset: 2, endOffset: 8 },
        closeName: { image: "f:table", startOffset: 213, endOffset: 219 },
        openBody: { startOffset: 1, endOffset: 79 },
        closeBody: { startOffset: 211, endOffset: 220 }
      },
      ns: "f"
    },
    position: { startOffset: 0, endOffset: 221 }
  }
};
