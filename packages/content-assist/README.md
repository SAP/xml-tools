[![npm (scoped)](https://img.shields.io/npm/v/@xml-tools/content-assist.svg)](https://www.npmjs.com/package/@xml-tools/content-assist)

# @xml-tools/content-assist

APIs which assist in implementing content assist (auto-complete) logic for XML.
This package handles the identification of the specific content assist **scenario and context**.
Given this scenario & context information a user of this package can then implement
their custom content assist logic.

For example:

Given the following XML and a content assist request at the `⇶` sign:

```xml
<note>
  <address city="New ⇶"/>
  <to/>
  <from/>
</note>
```

A **Attribute Value** content assist scenario would be identified.
With a **prefix** `New` and references to the ASTNodes
of the relevant attribute(city) and the containing element (address).

- Note that an ASTNode possesses a `parent` property, so the full structure is accessible.

## Installation

With npm:

- `npm install @xml-tools/content-assist`

With Yarn

- `yarn add @xml-tools/content-assist`

## Usage

Please see the [TypeScript Definitions](./api.d.ts) for full API details.

A simple usage example:

```javascript
const { parse } = require("xml-tools/parser");
const { buildAst } = require("xml-tools/ast");
const { getSuggestions } = require("xml-tools/content-assist");

const xmlText = `<note>
                     <to>Bill</to>
                     <ad
                     <from>Bill</to>
                 </note>
`;

// A-lot of contextual information is needed to compute the content assist context.
const { cst, tokenVector } = parse(xmlText);
const xmlDocAst = buildAst(cst, tokenVector);

const suggestions = getSuggestions({
  ast: xmlDocAst,
  cst: cst,
  tokVector: tokenVector,
  offset: 66, // Right after the '<ad` element start.
  providers: {
    // 1. There are more types(scenarios) of suggestions providers (see api.d.ts)
    // 2. Multiple providers may be supplied for a single scenario.
    elementName: [
      ({ element, prefix }) => {
        const suggestions = [];
        if (element.parent.name === "note" && "address".startsWith(prefix)) {
          suggestions.push({
            text: "address".slice(prefix.length),
            label: "address",
          });
        }
        return suggestions;
      },
    ],
  },
});

console.log(suggestions[0].text); // -> dress
```

## Support

Please open [issues](https://github.com/SAP/xml-tols/issues) on github.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

Copyright (c) 2019-2020 SAP SE or an SAP affiliate company. All rights reserved.
This file is licensed under the Apache Software License, v. 2 except as noted otherwise in the [LICENSE file](../../LICENSE).

[ast]: https://en.wikipedia.org/wiki/Abstract_syntax_tree
