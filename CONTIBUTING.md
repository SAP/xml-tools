# Contribution Guide

This is the common top level contribution guide for this mono-repo.
See each individual package's CONTRIBUTING.md for package specific details.

## Legal

All contributors must sign the CLA

- https://cla-assistant.io/SAP/xml-tools

This is managed automatically via https://cla-assistant.io/ pull request voter.

## Development Environment

### pre-requisites

- [Yarn](https://yarnpkg.com/lang/en/docs/install/) >= 1.4.2
  - Yarn rather than npm is needed as this mono-repo uses [yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/).
- A [maintained version](https://nodejs.org/en/about/releases/) of node.js
  - This package is targeted and tested on modern/supported versions of node.js only.
    Which means 8/10/12/13 at the time of writing this document.

### Initial Setup

The initial setup is trivial:

- clone this repo
- `yarn`

### Formatting.

[Prettier](https://prettier.io/) is used to ensure consistent code formatting in this repository.
This is normally transparent as it automatically activated in a pre-commit hook using [lint-staged](https://github.com/okonet/lint-staged).
However this does mean that dev flows that do not use a full dev env (e.g editing directly on github)
may result in voter failures due to formatting errors.

### Testing

[Mocha][mocha] is used for unit-testing and [Istanbul/Nyc][istanbul] for coverage reports.
Jest was avoided due to increased total tests execution time due to running the tests in multiple processes,
as the Parser initialization (which happens once per process) can take 10-20ms.

[mocha]: https://mochajs.org/
[istanbul]: https://istanbul.js.org/

### Release Life-Cycle.

This monorepo uses Lerna's [Fixed/Locked][lerna-fixed] mode to link sub packages versions.

[lerna-fixed]: https://github.com/lerna/lerna#fixedlocked-mode-default

### Release Process

Performing a release requires push permissions to the repository.

- Update the CHANGELOG.md files for all changed packages.
  - Include a version number and date.
- Commit pre release changes to master.
- `yarn run lerna:version`
- Follow the lerna CLI instruction and choose a new version mode matching the version number
  chosen in step one (CHANGELOG.md).
- Track the relevant tag build on circle-ci.
  - https://circleci.com/gh/SAP/xml-tools.
- Once the tag build has finished successfully inspect the npm registry to see the new version
  for all the changed packages of this mono-repo.
  - `npm view [package-name] version`
