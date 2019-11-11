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
                            startOffset: 46,
                            endOffset: 50,
                            tokenType: "SEA_WS"
                          }
                        ]
                      },
                      location: { startOffset: 46, endOffset: 50 }
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
                            image: "from",
                            startOffset: 30,
                            endOffset: 33,
                            tokenType: "Name"
                          }
                        ],
                        START_CLOSE: [
                          {
                            image: ">",
                            startOffset: 34,
                            endOffset: 34,
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
                                        startOffset: 35,
                                        endOffset: 38,
                                        tokenType: "TEXT"
                                      }
                                    ]
                                  },
                                  location: { startOffset: 35, endOffset: 38 }
                                }
                              ]
                            },
                            location: { startOffset: 35, endOffset: 38 }
                          }
                        ],
                        SLASH_OPEN: [
                          {
                            image: "</",
                            startOffset: 39,
                            endOffset: 40,
                            tokenType: "SLASH_OPEN"
                          }
                        ],
                        END_NAME: [
                          {
                            image: "from",
                            startOffset: 41,
                            endOffset: 44,
                            tokenType: "Name"
                          }
                        ],
                        END: [
                          {
                            image: ">",
                            startOffset: 45,
                            endOffset: 45,
                            tokenType: "CLOSE"
                          }
                        ]
                      },
                      location: { startOffset: 29, endOffset: 45 }
                    },
                    {
                      name: "element",
                      children: {
                        OPEN: [
                          {
                            image: "<",
                            startOffset: 51,
                            endOffset: 51,
                            tokenType: "OPEN"
                          }
                        ]
                      },
                      location: { startOffset: 51, endOffset: 51 },
                      recoveredNode: true
                    }
                  ]
                },
                location: { startOffset: 6, endOffset: 51 },
                recoveredNode: true
              }
            ],
            SLASH_OPEN: [
              {
                image: "</",
                startOffset: 53,
                endOffset: 54,
                tokenType: "INVALID_SLASH_OPEN"
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
