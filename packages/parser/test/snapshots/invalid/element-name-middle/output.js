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
                            image: "\n    ",
                            startOffset: 54,
                            endOffset: 58,
                            tokenType: "SEA_WS"
                          }
                        ]
                      },
                      location: { startOffset: 54, endOffset: 58 }
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
                        ],
                        Name: [
                          {
                            image: "ad",
                            startOffset: 30,
                            endOffset: 31,
                            tokenType: "Name"
                          }
                        ]
                      },
                      location: { startOffset: 29, endOffset: 31 },
                      recoveredNode: true
                    },
                    {
                      name: "element",
                      children: {
                        OPEN: [
                          {
                            image: "<",
                            startOffset: 37,
                            endOffset: 37,
                            tokenType: "INVALID_OPEN_INSIDE"
                          }
                        ],
                        Name: [
                          {
                            image: "from",
                            startOffset: 38,
                            endOffset: 41,
                            tokenType: "Name"
                          }
                        ],
                        START_CLOSE: [
                          {
                            image: ">",
                            startOffset: 42,
                            endOffset: 42,
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
                                        startOffset: 43,
                                        endOffset: 46,
                                        tokenType: "TEXT"
                                      }
                                    ]
                                  },
                                  location: { startOffset: 43, endOffset: 46 }
                                }
                              ]
                            },
                            location: { startOffset: 43, endOffset: 46 }
                          }
                        ],
                        SLASH_OPEN: [
                          {
                            image: "</",
                            startOffset: 47,
                            endOffset: 48,
                            tokenType: "SLASH_OPEN"
                          }
                        ],
                        END_NAME: [
                          {
                            image: "from",
                            startOffset: 49,
                            endOffset: 52,
                            tokenType: "Name"
                          }
                        ],
                        END: [
                          {
                            image: ">",
                            startOffset: 53,
                            endOffset: 53,
                            tokenType: "CLOSE"
                          }
                        ]
                      },
                      location: { startOffset: 37, endOffset: 53 }
                    },
                    {
                      name: "element",
                      children: {
                        OPEN: [
                          {
                            image: "<",
                            startOffset: 59,
                            endOffset: 59,
                            tokenType: "OPEN"
                          }
                        ],
                        Name: [
                          {
                            image: "city",
                            startOffset: 60,
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
                                        image: "ny",
                                        startOffset: 65,
                                        endOffset: 66,
                                        tokenType: "TEXT"
                                      }
                                    ]
                                  },
                                  location: { startOffset: 65, endOffset: 66 }
                                }
                              ]
                            },
                            location: { startOffset: 65, endOffset: 66 }
                          }
                        ],
                        SLASH_OPEN: [
                          {
                            image: "</",
                            startOffset: 67,
                            endOffset: 68,
                            tokenType: "SLASH_OPEN"
                          }
                        ],
                        END_NAME: [
                          {
                            image: "city",
                            startOffset: 69,
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
                      location: { startOffset: 59, endOffset: 73 }
                    }
                  ]
                },
                location: { startOffset: 6, endOffset: 74 }
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
          location: { startOffset: 0, endOffset: 81 }
        }
      ],
      misc: [
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
        }
      ]
    },
    location: { startOffset: 0, endOffset: 82 }
  }
};
