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
                children: {},
                location: { startOffset: null, endOffset: null }
              }
            ],
            SLASH_OPEN: [
              {
                image: "</",
                startOffset: 6,
                endOffset: 7,
                tokenType: "SLASH_OPEN"
              }
            ],
            END_NAME: [
              {
                image: "note",
                startOffset: 9,
                endOffset: 12,
                tokenType: "Name"
              }
            ],
            END: [
              { image: ">", startOffset: 18, endOffset: 18, tokenType: "CLOSE" }
            ]
          },
          location: { startOffset: 0, endOffset: 18 }
        }
      ],
      misc: [
        {
          name: "misc",
          children: {
            SEA_WS: [
              {
                image: "\n",
                startOffset: 19,
                endOffset: 19,
                tokenType: "SEA_WS"
              }
            ]
          },
          location: { startOffset: 19, endOffset: 19 }
        }
      ]
    },
    location: { startOffset: 0, endOffset: 19 }
  }
};
