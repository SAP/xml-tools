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
                tokenType: "XMLDeclOpen",
              },
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
                      tokenType: "Name",
                    },
                  ],
                  EQUALS: [
                    {
                      image: "=",
                      startOffset: 13,
                      endOffset: 13,
                      tokenType: "EQUALS",
                    },
                  ],
                  STRING: [
                    {
                      image: '"1.0"',
                      startOffset: 14,
                      endOffset: 18,
                      tokenType: "STRING",
                    },
                  ],
                },
                location: { startOffset: 6, endOffset: 18 },
              },
              {
                name: "attribute",
                children: {
                  Name: [
                    {
                      image: "encoding",
                      startOffset: 20,
                      endOffset: 27,
                      tokenType: "Name",
                    },
                  ],
                  EQUALS: [
                    {
                      image: "=",
                      startOffset: 28,
                      endOffset: 28,
                      tokenType: "EQUALS",
                    },
                  ],
                  STRING: [
                    {
                      image: '"UTF-8"',
                      startOffset: 29,
                      endOffset: 35,
                      tokenType: "STRING",
                    },
                  ],
                },
                location: { startOffset: 20, endOffset: 35 },
              },
            ],
            SPECIAL_CLOSE: [
              {
                image: "?>",
                startOffset: 36,
                endOffset: 37,
                tokenType: "SPECIAL_CLOSE",
              },
            ],
          },
          location: { startOffset: 0, endOffset: 37 },
        },
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
                tokenType: "SEA_WS",
              },
            ],
          },
          location: { startOffset: 38, endOffset: 38 },
        },
        {
          name: "misc",
          children: {
            SEA_WS: [
              {
                image: "\n",
                startOffset: 52,
                endOffset: 52,
                tokenType: "SEA_WS",
              },
            ],
          },
          location: { startOffset: 52, endOffset: 52 },
        },
      ],
      element: [
        {
          name: "element",
          children: {
            OPEN: [
              { image: "<", startOffset: 39, endOffset: 39, tokenType: "OPEN" },
            ],
            Name: [
              {
                image: "note",
                startOffset: 40,
                endOffset: 43,
                tokenType: "Name",
              },
            ],
            START_CLOSE: [
              {
                image: ">",
                startOffset: 44,
                endOffset: 44,
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
                startOffset: 45,
                endOffset: 46,
                tokenType: "SLASH_OPEN",
              },
            ],
            END_NAME: [
              {
                image: "note",
                startOffset: 47,
                endOffset: 50,
                tokenType: "Name",
              },
            ],
            END: [
              {
                image: ">",
                startOffset: 51,
                endOffset: 51,
                tokenType: "CLOSE",
              },
            ],
          },
          location: { startOffset: 39, endOffset: 51 },
        },
      ],
    },
    location: { startOffset: 0, endOffset: 52 },
  },
};
