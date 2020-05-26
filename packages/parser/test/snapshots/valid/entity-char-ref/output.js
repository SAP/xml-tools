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
                            image: "\n    ",
                            startOffset: 15,
                            endOffset: 19,
                            tokenType: "SEA_WS",
                          },
                        ],
                      },
                      location: { startOffset: 15, endOffset: 19 },
                    },
                    {
                      name: "chardata",
                      children: {
                        SEA_WS: [
                          {
                            image: "\n    ",
                            startOffset: 27,
                            endOffset: 31,
                            tokenType: "SEA_WS",
                          },
                        ],
                      },
                      location: { startOffset: 27, endOffset: 31 },
                    },
                    {
                      name: "chardata",
                      children: {
                        SEA_WS: [
                          {
                            image: "\n",
                            startOffset: 48,
                            endOffset: 48,
                            tokenType: "SEA_WS",
                          },
                        ],
                      },
                      location: { startOffset: 48, endOffset: 48 },
                    },
                  ],
                  reference: [
                    {
                      name: "reference",
                      children: {
                        EntityRef: [
                          {
                            image: "&to;",
                            startOffset: 11,
                            endOffset: 14,
                            tokenType: "EntityRef",
                          },
                        ],
                      },
                      location: { startOffset: 11, endOffset: 14 },
                    },
                    {
                      name: "reference",
                      children: {
                        CharRef: [
                          {
                            image: "&#1234;",
                            startOffset: 20,
                            endOffset: 26,
                            tokenType: "CharRef",
                          },
                        ],
                      },
                      location: { startOffset: 20, endOffset: 26 },
                    },
                  ],
                  element: [
                    {
                      name: "element",
                      children: {
                        OPEN: [
                          {
                            image: "<",
                            startOffset: 32,
                            endOffset: 32,
                            tokenType: "OPEN",
                          },
                        ],
                        Name: [
                          {
                            image: "from",
                            startOffset: 33,
                            endOffset: 36,
                            tokenType: "Name",
                          },
                        ],
                        START_CLOSE: [
                          {
                            image: ">",
                            startOffset: 37,
                            endOffset: 37,
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
                                    TEXT: [
                                      {
                                        image: "Tim",
                                        startOffset: 38,
                                        endOffset: 40,
                                        tokenType: "TEXT",
                                      },
                                    ],
                                  },
                                  location: { startOffset: 38, endOffset: 40 },
                                },
                              ],
                            },
                            location: { startOffset: 38, endOffset: 40 },
                          },
                        ],
                        SLASH_OPEN: [
                          {
                            image: "</",
                            startOffset: 41,
                            endOffset: 42,
                            tokenType: "SLASH_OPEN",
                          },
                        ],
                        END_NAME: [
                          {
                            image: "from",
                            startOffset: 43,
                            endOffset: 46,
                            tokenType: "Name",
                          },
                        ],
                        END: [
                          {
                            image: ">",
                            startOffset: 47,
                            endOffset: 47,
                            tokenType: "CLOSE",
                          },
                        ],
                      },
                      location: { startOffset: 32, endOffset: 47 },
                    },
                  ],
                },
                location: { startOffset: 6, endOffset: 48 },
              },
            ],
            SLASH_OPEN: [
              {
                image: "</",
                startOffset: 49,
                endOffset: 50,
                tokenType: "SLASH_OPEN",
              },
            ],
            END_NAME: [
              {
                image: "note",
                startOffset: 51,
                endOffset: 54,
                tokenType: "Name",
              },
            ],
            END: [
              {
                image: ">",
                startOffset: 55,
                endOffset: 55,
                tokenType: "CLOSE",
              },
            ],
          },
          location: { startOffset: 0, endOffset: 55 },
        },
      ],
      misc: [
        {
          name: "misc",
          children: {
            SEA_WS: [
              {
                image: "\n",
                startOffset: 56,
                endOffset: 56,
                tokenType: "SEA_WS",
              },
            ],
          },
          location: { startOffset: 56, endOffset: 56 },
        },
      ],
    },
    location: { startOffset: 0, endOffset: 56 },
  },
};
