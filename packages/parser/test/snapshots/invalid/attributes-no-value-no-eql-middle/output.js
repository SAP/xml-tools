module.exports = {
  cst: {
    name: "document",
    children: {
      element: [
        {
          name: "element",
          children: {
            OPEN: [
              { image: "<", startOffset: 0, endOffset: 0, tokenType: "OPEN" }
            ],
            Name: [
              { image: "note", startOffset: 1, endOffset: 4, tokenType: "Name" }
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
                      tokenType: "Name"
                    }
                  ],
                  EQUALS: [
                    {
                      image: "=",
                      startOffset: 11,
                      endOffset: 11,
                      tokenType: "EQUALS"
                    }
                  ],
                  STRING: [
                    {
                      image: '"666"',
                      startOffset: 12,
                      endOffset: 16,
                      tokenType: "STRING"
                    }
                  ]
                },
                location: { startOffset: 6, endOffset: 16 }
              },
              {
                name: "attribute",
                children: {
                  Name: [
                    {
                      image: "attr2",
                      startOffset: 18,
                      endOffset: 22,
                      tokenType: "Name"
                    }
                  ]
                },
                location: { startOffset: 18, endOffset: 22 },
                recoveredNode: true
              },
              {
                name: "attribute",
                children: {
                  Name: [
                    {
                      image: "attr3",
                      startOffset: 24,
                      endOffset: 28,
                      tokenType: "Name"
                    }
                  ],
                  EQUALS: [
                    {
                      image: "=",
                      startOffset: 29,
                      endOffset: 29,
                      tokenType: "EQUALS"
                    }
                  ],
                  STRING: [
                    {
                      image: '"111"',
                      startOffset: 30,
                      endOffset: 34,
                      tokenType: "STRING"
                    }
                  ]
                },
                location: { startOffset: 24, endOffset: 34 }
              }
            ],
            START_CLOSE: [
              { image: ">", startOffset: 36, endOffset: 36, tokenType: "CLOSE" }
            ],
            content: [
              {
                name: "content",
                children: {},
                location: { startOffset: null, endOffset: null }
              }
            ],
            SLASH_OPEN: [
              {
                image: "</",
                startOffset: 37,
                endOffset: 38,
                tokenType: "SLASH_OPEN"
              }
            ],
            END_NAME: [
              {
                image: "note",
                startOffset: 39,
                endOffset: 42,
                tokenType: "Name"
              }
            ],
            END: [
              { image: ">", startOffset: 43, endOffset: 43, tokenType: "CLOSE" }
            ]
          },
          location: { startOffset: 0, endOffset: 43 }
        }
      ],
      misc: [
        {
          name: "misc",
          children: {
            SEA_WS: [
              {
                image: "\n",
                startOffset: 44,
                endOffset: 44,
                tokenType: "SEA_WS"
              }
            ]
          },
          location: { startOffset: 44, endOffset: 44 }
        }
      ]
    },
    location: { startOffset: 0, endOffset: 44 }
  }
};
