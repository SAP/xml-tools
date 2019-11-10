const { expect } = require("chai");
const { suggestionsBySchema } = require("./utils");

describe("The XML Simple Schema", () => {
  describe("Content Assist Functionality", () => {
    context("In Element Names Scenario", () => {
      it("provides suggestion: without prefix", () => {
        const xmlText = `<people>
                    <person>
                      <⇶
                    </person>
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
              attributes: {},
              elements: {
                name: {
                  cardinality: "single",
                  required: false,
                  name: "name",
                  attributes: {},
                  elements: {}
                },
                age: {
                  cardinality: "single",
                  required: false,
                  name: "age",
                  attributes: {},
                  elements: {}
                },
                address: {
                  cardinality: "many",
                  required: false,
                  name: "address",
                  attributes: {},
                  elements: {}
                }
              }
            }
          }
        };

        const suggestions = suggestionsBySchema(xmlText, schema);
        expect(suggestions).to.have.lengthOf(3);
        expect(suggestions).to.deep.include.members([
          {
            label: "name",
            text: "name"
          },
          {
            label: "age",
            text: "age"
          },
          {
            label: "address",
            text: "address"
          }
        ]);
      });

      it("provides suggestion: with prefix", () => {
        const xmlText = `<people>
                    <person>
                      <a⇶
                    </person>
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
              attributes: {},
              elements: {
                name: {
                  cardinality: "single",
                  required: false,
                  name: "name",
                  attributes: {},
                  elements: {}
                },
                age: {
                  cardinality: "single",
                  required: false,
                  name: "age",
                  attributes: {},
                  elements: {}
                },
                address: {
                  cardinality: "many",
                  required: false,
                  name: "address",
                  attributes: {},
                  elements: {}
                }
              }
            }
          }
        };

        const suggestions = suggestionsBySchema(xmlText, schema);
        expect(suggestions).to.have.lengthOf(2);
        expect(suggestions).to.deep.include.members([
          {
            label: "age",
            text: "ge"
          },
          {
            label: "address",
            text: "ddress"
          }
        ]);
      });

      it("filters pre-existing sub-elements with `single` cardinality", () => {
        const xmlText = `<people>
                    <person>
                      <age>66</age>
                      <⇶
                    </person>
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
              attributes: {},
              elements: {
                name: {
                  cardinality: "single",
                  required: false,
                  name: "name",
                  attributes: {},
                  elements: {}
                },
                age: {
                  cardinality: "single",
                  required: false,
                  name: "age",
                  attributes: {},
                  elements: {}
                },
                address: {
                  cardinality: "many",
                  required: false,
                  name: "address",
                  attributes: {},
                  elements: {}
                }
              }
            }
          }
        };

        const suggestions = suggestionsBySchema(xmlText, schema);
        expect(suggestions).to.have.lengthOf(2);
        expect(suggestions).to.deep.include.members([
          {
            label: "name",
            text: "name"
          },
          {
            label: "address",
            text: "address"
          }
        ]);
      });
    });
  });
});
