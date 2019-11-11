module.exports = {
  cst: {
    name: "document",
    children: {
      prolog: [
        {
          name: "prolog",
          children: {
            XMLDeclOpen: [
              {
                image: "<?xml ",
                startOffset: 0,
                endOffset: 5,
                tokenType: "XMLDeclOpen"
              }
            ],
            attribute: [
              {
                name: "attribute",
                children: {
                  Name: [
                    {
                      image: "version",
                      startOffset: 6,
                      endOffset: 12,
                      tokenType: "Name"
                    }
                  ],
                  EQUALS: [
                    {
                      image: "=",
                      startOffset: 13,
                      endOffset: 13,
                      tokenType: "EQUALS"
                    }
                  ],
                  STRING: [
                    {
                      image: '"1.0"',
                      startOffset: 14,
                      endOffset: 18,
                      tokenType: "STRING"
                    }
                  ]
                },
                location: { startOffset: 6, endOffset: 18 }
              },
              {
                name: "attribute",
                children: {
                  Name: [
                    {
                      image: "encoding",
                      startOffset: 20,
                      endOffset: 27,
                      tokenType: "Name"
                    }
                  ],
                  EQUALS: [
                    {
                      image: "=",
                      startOffset: 28,
                      endOffset: 28,
                      tokenType: "EQUALS"
                    }
                  ],
                  STRING: [
                    {
                      image: '"UTF-8"',
                      startOffset: 29,
                      endOffset: 35,
                      tokenType: "STRING"
                    }
                  ]
                },
                location: { startOffset: 20, endOffset: 35 }
              }
            ],
            SPECIAL_CLOSE: [
              {
                image: "?>",
                startOffset: 36,
                endOffset: 37,
                tokenType: "SPECIAL_CLOSE"
              }
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
                image: "\n\n",
                startOffset: 38,
                endOffset: 39,
                tokenType: "SEA_WS"
              }
            ]
          },
          location: { startOffset: 38, endOffset: 39 }
        }
      ],
      element: [
        {
          name: "element",
          children: {},
          location: { startOffset: null, endOffset: null },
          recoveredNode: true
        }
      ]
    },
    location: { startOffset: 0, endOffset: 39 },
    recoveredNode: true
  }
};
