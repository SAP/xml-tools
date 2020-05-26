const { expect } = require("chai");
const { map } = require("lodash");
const { validateBySchema } = require("./utils");

describe("The XML Simple Schema", () => {
  describe("Validations Functionality", () => {
    context("element unknown attribute", () => {
      it("Detects a single unknown attribute", () => {
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
              attributesType: "closed",
              cardinality: "many",
              attributes: {
                age: {
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
        expect(issue.msg).to.eql(
          "Unknown Attribute: <name> only [age] attributes are allowed"
        );
        expect(issue.severity).to.eql("error");
        expect(issue.node.key).to.eql("name");
        expect(issue.position).to.eql({ startOffset: 34, endOffset: 37 });
      });

      it("Detects multiple missing attributes", () => {
        const xmlText = `<people>
                 <person one="a" two="b" three="c"></person>
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
              attributesType: "closed",
              cardinality: "many",
              attributes: {
                age: {
                  key: "age",
                },
                firstName: {
                  key: "firstName",
                },
                lastName: {
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
          "Unknown Attribute: <one> only [age,firstName,lastName] attributes are allowed",
          "Unknown Attribute: <two> only [age,firstName,lastName] attributes are allowed",
          "Unknown Attribute: <three> only [age,firstName,lastName] attributes are allowed",
        ]);
      });

      it("Won't complain when all attributes are known", () => {
        const xmlText = `<people>
                 <person age="85" lastName="Duck"></person>
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
              attributesType: "closed",
              attributes: {
                age: {
                  key: "age",
                },
                firstName: {
                  key: "firstName",
                },
                lastName: {
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

      it("Default namespace attribute is always known", () => {
        const xmlText = `<people xmlns="http://people.com">
                 <person name="Donald" age="1"></person>
             </people>`;

        const schema = {
          required: true,
          name: "people",
          cardinality: "single",
          attributesType: "closed",
          attributes: {
            description: {
              key: "description",
              required: false,
            },
          },

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
        expect(issues).to.have.lengthOf(0);
      });
      it("Namespace attribute with prefix is always known", () => {
        const xmlText = `<people xmlns:people="http://people.com">
                 <person name="Donald" age="1"></person>
             </people>`;

        const schema = {
          required: true,
          name: "people",
          cardinality: "single",
          attributesType: "closed",
          attributes: {
            description: {
              key: "description",
              required: false,
            },
          },

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
        expect(issues).to.have.lengthOf(0);
      });
    });
  });
});
