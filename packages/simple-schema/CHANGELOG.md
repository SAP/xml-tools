# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.0.5](https://github.com/sap/xml-tools/compare/@xml-tools/simple-schema@3.0.4...@xml-tools/simple-schema@3.0.5) (2021-06-03)

**Note:** Version bump only for package @xml-tools/simple-schema

## [3.0.4](https://github.com/sap/xml-tools/compare/@xml-tools/simple-schema@3.0.3...@xml-tools/simple-schema@3.0.4) (2021-02-09)

**Note:** Version bump only for package @xml-tools/simple-schema

## [3.0.3](https://github.com/sap/xml-tools/compare/@xml-tools/simple-schema@3.0.2...@xml-tools/simple-schema@3.0.3) (2021-01-21)

**Note:** Version bump only for package @xml-tools/simple-schema

## [3.0.2](https://github.com/sap/xml-tools/compare/@xml-tools/simple-schema@3.0.1...@xml-tools/simple-schema@3.0.2) (2021-01-20)

### Bug Fixes

- missing lib folder in npm packages ([ffed3c2](https://github.com/sap/xml-tools/commit/ffed3c2c54c70aea8b9ded0d53786382bc190cc5))

## [3.0.1](https://github.com/sap/xml-tools/compare/@xml-tools/simple-schema@3.0.0...@xml-tools/simple-schema@3.0.1) (2021-01-20)

**Note:** Version bump only for package @xml-tools/simple-schema

# [3.0.0](https://github.com/sap/xml-tools/compare/@xml-tools/simple-schema@2.1.1...@xml-tools/simple-schema@3.0.0) (2020-06-29)

### Features

- **ast:** attribute inside a prolog are now of XMLPrologAttribute type ([#208](https://github.com/sap/xml-tools/issues/208)) ([a303db5](https://github.com/sap/xml-tools/commit/a303db5))

### BREAKING CHANGES

- **ast:** Vistors that need to handle attributes inside prolog must now implement the `visitPrologAttribute` method.

## [2.1.1](https://github.com/sap/xml-tools/compare/@xml-tools/simple-schema@2.1.0...@xml-tools/simple-schema@2.1.1) (2020-06-18)

**Note:** Version bump only for package @xml-tools/simple-schema

# [2.1.0](https://github.com/sap/xml-tools/compare/@xml-tools/simple-schema@2.0.11...@xml-tools/simple-schema@2.1.0) (2020-05-17)

### Features

- **common:** add utility functions for xmlns attributes ([#173](https://github.com/sap/xml-tools/issues/173)) ([20d6c09](https://github.com/sap/xml-tools/commit/20d6c09))

## [2.0.11](https://github.com/sap/xml-tools/compare/@xml-tools/simple-schema@2.0.10...@xml-tools/simple-schema@2.0.11) (2020-05-05)

**Note:** Version bump only for package @xml-tools/simple-schema

## [2.0.10](https://github.com/sap/xml-tools/compare/@xml-tools/simple-schema@2.0.9...@xml-tools/simple-schema@2.0.10) (2020-04-02)

**Note:** Version bump only for package @xml-tools/simple-schema

## [2.0.9](https://github.com/sap/xml-tools/compare/@xml-tools/simple-schema@2.0.8...@xml-tools/simple-schema@2.0.9) (2020-02-19)

### Bug Fixes

- add npmignore file to each package ([5bbf209](https://github.com/sap/xml-tools/commit/5bbf209))

## [2.0.8](https://github.com/sap/xml-tools/compare/@xml-tools/simple-schema@2.0.7...@xml-tools/simple-schema@2.0.8) (2020-02-11)

**Note:** Version bump only for package @xml-tools/simple-schema

## [2.0.7](https://github.com/sap/xml-tools/compare/@xml-tools/simple-schema@2.0.6...@xml-tools/simple-schema@2.0.7) (2020-02-11)

### Bug Fixes

- remove extraneous prefix completion items ([#98](https://github.com/sap/xml-tools/issues/98)) ([9b52e70](https://github.com/sap/xml-tools/commit/9b52e70))

## [2.0.6](https://github.com/sap/xml-tools/compare/@xml-tools/simple-schema@2.0.4...@xml-tools/simple-schema@2.0.6) (2020-02-10)

**Note:** Version bump only for package @xml-tools/simple-schema

## [2.0.5](https://github.com/sap/xml-tools/compare/@xml-tools/simple-schema@2.0.4...@xml-tools/simple-schema@2.0.5) (2020-02-07)

**Note:** Version bump only for package @xml-tools/simple-schema

## [2.0.4](https://github.com/sap/xml-tools/compare/@xml-tools/simple-schema@2.0.3...@xml-tools/simple-schema@2.0.4) (2020-02-06)

**Note:** Version bump only for package @xml-tools/simple-schema

## [2.0.3](https://github.com/sap/xml-tools/compare/@xml-tools/simple-schema@2.0.2...@xml-tools/simple-schema@2.0.3) (2020-02-06)

**Note:** Version bump only for package @xml-tools/simple-schema

## [2.0.2](https://github.com/sap/xml-tools/compare/@xml-tools/simple-schema@2.0.1...@xml-tools/simple-schema@2.0.2) (2020-01-28)

**Note:** Version bump only for package @xml-tools/simple-schema

## [2.0.1](https://github.com/sap/xml-tools/compare/@xml-tools/simple-schema@2.0.0...@xml-tools/simple-schema@2.0.1) (2020-01-20)

**Note:** Version bump only for package @xml-tools/simple-schema

# [2.0.0](https://github.com/sap/xml-tools/compare/@xml-tools/simple-schema@1.0.0...@xml-tools/simple-schema@2.0.0) (2019-12-18)

### Features

- **content-assist:** decouple content assist from parsing ([#58](https://github.com/sap/xml-tools/issues/58)) ([3688da8](https://github.com/sap/xml-tools/commit/3688da8))

### BREAKING CHANGES

- **content-assist:** getSuggestions now uses ast, cst and tokenVector instead of text

# [1.0.0](https://github.com/sap/xml-tools/compare/@xml-tools/simple-schema@0.0.7...@xml-tools/simple-schema@1.0.0) (2019-12-08)

### Features

- **ast:** attributesRange and guessedAttributeRange support ([8ce840d](https://github.com/sap/xml-tools/commit/8ce840d)), closes [#51](https://github.com/sap/xml-tools/issues/51)

### BREAKING CHANGES

- **ast:** buildAst now requires a tokenVector argument

## [0.0.7](https://github.com/sap/xml-tools/compare/@xml-tools/simple-schema@0.0.6...@xml-tools/simple-schema@0.0.7) (2019-12-05)

**Note:** Version bump only for package @xml-tools/simple-schema

## [0.0.6](https://github.com/sap/xml-tools/compare/@xml-tools/simple-schema@0.0.5...@xml-tools/simple-schema@0.0.6) (2019-12-05)

### Bug Fixes

- **simple-schema:** duplicate element error ([f434af8](https://github.com/sap/xml-tools/commit/f434af8))

## [0.0.5](https://github.com/sap/xml-tools/compare/@xml-tools/simple-schema@0.0.4...@xml-tools/simple-schema@0.0.5) (2019-12-03)

### Bug Fixes

- api type definitions ([46d6c2c](https://github.com/sap/xml-tools/commit/46d6c2c))
- simple schema with xml namespaces ([#52](https://github.com/sap/xml-tools/issues/52)) ([bb0163e](https://github.com/sap/xml-tools/commit/bb0163e))

## [0.0.4](https://github.com/sap/xml-tools/compare/@xml-tools/simple-schema@0.0.3...@xml-tools/simple-schema@0.0.4) (2019-11-20)

**Note:** Version bump only for package @xml-tools/simple-schema

## [0.0.3](https://github.com/sap/xml-tools/compare/@xml-tools/simple-schema@0.0.2...@xml-tools/simple-schema@0.0.3) (2019-11-12)

### Bug Fixes

- **simple-schema:** fix Simple-Schema API for enumValue ([0e4fdd8](https://github.com/sap/xml-tools/commit/0e4fdd8))

## [0.0.2](https://github.com/sap/xml-tools/compare/@xml-tools/simple-schema@0.0.1...@xml-tools/simple-schema@0.0.2) (2019-11-11)

**Note:** Version bump only for package @xml-tools/simple-schema

## 0.0.1 (2019-11-11)

**Note:** Version bump only for package @xml-tools/simple-schema
