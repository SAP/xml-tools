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
                            startOffset: 52,
                            endOffset: 52,
                            tokenType: "SEA_WS"
                          }
                        ]
                      },
                      location: { startOffset: 52, endOffset: 52 }
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
                            startOffset: 35,
                            endOffset: 35,
                            tokenType: "INVALID_OPEN_INSIDE"
                          }
                        ],
                        Name: [
                          {
                            image: "from",
                            startOffset: 36,
                            endOffset: 39,
                            tokenType: "Name"
                          }
                        ],
                        START_CLOSE: [
                          {
                            image: ">",
                            startOffset: 40,
                            endOffset: 40,
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
                                        startOffset: 41,
                                        endOffset: 44,
                                        tokenType: "TEXT"
                                      }
                                    ]
                                  },
                                  location: { startOffset: 41, endOffset: 44 }
                                }
                              ]
                            },
                            location: { startOffset: 41, endOffset: 44 }
                          }
                        ],
                        SLASH_OPEN: [
                          {
                            image: "</",
                            startOffset: 45,
                            endOffset: 46,
                            tokenType: "SLASH_OPEN"
                          }
                        ],
                        END_NAME: [
                          {
                            image: "from",
                            startOffset: 47,
                            endOffset: 50,
                            tokenType: "Name"
                          }
                        ],
                        END: [
                          {
                            image: ">",
                            startOffset: 51,
                            endOffset: 51,
                            tokenType: "CLOSE"
                          }
                        ]
                      },
                      location: { startOffset: 35, endOffset: 51 }
                    }
                  ]
                },
                location: { startOffset: 6, endOffset: 52 }
              }
            ],
            SLASH_OPEN: [
              {
                image: "</",
                startOffset: 53,
                endOffset: 54,
                tokenType: "SLASH_OPEN"
              }
            ],
            END_NAME: [
              {
                image: "note",
                startOffset: 55,
                endOffset: 58,
                tokenType: "Name"
              }
            ],
            END: [
              { image: ">", startOffset: 59, endOffset: 59, tokenType: "CLOSE" }
            ]
          },
          location: { startOffset: 0, endOffset: 59 }
        }
      ],
      misc: [
        {
          name: "misc",
          children: {
            SEA_WS: [
              {
                image: "\n",
                startOffset: 60,
                endOffset: 60,
                tokenType: "SEA_WS"
              }
            ]
          },
          location: { startOffset: 60, endOffset: 60 }
        }
      ]
    },
    location: { startOffset: 0, endOffset: 60 }
  }
};
