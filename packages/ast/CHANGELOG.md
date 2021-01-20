# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [5.0.2](https://github.com/sap/xml-tools/compare/@xml-tools/ast@5.0.1...@xml-tools/ast@5.0.2) (2021-01-20)

**Note:** Version bump only for package @xml-tools/ast

## [5.0.1](https://github.com/sap/xml-tools/compare/@xml-tools/ast@5.0.0...@xml-tools/ast@5.0.1) (2021-01-20)

**Note:** Version bump only for package @xml-tools/ast

# [5.0.0](https://github.com/sap/xml-tools/compare/@xml-tools/ast@4.2.1...@xml-tools/ast@5.0.0) (2020-06-29)

### Features

- **ast:** attribute inside a prolog are now of XMLPrologAttribute type ([#208](https://github.com/sap/xml-tools/issues/208)) ([a303db5](https://github.com/sap/xml-tools/commit/a303db5))

### BREAKING CHANGES

- **ast:** Vistors that need to handle attributes inside prolog must now implement the `visitPrologAttribute` method.

## [4.2.1](https://github.com/sap/xml-tools/compare/@xml-tools/ast@4.2.0...@xml-tools/ast@4.2.1) (2020-06-18)

**Note:** Version bump only for package @xml-tools/ast

# [4.2.0](https://github.com/sap/xml-tools/compare/@xml-tools/ast@4.1.0...@xml-tools/ast@4.2.0) (2020-05-17)

### Features

- **common:** add utility functions for xmlns attributes ([#173](https://github.com/sap/xml-tools/issues/173)) ([20d6c09](https://github.com/sap/xml-tools/commit/20d6c09))

# [4.1.0](https://github.com/sap/xml-tools/compare/@xml-tools/ast@4.0.3...@xml-tools/ast@4.1.0) (2020-05-05)

### Features

- **ast:** added `.syntax.isSelfClosing` property on an XMLElement node ([#164](https://github.com/sap/xml-tools/issues/164)) ([bfc448b](https://github.com/sap/xml-tools/commit/bfc448b))

## [4.0.3](https://github.com/sap/xml-tools/compare/@xml-tools/ast@4.0.2...@xml-tools/ast@4.0.3) (2020-04-02)

**Note:** Version bump only for package @xml-tools/ast

## [4.0.2](https://github.com/sap/xml-tools/compare/@xml-tools/ast@4.0.1...@xml-tools/ast@4.0.2) (2020-02-19)

### Bug Fixes

- add npmignore file to each package ([5bbf209](https://github.com/sap/xml-tools/commit/5bbf209))

## [4.0.1](https://github.com/sap/xml-tools/compare/@xml-tools/ast@4.0.0...@xml-tools/ast@4.0.1) (2020-02-11)

**Note:** Version bump only for package @xml-tools/ast

# [4.0.0](https://github.com/sap/xml-tools/compare/@xml-tools/ast@2.0.1...@xml-tools/ast@4.0.0) (2020-02-10)

### Features

- **ast:** element Namespaces are now represented as Records in a Map ([f9f6fdc](https://github.com/sap/xml-tools/commit/f9f6fdc))

### BREAKING CHANGES

- **ast:** The `namespaces` property of an XMLElement is now a Map/Dictionary not an Array.

# [3.0.0](https://github.com/sap/xml-tools/compare/@xml-tools/ast@2.0.1...@xml-tools/ast@3.0.0) (2020-02-07)

### Features

- **ast:** element Namespaces are now represented as Records in a Map ([f9f6fdc](https://github.com/sap/xml-tools/commit/f9f6fdc))

### BREAKING CHANGES

- **ast:** The `namespaces` property of an XMLElement is now a Map/Dictionary not an Array.

## [2.0.1](https://github.com/sap/xml-tools/compare/@xml-tools/ast@2.0.0...@xml-tools/ast@2.0.1) (2020-01-28)

**Note:** Version bump only for package @xml-tools/ast

# [2.0.0](https://github.com/sap/xml-tools/compare/@xml-tools/ast@1.0.0...@xml-tools/ast@2.0.0) (2020-01-20)

### Features

- **parser:** support Basic DocType Declarations ([5b4db21](https://github.com/sap/xml-tools/commit/5b4db21))

### BREAKING CHANGES

- **parser:** Implementing XmlCstVisitor now requires implementing two additional methods:
  (docTypeDecl and externalID)

# [1.0.0](https://github.com/sap/xml-tools/compare/@xml-tools/ast@0.5.0...@xml-tools/ast@1.0.0) (2019-12-08)

### Features

- **ast:** attributesRange and guessedAttributeRange support ([8ce840d](https://github.com/sap/xml-tools/commit/8ce840d)), closes [#51](https://github.com/sap/xml-tools/issues/51)

### BREAKING CHANGES

- **ast:** buildAst now requires a tokenVector argument

# [0.5.0](https://github.com/sap/xml-tools/compare/@xml-tools/ast@0.4.6...@xml-tools/ast@0.5.0) (2019-12-05)

### Features

- better Handling of Open/Close Body ranges ([0751a7e](https://github.com/sap/xml-tools/commit/0751a7e))

## [0.4.6](https://github.com/sap/xml-tools/compare/@xml-tools/ast@0.4.5...@xml-tools/ast@0.4.6) (2019-12-03)

**Note:** Version bump only for package @xml-tools/ast

## [0.4.5](https://github.com/sap/xml-tools/compare/@xml-tools/ast@0.4.4...@xml-tools/ast@0.4.5) (2019-11-20)

**Note:** Version bump only for package @xml-tools/ast

## [0.4.4](https://github.com/sap/xml-tools/compare/@xml-tools/ast@0.4.3...@xml-tools/ast@0.4.4) (2019-11-12)

**Note:** Version bump only for package @xml-tools/ast

## [0.4.3](https://github.com/sap/xml-tools/compare/@xml-tools/ast@0.4.2...@xml-tools/ast@0.4.3) (2019-11-11)

**Note:** Version bump only for package @xml-tools/ast

## [0.4.2](https://github.com/sap/xml-tools/compare/@xml-tools/ast@0.4.1...@xml-tools/ast@0.4.2) (2019-11-11)

**Note:** Version bump only for package @xml-tools/ast

## [0.4.1](https://github.com/sap/xml-tools/compare/@xml-tools/ast@0.4.0...@xml-tools/ast@0.4.1) (2019-11-06)

### Bug Fixes

- new property added to ast interface ([#35](https://github.com/sap/xml-tools/issues/35)) ([d7fd672](https://github.com/sap/xml-tools/commit/d7fd672))

# [0.4.0](https://github.com/sap/xml-tools/compare/@xml-tools/ast@0.3.0...@xml-tools/ast@0.4.0) (2019-11-06)

### Features

- open tag body range added ([#34](https://github.com/sap/xml-tools/issues/34)) ([5414111](https://github.com/sap/xml-tools/commit/5414111))

# 0.3.0 (2019-10-28)

### Features

- move to lerna independent mode ([6c347a8](https://github.com/sap/xml-tools/commit/6c347a8)), closes [#18](https://github.com/sap/xml-tools/issues/18)

# 0.2.0 (2019-10-28)

# 0.1.0 (2019-10-28)
