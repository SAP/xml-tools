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
        expect(suggestions).to.have.lengthOf(3);
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
        expect(suggestions).to.have.lengthOf(3);
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
        expect(suggestions).to.have.lengthOf(2);
      });

      it("allows multiple sub-elements with `multiple` cardinality", () => {
        const xmlText = `<people>
                    <person>
                      <age>66</age>
                    </person>
                    <⇶
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
        expect(suggestions).to.deep.include.members([
          {
            label: "person",
            text: "person"
          }
        ]);
        expect(suggestions).to.have.lengthOf(1);
      });
    });

    it("does not crash if there is no xss element", () => {
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

        elements: {}
      };

      const suggestions = suggestionsBySchema(xmlText, schema);
      expect(suggestions).to.deep.include.members([]);
      expect(suggestions).to.have.lengthOf(0);
    });

    it("nested elements with namespaces", () => {
      const xmlText = `<abc:people xmlns:abc="http://namespace.com/1">
                    <person xmlns="http://namespace.com/2">
                      <⇶
                    </person>
                  </abc:people>`;

      const schema = {
        required: true,
        cardinality: "single",
        name: "people",
        namespace: "http://namespace.com/1",
        attributes: {},
        elements: {
          person: {
            name: "person",
            namespace: "http://namespace.com/2",
            required: false,
            cardinality: "many",
            attributes: {},
            elements: {
              name: {
                cardinality: "single",
                required: false,
                name: "name",
                namespace: "http://namespace.com/2",
                attributes: {},
                elements: {}
              },
              friends: {
                cardinality: "single",
                required: false,
                name: "friends",
                namespace: "http://namespace.com/1",
                attributes: {},
                elements: {
                  person: {
                    name: "person",
                    namespace: "http://namespace.com/2",
                    required: false,
                    cardinality: "many",
                    attributes: {
                      name: {
                        cardinality: "single",
                        required: false,
                        name: "name",
                        namespace: "http://namespace.com/2",
                        attributes: {},
                        elements: {}
                      }
                    }
                  }
                }
              },
              age: {
                cardinality: "single",
                required: false,
                name: "age",
                namespace: "http://namespace.com/2",
                attributes: {},
                elements: {}
              },
              address: {
                cardinality: "many",
                required: false,
                name: "address",
                namespace: "http://namespace.com/2",
                attributes: {},
                elements: {}
              }
            }
          }
        }
      };

      const suggestions = suggestionsBySchema(xmlText, schema);
      expect(suggestions).to.deep.include.members([
        {
          text: "abc",
          label: "abc",
          isNamespace: true,
          commitCharacter: ":"
        },
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
      expect(suggestions).to.have.lengthOf(4);
    });

    it("with namespace prefix", () => {
      const xmlText = `<abc:people xmlns:abc="http://namespace.com/1">
                    <person xmlns="http://namespace.com/2">
                      <abc:⇶
                    </person>
                  </abc:people>`;

      const schema = {
        required: true,
        cardinality: "single",
        name: "people",
        namespace: "http://namespace.com/1",
        attributes: {},
        elements: {
          person: {
            name: "person",
            namespace: "http://namespace.com/2",
            required: false,
            cardinality: "many",
            attributes: {},
            elements: {
              name: {
                cardinality: "single",
                required: false,
                name: "name",
                namespace: "http://namespace.com/1",
                attributes: {},
                elements: {}
              },
              age: {
                cardinality: "single",
                required: false,
                name: "age",
                namespace: "http://namespace.com/1",
                attributes: {},
                elements: {}
              },
              address: {
                cardinality: "many",
                required: false,
                name: "address",
                namespace: "http://namespace.com/2",
                attributes: {},
                elements: {}
              }
            }
          }
        }
      };

      const suggestions = suggestionsBySchema(xmlText, schema);
      expect(suggestions).to.deep.include.members([
        {
          label: "name",
          text: "name"
        },
        {
          label: "age",
          text: "age"
        }
      ]);
      expect(suggestions).to.have.lengthOf(2);
    });

    it("should not crash with invalid prefix", () => {
      const xmlText = `<abc:people xmlns:abc="http://namespace.com/1">
                    <person xmlns="http://namespace.com/2">
                      <:::⇶
                    </person>
                  </abc:people>`;

      const schema = {
        required: true,
        cardinality: "single",
        name: "people",
        namespace: "http://namespace.com/1",
        attributes: {},
        elements: {
          person: {
            name: "person",
            namespace: "http://namespace.com/2",
            required: false,
            cardinality: "many",
            attributes: {},
            elements: {
              name: {
                cardinality: "single",
                required: false,
                name: "name",
                namespace: "http://namespace.com/2",
                attributes: {},
                elements: {}
              },
              age: {
                cardinality: "single",
                required: false,
                name: "age",
                namespace: "http://namespace.com/2",
                attributes: {},
                elements: {}
              },
              address: {
                cardinality: "many",
                required: false,
                name: "address",
                namespace: "http://namespace.com/2",
                attributes: {},
                elements: {}
              }
            }
          }
        }
      };

      const suggestions = suggestionsBySchema(xmlText, schema);
      expect(suggestions).to.deep.include.members([]);
      expect(suggestions).to.have.lengthOf(0);
    });

    it("should not provide extraneous namespace prefixes", () => {
      const xmlText = `<abc:people xmlns:abc="http://namespace.com/1">
                    <person xmlns="http://namespace.com/2">
                      <⇶
                    </person>
                  </abc:people>`;

      const schema = {
        required: true,
        cardinality: "single",
        name: "people",
        namespace: "http://namespace.com/1",
        attributes: {},
        elements: {
          person: {
            name: "person",
            namespace: "http://namespace.com/2",
            required: false,
            cardinality: "many",
            attributes: {},
            elements: {
              name: {
                cardinality: "single",
                required: false,
                name: "name",
                namespace: "http://namespace.com/2",
                attributes: {},
                elements: {}
              },
              age: {
                cardinality: "single",
                required: false,
                name: "age",
                namespace: "http://namespace.com/2",
                attributes: {},
                elements: {}
              },
              address: {
                cardinality: "many",
                required: false,
                name: "address",
                namespace: "http://namespace.com/2",
                attributes: {},
                elements: {}
              }
            }
          }
        }
      };

      const suggestions = suggestionsBySchema(xmlText, schema);
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
      expect(suggestions).to.have.lengthOf(3);
      expect(suggestions).to.not.deep.include.members([
        {
          label: "abc",
          text: "abc"
        }
      ]);
    });

    it("should not provide extraneous namespace prefixes for singular items", () => {
      const xmlText = `<abc:people xmlns:abc="http://namespace.com/1">
                    <person xmlns="http://namespace.com/2">
                      <friends />
                      <⇶
                    </person>
                  </abc:people>`;

      const schema = {
        required: true,
        cardinality: "single",
        name: "people",
        namespace: "http://namespace.com/1",
        attributes: {},
        elements: {
          person: {
            name: "person",
            namespace: "http://namespace.com/2",
            required: false,
            cardinality: "many",
            attributes: {},
            elements: {
              name: {
                cardinality: "single",
                required: false,
                name: "name",
                namespace: "http://namespace.com/2",
                attributes: {},
                elements: {}
              },
              age: {
                cardinality: "single",
                required: false,
                name: "age",
                namespace: "http://namespace.com/2",
                attributes: {},
                elements: {}
              },
              address: {
                cardinality: "many",
                required: false,
                name: "address",
                namespace: "http://namespace.com/2",
                attributes: {},
                elements: {}
              },
              friends: {
                cardinality: "single",
                required: false,
                name: "friends",
                namespace: "http://namespace.com/1",
                attributes: {},
                elements: {
                  person: {
                    name: "person",
                    namespace: "http://namespace.com/2",
                    required: false,
                    cardinality: "many",
                    attributes: {
                      name: {
                        cardinality: "single",
                        required: false,
                        name: "name",
                        namespace: "http://namespace.com/2",
                        attributes: {},
                        elements: {}
                      }
                    }
                  }
                }
              }
            }
          }
        }
      };

      const suggestions = suggestionsBySchema(xmlText, schema);
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
      expect(suggestions).to.have.lengthOf(3);
      expect(suggestions).to.not.deep.include.members([
        {
          label: "abc",
          text: "abc"
        }
      ]);
    });
  });
});
