module.exports = {
  cst: {
    name: "document",
    children: {
      docTypeDecl: [
        {
          name: "docTypeDecl",
          children: {
            DocType: [
              {
                image: "<!DOCTYPE",
                startOffset: 0,
                endOffset: 8,
                tokenType: "DocType"
              }
            ],
            Name: [
              {
                image: "greeting",
                startOffset: 10,
                endOffset: 17,
                tokenType: "Name"
              }
            ],
            externalID: [
              {
                name: "externalID",
                children: {
                  System: [
                    {
                      image: "SYSTEM",
                      startOffset: 19,
                      endOffset: 24,
                      tokenType: "Name"
                    }
                  ],
                  SystemLiteral: [
                    {
                      image: '"hello.dtd"',
                      startOffset: 26,
                      endOffset: 36,
                      tokenType: "STRING"
                    }
                  ]
                },
                location: { startOffset: 19, endOffset: 36 }
              }
            ],
            CLOSE: [
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
        },
        {
          name: "misc",
          children: {
            SEA_WS: [
              {
                image: "\n",
                startOffset: 52,
                endOffset: 52,
                tokenType: "SEA_WS"
              }
            ]
          },
          location: { startOffset: 52, endOffset: 52 }
        }
      ],
      element: [
        {
          name: "element",
          children: {
            OPEN: [
              { image: "<", startOffset: 39, endOffset: 39, tokenType: "OPEN" }
            ],
            Name: [
              {
                image: "note",
                startOffset: 40,
                endOffset: 43,
                tokenType: "Name"
              }
            ],
            START_CLOSE: [
              { image: ">", startOffset: 44, endOffset: 44, tokenType: "CLOSE" }
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
                startOffset: 45,
                endOffset: 46,
                tokenType: "SLASH_OPEN"
              }
            ],
            END_NAME: [
              {
                image: "note",
                startOffset: 47,
                endOffset: 50,
                tokenType: "Name"
              }
            ],
            END: [
              { image: ">", startOffset: 51, endOffset: 51, tokenType: "CLOSE" }
            ]
          },
          location: { startOffset: 39, endOffset: 51 }
        }
      ]
    },
    location: { startOffset: 0, endOffset: 52 }
  }
};
