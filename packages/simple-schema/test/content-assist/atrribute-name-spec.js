const { expect } = require("chai");
const { suggestionsBySchema } = require("./utils");

describe("The XML Simple Schema", () => {
  describe("Content Assist Functionality", () => {
    context("In Attribute Names Scenario", () => {
      it("provides suggestion: without prefix", () => {
        const xmlText = `<people>
                    <person ⇶></person>
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
                name: {
                  required: false,
                  key: "name"
                },
                age: {
                  required: false,
                  key: "age"
                },
                address: {
                  required: false,
                  key: "address"
                }
              },
              elements: {}
            }
          }
        };

        const suggestions = suggestionsBySchema(xmlText, schema);
        expect(suggestions).to.deep.include.members([
          {
            label: "name",
            text: "name",
            commitCharacter: "="
          },
          {
            label: "age",
            text: "age",
            commitCharacter: "="
          },
          {
            label: "address",
            text: "address",
            commitCharacter: "="
          }
        ]);
        expect(suggestions).to.have.lengthOf(3);
      });

      it("provides suggestion: with prefix", () => {
        const xmlText = `<people>
                    <person a⇶></person>
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
                name: {
                  required: false,
                  key: "name"
                },
                age: {
                  required: false,
                  key: "age"
                },
                address: {
                  required: false,
                  key: "address"
                }
              },
              elements: {}
            }
          }
        };

        const suggestions = suggestionsBySchema(xmlText, schema);
        expect(suggestions).to.deep.include.members([
          {
            label: "name",
            text: "name",
            commitCharacter: "="
          },
          {
            label: "age",
            text: "age",
            commitCharacter: "="
          },
          {
            label: "address",
            text: "address",
            commitCharacter: "="
          }
        ]);
        expect(suggestions).to.have.lengthOf(3);
      });
      it("does not crash wehen xss element does not exist", () => {
        const xmlText = `<people>
                    <person a⇶></person>
                  </people>`;

        const schema = {
          required: true,
          cardinality: "single",
          name: "people",
          attributes: {},

          elements: {}
        };

        const suggestions = suggestionsBySchema(xmlText, schema);
        expect(suggestions).to.deep.include.members([]);
        expect(suggestions).to.have.lengthOf(0);
      });

      it("filters suggestions by existing attributes", () => {
        const xmlText = `<people>
                    <person age="66" ⇶></person>
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
                name: {
                  required: false,
                  key: "name"
                },
                age: {
                  required: false,
                  key: "age"
                },
                address: {
                  required: false,
                  key: "address"
                }
              },
              elements: {}
            }
          }
        };

        const suggestions = suggestionsBySchema(xmlText, schema);
        expect(suggestions).to.deep.include.members([
          {
            label: "name",
            text: "name",
            commitCharacter: "="
          },
          {
            label: "address",
            text: "address",
            commitCharacter: "="
          }
        ]);
        expect(suggestions).to.have.lengthOf(2);
      });
    });
  });
});
