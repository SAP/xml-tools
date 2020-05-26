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
            START_CLOSE: [
              { image: ">", startOffset: 5, endOffset: 5, tokenType: "CLOSE" },
            ],
            content: [
              {
                name: "content",
                children: {
                  chardata: [
                    {
                      name: "chardata",
                      children: {
                        SEA_WS: [
                          {
                            image: "\n    ",
                            startOffset: 6,
                            endOffset: 10,
                            tokenType: "SEA_WS",
                          },
                        ],
                      },
                      location: { startOffset: 6, endOffset: 10 },
                    },
                    {
                      name: "chardata",
                      children: {
                        SEA_WS: [
                          {
                            image: "\n",
                            startOffset: 57,
                            endOffset: 57,
                            tokenType: "SEA_WS",
                          },
                        ],
                      },
                      location: { startOffset: 57, endOffset: 57 },
                    },
                  ],
                  CData: [
                    {
                      image: "<![CDATA[<greeting>Hello, world!</greeting>]]>",
                      startOffset: 11,
                      endOffset: 56,
                      tokenType: "CData",
                    },
                  ],
                },
                location: { startOffset: 6, endOffset: 57 },
              },
            ],
            SLASH_OPEN: [
              {
                image: "</",
                startOffset: 58,
                endOffset: 59,
                tokenType: "SLASH_OPEN",
              },
            ],
            END_NAME: [
              {
                image: "note",
                startOffset: 60,
                endOffset: 63,
                tokenType: "Name",
              },
            ],
            END: [
              {
                image: ">",
                startOffset: 64,
                endOffset: 64,
                tokenType: "CLOSE",
              },
            ],
          },
          location: { startOffset: 0, endOffset: 64 },
        },
      ],
      misc: [
        {
          name: "misc",
          children: {
            SEA_WS: [
              {
                image: "\n",
                startOffset: 65,
                endOffset: 65,
                tokenType: "SEA_WS",
              },
            ],
          },
          location: { startOffset: 65, endOffset: 65 },
        },
      ],
    },
    location: { startOffset: 0, endOffset: 65 },
  },
};
