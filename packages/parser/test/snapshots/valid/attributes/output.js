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
                      image: "_attr2",
                      startOffset: 18,
                      endOffset: 23,
                      tokenType: "Name"
                    }
                  ],
                  EQUALS: [
                    {
                      image: "=",
                      startOffset: 24,
                      endOffset: 24,
                      tokenType: "EQUALS"
                    }
                  ],
                  STRING: [
                    {
                      image: '"333"',
                      startOffset: 25,
                      endOffset: 29,
                      tokenType: "STRING"
                    }
                  ]
                },
                location: { startOffset: 18, endOffset: 29 }
              }
            ],
            START_CLOSE: [
              { image: ">", startOffset: 30, endOffset: 30, tokenType: "CLOSE" }
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
                startOffset: 31,
                endOffset: 32,
                tokenType: "SLASH_OPEN"
              }
            ],
            END_NAME: [
              {
                image: "note",
                startOffset: 33,
                endOffset: 36,
                tokenType: "Name"
              }
            ],
            END: [
              { image: ">", startOffset: 37, endOffset: 37, tokenType: "CLOSE" }
            ]
          },
          location: { startOffset: 0, endOffset: 37 }
        }
      ],
      misc: [
        {
          name: "misc",
          children: {
            SEA_WS: [
              {
                image: "\n",
                startOffset: 38,
                endOffset: 38,
                tokenType: "SEA_WS"
              }
            ]
          },
          location: { startOffset: 38, endOffset: 38 }
        }
      ]
    },
    location: { startOffset: 0, endOffset: 38 }
  }
};
