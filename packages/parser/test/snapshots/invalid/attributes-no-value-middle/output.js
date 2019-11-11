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
                  ],
                  EQUALS: [
                    {
                      image: "=",
                      startOffset: 23,
                      endOffset: 23,
                      tokenType: "EQUALS"
                    }
                  ],
                  STRING: [
                    {
                      image: "",
                      startOffset: null,
                      endOffset: null,
                      tokenType: "STRING",
                      isInsertedInRecovery: true
                    }
                  ]
                },
                location: { startOffset: 18, endOffset: 23 }
              },
              {
                name: "attribute",
                children: {
                  Name: [
                    {
                      image: "attr3",
                      startOffset: 25,
                      endOffset: 29,
                      tokenType: "Name"
                    }
                  ],
                  EQUALS: [
                    {
                      image: "=",
                      startOffset: 30,
                      endOffset: 30,
                      tokenType: "EQUALS"
                    }
                  ],
                  STRING: [
                    {
                      image: '"111"',
                      startOffset: 31,
                      endOffset: 35,
                      tokenType: "STRING"
                    }
                  ]
                },
                location: { startOffset: 25, endOffset: 35 }
              }
            ],
            START_CLOSE: [
              { image: ">", startOffset: 37, endOffset: 37, tokenType: "CLOSE" }
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
                startOffset: 38,
                endOffset: 39,
                tokenType: "SLASH_OPEN"
              }
            ],
            END_NAME: [
              {
                image: "note",
                startOffset: 40,
                endOffset: 43,
                tokenType: "Name"
              }
            ],
            END: [
              { image: ">", startOffset: 44, endOffset: 44, tokenType: "CLOSE" }
            ]
          },
          location: { startOffset: 0, endOffset: 44 }
        }
      ],
      misc: [
        {
          name: "misc",
          children: {
            SEA_WS: [
              {
                image: "\n",
                startOffset: 45,
                endOffset: 45,
                tokenType: "SEA_WS"
              }
            ]
          },
          location: { startOffset: 45, endOffset: 45 }
        }
      ]
    },
    location: { startOffset: 0, endOffset: 45 }
  }
};
