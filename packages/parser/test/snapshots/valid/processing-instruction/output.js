module.exports = {
  cst: {
    name: "document",
    children: {
      misc: [
        {
          name: "misc",
          children: {
            PROCESSING_INSTRUCTION: [
              {
                image:
                  '<?xml-stylesheet type="text/xsl" href="/Content/Glossary/main.xsl"?>',
                startOffset: 0,
                endOffset: 67,
                tokenType: "PROCESSING_INSTRUCTION",
              },
            ],
          },
          location: { startOffset: 0, endOffset: 67 },
        },
        {
          name: "misc",
          children: {
            SEA_WS: [
              {
                image: "\n",
                startOffset: 68,
                endOffset: 68,
                tokenType: "SEA_WS",
              },
            ],
          },
          location: { startOffset: 68, endOffset: 68 },
        },
        {
          name: "misc",
          children: {
            SEA_WS: [
              {
                image: "\n",
                startOffset: 156,
                endOffset: 156,
                tokenType: "SEA_WS",
              },
            ],
          },
          location: { startOffset: 156, endOffset: 156 },
        },
      ],
      element: [
        {
          name: "element",
          children: {
            OPEN: [
              { image: "<", startOffset: 69, endOffset: 69, tokenType: "OPEN" },
            ],
            Name: [
              {
                image: "note",
                startOffset: 70,
                endOffset: 73,
                tokenType: "Name",
              },
            ],
            START_CLOSE: [
              {
                image: ">",
                startOffset: 74,
                endOffset: 74,
                tokenType: "CLOSE",
              },
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
                            startOffset: 75,
                            endOffset: 79,
                            tokenType: "SEA_WS",
                          },
                        ],
                      },
                      location: { startOffset: 75, endOffset: 79 },
                    },
                    {
                      name: "chardata",
                      children: {
                        SEA_WS: [
                          {
                            image: "\n",
                            startOffset: 148,
                            endOffset: 148,
                            tokenType: "SEA_WS",
                          },
                        ],
                      },
                      location: { startOffset: 148, endOffset: 148 },
                    },
                  ],
                  PROCESSING_INSTRUCTION: [
                    {
                      image:
                        '<?xml-stylesheet type="text/xsl" href="/Content/Glossary/main.xsl"?>',
                      startOffset: 80,
                      endOffset: 147,
                      tokenType: "PROCESSING_INSTRUCTION",
                    },
                  ],
                },
                location: { startOffset: 75, endOffset: 148 },
              },
            ],
            SLASH_OPEN: [
              {
                image: "</",
                startOffset: 149,
                endOffset: 150,
                tokenType: "SLASH_OPEN",
              },
            ],
            END_NAME: [
              {
                image: "note",
                startOffset: 151,
                endOffset: 154,
                tokenType: "Name",
              },
            ],
            END: [
              {
                image: ">",
                startOffset: 155,
                endOffset: 155,
                tokenType: "CLOSE",
              },
            ],
          },
          location: { startOffset: 69, endOffset: 155 },
        },
      ],
    },
    location: { startOffset: 0, endOffset: 156 },
  },
};
