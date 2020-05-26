module.exports = {
  cst: {
    name: "document",
    children: {
      misc: [
        {
          name: "misc",
          children: {
            SEA_WS: [
              {
                image: "\n",
                startOffset: 0,
                endOffset: 0,
                tokenType: "SEA_WS",
              },
            ],
          },
          location: { startOffset: 0, endOffset: 0 },
        },
        {
          name: "misc",
          children: {
            SEA_WS: [
              {
                image: "\n",
                startOffset: 144,
                endOffset: 144,
                tokenType: "SEA_WS",
              },
            ],
          },
          location: { startOffset: 144, endOffset: 144 },
        },
      ],
      element: [
        {
          name: "element",
          children: {
            OPEN: [
              { image: "<", startOffset: 1, endOffset: 1, tokenType: "OPEN" },
            ],
            Name: [
              {
                image: "f:table",
                startOffset: 2,
                endOffset: 8,
                tokenType: "Name",
              },
            ],
            attribute: [
              {
                name: "attribute",
                children: {
                  Name: [
                    {
                      image: "xmlns:f",
                      startOffset: 10,
                      endOffset: 16,
                      tokenType: "Name",
                    },
                  ],
                  EQUALS: [
                    {
                      image: "=",
                      startOffset: 17,
                      endOffset: 17,
                      tokenType: "EQUALS",
                    },
                  ],
                  STRING: [
                    {
                      image: '"https://blah.com/furniture"',
                      startOffset: 18,
                      endOffset: 45,
                      tokenType: "STRING",
                    },
                  ],
                },
                location: { startOffset: 10, endOffset: 45 },
              },
            ],
            START_CLOSE: [
              {
                image: ">",
                startOffset: 46,
                endOffset: 46,
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
                            startOffset: 47,
                            endOffset: 51,
                            tokenType: "SEA_WS",
                          },
                        ],
                      },
                      location: { startOffset: 47, endOffset: 51 },
                    },
                    {
                      name: "chardata",
                      children: {
                        SEA_WS: [
                          {
                            image: "\n    ",
                            startOffset: 79,
                            endOffset: 83,
                            tokenType: "SEA_WS",
                          },
                        ],
                      },
                      location: { startOffset: 79, endOffset: 83 },
                    },
                    {
                      name: "chardata",
                      children: {
                        SEA_WS: [
                          {
                            image: "\n    ",
                            startOffset: 105,
                            endOffset: 109,
                            tokenType: "SEA_WS",
                          },
                        ],
                      },
                      location: { startOffset: 105, endOffset: 109 },
                    },
                    {
                      name: "chardata",
                      children: {
                        SEA_WS: [
                          {
                            image: "\n",
                            startOffset: 133,
                            endOffset: 133,
                            tokenType: "SEA_WS",
                          },
                        ],
                      },
                      location: { startOffset: 133, endOffset: 133 },
                    },
                  ],
                  element: [
                    {
                      name: "element",
                      children: {
                        OPEN: [
                          {
                            image: "<",
                            startOffset: 52,
                            endOffset: 52,
                            tokenType: "OPEN",
                          },
                        ],
                        Name: [
                          {
                            image: "f:name",
                            startOffset: 53,
                            endOffset: 58,
                            tokenType: "Name",
                          },
                        ],
                        START_CLOSE: [
                          {
                            image: ">",
                            startOffset: 59,
                            endOffset: 59,
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
                                        image: "Some Chair",
                                        startOffset: 60,
                                        endOffset: 69,
                                        tokenType: "TEXT",
                                      },
                                    ],
                                  },
                                  location: { startOffset: 60, endOffset: 69 },
                                },
                              ],
                            },
                            location: { startOffset: 60, endOffset: 69 },
                          },
                        ],
                        SLASH_OPEN: [
                          {
                            image: "</",
                            startOffset: 70,
                            endOffset: 71,
                            tokenType: "SLASH_OPEN",
                          },
                        ],
                        END_NAME: [
                          {
                            image: "f:name",
                            startOffset: 72,
                            endOffset: 77,
                            tokenType: "Name",
                          },
                        ],
                        END: [
                          {
                            image: ">",
                            startOffset: 78,
                            endOffset: 78,
                            tokenType: "CLOSE",
                          },
                        ],
                      },
                      location: { startOffset: 52, endOffset: 78 },
                    },
                    {
                      name: "element",
                      children: {
                        OPEN: [
                          {
                            image: "<",
                            startOffset: 84,
                            endOffset: 84,
                            tokenType: "OPEN",
                          },
                        ],
                        Name: [
                          {
                            image: "f:width",
                            startOffset: 85,
                            endOffset: 91,
                            tokenType: "Name",
                          },
                        ],
                        START_CLOSE: [
                          {
                            image: ">",
                            startOffset: 92,
                            endOffset: 92,
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
                                        image: "50",
                                        startOffset: 93,
                                        endOffset: 94,
                                        tokenType: "TEXT",
                                      },
                                    ],
                                  },
                                  location: { startOffset: 93, endOffset: 94 },
                                },
                              ],
                            },
                            location: { startOffset: 93, endOffset: 94 },
                          },
                        ],
                        SLASH_OPEN: [
                          {
                            image: "</",
                            startOffset: 95,
                            endOffset: 96,
                            tokenType: "SLASH_OPEN",
                          },
                        ],
                        END_NAME: [
                          {
                            image: "f:width",
                            startOffset: 97,
                            endOffset: 103,
                            tokenType: "Name",
                          },
                        ],
                        END: [
                          {
                            image: ">",
                            startOffset: 104,
                            endOffset: 104,
                            tokenType: "CLOSE",
                          },
                        ],
                      },
                      location: { startOffset: 84, endOffset: 104 },
                    },
                    {
                      name: "element",
                      children: {
                        OPEN: [
                          {
                            image: "<",
                            startOffset: 110,
                            endOffset: 110,
                            tokenType: "OPEN",
                          },
                        ],
                        Name: [
                          {
                            image: "f:length",
                            startOffset: 111,
                            endOffset: 118,
                            tokenType: "Name",
                          },
                        ],
                        START_CLOSE: [
                          {
                            image: ">",
                            startOffset: 119,
                            endOffset: 119,
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
                                        image: "67",
                                        startOffset: 120,
                                        endOffset: 121,
                                        tokenType: "TEXT",
                                      },
                                    ],
                                  },
                                  location: {
                                    startOffset: 120,
                                    endOffset: 121,
                                  },
                                },
                              ],
                            },
                            location: { startOffset: 120, endOffset: 121 },
                          },
                        ],
                        SLASH_OPEN: [
                          {
                            image: "</",
                            startOffset: 122,
                            endOffset: 123,
                            tokenType: "SLASH_OPEN",
                          },
                        ],
                        END_NAME: [
                          {
                            image: "f:length",
                            startOffset: 124,
                            endOffset: 131,
                            tokenType: "Name",
                          },
                        ],
                        END: [
                          {
                            image: ">",
                            startOffset: 132,
                            endOffset: 132,
                            tokenType: "CLOSE",
                          },
                        ],
                      },
                      location: { startOffset: 110, endOffset: 132 },
                    },
                  ],
                },
                location: { startOffset: 47, endOffset: 133 },
              },
            ],
            SLASH_OPEN: [
              {
                image: "</",
                startOffset: 134,
                endOffset: 135,
                tokenType: "SLASH_OPEN",
              },
            ],
            END_NAME: [
              {
                image: "f:table",
                startOffset: 136,
                endOffset: 142,
                tokenType: "Name",
              },
            ],
            END: [
              {
                image: ">",
                startOffset: 143,
                endOffset: 143,
                tokenType: "CLOSE",
              },
            ],
          },
          location: { startOffset: 1, endOffset: 143 },
        },
      ],
    },
    location: { startOffset: 0, endOffset: 144 },
  },
};
