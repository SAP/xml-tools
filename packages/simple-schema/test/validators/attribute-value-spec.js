const { expect } = require("chai");
const { validateBySchema } = require("./utils");

describe("The XML Simple Schema", () => {
  describe("Validations Functionality", () => {
    context("attributes values", () => {
      context("enum values", () => {
        it("positive", () => {
          const xmlText = `<note private="negative">
        <to>Bill</to>
        <from>Tim</from>
    </note>`;

          const schema = {
            required: true,
            cardinality: "single",
            name: "note",
            attributes: {
              private: {
                required: false,
                key: "private",
                value: ["true", "false"]
              }
            },
            elements: {}
          };
          const issues = validateBySchema(xmlText, schema);
          expect(issues).to.have.lengthOf(1);
          const issue = issues[0];
          expect(issue.msg).to.eql(
            "Expecting one of <true,false> but found <negative>"
          );
          expect(issue.severity).to.eql("error");
          expect(issue.node.key).to.eql("private");
          expect(issue.position).to.eql({ startOffset: 14, endOffset: 23 });
        });

        it("negative", () => {
          const xmlText = `
    <note private="true">
        <to>Bill</to>
        <from>Tim</from>
    </note>`;

          const schema = {
            required: true,
            cardinality: "single",
            name: "note",
            attributes: {
              private: {
                required: false,
                key: "private",
                value: ["true", "false"]
              }
            },
            elements: {}
          };
          const issues = validateBySchema(xmlText, schema);
          expect(issues).to.be.empty;
        });
      });

      context("regexp value", () => {
        it("positive", () => {
          const xmlText = `<note private="negative">
        <to>Bill</to>
        <from>Tim</from>
    </note>`;

          const schema = {
            required: true,
            cardinality: "single",
            name: "note",
            attributeType: "open",
            attributes: {
              private: {
                required: false,
                key: "private",
                value: /^(true|false)$/
              }
            },
            elements: {}
          };
          const issues = validateBySchema(xmlText, schema);
          expect(issues).to.have.lengthOf(1);
          const issue = issues[0];
          expect(issue.msg).to.eql(
            "Expecting Value matching </^(true|false)$/> but found <negative>"
          );
          expect(issue.severity).to.eql("error");
          expect(issue.node.key).to.eql("private");
        });

        it("negative", () => {
          const xmlText = `<note private="false">
        <to>Bill</to>
        <from>Tim</from>
    </note>`;

          const schema = {
            required: true,
            cardinality: "single",
            name: "note",
            attributes: {
              private: {
                required: false,
                key: "private",
                value: /^(true|false)$/
              }
            },
            elements: {}
          };
          const issues = validateBySchema(xmlText, schema);
          expect(issues).to.be.empty;
        });
      });

      context("won't validate edge cases", () => {
        it("if there is no value in the XML Text", () => {
          const xmlText = `<note private=>
        <to>Bill</to>
        <from>Tim</from>
    </note>`;

          const schema = {
            required: true,
            cardinality: "single",
            name: "note",
            attributes: {
              private: {
                required: false,
                key: "private",
                value: ["true", "false"]
              }
            },
            elements: {}
          };
          const issues = validateBySchema(xmlText, schema);
          expect(issues).to.be.empty;
        });

        it("if there is no value definition in the XSS", () => {
          const xmlText = `<note private="oyVey">
        <to>Bill</to>
        <from>Tim</from>
    </note>`;

          const schema = {
            required: true,
            cardinality: "single",
            name: "note",
            attributes: {
              private: {
                required: false,
                key: "private"
              }
            },
            elements: {}
          };
          const issues = validateBySchema(xmlText, schema);
          expect(issues).to.be.empty;
        });

        it("if there is no matching schema node", () => {
          const xmlText = `<people>
                    <person age="66"></person>
              </people>`;

          const schema = {
            required: true,
            cardinality: "single",
            name: "people",
            attributes: {},

            elements: {
              // Typo - can't find people.person path in the schema
              OOPS: {
                name: "OOPS",
                required: false,
                cardinality: "many",
                attributes: {
                  age: {
                    required: false,
                    key: "age",
                    value: "66"
                  }
                },
                elements: {}
              }
            }
          };
          const issues = validateBySchema(xmlText, schema);
          expect(issues).to.be.empty;
        });

        it("if there is full schema mismatch", () => {
          const xmlText = `<people>
                    <person age="66"></person>
              </people>`;

          const schema = {
            required: true,
            cardinality: "single",
            // "humans" !== "person" this schema is completely irrelevant for this scenario.
            name: "humans",
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
                    value: "66"
                  }
                },
                elements: {}
              }
            }
          };
          const issues = validateBySchema(xmlText, schema);
          expect(issues).to.be.empty;
        });

        it("on an xml prolog", () => {
          // This test is only to ensure code coverage is special prolog branch.
          // There is no way to actually test be behaivor directly as we don't actually do anything with
          // a prolong (yet) in the XSS, and there is no way to define prolog XSS constraints.
          const xmlText = `<?xml version="1.0" encoding="UTF-8"?>
                <people>
                </people>`;

          const schema = {
            required: true,
            cardinality: "single",
            name: "person",
            attributes: {},

            elements: {}
          };
          const issues = validateBySchema(xmlText, schema);
          expect(issues).to.be.empty;
        });
      });
    });
  });
});
