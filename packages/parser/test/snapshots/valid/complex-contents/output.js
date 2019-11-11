module.exports = {
  cst: {
    name: "document",
    children: {
      prolog: [
        {
          name: "prolog",
          children: {
            XMLDeclOpen: [
              {
                image: "<?xml ",
                startOffset: 0,
                endOffset: 5,
                tokenType: "XMLDeclOpen"
              }
            ],
            SPECIAL_CLOSE: [
              {
                image: "?>",
                startOffset: 6,
                endOffset: 7,
                tokenType: "SPECIAL_CLOSE"
              }
            ]
          },
          location: { startOffset: 0, endOffset: 7 }
        }
      ],
      misc: [
        {
          name: "misc",
          children: {
            SEA_WS: [
              { image: "\n", startOffset: 8, endOffset: 8, tokenType: "SEA_WS" }
            ]
          },
          location: { startOffset: 8, endOffset: 8 }
        },
        {
          name: "misc",
          children: {
            SEA_WS: [
              {
                image: "\n",
                startOffset: 22,
                endOffset: 22,
                tokenType: "SEA_WS"
              }
            ]
          },
          location: { startOffset: 22, endOffset: 22 }
        }
      ],
      element: [
        {
          name: "element",
          children: {
            OPEN: [
              { image: "<", startOffset: 9, endOffset: 9, tokenType: "OPEN" }
            ],
            Name: [
              {
                image: "note",
                startOffset: 10,
                endOffset: 13,
                tokenType: "Name"
              }
            ],
            START_CLOSE: [
              { image: ">", startOffset: 14, endOffset: 14, tokenType: "CLOSE" }
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
                startOffset: 15,
                endOffset: 16,
                tokenType: "SLASH_OPEN"
              }
            ],
            END_NAME: [
              {
                image: "note",
                startOffset: 17,
                endOffset: 20,
                tokenType: "Name"
              }
            ],
            END: [
              { image: ">", startOffset: 21, endOffset: 21, tokenType: "CLOSE" }
            ]
          },
          location: { startOffset: 9, endOffset: 21 }
        }
      ]
    },
    location: { startOffset: 0, endOffset: 22 }
  }
};
