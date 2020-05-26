const { expect } = require("chai");
const { map } = require("lodash");
const { validateBySchema } = require("./utils");

describe("The XML Simple Schema", () => {
  describe("Validations Functionality", () => {
    context("element required attribute", () => {
      it("Detects a missing attribute", () => {
        const xmlText = `<people>
                 <person name="Donald"></person>
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
                  required: true,
                  key: "age",
                },
              },
              elements: {},
            },
          },
        };
        const issues = validateBySchema(xmlText, schema);
        expect(issues).to.have.lengthOf(1);
        const issue = issues[0];
        expect(issue.msg).to.eql("Missing Required Attribute: <age>");
        expect(issue.severity).to.eql("error");
        expect(issue.node.name).to.eql("person");
        expect(issue.position).to.eql({ startOffset: 27, endOffset: 32 });
      });

      it("Detects multiple missing attributes", () => {
        const xmlText = `<people>
                 <person name="Donald"></person>
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
                  required: true,
                  key: "age",
                },
                firstName: {
                  required: true,
                  key: "firstName",
                },
                lastName: {
                  required: true,
                  key: "lastName",
                },
              },
              elements: {},
            },
          },
        };
        const issues = validateBySchema(xmlText, schema);
        expect(issues).to.have.lengthOf(3);
        const messages = map(issues, "msg");
        expect(messages).to.have.members([
          "Missing Required Attribute: <age>",
          "Missing Required Attribute: <firstName>",
          "Missing Required Attribute: <lastName>",
        ]);
      });

      it("Won't complain when all required attributes are present", () => {
        const xmlText = `<people>
                 <person age="85" firstName="Donald" lastName="Duck"></person>
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
                  required: true,
                  key: "age",
                },
                firstName: {
                  required: true,
                  key: "firstName",
                },
                lastName: {
                  required: true,
                  key: "lastName",
                },
              },
              elements: {},
            },
          },
        };
        const issues = validateBySchema(xmlText, schema);
        expect(issues).to.be.empty;
      });
    });
  });
});
