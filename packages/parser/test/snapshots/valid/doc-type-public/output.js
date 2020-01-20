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
                image: "task",
                startOffset: 10,
                endOffset: 13,
                tokenType: "Name"
              }
            ],
            externalID: [
              {
                name: "externalID",
                children: {
                  Public: [
                    {
                      image: "PUBLIC",
                      startOffset: 15,
                      endOffset: 20,
                      tokenType: "Name"
                    }
                  ],
                  PubIDLiteral: [
                    {
                      image: '"-//OASIS//DTD DITA Task//EN"',
                      startOffset: 22,
                      endOffset: 50,
                      tokenType: "STRING"
                    }
                  ],
                  SystemLiteral: [
                    {
                      image: '"task.dtd"',
                      startOffset: 52,
                      endOffset: 61,
                      tokenType: "STRING"
                    }
                  ]
                },
                location: { startOffset: 15, endOffset: 61 }
              }
            ],
            CLOSE: [
              { image: ">", startOffset: 62, endOffset: 62, tokenType: "CLOSE" }
            ]
          },
          location: { startOffset: 0, endOffset: 62 }
        }
      ],
      misc: [
        {
          name: "misc",
          children: {
            SEA_WS: [
              {
                image: "\n",
                startOffset: 63,
                endOffset: 63,
                tokenType: "SEA_WS"
              }
            ]
          },
          location: { startOffset: 63, endOffset: 63 }
        },
        {
          name: "misc",
          children: {
            SEA_WS: [
              {
                image: "\n",
                startOffset: 77,
                endOffset: 77,
                tokenType: "SEA_WS"
              }
            ]
          },
          location: { startOffset: 77, endOffset: 77 }
        }
      ],
      element: [
        {
          name: "element",
          children: {
            OPEN: [
              { image: "<", startOffset: 64, endOffset: 64, tokenType: "OPEN" }
            ],
            Name: [
              {
                image: "note",
                startOffset: 65,
                endOffset: 68,
                tokenType: "Name"
              }
            ],
            START_CLOSE: [
              { image: ">", startOffset: 69, endOffset: 69, tokenType: "CLOSE" }
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
                startOffset: 70,
                endOffset: 71,
                tokenType: "SLASH_OPEN"
              }
            ],
            END_NAME: [
              {
                image: "note",
                startOffset: 72,
                endOffset: 75,
                tokenType: "Name"
              }
            ],
            END: [
              { image: ">", startOffset: 76, endOffset: 76, tokenType: "CLOSE" }
            ]
          },
          location: { startOffset: 64, endOffset: 76 }
        }
      ]
    },
    location: { startOffset: 0, endOffset: 77 }
  }
};
