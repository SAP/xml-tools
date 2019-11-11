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
            attribute: [
              {
                name: "attribute",
                children: {
                  Name: [
                    {
                      image: "attr1",
                      startOffset: 6,
                      endOffset: 10,
                      tokenType: "Name"
                    }
                  ],
                  EQUALS: [
                    {
                      image: "=",
                      startOffset: 11,
                      endOffset: 11,
                      tokenType: "EQUALS"
                    }
                  ],
                  STRING: [
                    {
                      image: '"666"',
                      startOffset: 12,
                      endOffset: 16,
                      tokenType: "STRING"
                    }
                  ]
                },
                location: { startOffset: 6, endOffset: 16 }
              },
              {
                name: "attribute",
                children: {
                  Name: [
                    {
                      image: "attr2",
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
                  ]
                },
                location: { startOffset: 18, endOffset: 23 },
                recoveredNode: true
              }
            ]
          },
          location: { startOffset: 0, endOffset: 23 },
          recoveredNode: true
        }
      ]
    },
    location: { startOffset: 0, endOffset: 23 },
    recoveredNode: true
  }
};
