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
                image: "<!--\n    \n    Misc Comment #1-->",
                startOffset: 0,
                endOffset: 31,
                tokenType: "Comment"
              }
            ]
          },
          location: { startOffset: 0, endOffset: 31 }
        },
        {
          name: "misc",
          children: {
            SEA_WS: [
              {
                image: "\n",
                startOffset: 32,
                endOffset: 32,
                tokenType: "SEA_WS"
              }
            ]
          },
          location: { startOffset: 32, endOffset: 32 }
        },
        {
          name: "misc",
          children: {
            SEA_WS: [
              {
                image: "\n",
                startOffset: 102,
                endOffset: 102,
                tokenType: "SEA_WS"
              }
            ]
          },
          location: { startOffset: 102, endOffset: 102 }
        },
        {
          name: "misc",
          children: {
            Comment: [
              {
                image: "<!--Misc Comment\n\n#2\n-->",
                startOffset: 103,
                endOffset: 126,
                tokenType: "Comment"
              }
            ]
          },
          location: { startOffset: 103, endOffset: 126 }
        },
        {
          name: "misc",
          children: {
            SEA_WS: [
              {
                image: "\n",
                startOffset: 127,
                endOffset: 127,
                tokenType: "SEA_WS"
              }
            ]
          },
          location: { startOffset: 127, endOffset: 127 }
        }
      ],
      element: [
        {
          name: "element",
          children: {
            OPEN: [
              { image: "<", startOffset: 33, endOffset: 33, tokenType: "OPEN" }
            ],
            Name: [
              {
                image: "note",
                startOffset: 34,
                endOffset: 37,
                tokenType: "Name"
              }
            ],
            START_CLOSE: [
              { image: ">", startOffset: 38, endOffset: 38, tokenType: "CLOSE" }
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
                            startOffset: 39,
                            endOffset: 43,
                            tokenType: "SEA_WS"
                          }
                        ]
                      },
                      location: { startOffset: 39, endOffset: 43 }
                    },
                    {
                      name: "chardata",
                      children: {
                        SEA_WS: [
                          {
                            image: "\n    ",
                            startOffset: 76,
                            endOffset: 80,
                            tokenType: "SEA_WS"
                          }
                        ]
                      },
                      location: { startOffset: 76, endOffset: 80 }
                    },
                    {
                      name: "chardata",
                      children: {
                        SEA_WS: [
                          {
                            image: "\n",
                            startOffset: 94,
                            endOffset: 94,
                            tokenType: "SEA_WS"
                          }
                        ]
                      },
                      location: { startOffset: 94, endOffset: 94 }
                    }
                  ],
                  Comment: [
                    {
                      image: "<!--Content \n    \n    Comment-->",
                      startOffset: 44,
                      endOffset: 75,
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
                            startOffset: 81,
                            endOffset: 81,
                            tokenType: "OPEN"
                          }
                        ],
                        Name: [
                          {
                            image: "to",
                            startOffset: 82,
                            endOffset: 83,
                            tokenType: "Name"
                          }
                        ],
                        START_CLOSE: [
                          {
                            image: ">",
                            startOffset: 84,
                            endOffset: 84,
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
                                        startOffset: 85,
                                        endOffset: 88,
                                        tokenType: "TEXT"
                                      }
                                    ]
                                  },
                                  location: { startOffset: 85, endOffset: 88 }
                                }
                              ]
                            },
                            location: { startOffset: 85, endOffset: 88 }
                          }
                        ],
                        SLASH_OPEN: [
                          {
                            image: "</",
                            startOffset: 89,
                            endOffset: 90,
                            tokenType: "SLASH_OPEN"
                          }
                        ],
                        END_NAME: [
                          {
                            image: "to",
                            startOffset: 91,
                            endOffset: 92,
                            tokenType: "Name"
                          }
                        ],
                        END: [
                          {
                            image: ">",
                            startOffset: 93,
                            endOffset: 93,
                            tokenType: "CLOSE"
                          }
                        ]
                      },
                      location: { startOffset: 81, endOffset: 93 }
                    }
                  ]
                },
                location: { startOffset: 39, endOffset: 94 }
              }
            ],
            SLASH_OPEN: [
              {
                image: "</",
                startOffset: 95,
                endOffset: 96,
                tokenType: "SLASH_OPEN"
              }
            ],
            END_NAME: [
              {
                image: "note",
                startOffset: 97,
                endOffset: 100,
                tokenType: "Name"
              }
            ],
            END: [
              {
                image: ">",
                startOffset: 101,
                endOffset: 101,
                tokenType: "CLOSE"
              }
            ]
          },
          location: { startOffset: 33, endOffset: 101 }
        }
      ]
    },
    location: { startOffset: 0, endOffset: 127 }
  }
};
