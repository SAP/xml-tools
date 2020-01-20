# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
