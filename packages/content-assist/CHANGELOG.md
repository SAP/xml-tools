# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.1.10](https://github.com/sap/xml-tools/compare/@xml-tools/content-assist@3.1.9...@xml-tools/content-assist@3.1.10) (2021-02-09)

**Note:** Version bump only for package @xml-tools/content-assist

## [3.1.9](https://github.com/sap/xml-tools/compare/@xml-tools/content-assist@3.1.8...@xml-tools/content-assist@3.1.9) (2021-01-20)

### Bug Fixes

- missing lib folder in npm packages ([ffed3c2](https://github.com/sap/xml-tools/commit/ffed3c2c54c70aea8b9ded0d53786382bc190cc5))

## [3.1.8](https://github.com/sap/xml-tools/compare/@xml-tools/content-assist@3.1.7...@xml-tools/content-assist@3.1.8) (2021-01-20)

**Note:** Version bump only for package @xml-tools/content-assist

## [3.1.7](https://github.com/sap/xml-tools/compare/@xml-tools/content-assist@3.1.6...@xml-tools/content-assist@3.1.7) (2020-06-29)

**Note:** Version bump only for package @xml-tools/content-assist

## [3.1.6](https://github.com/sap/xml-tools/compare/@xml-tools/content-assist@3.1.5...@xml-tools/content-assist@3.1.6) (2020-06-18)

**Note:** Version bump only for package @xml-tools/content-assist

## [3.1.5](https://github.com/sap/xml-tools/compare/@xml-tools/content-assist@3.1.4...@xml-tools/content-assist@3.1.5) (2020-05-17)

**Note:** Version bump only for package @xml-tools/content-assist

## [3.1.4](https://github.com/sap/xml-tools/compare/@xml-tools/content-assist@3.1.3...@xml-tools/content-assist@3.1.4) (2020-04-02)

**Note:** Version bump only for package @xml-tools/content-assist

## [3.1.3](https://github.com/sap/xml-tools/compare/@xml-tools/content-assist@3.1.2...@xml-tools/content-assist@3.1.3) (2020-02-19)

### Bug Fixes

- add npmignore file to each package ([5bbf209](https://github.com/sap/xml-tools/commit/5bbf209))

## [3.1.2](https://github.com/sap/xml-tools/compare/@xml-tools/content-assist@3.1.1...@xml-tools/content-assist@3.1.2) (2020-02-11)

**Note:** Version bump only for package @xml-tools/content-assist

## [3.1.1](https://github.com/sap/xml-tools/compare/@xml-tools/content-assist@3.1.0...@xml-tools/content-assist@3.1.1) (2020-02-10)

**Note:** Version bump only for package @xml-tools/content-assist

# [3.1.0](https://github.com/sap/xml-tools/compare/@xml-tools/content-assist@3.0.2...@xml-tools/content-assist@3.1.0) (2020-02-06)

### Bug Fixes

- **content-assist:** avoid breaking changes with new `context` arg ([c7bbdc2](https://github.com/sap/xml-tools/commit/c7bbdc2))

### Features

- **content-assist:** support optional `context` arg in `getSuggestions` ([6e5a228](https://github.com/sap/xml-tools/commit/6e5a228))

## [3.0.2](https://github.com/sap/xml-tools/compare/@xml-tools/content-assist@3.0.1...@xml-tools/content-assist@3.0.2) (2020-02-06)

**Note:** Version bump only for package @xml-tools/content-assist

## [3.0.1](https://github.com/sap/xml-tools/compare/@xml-tools/content-assist@3.0.0...@xml-tools/content-assist@3.0.1) (2020-01-28)

**Note:** Version bump only for package @xml-tools/content-assist

# [3.0.0](https://github.com/sap/xml-tools/compare/@xml-tools/content-assist@2.0.0...@xml-tools/content-assist@3.0.0) (2020-01-20)

### Features

- **parser:** support Basic DocType Declarations ([5b4db21](https://github.com/sap/xml-tools/commit/5b4db21))

### BREAKING CHANGES

- **parser:** Implementing XmlCstVisitor now requires implementing two additional methods:
  (docTypeDecl and externalID)

# [2.0.0](https://github.com/sap/xml-tools/compare/@xml-tools/content-assist@1.0.0...@xml-tools/content-assist@2.0.0) (2019-12-18)

### Bug Fixes

- **content-assist:** crash with invalid xml ([#57](https://github.com/sap/xml-tools/issues/57)) ([774c623](https://github.com/sap/xml-tools/commit/774c623))

### Features

- **content-assist:** decouple content assist from parsing ([#58](https://github.com/sap/xml-tools/issues/58)) ([3688da8](https://github.com/sap/xml-tools/commit/3688da8))

### BREAKING CHANGES

- **content-assist:** getSuggestions now uses ast, cst and tokenVector instead of text

# [1.0.0](https://github.com/sap/xml-tools/compare/@xml-tools/content-assist@0.4.2...@xml-tools/content-assist@1.0.0) (2019-12-08)

### Features

- **ast:** attributesRange and guessedAttributeRange support ([8ce840d](https://github.com/sap/xml-tools/commit/8ce840d)), closes [#51](https://github.com/sap/xml-tools/issues/51)

### BREAKING CHANGES

- **ast:** buildAst now requires a tokenVector argument

## [0.4.2](https://github.com/sap/xml-tools/compare/@xml-tools/content-assist@0.4.1...@xml-tools/content-assist@0.4.2) (2019-12-05)

**Note:** Version bump only for package @xml-tools/content-assist

## [0.4.1](https://github.com/sap/xml-tools/compare/@xml-tools/content-assist@0.4.0...@xml-tools/content-assist@0.4.1) (2019-12-03)

### Bug Fixes

- simple schema with xml namespaces ([#52](https://github.com/sap/xml-tools/issues/52)) ([bb0163e](https://github.com/sap/xml-tools/commit/bb0163e))

# [0.4.0](https://github.com/sap/xml-tools/compare/@xml-tools/content-assist@0.3.6...@xml-tools/content-assist@0.4.0) (2019-11-20)

### Features

- **content assist:** improved attributes keys content assist ([3d3b7c2](https://github.com/sap/xml-tools/commit/3d3b7c2)), closes [#42](https://github.com/sap/xml-tools/issues/42)

## [0.3.6](https://github.com/sap/xml-tools/compare/@xml-tools/content-assist@0.3.5...@xml-tools/content-assist@0.3.6) (2019-11-12)

**Note:** Version bump only for package @xml-tools/content-assist

## [0.3.5](https://github.com/sap/xml-tools/compare/@xml-tools/content-assist@0.3.4...@xml-tools/content-assist@0.3.5) (2019-11-11)

**Note:** Version bump only for package @xml-tools/content-assist

## [0.3.4](https://github.com/sap/xml-tools/compare/@xml-tools/content-assist@0.3.3...@xml-tools/content-assist@0.3.4) (2019-11-11)

**Note:** Version bump only for package @xml-tools/content-assist

## [0.3.3](https://github.com/sap/xml-tools/compare/@xml-tools/content-assist@0.3.2...@xml-tools/content-assist@0.3.3) (2019-11-06)

**Note:** Version bump only for package @xml-tools/content-assist

## [0.3.2](https://github.com/sap/xml-tools/compare/@xml-tools/content-assist@0.3.1...@xml-tools/content-assist@0.3.2) (2019-11-06)

**Note:** Version bump only for package @xml-tools/content-assist

## [0.3.1](https://github.com/sap/xml-tools/compare/@xml-tools/content-assist@0.3.0...@xml-tools/content-assist@0.3.1) (2019-10-29)

### Bug Fixes

- content Assist - ElementContents bug fixes ([1eba20a](https://github.com/sap/xml-tools/commit/1eba20a)), closes [#15](https://github.com/sap/xml-tools/issues/15) [#16](https://github.com/sap/xml-tools/issues/16)

# 0.3.0 (2019-10-28)

### Features

- move to lerna independent mode ([6c347a8](https://github.com/sap/xml-tools/commit/6c347a8)), closes [#18](https://github.com/sap/xml-tools/issues/18)

# 0.2.0 (2019-10-28)

# 0.1.0 (2019-10-28)
