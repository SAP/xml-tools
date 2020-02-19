[![npm (scoped)](https://img.shields.io/npm/v/@xml-tools/lsp-server.svg)](https://www.npmjs.com/package/@xml-tools/lsp-server)

# @xml-tools/lsp-server

XML Language Server

Current Features:

- Syntax Diagnostics.

## Installation

With npm:

- `npm install @xml-tools/lsp-server`

With Yarn

- `yarn add @xml-tools/lsp-server`

## Usage

Please see the [TypeScript Definitions](./api.d.ts) for full API details.

A simple usage example:

```javascript
const { SERVER_PATH } = require("@xml-tools/lsp-server");

// SERVER_PATH is the only API currently and it is meant to expose the "main" module's absolute
// path which would then be executed in a different process
console.log(SERVER_PATH); // --> .../node_module/@xml-tools/lsp-server/lib/server.js
```

## Support

Please open [issues](https://github.com/SAP/xml-tols/issues) on github.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
This file is licensed under the Apache Software License, v. 2 except as noted otherwise in the [LICENSE file](../../LICENSE).
