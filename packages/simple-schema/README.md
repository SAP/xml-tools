[![npm (scoped)](https://img.shields.io/npm/v/@xml-tools/simple-schema.svg)](https://www.npmjs.com/package/@xml-tools/simple-schema)

# @xml-tools/simple-schema

This package includes three elements:

- Data structure definition for a basic XML schema represented as a JavaScript object literal.
- Validation logic to inspect a given XML conforms to a Schema.
- Content Assist logic that provides suggestions using the Schema information.

## Installation

With npm:

- `npm install @xml-tools/simple-schema`

With Yarn

- `yarn add @xml-tools/simple-schema`

## Usage

Please see the [TypeScript Definitions](./api.d.ts) for full API details.

- Defining a Schema:
  ```javascript
  const schema = {
    name: "people",
    required: true,
    cardinality: "single",
    attributes: {},
    elements: {
      person: {
        name: "person",
        required: false,
        cardinality: "many",
        attributes: {
          eyeColor: {
            key: "eyeColor",
            required: false,
            value: ["grey", "blue", "green", "red"],
          },
        },
        elements: {
          name: {
            cardinality: "single",
            required: true,
            name: "name",
            attributes: {},
            elements: {},
          },
        },
      },
    },
  };
  ```
- A Simple XML Text
  ```javascript
  // A Sample XML Text
  const xmlText = `<people>
                         <person eyeColor="violet">
                           <name>Daenerys Targaryen</name>
                         </person>
                      </people>`;
  ```
- Performing Validations

  ```javascript
  const { parse } = require("@xml-tools/parser");
  const { buildAst } = require("@xml-tools/ast");
  const { validate } = require("@xml-tools/validation");
  const { getSchemaValidators } = require("@xml-tools/simple-schema");

  const { cst, tokenVector } = parse(xmlText);
  const xmlDoc = buildAst(cst, tokenVector);
  const schemaValidators = getSchemaValidators(schema);
  const issues = validate({
    doc: xmlDoc,
    validators: {
      attribute: [schemaValidators.attribute],
      element: [schemaValidators.element],
    },
  });

  console.log(issues[0].msg); // Expecting one of <grey,blue,green,red> but found <violet>
  console.log(issues[0].position); // { startOffset: 46, endOffset: 53 }
  ```

- Using Content Assist APIs

  ```javascript
  const { getSuggestions } = require("@xml-tools/content-assist");
  const { getSchemaSuggestionsProviders } = require("@xml-tools/simple-schema");

  const schemaSuggestionsProviders = getSchemaSuggestionsProviders(schema);

  const suggestions = getSuggestions({
    text: xmlText,
    offset: 47, // within the eyeColor quoted value
    providers: {
      attributeValue: [
        schemaSuggestionsProviders.schemaAttributeValueCompletion,
      ],
      attributeName: [schemaSuggestionsProviders.schemaAttributeNameCompletion],
      elementName: [schemaSuggestionsProviders.schemaElementNameCompletion],
    },
  });

  console.log(suggestions[0]); // { text: 'grey', label: 'grey' }
  console.log(suggestions[1]); // { text: 'blue', label: 'blue' }
  ```

## Support

Please open [issues](https://github.com/SAP/xml-tols/issues) on github.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

Copyright (c) 2019-2020 SAP SE or an SAP affiliate company. All rights reserved.
This file is licensed under the Apache Software License, v. 2 except as noted otherwise in the [LICENSE file](../../LICENSE).
