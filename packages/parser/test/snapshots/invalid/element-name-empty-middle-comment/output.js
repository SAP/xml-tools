module.exports = {
  cst: {
    name: "document",
    children: {
      element: [
        {
          name: "element",
          children: {
            OPEN: [
              { image: "<", startOffset: 0, endOffset: 0, tokenType: "OPEN" }
            ],
            Name: [
              { image: "note", startOffset: 1, endOffset: 4, tokenType: "Name" }
            ],
            START_CLOSE: [
              { image: ">", startOffset: 5, endOffset: 5, tokenType: "CLOSE" }
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
                            tokenType: "SEA_WS"
                          }
                        ]
                      },
                      location: { startOffset: 6, endOffset: 10 }
                    },
                    {
                      name: "chardata",
                      children: {
                        SEA_WS: [
                          {
                            image: "\n    ",
                            startOffset: 24,
                            endOffset: 28,
                            tokenType: "SEA_WS"
                          }
                        ]
                      },
                      location: { startOffset: 24, endOffset: 28 }
                    },
                    {
                      name: "chardata",
                      children: {
                        SEA_WS: [
                          {
                            image: "\n",
                            startOffset: 81,
                            endOffset: 81,
                            tokenType: "SEA_WS"
                          }
                        ]
                      },
                      location: { startOffset: 81, endOffset: 81 }
                    }
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
                            tokenType: "OPEN"
                          }
                        ],
                        Name: [
                          {
                            image: "to",
                            startOffset: 12,
                            endOffset: 13,
                            tokenType: "Name"
                          }
                        ],
                        START_CLOSE: [
                          {
                            image: ">",
                            startOffset: 14,
                            endOffset: 14,
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
                                        image: "bobi",
                                        startOffset: 15,
                                        endOffset: 18,
                                        tokenType: "TEXT"
                                      }
                                    ]
                                  },
                                  location: { startOffset: 15, endOffset: 18 }
                                }
                              ]
                            },
                            location: { startOffset: 15, endOffset: 18 }
                          }
                        ],
                        SLASH_OPEN: [
                          {
                            image: "</",
                            startOffset: 19,
                            endOffset: 20,
                            tokenType: "SLASH_OPEN"
                          }
                        ],
                        END_NAME: [
                          {
                            image: "to",
                            startOffset: 21,
                            endOffset: 22,
                            tokenType: "Name"
                          }
                        ],
                        END: [
                          {
                            image: ">",
                            startOffset: 23,
                            endOffset: 23,
                            tokenType: "CLOSE"
                          }
                        ]
                      },
                      location: { startOffset: 11, endOffset: 23 }
                    },
                    {
                      name: "element",
                      children: {
                        OPEN: [
                          {
                            image: "<",
                            startOffset: 29,
                            endOffset: 29,
                            tokenType: "OPEN"
                          }
                        ]
                      },
                      location: { startOffset: 29, endOffset: 29 },
                      recoveredNode: true
                    },
                    {
                      name: "element",
                      children: {
                        OPEN: [
                          {
                            image: "<",
                            startOffset: 64,
                            endOffset: 64,
                            tokenType: "INVALID_OPEN_INSIDE"
                          }
                        ],
                        Name: [
                          {
                            image: "from",
                            startOffset: 65,
                            endOffset: 68,
                            tokenType: "Name"
                          }
                        ],
                        START_CLOSE: [
                          {
                            image: ">",
                            startOffset: 69,
                            endOffset: 69,
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
                                        image: "john",
                                        startOffset: 70,
                                        endOffset: 73,
                                        tokenType: "TEXT"
                                      }
                                    ]
                                  },
                                  location: { startOffset: 70, endOffset: 73 }
                                }
                              ]
                            },
                            location: { startOffset: 70, endOffset: 73 }
                          }
                        ],
                        SLASH_OPEN: [
                          {
                            image: "</",
                            startOffset: 74,
                            endOffset: 75,
                            tokenType: "SLASH_OPEN"
                          }
                        ],
                        END_NAME: [
                          {
                            image: "from",
                            startOffset: 76,
                            endOffset: 79,
                            tokenType: "Name"
                          }
                        ],
                        END: [
                          {
                            image: ">",
                            startOffset: 80,
                            endOffset: 80,
                            tokenType: "CLOSE"
                          }
                        ]
                      },
                      location: { startOffset: 64, endOffset: 80 }
                    }
                  ],
                  Comment: [
                    {
                      image: "<!-- I am a comment! -->",
                      startOffset: 35,
                      endOffset: 58,
                      tokenType: "Comment"
                    }
                  ]
                },
                location: { startOffset: 6, endOffset: 81 }
              }
            ],
            SLASH_OPEN: [
              {
                image: "</",
                startOffset: 82,
                endOffset: 83,
                tokenType: "SLASH_OPEN"
              }
            ],
            END_NAME: [
              {
                image: "note",
                startOffset: 84,
                endOffset: 87,
                tokenType: "Name"
              }
            ],
            END: [
              { image: ">", startOffset: 88, endOffset: 88, tokenType: "CLOSE" }
            ]
          },
          location: { startOffset: 0, endOffset: 88 }
        }
      ],
      misc: [
        {
          name: "misc",
          children: {
            SEA_WS: [
              {
                image: "\n",
                startOffset: 89,
                endOffset: 89,
                tokenType: "SEA_WS"
              }
            ]
          },
          location: { startOffset: 89, endOffset: 89 }
        }
      ]
    },
    location: { startOffset: 0, endOffset: 89 }
  }
};
