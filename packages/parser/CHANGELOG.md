# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.0.6](https://github.com/sap/xml-tools/compare/@xml-tools/parser@1.0.5...@xml-tools/parser@1.0.6) (2020-06-18)

**Note:** Version bump only for package @xml-tools/parser

## [1.0.5](https://github.com/sap/xml-tools/compare/@xml-tools/parser@1.0.4...@xml-tools/parser@1.0.5) (2020-05-17)

**Note:** Version bump only for package @xml-tools/parser

## [1.0.4](https://github.com/sap/xml-tools/compare/@xml-tools/parser@1.0.3...@xml-tools/parser@1.0.4) (2020-04-02)

**Note:** Version bump only for package @xml-tools/parser

## [1.0.3](https://github.com/sap/xml-tools/compare/@xml-tools/parser@1.0.2...@xml-tools/parser@1.0.3) (2020-02-19)

### Bug Fixes

- add npmignore file to each package ([5bbf209](https://github.com/sap/xml-tools/commit/5bbf209))

## [1.0.2](https://github.com/sap/xml-tools/compare/@xml-tools/parser@1.0.1...@xml-tools/parser@1.0.2) (2020-02-11)

### Bug Fixes

- **parser:** names may start with an underscore '\_' ([#103](https://github.com/sap/xml-tools/issues/103)) ([63dfd8f](https://github.com/sap/xml-tools/commit/63dfd8f))

## [1.0.1](https://github.com/sap/xml-tools/compare/@xml-tools/parser@1.0.0...@xml-tools/parser@1.0.1) (2020-01-28)

### Bug Fixes

- **parser:** allow CData nodes to be multi-line ([#89](https://github.com/sap/xml-tools/issues/89)) ([2b2fbfb](https://github.com/sap/xml-tools/commit/2b2fbfb))

# [1.0.0](https://github.com/sap/xml-tools/compare/@xml-tools/parser@0.4.0...@xml-tools/parser@1.0.0) (2020-01-20)

### Features

- **parser:** support Basic DocType Declarations ([5b4db21](https://github.com/sap/xml-tools/commit/5b4db21))

### BREAKING CHANGES

- **parser:** Implementing XmlCstVisitor now requires implementing two additional methods:
  (docTypeDecl and externalID)

# [0.4.0](https://github.com/sap/xml-tools/compare/@xml-tools/parser@0.3.4...@xml-tools/parser@0.4.0) (2019-11-20)

### Bug Fixes

- **parser:** parsing for multi-line comments ([#46](https://github.com/sap/xml-tools/issues/46)) ([4970e9a](https://github.com/sap/xml-tools/commit/4970e9a))

### Features

- **parser:** expose The Token Vector on the parse result ([31d50f3](https://github.com/sap/xml-tools/commit/31d50f3))

## [0.3.4](https://github.com/sap/xml-tools/compare/@xml-tools/parser@0.3.3...@xml-tools/parser@0.3.4) (2019-11-12)

### Bug Fixes

- **parser:** fix Lexing of XML processing instructions ([2c503b4](https://github.com/sap/xml-tools/commit/2c503b4))

## [0.3.3](https://github.com/sap/xml-tools/compare/@xml-tools/parser@0.3.2...@xml-tools/parser@0.3.3) (2019-11-11)

### Bug Fixes

- more CST Visitor API fixes ([89d1cef](https://github.com/sap/xml-tools/commit/89d1cef))

## [0.3.2](https://github.com/sap/xml-tools/compare/@xml-tools/parser@0.3.1...@xml-tools/parser@0.3.2) (2019-11-11)

### Bug Fixes

- cST Visitor method's Params Type fix ([a0a0e2d](https://github.com/sap/xml-tools/commit/a0a0e2d))

## [0.3.1](https://github.com/sap/xml-tools/compare/@xml-tools/parser@0.3.0...@xml-tools/parser@0.3.1) (2019-11-06)

**Note:** Version bump only for package @xml-tools/parser

# 0.3.0 (2019-10-28)

### Features

- move to lerna independent mode ([6c347a8](https://github.com/sap/xml-tools/commit/6c347a8)), closes [#18](https://github.com/sap/xml-tools/issues/18)

# 0.2.0 (2019-10-28)

# 0.1.0 (2019-10-28)
