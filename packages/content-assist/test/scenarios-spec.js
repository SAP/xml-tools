const { expect } = require("chai");
const { getSuggestions } = require("../");

describe("The XML Content Assist Capabilities", () => {
  describe("Can provide suggestion for", () => {
    context("element Content", () => {
      it("With other elements", () => {
        const sample =
          `<person gender="female">\n` +
          `\t<firstname>Anna</firstname>\n` +
          `\t⇶\n` +
          `\t<lastname>Smith</lastname>\n` +
          `</person>`;

        let providerCalled = false;
        getSampleSuggestions(sample, {
          elementContent: [
            ({ element }) => {
              expect(element.name).to.eql("person");
              providerCalled = true;
            }
          ]
        });
        expect(providerCalled).to.be.true;
      });

      it("In empty element", () => {
        const sample = `<person gender="female">` + `⇶` + `</person>`;

        let providerCalled = false;
        getSampleSuggestions(sample, {
          elementContent: [
            ({ element }) => {
              expect(element.name).to.eql("person");
              providerCalled = true;
            }
          ]
        });
        expect(providerCalled).to.be.true;
      });

      it("before comment", () => {
        const sample =
          `<person gender="female">\n` +
          `\t⇶<!-- to be commented xml block goes here -->\n` +
          `</person>`;

        let providerCalled = false;
        getSampleSuggestions(sample, {
          elementContent: [
            ({ element }) => {
              expect(element.name).to.eql("person");
              providerCalled = true;
            }
          ]
        });
        expect(providerCalled).to.be.true;
      });
    });

    context("element Name", () => {
      it("With Prefix", () => {
        const sample =
          `<person gender="female">\n` +
          `\t<firstname>Anna</firstname>\n` +
          `\t<ag⇶e\n` +
          `\t<lastname>Smith</lastname>\n` +
          `</person>`;

        let providerCalled = false;
        getSampleSuggestions(sample, {
          elementName: [
            ({ element, prefix }) => {
              expect(prefix).to.eql("ag");
              expect(element.name).to.eql("age");
              providerCalled = true;
            }
          ]
        });
        expect(providerCalled).to.be.true;
      });

      it("With Prefix - end", () => {
        const sample =
          `<person gender="female">\n` +
          `\t<firstname>Anna</firstname>\n` +
          `\t<age⇶\n` +
          `\t<lastname>Smith</lastname>\n` +
          `</person>`;

        let providerCalled = false;
        getSampleSuggestions(sample, {
          elementName: [
            ({ element, prefix }) => {
              expect(prefix).to.eql("age");
              expect(element.name).to.eql("age");
              providerCalled = true;
            }
          ]
        });
        expect(providerCalled).to.be.true;
      });

      it("without Prefix", () => {
        const sample =
          `<person gender="female">\n` +
          `\t<firstname>Anna</firstname>\n` +
          `\t<⇶\n` +
          `\t<lastname>Smith</lastname>\n` +
          `</person>`;

        let providerCalled = false;
        getSampleSuggestions(sample, {
          elementName: [
            ({ element, prefix }) => {
              expect(prefix).to.be.undefined;
              expect(element.name).to.be.null;
              providerCalled = true;
            }
          ]
        });
        expect(providerCalled).to.be.true;
      });
    });

    context("attribute Value", () => {
      it("Without prefix and empty value", () => {
        const sample =
          `<person gender="⇶">\n` +
          `\t<firstname>Anna</firstname>\n` +
          `\t<lastname>Smith</lastname>\n` +
          `</person>`;

        let providerCalled = false;
        getSampleSuggestions(sample, {
          attributeValue: [
            ({ element, attribute, prefix }) => {
              expect(element.name).to.eql("person");
              expect(attribute.key).to.eql("gender");
              expect(prefix).to.be.undefined;
              providerCalled = true;
            }
          ]
        });
        expect(providerCalled).to.be.true;
      });

      it("Without prefix but with value", () => {
        const sample =
          `<person>\n` +
          `\t<firstname>Anna</firstname>\n` +
          `\t<lastname language="⇶english">Smith</lastname>\n` +
          `</person>`;

        let providerCalled = false;
        getSampleSuggestions(sample, {
          attributeValue: [
            ({ element, attribute, prefix }) => {
              expect(element.name).to.eql("lastname");
              expect(attribute.key).to.eql("language");
              expect(attribute.value).to.eql("english");
              expect(prefix).to.be.undefined;
              providerCalled = true;
            }
          ]
        });
        expect(providerCalled).to.be.true;
      });

      it("With prefix identical to value", () => {
        const sample =
          `<person>\n` +
          `\t<firstname>Anna</firstname>\n` +
          `\t<lastname language="eng⇶">Smith</lastname>\n` +
          `</person>`;

        let providerCalled = false;
        getSampleSuggestions(sample, {
          attributeValue: [
            ({ element, attribute, prefix }) => {
              expect(element.name).to.eql("lastname");
              expect(attribute.key).to.eql("language");
              expect(attribute.value).to.eql("eng");
              expect(prefix).to.eql("eng");
              providerCalled = true;
            }
          ]
        });
        expect(providerCalled).to.be.true;
      });

      it("With prefix different from value", () => {
        const sample =
          `<person>\n` +
          `\t<firstname>Anna</firstname>\n` +
          `\t<lastname language="eng⇶lish">Smith</lastname>\n` +
          `</person>`;

        let providerCalled = false;
        getSampleSuggestions(sample, {
          attributeValue: [
            ({ element, attribute, prefix }) => {
              expect(element.name).to.eql("lastname");
              expect(attribute.key).to.eql("language");
              expect(attribute.value).to.eql("english");
              expect(prefix).to.eql("eng");
              providerCalled = true;
            }
          ]
        });
        expect(providerCalled).to.be.true;
      });
    });

    context("attribute name", () => {
      it("With prefix identical to existing key", () => {
        const sample =
          `<person gen⇶>\n` +
          `\t<firstname>Anna</firstname>\n` +
          `\t<lastname>Smith</lastname>\n` +
          `</person>`;

        let providerCalled = false;
        getSampleSuggestions(sample, {
          attributeName: [
            ({ element, attribute, prefix }) => {
              expect(element.name).to.eql("person");
              expect(attribute.key).to.eql("gen");
              expect(prefix).to.eql("gen");
              providerCalled = true;
            }
          ]
        });
        expect(providerCalled).to.be.true;
      });

      it("With prefix which is a subset of an existing key", () => {
        const sample =
          `<person gen⇶der>\n` +
          `\t<firstname>Anna</firstname>\n` +
          `\t<lastname>Smith</lastname>\n` +
          `</person>`;

        let providerCalled = false;
        getSampleSuggestions(sample, {
          attributeName: [
            ({ element, attribute, prefix }) => {
              expect(element.name).to.eql("person");
              expect(attribute.key).to.eql("gender");
              expect(prefix).to.eql("gen");
              providerCalled = true;
            }
          ]
        });
        expect(providerCalled).to.be.true;
      });

      it("With empty prefix which is a subset of an existing key", () => {
        const sample =
          `<person ⇶gen>\n` +
          `\t<firstname>Anna</firstname>\n` +
          `\t<lastname>Smith</lastname>\n` +
          `</person>`;

        let providerCalled = false;
        getSampleSuggestions(sample, {
          attributeName: [
            ({ element, attribute, prefix }) => {
              expect(element.name).to.eql("person");
              expect(attribute.key).to.eql("gen");
              expect(prefix).to.be.undefined;
              providerCalled = true;
            }
          ]
        });
        expect(providerCalled).to.be.true;
      });

      it("With empty prefix without key", () => {
        const sample =
          `<person ⇶ address="NY">\n` +
          `\t<firstname>Anna</firstname>\n` +
          `\t<lastname>Smith</lastname>\n` +
          `</person>`;

        let providerCalled = false;
        getSampleSuggestions(sample, {
          attributeName: [
            ({ element, attribute, prefix }) => {
              expect(element.name).to.eql("person");
              expect(attribute).to.be.undefined;
              expect(prefix).to.be.undefined;
              providerCalled = true;
            }
          ]
        });
        expect(providerCalled).to.be.true;
      });

      it("With empty prefix without key - end", () => {
        const sample =
          `<person address="NY" ⇶>\n` +
          `\t<firstname>Anna</firstname>\n` +
          `\t<lastname>Smith</lastname>\n` +
          `</person>`;

        let providerCalled = false;
        getSampleSuggestions(sample, {
          attributeName: [
            ({ element, attribute, prefix }) => {
              expect(element.name).to.eql("person");
              expect(attribute).to.be.undefined;
              expect(prefix).to.be.undefined;
              providerCalled = true;
            }
          ]
        });
        expect(providerCalled).to.be.true;
      });
    });
  });
});

/**
 * Get Content Assist Suggestions from a sample which marks the offset
 * with unicode triple arrow: " ⇶ "
 */
function getSampleSuggestions(sample, providers) {
  const realSample = sample.replace("⇶", "");
  const offset = sample.indexOf("⇶");
  return getSuggestions({
    text: realSample,
    offset: offset,
    providers: providers
  });
}
