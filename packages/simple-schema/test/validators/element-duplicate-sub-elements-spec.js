const { expect } = require("chai");
const { map, countBy, identity } = require("lodash");
const { validateBySchema } = require("./utils");

describe("The XML Simple Schema", () => {
  describe("Validations Functionality", () => {
    context("element duplicate sub elements", () => {
      it("Detects a single duplicate sub element", () => {
        const xmlText = `<people>
                 <person>
                   <lastName>Duck</lastName>
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
                lastName: {
                  lastName: "name",
                  cardinality: "single",
                  attributes: {},
                  elements: {}
                }
              }
            }
          }
        };
        const issues = validateBySchema(xmlText, schema);
        expect(issues).to.have.lengthOf(2);
        const issue1 = issues[0];
        expect(issue1.msg).to.eql(
          "Duplicate Sub-Element: <lastName> only a single occurrence of this Sub-Element is allowed here."
        );
        expect(issue1.severity).to.eql("error");
        expect(issue1.node.name).to.eql("lastName");
        expect(issue1.position).to.eql({ startOffset: 55, endOffset: 62 });

        const issue2 = issues[1];
        expect(issue2.msg).to.eql(
          "Duplicate Sub-Element: <lastName> only a single occurrence of this Sub-Element is allowed here."
        );
        expect(issue2.severity).to.eql("error");
        expect(issue2.node.name).to.eql("lastName");
        expect(issue2.position).to.eql({ startOffset: 100, endOffset: 107 });
      });

      it("Detects multiple duplicate sub elements", () => {
        const xmlText = `<people>
                 <person>
                   <lastName>Duck</lastName>
                   <lastName>Duck</lastName>
                   <lastName>Duck</lastName>

                   <address>NY</address>
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
              elements: {
                lastName: {
                  name: "lastName",
                  cardinality: "single",
                  attributes: {},
                  elements: {}
                },
                address: {
                  name: "address",
                  cardinality: "single",
                  attributes: {},
                  elements: {}
                }
              }
            }
          }
        };
        const issues = validateBySchema(xmlText, schema);
        expect(issues).to.have.lengthOf(5);
        const messages = map(issues, "msg");
        const countByMessages = countBy(messages, identity);
        expect(countByMessages).to.eql({
          "Duplicate Sub-Element: <lastName> only a single occurrence of this Sub-Element is allowed here.": 3,
          "Duplicate Sub-Element: <address> only a single occurrence of this Sub-Element is allowed here.": 2
        });
      });

      it("Won't complain when no sub elements breach their cardinality constraints", () => {
        const xmlText = `<people>
                 <person>
                   <name>Donald</name>
                   <age>85</age>
                   <address>NY</address>
                   <address>IL</address>
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
                  cardinality: "single",
                  attributes: {},
                  elements: {}
                },
                age: {
                  name: "age",
                  cardinality: "single",
                  attributes: {},
                  elements: {}
                },
                address: {
                  name: "address",
                  cardinality: "many",
                  attributes: {},
                  elements: {}
                }
              }
            }
          }
        };
        const issues = validateBySchema(xmlText, schema);
        expect(issues).to.be.empty;
      });
    });
  });
});
