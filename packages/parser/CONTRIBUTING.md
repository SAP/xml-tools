# Contribution Guide

This package does not have any unique development flows.
Please see the top level [Contribution Guide](../../CONTRIBUTING.md).

## SnapShot Testing

This package uses a SnapShot testing methodology similar to the one used [in Jest](https://jestjs.io/docs/en/snapshot-testing).
Except that in this case the SnapShots are used to test the expected CST result for a given XML text.

The reasoning behind this is that the CST is a complex and often verbose structure
and therefore it is not practical to manually perform assertions on every single nested property of a given CST.
Particularly as a small change to the Parser may break multiple CST related tests.

Instead we are comparing the changes/delta versus the previous (automatically created) expected outputs (snapshots).

- To update all the snapshots run: `yarn snapshots:update`.
- The above script is also needed when adding a new test case input.

Obviously we should not blindly update the snapshots to make the tests pass.
Instead every change(diff) in the snapshots must be manually reviewed to assert that no unexpected changes
have occurred to the expected output and that the Parser is behaving as expected.

## Coverage

The Coverage report for this package must be **examined carefully**.
Due to initialization logic in Chevrotain, Parser methods are **always** invoked in a ["recording mode"][chev_record]
during a Parser's constructor call.

This means that parsing methods will **always report 100% coverage**.
In order to ensure a **true 100%** coverage report we must manually inspect the html coverage report (in ./coverage)
and ensure that every statement inside a parsing method has been executed at least twice.

- The number of times a statement was executed appears in the "gutter" section of the html report.
  See the second picture on the [istanbul home page](https://istanbul.js.org/).

[chev_record]: https://sap.github.io/chevrotain/docs/guide/internals.html#grammar-recording
