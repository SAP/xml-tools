module.exports = {
  cst: {
    name: "document",
    children: {
      element: [
        {
          name: "element",
          children: {
            OPEN: [
              { image: "<", startOffset: 0, endOffset: 0, tokenType: "OPEN" },
            ],
            Name: [
              {
                image: "note",
                startOffset: 1,
                endOffset: 4,
                tokenType: "Name",
              },
            ],
            START_CLOSE: [
              { image: ">", startOffset: 5, endOffset: 5, tokenType: "CLOSE" },
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
                            image: "\n  ",
                            startOffset: 6,
                            endOffset: 8,
                            tokenType: "SEA_WS",
                          },
                        ],
                      },
                      location: { startOffset: 6, endOffset: 8 },
                    },
                    {
                      name: "chardata",
                      children: {
                        TEXT: [
                          {
                            image: "foo\n  ",
                            startOffset: 10,
                            endOffset: 15,
                            tokenType: "TEXT",
                          },
                        ],
                      },
                      location: { startOffset: 10, endOffset: 15 },
                    },
                    {
                      name: "chardata",
                      children: {
                        TEXT: [
                          {
                            image: "foo ;\n\n  ",
                            startOffset: 17,
                            endOffset: 25,
                            tokenType: "TEXT",
                          },
                        ],
                      },
                      location: { startOffset: 17, endOffset: 25 },
                    },
                    {
                      name: "chardata",
                      children: {
                        TEXT: [
                          {
                            image: "#1234\n  ",
                            startOffset: 27,
                            endOffset: 34,
                            tokenType: "TEXT",
                          },
                        ],
                      },
                      location: { startOffset: 27, endOffset: 34 },
                    },
                    {
                      name: "chardata",
                      children: {
                        TEXT: [
                          {
                            image: "#1234 ;\n  ",
                            startOffset: 36,
                            endOffset: 45,
                            tokenType: "TEXT",
                          },
                        ],
                      },
                      location: { startOffset: 36, endOffset: 45 },
                    },
                    {
                      name: "chardata",
                      children: {
                        TEXT: [
                          {
                            image: "#12Y3;\n\n  ",
                            startOffset: 47,
                            endOffset: 56,
                            tokenType: "TEXT",
                          },
                        ],
                      },
                      location: { startOffset: 47, endOffset: 56 },
                    },
                    {
                      name: "chardata",
                      children: {
                        TEXT: [
                          {
                            image: "#x123ABC\n  ",
                            startOffset: 58,
                            endOffset: 68,
                            tokenType: "TEXT",
                          },
                        ],
                      },
                      location: { startOffset: 58, endOffset: 68 },
                    },
                    {
                      name: "chardata",
                      children: {
                        TEXT: [
                          {
                            image: "#x123ABC ;\n  ",
                            startOffset: 70,
                            endOffset: 82,
                            tokenType: "TEXT",
                          },
                        ],
                      },
                      location: { startOffset: 70, endOffset: 82 },
                    },
                    {
                      name: "chardata",
                      children: {
                        TEXT: [
                          {
                            image: "#x123YBC;\n",
                            startOffset: 84,
                            endOffset: 93,
                            tokenType: "TEXT",
                          },
                        ],
                      },
                      location: { startOffset: 84, endOffset: 93 },
                    },
                  ],
                },
                location: { startOffset: 6, endOffset: 93 },
              },
            ],
            SLASH_OPEN: [
              {
                image: "</",
                startOffset: 94,
                endOffset: 95,
                tokenType: "SLASH_OPEN",
              },
            ],
            END_NAME: [
              {
                image: "note",
                startOffset: 96,
                endOffset: 99,
                tokenType: "Name",
              },
            ],
            END: [
              {
                image: ">",
                startOffset: 100,
                endOffset: 100,
                tokenType: "CLOSE",
              },
            ],
          },
          location: { startOffset: 0, endOffset: 100 },
        },
      ],
      misc: [
        {
          name: "misc",
          children: {
            SEA_WS: [
              {
                image: "\n",
                startOffset: 101,
                endOffset: 101,
                tokenType: "SEA_WS",
              },
            ],
          },
          location: { startOffset: 101, endOffset: 101 },
        },
      ],
    },
    location: { startOffset: 0, endOffset: 101 },
  },
};
