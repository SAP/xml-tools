const { expect } = require("chai");
const { suggestionsBySchema } = require("./utils");

describe("The XML Simple Schema", () => {
  describe("Content Assist Functionality", () => {
    context("In Attribute Values Scenario", () => {
      it("provides suggestion for enum without prefix", () => {
        const xmlText = `<people>
                    <person age="⇶"></person>
                  </people>`;

        const schema = {
          required: true,
          cardinality: "single",
          name: "people",
          attributes: {},

          elements: {
            person: {
              name: "person",
              required: false,
              cardinality: "many",
              attributes: {
                age: {
                  required: false,
                  key: "age",
                  value: ["66", "67", "666"]
                }
              },
              elements: {}
            }
          }
        };

        const suggestions = suggestionsBySchema(xmlText, schema);
        expect(suggestions).to.have.lengthOf(3);
        expect(suggestions).to.deep.include.members([
          {
            label: "66",
            text: "66"
          },
          {
            label: "67",
            text: "67"
          },
          {
            label: "666",
            text: "666"
          }
        ]);
      });

      it("Filters suggestions for enum using prefix", () => {
        const xmlText = `<people>
                    <person age="6⇶"></person>
                  </people>`;

        const schema = {
          required: true,
          cardinality: "single",
          name: "people",
          attributes: {},

          elements: {
            person: {
              name: "person",
              required: false,
              cardinality: "many",
              attributes: {
                age: {
                  required: false,
                  key: "age",
                  value: ["66", "67", "666"]
                }
              },
              elements: {}
            }
          }
        };

        const suggestions = suggestionsBySchema(xmlText, schema);
        expect(suggestions).to.have.lengthOf(3);
        expect(suggestions).to.deep.include.members([
          {
            label: "66",
            text: "6"
          },
          {
            label: "67",
            text: "7"
          },
          {
            label: "666",
            text: "66"
          }
        ]);
      });

      it("Does not provide suggestions for regExp value Definitions", () => {
        const xmlText = `<people>
                    <person age="⇶"></person>
                  </people>`;

        const schema = {
          required: true,
          cardinality: "single",
          name: "people",
          attributes: {},

          elements: {
            person: {
              name: "person",
              required: false,
              cardinality: "many",
              attributes: {
                age: {
                  required: false,
                  key: "age",
                  value: /^\d\d$/
                }
              },
              elements: {}
            }
          }
        };

        const suggestions = suggestionsBySchema(xmlText, schema);
        expect(suggestions).to.have.lengthOf(0);
      });

      it("Does not provide suggestions if there is no XSS value definition", () => {
        const xmlText = `<people>
                    <person age="⇶"></person>
                  </people>`;

        const schema = {
          required: true,
          cardinality: "single",
          name: "people",
          attributes: {},

          elements: {
            person: {
              name: "person",
              required: false,
              cardinality: "many",
              attributes: {
                age: {
                  required: false,
                  key: "age"
                }
              },
              elements: {}
            }
          }
        };

        const suggestions = suggestionsBySchema(xmlText, schema);
        expect(suggestions).to.have.lengthOf(0);
      });

      it("Does not crash if there is no XSS value definition", () => {
        const xmlText = `<people>
                    <person age="⇶"></person>
                  </people>`;

        const schema = {
          required: true,
          cardinality: "single",
          name: "people",
          attributes: {},

          elements: {}
        };

        const suggestions = suggestionsBySchema(xmlText, schema);
        expect(suggestions).to.have.lengthOf(0);
      });
    });
  });
});
