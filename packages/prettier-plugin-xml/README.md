# @xml-tools/prettier-plugin-xml

A plugin for [Prettier](https://github.com/prettier/prettier) that offer an opinionated code formatter for UI5 views.

These are the options supported by the plugin, see the [Prettier documentation](https://prettier.io/docs/en/options.html) if you're not familiar:

| Name        | Default | Description                                                               | CLI Override          | API Override        |
| ----------- | ------- | ------------------------------------------------------------------------- | --------------------- | ------------------- |
| Print Width | `80`    | [See prettier docs](https://prettier.io/docs/en/options.html#print-width) | `--print-width <int>` | `printWidth: <int>` |
| Tab Width   | `2`     | [See prettier docs](https://prettier.io/docs/en/options.html#tab-width)   | `--tab-width <int>`   | `tabWidth: <int>`   |

## Installation

With npm:

- `npm install @xml-tools/prettier-plugin-xml --save-dev`

With Yarn

- `yarn add @xml-tools/prettier-plugin-xml --dev`

## Usage

### CLI

Installed Plugins are automatically detected by the prettier CLI.

- See [Relevant Documentation](https://prettier.io/docs/en/plugins.html#using-plugins)

### VSCode

The [Prettier VSCode extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
also automatically loads installed plugins.

## Support

Please open [issues](https://github.com/SAP/xml-tols/issues) on github.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
This file is licensed under the Apache Software License, v. 2 except as noted otherwise in the [LICENSE file](../../LICENSE).
