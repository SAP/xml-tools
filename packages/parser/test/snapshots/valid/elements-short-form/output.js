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
                            startOffset: 47,
                            endOffset: 47,
                            tokenType: "SEA_WS",
                          },
                        ],
                      },
                      location: { startOffset: 47, endOffset: 47 },
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
                        attribute: [
                          {
                            name: "attribute",
                            children: {
                              Name: [
                                {
                                  image: "name",
                                  startOffset: 35,
                                  endOffset: 38,
                                  tokenType: "Name",
                                },
                              ],
                              EQUALS: [
                                {
                                  image: "=",
                                  startOffset: 39,
                                  endOffset: 39,
                                  tokenType: "EQUALS",
                                },
                              ],
                              STRING: [
                                {
                                  image: '"tim"',
                                  startOffset: 40,
                                  endOffset: 44,
                                  tokenType: "STRING",
                                },
                              ],
                            },
                            location: { startOffset: 35, endOffset: 44 },
                          },
                        ],
                        SLASH_CLOSE: [
                          {
                            image: "/>",
                            startOffset: 45,
                            endOffset: 46,
                            tokenType: "SLASH_CLOSE",
                          },
                        ],
                      },
                      location: { startOffset: 29, endOffset: 46 },
                    },
                  ],
                },
                location: { startOffset: 6, endOffset: 47 },
              },
            ],
            SLASH_OPEN: [
              {
                image: "</",
                startOffset: 48,
                endOffset: 49,
                tokenType: "SLASH_OPEN",
              },
            ],
            END_NAME: [
              {
                image: "note",
                startOffset: 50,
                endOffset: 53,
                tokenType: "Name",
              },
            ],
            END: [
              {
                image: ">",
                startOffset: 54,
                endOffset: 54,
                tokenType: "CLOSE",
              },
            ],
          },
          location: { startOffset: 0, endOffset: 54 },
        },
      ],
      misc: [
        {
          name: "misc",
          children: {
            SEA_WS: [
              {
                image: "\n",
                startOffset: 55,
                endOffset: 55,
                tokenType: "SEA_WS",
              },
            ],
          },
          location: { startOffset: 55, endOffset: 55 },
        },
      ],
    },
    location: { startOffset: 0, endOffset: 55 },
  },
};
