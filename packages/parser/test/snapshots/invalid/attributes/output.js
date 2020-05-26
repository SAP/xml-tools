module.exports = {
  cst: {
    name: "document",
    children: {
      element: [
        {
          name: "element",
          children: {
            OPEN: [
              { image: "<", startOffset: 0, endOffset: 0, tokenType: "OPEN" },
            ],
            Name: [
              {
                image: "note",
                startOffset: 1,
                endOffset: 4,
                tokenType: "Name",
              },
            ],
            attribute: [
              {
                name: "attribute",
                children: {
                  Name: [
                    {
                      image: "attr1",
                      startOffset: 6,
                      endOffset: 10,
                      tokenType: "Name",
                    },
                  ],
                },
                location: { startOffset: 6, endOffset: 10 },
                recoveredNode: true,
              },
              {
                name: "attribute",
                children: {
                  Name: [
                    {
                      image: "attr2",
                      startOffset: 12,
                      endOffset: 16,
                      tokenType: "Name",
                    },
                  ],
                  EQUALS: [
                    {
                      image: "=",
                      startOffset: 17,
                      endOffset: 17,
                      tokenType: "EQUALS",
                    },
                  ],
                  STRING: [
                    {
                      image: '"333"',
                      startOffset: 18,
                      endOffset: 22,
                      tokenType: "STRING",
                    },
                  ],
                },
                location: { startOffset: 12, endOffset: 22 },
              },
            ],
            START_CLOSE: [
              {
                image: ">",
                startOffset: 23,
                endOffset: 23,
                tokenType: "CLOSE",
              },
            ],
            content: [
              {
                name: "content",
                children: {},
                location: { startOffset: null, endOffset: null },
              },
            ],
            SLASH_OPEN: [
              {
                image: "</",
                startOffset: 24,
                endOffset: 25,
                tokenType: "SLASH_OPEN",
              },
            ],
            END_NAME: [
              {
                image: "note",
                startOffset: 26,
                endOffset: 29,
                tokenType: "Name",
              },
            ],
            END: [
              {
                image: ">",
                startOffset: 30,
                endOffset: 30,
                tokenType: "CLOSE",
              },
            ],
          },
          location: { startOffset: 0, endOffset: 30 },
        },
      ],
      misc: [
        {
          name: "misc",
          children: {
            SEA_WS: [
              {
                image: "\n",
                startOffset: 31,
                endOffset: 31,
                tokenType: "SEA_WS",
              },
            ],
          },
          location: { startOffset: 31, endOffset: 31 },
        },
      ],
    },
    location: { startOffset: 0, endOffset: 31 },
  },
};
