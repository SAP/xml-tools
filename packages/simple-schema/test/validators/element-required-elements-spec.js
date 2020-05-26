const { expect } = require("chai");
const { map } = require("lodash");
const { validateBySchema } = require("./utils");

describe("The XML Simple Schema", () => {
  describe("Validations Functionality", () => {
    context("element required sub elements", () => {
      it("Detects a missing sub element", () => {
        const xmlText = `<people>
                 <person>
                   <lastName>Duck</lastName>
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
                  name: "name",
                  required: true,
                  cardinality: "many",
                  attributes: {},
                  elements: {},
                },
              },
            },
          },
        };
        const issues = validateBySchema(xmlText, schema);
        expect(issues).to.have.lengthOf(1);
        const issue = issues[0];
        expect(issue.msg).to.eql("Missing Required Sub-Element: <name>");
        expect(issue.severity).to.eql("error");
        expect(issue.node.name).to.eql("person");
        expect(issue.position).to.eql({ startOffset: 27, endOffset: 32 });
      });

      it("Detects multiple missing sub elements", () => {
        const xmlText = `<people>
                 <person>
                   <lastName>Duck</lastName>
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
                  name: "name",
                  required: true,
                  cardinality: "many",
                  attributes: {},
                  elements: {},
                },
                age: {
                  name: "age",
                  required: true,
                  cardinality: "many",
                  attributes: {},
                  elements: {},
                },
              },
            },
          },
        };
        const issues = validateBySchema(xmlText, schema);
        expect(issues).to.have.lengthOf(2);
        const messages = map(issues, "msg");
        expect(messages).to.have.members([
          "Missing Required Sub-Element: <name>",
          "Missing Required Sub-Element: <age>",
        ]);
      });

      it("Won't complain when all required sub-elements are present", () => {
        const xmlText = `<people>
                 <person>
                   <name>Donald</name>
                   <age>85</age>
                   <lastName>Duck</lastName>
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
                  name: "name",
                  required: true,
                  cardinality: "many",
                  attributes: {},
                  elements: {},
                },
                age: {
                  name: "age",
                  required: true,
                  cardinality: "many",
                  attributes: {},
                  elements: {},
                },
              },
            },
          },
        };
        const issues = validateBySchema(xmlText, schema);
        expect(issues).to.be.empty;
      });
    });
  });
});
