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
                            startOffset: 30,
                            endOffset: 34,
                            tokenType: "SEA_WS"
                          }
                        ]
                      },
                      location: { startOffset: 30, endOffset: 34 }
                    },
                    {
                      name: "chardata",
                      children: {
                        SEA_WS: [
                          {
                            image: "\n    ",
                            startOffset: 48,
                            endOffset: 52,
                            tokenType: "SEA_WS"
                          }
                        ]
                      },
                      location: { startOffset: 48, endOffset: 52 }
                    },
                    {
                      name: "chardata",
                      children: {
                        TEXT: [
                          {
                            image: "hello\n    ",
                            startOffset: 53,
                            endOffset: 62,
                            tokenType: "TEXT"
                          }
                        ]
                      },
                      location: { startOffset: 53, endOffset: 62 }
                    },
                    {
                      name: "chardata",
                      children: {
                        SEA_WS: [
                          {
                            image: "\n    ",
                            startOffset: 79,
                            endOffset: 83,
                            tokenType: "SEA_WS"
                          }
                        ]
                      },
                      location: { startOffset: 79, endOffset: 83 }
                    },
                    {
                      name: "chardata",
                      children: {
                        TEXT: [
                          {
                            image: "world\n",
                            startOffset: 84,
                            endOffset: 89,
                            tokenType: "TEXT"
                          }
                        ]
                      },
                      location: { startOffset: 84, endOffset: 89 }
                    }
                  ],
                  Comment: [
                    {
                      image: "<!--Your comment-->",
                      startOffset: 11,
                      endOffset: 29,
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
                            startOffset: 35,
                            endOffset: 35,
                            tokenType: "OPEN"
                          }
                        ],
                        Name: [
                          {
                            image: "to",
                            startOffset: 36,
                            endOffset: 37,
                            tokenType: "Name"
                          }
                        ],
                        START_CLOSE: [
                          {
                            image: ">",
                            startOffset: 38,
                            endOffset: 38,
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
                                        startOffset: 39,
                                        endOffset: 42,
                                        tokenType: "TEXT"
                                      }
                                    ]
                                  },
                                  location: { startOffset: 39, endOffset: 42 }
                                }
                              ]
                            },
                            location: { startOffset: 39, endOffset: 42 }
                          }
                        ],
                        SLASH_OPEN: [
                          {
                            image: "</",
                            startOffset: 43,
                            endOffset: 44,
                            tokenType: "SLASH_OPEN"
                          }
                        ],
                        END_NAME: [
                          {
                            image: "to",
                            startOffset: 45,
                            endOffset: 46,
                            tokenType: "Name"
                          }
                        ],
                        END: [
                          {
                            image: ">",
                            startOffset: 47,
                            endOffset: 47,
                            tokenType: "CLOSE"
                          }
                        ]
                      },
                      location: { startOffset: 35, endOffset: 47 }
                    },
                    {
                      name: "element",
                      children: {
                        OPEN: [
                          {
                            image: "<",
                            startOffset: 63,
                            endOffset: 63,
                            tokenType: "OPEN"
                          }
                        ],
                        Name: [
                          {
                            image: "from",
                            startOffset: 64,
                            endOffset: 67,
                            tokenType: "Name"
                          }
                        ],
                        START_CLOSE: [
                          {
                            image: ">",
                            startOffset: 68,
                            endOffset: 68,
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
                                        image: "Tim",
                                        startOffset: 69,
                                        endOffset: 71,
                                        tokenType: "TEXT"
                                      }
                                    ]
                                  },
                                  location: { startOffset: 69, endOffset: 71 }
                                }
                              ]
                            },
                            location: { startOffset: 69, endOffset: 71 }
                          }
                        ],
                        SLASH_OPEN: [
                          {
                            image: "</",
                            startOffset: 72,
                            endOffset: 73,
                            tokenType: "SLASH_OPEN"
                          }
                        ],
                        END_NAME: [
                          {
                            image: "from",
                            startOffset: 74,
                            endOffset: 77,
                            tokenType: "Name"
                          }
                        ],
                        END: [
                          {
                            image: ">",
                            startOffset: 78,
                            endOffset: 78,
                            tokenType: "CLOSE"
                          }
                        ]
                      },
                      location: { startOffset: 63, endOffset: 78 }
                    }
                  ]
                },
                location: { startOffset: 6, endOffset: 89 }
              }
            ],
            SLASH_OPEN: [
              {
                image: "</",
                startOffset: 90,
                endOffset: 91,
                tokenType: "SLASH_OPEN"
              }
            ],
            END_NAME: [
              {
                image: "note",
                startOffset: 92,
                endOffset: 95,
                tokenType: "Name"
              }
            ],
            END: [
              { image: ">", startOffset: 96, endOffset: 96, tokenType: "CLOSE" }
            ]
          },
          location: { startOffset: 0, endOffset: 96 }
        }
      ],
      misc: [
        {
          name: "misc",
          children: {
            SEA_WS: [
              {
                image: "\n",
                startOffset: 97,
                endOffset: 97,
                tokenType: "SEA_WS"
              }
            ]
          },
          location: { startOffset: 97, endOffset: 97 }
        }
      ]
    },
    location: { startOffset: 0, endOffset: 97 }
  }
};
