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
              { image: "top", startOffset: 1, endOffset: 3, tokenType: "Name" }
            ],
            START_CLOSE: [
              { image: ">", startOffset: 4, endOffset: 4, tokenType: "CLOSE" }
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
                            startOffset: 5,
                            endOffset: 9,
                            tokenType: "SEA_WS"
                          }
                        ]
                      },
                      location: { startOffset: 5, endOffset: 9 }
                    },
                    {
                      name: "chardata",
                      children: {
                        SEA_WS: [
                          {
                            image: "\n    ",
                            startOffset: 67,
                            endOffset: 71,
                            tokenType: "SEA_WS"
                          }
                        ]
                      },
                      location: { startOffset: 67, endOffset: 71 }
                    },
                    {
                      name: "chardata",
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
                    }
                  ],
                  element: [
                    {
                      name: "element",
                      children: {
                        OPEN: [
                          {
                            image: "<",
                            startOffset: 10,
                            endOffset: 10,
                            tokenType: "OPEN"
                          }
                        ],
                        Name: [
                          {
                            image: "nested",
                            startOffset: 11,
                            endOffset: 16,
                            tokenType: "Name"
                          }
                        ],
                        attribute: [
                          {
                            name: "attribute",
                            children: {
                              Name: [
                                {
                                  image: "attr1",
                                  startOffset: 18,
                                  endOffset: 22,
                                  tokenType: "Name"
                                }
                              ],
                              EQUALS: [
                                {
                                  image: "=",
                                  startOffset: 23,
                                  endOffset: 23,
                                  tokenType: "EQUALS"
                                }
                              ],
                              STRING: [
                                {
                                  image: '"666"',
                                  startOffset: 24,
                                  endOffset: 28,
                                  tokenType: "STRING"
                                }
                              ]
                            },
                            location: { startOffset: 18, endOffset: 28 }
                          },
                          {
                            name: "attribute",
                            children: {
                              Name: [
                                {
                                  image: "attr2",
                                  startOffset: 30,
                                  endOffset: 34,
                                  tokenType: "Name"
                                }
                              ],
                              EQUALS: [
                                {
                                  image: "=",
                                  startOffset: 35,
                                  endOffset: 35,
                                  tokenType: "EQUALS"
                                }
                              ]
                            },
                            location: { startOffset: 30, endOffset: 35 },
                            recoveredNode: true
                          }
                        ]
                      },
                      location: { startOffset: 10, endOffset: 35 },
                      recoveredNode: true
                    },
                    {
                      name: "element",
                      children: {
                        OPEN: [
                          {
                            image: "<",
                            startOffset: 41,
                            endOffset: 41,
                            tokenType: "INVALID_OPEN_INSIDE"
                          }
                        ],
                        Name: [
                          {
                            image: "nest2",
                            startOffset: 42,
                            endOffset: 46,
                            tokenType: "Name"
                          }
                        ],
                        START_CLOSE: [
                          {
                            image: ">",
                            startOffset: 47,
                            endOffset: 47,
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
                                        image: "hello world",
                                        startOffset: 48,
                                        endOffset: 58,
                                        tokenType: "TEXT"
                                      }
                                    ]
                                  },
                                  location: { startOffset: 48, endOffset: 58 }
                                }
                              ]
                            },
                            location: { startOffset: 48, endOffset: 58 }
                          }
                        ],
                        SLASH_OPEN: [
                          {
                            image: "</",
                            startOffset: 59,
                            endOffset: 60,
                            tokenType: "SLASH_OPEN"
                          }
                        ],
                        END_NAME: [
                          {
                            image: "nest2",
                            startOffset: 61,
                            endOffset: 65,
                            tokenType: "Name"
                          }
                        ],
                        END: [
                          {
                            image: ">",
                            startOffset: 66,
                            endOffset: 66,
                            tokenType: "CLOSE"
                          }
                        ]
                      },
                      location: { startOffset: 41, endOffset: 66 }
                    },
                    {
                      name: "element",
                      children: {
                        OPEN: [
                          {
                            image: "<",
                            startOffset: 72,
                            endOffset: 72,
                            tokenType: "OPEN"
                          }
                        ],
                        Name: [
                          {
                            image: "nested3",
                            startOffset: 73,
                            endOffset: 79,
                            tokenType: "Name"
                          }
                        ],
                        attribute: [
                          {
                            name: "attribute",
                            children: {
                              Name: [
                                {
                                  image: "attr5",
                                  startOffset: 81,
                                  endOffset: 85,
                                  tokenType: "Name"
                                }
                              ],
                              EQUALS: [
                                {
                                  image: "=",
                                  startOffset: 86,
                                  endOffset: 86,
                                  tokenType: "EQUALS"
                                }
                              ],
                              STRING: [
                                {
                                  image: '"1"',
                                  startOffset: 87,
                                  endOffset: 89,
                                  tokenType: "STRING"
                                }
                              ]
                            },
                            location: { startOffset: 81, endOffset: 89 }
                          }
                        ],
                        START_CLOSE: [
                          {
                            image: ">",
                            startOffset: 90,
                            endOffset: 90,
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
                                    SEA_WS: [
                                      {
                                        image: " ",
                                        startOffset: 91,
                                        endOffset: 91,
                                        tokenType: "SEA_WS"
                                      }
                                    ]
                                  },
                                  location: { startOffset: 91, endOffset: 91 }
                                }
                              ]
                            },
                            location: { startOffset: 91, endOffset: 91 }
                          }
                        ],
                        SLASH_OPEN: [
                          {
                            image: "</",
                            startOffset: 92,
                            endOffset: 93,
                            tokenType: "SLASH_OPEN"
                          }
                        ],
                        END_NAME: [
                          {
                            image: "nested3",
                            startOffset: 94,
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
                      location: { startOffset: 72, endOffset: 101 }
                    }
                  ]
                },
                location: { startOffset: 5, endOffset: 102 }
              }
            ],
            SLASH_OPEN: [
              {
                image: "</",
                startOffset: 103,
                endOffset: 104,
                tokenType: "SLASH_OPEN"
              }
            ],
            END_NAME: [
              {
                image: "top",
                startOffset: 105,
                endOffset: 107,
                tokenType: "Name"
              }
            ],
            END: [
              {
                image: ">",
                startOffset: 108,
                endOffset: 108,
                tokenType: "CLOSE"
              }
            ]
          },
          location: { startOffset: 0, endOffset: 108 }
        }
      ],
      misc: [
        {
          name: "misc",
          children: {
            SEA_WS: [
              {
                image: "\n",
                startOffset: 109,
                endOffset: 109,
                tokenType: "SEA_WS"
              }
            ]
          },
          location: { startOffset: 109, endOffset: 109 }
        }
      ]
    },
    location: { startOffset: 0, endOffset: 109 }
  }
};
