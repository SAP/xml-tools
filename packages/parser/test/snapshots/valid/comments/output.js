module.exports = {
  cst: {
    name: "document",
    children: {
      misc: [
        {
          name: "misc",
          children: {
            Comment: [
              {
                image: "<!--Misc Comment #1-->",
                startOffset: 0,
                endOffset: 21,
                tokenType: "Comment"
              }
            ]
          },
          location: { startOffset: 0, endOffset: 21 }
        },
        {
          name: "misc",
          children: {
            SEA_WS: [
              {
                image: "\n",
                startOffset: 22,
                endOffset: 22,
                tokenType: "SEA_WS"
              }
            ]
          },
          location: { startOffset: 22, endOffset: 22 }
        },
        {
          name: "misc",
          children: {
            SEA_WS: [
              {
                image: "\n",
                startOffset: 82,
                endOffset: 82,
                tokenType: "SEA_WS"
              }
            ]
          },
          location: { startOffset: 82, endOffset: 82 }
        },
        {
          name: "misc",
          children: {
            Comment: [
              {
                image: "<!--Misc Comment #2-->",
                startOffset: 83,
                endOffset: 104,
                tokenType: "Comment"
              }
            ]
          },
          location: { startOffset: 83, endOffset: 104 }
        },
        {
          name: "misc",
          children: {
            SEA_WS: [
              {
                image: "\n",
                startOffset: 105,
                endOffset: 105,
                tokenType: "SEA_WS"
              }
            ]
          },
          location: { startOffset: 105, endOffset: 105 }
        }
      ],
      element: [
        {
          name: "element",
          children: {
            OPEN: [
              { image: "<", startOffset: 23, endOffset: 23, tokenType: "OPEN" }
            ],
            Name: [
              {
                image: "note",
                startOffset: 24,
                endOffset: 27,
                tokenType: "Name"
              }
            ],
            START_CLOSE: [
              { image: ">", startOffset: 28, endOffset: 28, tokenType: "CLOSE" }
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
                            startOffset: 29,
                            endOffset: 33,
                            tokenType: "SEA_WS"
                          }
                        ]
                      },
                      location: { startOffset: 29, endOffset: 33 }
                    },
                    {
                      name: "chardata",
                      children: {
                        SEA_WS: [
                          {
                            image: "\n    ",
                            startOffset: 56,
                            endOffset: 60,
                            tokenType: "SEA_WS"
                          }
                        ]
                      },
                      location: { startOffset: 56, endOffset: 60 }
                    },
                    {
                      name: "chardata",
                      children: {
                        SEA_WS: [
                          {
                            image: "\n",
                            startOffset: 74,
                            endOffset: 74,
                            tokenType: "SEA_WS"
                          }
                        ]
                      },
                      location: { startOffset: 74, endOffset: 74 }
                    }
                  ],
                  Comment: [
                    {
                      image: "<!--Content Comment-->",
                      startOffset: 34,
                      endOffset: 55,
                      tokenType: "Comment"
                    }
                  ],
                  element: [
                    {
                      name: "element",
                      children: {
                        OPEN: [
                          {
                            image: "<",
                            startOffset: 61,
                            endOffset: 61,
                            tokenType: "OPEN"
                          }
                        ],
                        Name: [
                          {
                            image: "to",
                            startOffset: 62,
                            endOffset: 63,
                            tokenType: "Name"
                          }
                        ],
                        START_CLOSE: [
                          {
                            image: ">",
                            startOffset: 64,
                            endOffset: 64,
                            tokenType: "CLOSE"
                          }
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
                                        startOffset: 65,
                                        endOffset: 68,
                                        tokenType: "TEXT"
                                      }
                                    ]
                                  },
                                  location: { startOffset: 65, endOffset: 68 }
                                }
                              ]
                            },
                            location: { startOffset: 65, endOffset: 68 }
                          }
                        ],
                        SLASH_OPEN: [
                          {
                            image: "</",
                            startOffset: 69,
                            endOffset: 70,
                            tokenType: "SLASH_OPEN"
                          }
                        ],
                        END_NAME: [
                          {
                            image: "to",
                            startOffset: 71,
                            endOffset: 72,
                            tokenType: "Name"
                          }
                        ],
                        END: [
                          {
                            image: ">",
                            startOffset: 73,
                            endOffset: 73,
                            tokenType: "CLOSE"
                          }
                        ]
                      },
                      location: { startOffset: 61, endOffset: 73 }
                    }
                  ]
                },
                location: { startOffset: 29, endOffset: 74 }
              }
            ],
            SLASH_OPEN: [
              {
                image: "</",
                startOffset: 75,
                endOffset: 76,
                tokenType: "SLASH_OPEN"
              }
            ],
            END_NAME: [
              {
                image: "note",
                startOffset: 77,
                endOffset: 80,
                tokenType: "Name"
              }
            ],
            END: [
              { image: ">", startOffset: 81, endOffset: 81, tokenType: "CLOSE" }
            ]
          },
          location: { startOffset: 23, endOffset: 81 }
        }
      ]
    },
    location: { startOffset: 0, endOffset: 105 }
  }
};
