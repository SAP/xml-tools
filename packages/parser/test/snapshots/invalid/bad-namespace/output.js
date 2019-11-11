module.exports = {
  cst: {
    name: "document",
    children: {
      misc: [
        {
          name: "misc",
          children: {
            SEA_WS: [
              { image: "\n", startOffset: 0, endOffset: 0, tokenType: "SEA_WS" }
            ]
          },
          location: { startOffset: 0, endOffset: 0 }
        },
        {
          name: "misc",
          children: {
            SEA_WS: [
              {
                image: "\n",
                startOffset: 116,
                endOffset: 116,
                tokenType: "SEA_WS"
              }
            ]
          },
          location: { startOffset: 116, endOffset: 116 }
        }
      ],
      element: [
        {
          name: "element",
          children: {
            OPEN: [
              { image: "<", startOffset: 1, endOffset: 1, tokenType: "OPEN" }
            ],
            Name: [
              {
                image: "f:table",
                startOffset: 2,
                endOffset: 8,
                tokenType: "Name"
              }
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
                      tokenType: "Name"
                    }
                  ],
                  EQUALS: [
                    {
                      image: "=",
                      startOffset: 17,
                      endOffset: 17,
                      tokenType: "EQUALS"
                    }
                  ],
                  STRING: [
                    {
                      image: "",
                      startOffset: null,
                      endOffset: null,
                      tokenType: "STRING",
                      isInsertedInRecovery: true
                    }
                  ]
                },
                location: { startOffset: 10, endOffset: 17 }
              }
            ],
            START_CLOSE: [
              { image: ">", startOffset: 18, endOffset: 18, tokenType: "CLOSE" }
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
                            startOffset: 19,
                            endOffset: 23,
                            tokenType: "SEA_WS"
                          }
                        ]
                      },
                      location: { startOffset: 19, endOffset: 23 }
                    },
                    {
                      name: "chardata",
                      children: {
                        SEA_WS: [
                          {
                            image: "\n    ",
                            startOffset: 51,
                            endOffset: 55,
                            tokenType: "SEA_WS"
                          }
                        ]
                      },
                      location: { startOffset: 51, endOffset: 55 }
                    },
                    {
                      name: "chardata",
                      children: {
                        SEA_WS: [
                          {
                            image: "\n    ",
                            startOffset: 77,
                            endOffset: 81,
                            tokenType: "SEA_WS"
                          }
                        ]
                      },
                      location: { startOffset: 77, endOffset: 81 }
                    },
                    {
                      name: "chardata",
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
                          {
                            image: "<",
                            startOffset: 24,
                            endOffset: 24,
                            tokenType: "OPEN"
                          }
                        ],
                        Name: [
                          {
                            image: "f:name",
                            startOffset: 25,
                            endOffset: 30,
                            tokenType: "Name"
                          }
                        ],
                        START_CLOSE: [
                          {
                            image: ">",
                            startOffset: 31,
                            endOffset: 31,
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
                                        image: "Some Chair",
                                        startOffset: 32,
                                        endOffset: 41,
                                        tokenType: "TEXT"
                                      }
                                    ]
                                  },
                                  location: { startOffset: 32, endOffset: 41 }
                                }
                              ]
                            },
                            location: { startOffset: 32, endOffset: 41 }
                          }
                        ],
                        SLASH_OPEN: [
                          {
                            image: "</",
                            startOffset: 42,
                            endOffset: 43,
                            tokenType: "SLASH_OPEN"
                          }
                        ],
                        END_NAME: [
                          {
                            image: "f:name",
                            startOffset: 44,
                            endOffset: 49,
                            tokenType: "Name"
                          }
                        ],
                        END: [
                          {
                            image: ">",
                            startOffset: 50,
                            endOffset: 50,
                            tokenType: "CLOSE"
                          }
                        ]
                      },
                      location: { startOffset: 24, endOffset: 50 }
                    },
                    {
                      name: "element",
                      children: {
                        OPEN: [
                          {
                            image: "<",
                            startOffset: 56,
                            endOffset: 56,
                            tokenType: "OPEN"
                          }
                        ],
                        Name: [
                          {
                            image: "f:width",
                            startOffset: 57,
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
                                        image: "50",
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
                            image: "f:width",
                            startOffset: 69,
                            endOffset: 75,
                            tokenType: "Name"
                          }
                        ],
                        END: [
                          {
                            image: ">",
                            startOffset: 76,
                            endOffset: 76,
                            tokenType: "CLOSE"
                          }
                        ]
                      },
                      location: { startOffset: 56, endOffset: 76 }
                    },
                    {
                      name: "element",
                      children: {
                        OPEN: [
                          {
                            image: "<",
                            startOffset: 82,
                            endOffset: 82,
                            tokenType: "OPEN"
                          }
                        ],
                        Name: [
                          {
                            image: "f:length",
                            startOffset: 83,
                            endOffset: 90,
                            tokenType: "Name"
                          }
                        ],
                        START_CLOSE: [
                          {
                            image: ">",
                            startOffset: 91,
                            endOffset: 91,
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
                                        image: "67",
                                        startOffset: 92,
                                        endOffset: 93,
                                        tokenType: "TEXT"
                                      }
                                    ]
                                  },
                                  location: { startOffset: 92, endOffset: 93 }
                                }
                              ]
                            },
                            location: { startOffset: 92, endOffset: 93 }
                          }
                        ],
                        SLASH_OPEN: [
                          {
                            image: "</",
                            startOffset: 94,
                            endOffset: 95,
                            tokenType: "SLASH_OPEN"
                          }
                        ],
                        END_NAME: [
                          {
                            image: "f:length",
                            startOffset: 96,
                            endOffset: 103,
                            tokenType: "Name"
                          }
                        ],
                        END: [
                          {
                            image: ">",
                            startOffset: 104,
                            endOffset: 104,
                            tokenType: "CLOSE"
                          }
                        ]
                      },
                      location: { startOffset: 82, endOffset: 104 }
                    }
                  ]
                },
                location: { startOffset: 19, endOffset: 105 }
              }
            ],
            SLASH_OPEN: [
              {
                image: "</",
                startOffset: 106,
                endOffset: 107,
                tokenType: "SLASH_OPEN"
              }
            ],
            END_NAME: [
              {
                image: "f:table",
                startOffset: 108,
                endOffset: 114,
                tokenType: "Name"
              }
            ],
            END: [
              {
                image: ">",
                startOffset: 115,
                endOffset: 115,
                tokenType: "CLOSE"
              }
            ]
          },
          location: { startOffset: 1, endOffset: 115 }
        }
      ]
    },
    location: { startOffset: 0, endOffset: 116 }
  }
};
