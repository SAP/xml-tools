const { expect } = require("chai");
const { map } = require("lodash");
const { validateBySchema } = require("./utils");

describe("The XML Simple Schema", () => {
  describe("Validations Functionality", () => {
    context("element unknown sub elements", () => {
      it("Detects a single unknown sub element", () => {
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
              elementsType: "closed",
              attributes: {},
              elements: {
                name: {
                  name: "name",
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
        expect(issue.msg).to.eql(
          "Unknown Sub-Element: <lastName> only [name] Sub-Elements are allowed"
        );
        expect(issue.severity).to.eql("error");
        expect(issue.node.name).to.eql("lastName");
        expect(issue.position).to.eql({ startOffset: 55, endOffset: 62 });
      });

      it("Detects multiple unknown sub elements", () => {
        const xmlText = `<people>
                 <person>
                   <lastName>Duck</lastName>
                   <address>NY</address>
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
              elementsType: "closed",
              elements: {
                name: {
                  name: "name",
                  cardinality: "many",
                  attributes: {},
                  elements: {},
                },
                age: {
                  name: "age",
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
          "Unknown Sub-Element: <lastName> only [name,age] Sub-Elements are allowed",
          "Unknown Sub-Element: <address> only [name,age] Sub-Elements are allowed",
        ]);
      });

      it("Won't complain when all sub-elements are known", () => {
        const xmlText = `<people>
                 <person>
                   <name>Donald</name>
                   <age>85</age>
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
              elementsType: "closed",
              elements: {
                name: {
                  name: "name",
                  cardinality: "many",
                  attributes: {},
                  elements: {},
                },
                age: {
                  name: "age",
                  cardinality: "many",
                  attributes: {},
                  elements: {},
                },
                address: {
                  name: "address",
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

      it("Won't complain for partial sub elements", () => {
        const xmlText = `<people>
                 <person>
                   <
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
              elementsType: "closed",
              elements: {
                name: {
                  name: "name",
                  cardinality: "many",
                  attributes: {},
                  elements: {},
                },
                age: {
                  name: "age",
                  cardinality: "many",
                  attributes: {},
                  elements: {},
                },
                address: {
                  name: "address",
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
