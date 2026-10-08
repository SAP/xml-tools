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
                            image: "\n    ",
                            startOffset: 42,
                            endOffset: 46,
                            tokenType: "SEA_WS",
                          },
                        ],
                      },
                      location: { startOffset: 42, endOffset: 46 },
                    },
                    {
                      name: "chardata",
                      children: {
                        SEA_WS: [
                          {
                            image: "\n",
                            startOffset: 63,
                            endOffset: 63,
                            tokenType: "SEA_WS",
                          },
                        ],
                      },
                      location: { startOffset: 63, endOffset: 63 },
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
                    {
                      name: "reference",
                      children: {
                        CharRef: [
                          {
                            image: "&#x123ABC;",
                            startOffset: 32,
                            endOffset: 41,
                            tokenType: "CharRef",
                          },
                        ],
                      },
                      location: { startOffset: 32, endOffset: 41 },
                    },
                  ],
                  element: [
                    {
                      name: "element",
                      children: {
                        OPEN: [
                          {
                            image: "<",
                            startOffset: 47,
                            endOffset: 47,
                            tokenType: "OPEN",
                          },
                        ],
                        Name: [
                          {
                            image: "from",
                            startOffset: 48,
                            endOffset: 51,
                            tokenType: "Name",
                          },
                        ],
                        START_CLOSE: [
                          {
                            image: ">",
                            startOffset: 52,
                            endOffset: 52,
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
                                        startOffset: 53,
                                        endOffset: 55,
                                        tokenType: "TEXT",
                                      },
                                    ],
                                  },
                                  location: { startOffset: 53, endOffset: 55 },
                                },
                              ],
                            },
                            location: { startOffset: 53, endOffset: 55 },
                          },
                        ],
                        SLASH_OPEN: [
                          {
                            image: "</",
                            startOffset: 56,
                            endOffset: 57,
                            tokenType: "SLASH_OPEN",
                          },
                        ],
                        END_NAME: [
                          {
                            image: "from",
                            startOffset: 58,
                            endOffset: 61,
                            tokenType: "Name",
                          },
                        ],
                        END: [
                          {
                            image: ">",
                            startOffset: 62,
                            endOffset: 62,
                            tokenType: "CLOSE",
                          },
                        ],
                      },
                      location: { startOffset: 47, endOffset: 62 },
                    },
                  ],
                },
                location: { startOffset: 6, endOffset: 63 },
              },
            ],
            SLASH_OPEN: [
              {
                image: "</",
                startOffset: 64,
                endOffset: 65,
                tokenType: "SLASH_OPEN",
              },
            ],
            END_NAME: [
              {
                image: "note",
                startOffset: 66,
                endOffset: 69,
                tokenType: "Name",
              },
            ],
            END: [
              {
                image: ">",
                startOffset: 70,
                endOffset: 70,
                tokenType: "CLOSE",
              },
            ],
          },
          location: { startOffset: 0, endOffset: 70 },
        },
      ],
      misc: [
        {
          name: "misc",
          children: {
            SEA_WS: [
              {
                image: "\n",
                startOffset: 71,
                endOffset: 71,
                tokenType: "SEA_WS",
              },
            ],
          },
          location: { startOffset: 71, endOffset: 71 },
        },
      ],
    },
    location: { startOffset: 0, endOffset: 71 },
  },
};
