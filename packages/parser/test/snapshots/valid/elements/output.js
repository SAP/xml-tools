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
                            startOffset: 24,
                            endOffset: 28,
                            tokenType: "SEA_WS",
                          },
                        ],
                      },
                      location: { startOffset: 24, endOffset: 28 },
                    },
                    {
                      name: "chardata",
                      children: {
                        SEA_WS: [
                          {
                            image: "\n",
                            startOffset: 45,
                            endOffset: 45,
                            tokenType: "SEA_WS",
                          },
                        ],
                      },
                      location: { startOffset: 45, endOffset: 45 },
                    },
                  ],
                  element: [
                    {
                      name: "element",
                      children: {
                        OPEN: [
                          {
                            image: "<",
                            startOffset: 11,
                            endOffset: 11,
                            tokenType: "OPEN",
                          },
                        ],
                        Name: [
                          {
                            image: "to",
                            startOffset: 12,
                            endOffset: 13,
                            tokenType: "Name",
                          },
                        ],
                        START_CLOSE: [
                          {
                            image: ">",
                            startOffset: 14,
                            endOffset: 14,
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
                                        image: "Bill",
                                        startOffset: 15,
                                        endOffset: 18,
                                        tokenType: "TEXT",
                                      },
                                    ],
                                  },
                                  location: { startOffset: 15, endOffset: 18 },
                                },
                              ],
                            },
                            location: { startOffset: 15, endOffset: 18 },
                          },
                        ],
                        SLASH_OPEN: [
                          {
                            image: "</",
                            startOffset: 19,
                            endOffset: 20,
                            tokenType: "SLASH_OPEN",
                          },
                        ],
                        END_NAME: [
                          {
                            image: "to",
                            startOffset: 21,
                            endOffset: 22,
                            tokenType: "Name",
                          },
                        ],
                        END: [
                          {
                            image: ">",
                            startOffset: 23,
                            endOffset: 23,
                            tokenType: "CLOSE",
                          },
                        ],
                      },
                      location: { startOffset: 11, endOffset: 23 },
                    },
                    {
                      name: "element",
                      children: {
                        OPEN: [
                          {
                            image: "<",
                            startOffset: 29,
                            endOffset: 29,
                            tokenType: "OPEN",
                          },
                        ],
                        Name: [
                          {
                            image: "from",
                            startOffset: 30,
                            endOffset: 33,
                            tokenType: "Name",
                          },
                        ],
                        START_CLOSE: [
                          {
                            image: ">",
                            startOffset: 34,
                            endOffset: 34,
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
                                        startOffset: 35,
                                        endOffset: 37,
                                        tokenType: "TEXT",
                                      },
                                    ],
                                  },
                                  location: { startOffset: 35, endOffset: 37 },
                                },
                              ],
                            },
                            location: { startOffset: 35, endOffset: 37 },
                          },
                        ],
                        SLASH_OPEN: [
                          {
                            image: "</",
                            startOffset: 38,
                            endOffset: 39,
                            tokenType: "SLASH_OPEN",
                          },
                        ],
                        END_NAME: [
                          {
                            image: "from",
                            startOffset: 40,
                            endOffset: 43,
                            tokenType: "Name",
                          },
                        ],
                        END: [
                          {
                            image: ">",
                            startOffset: 44,
                            endOffset: 44,
                            tokenType: "CLOSE",
                          },
                        ],
                      },
                      location: { startOffset: 29, endOffset: 44 },
                    },
                  ],
                },
                location: { startOffset: 6, endOffset: 45 },
              },
            ],
            SLASH_OPEN: [
              {
                image: "</",
                startOffset: 46,
                endOffset: 47,
                tokenType: "SLASH_OPEN",
              },
            ],
            END_NAME: [
              {
                image: "note",
                startOffset: 48,
                endOffset: 51,
                tokenType: "Name",
              },
            ],
            END: [
              {
                image: ">",
                startOffset: 52,
                endOffset: 52,
                tokenType: "CLOSE",
              },
            ],
          },
          location: { startOffset: 0, endOffset: 52 },
        },
      ],
      misc: [
        {
          name: "misc",
          children: {
            SEA_WS: [
              {
                image: "\n",
                startOffset: 53,
                endOffset: 53,
                tokenType: "SEA_WS",
              },
            ],
          },
          location: { startOffset: 53, endOffset: 53 },
        },
      ],
    },
    location: { startOffset: 0, endOffset: 53 },
  },
};
