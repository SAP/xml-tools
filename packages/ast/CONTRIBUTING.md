# Contribution Guide

Please see the top level [Contribution Guide](../../CONTRIBUTING.md) for common dev flows.

## SnapShot Testing

This package uses a SnapShot testing methodology similar to the one used [in Jest](https://jestjs.io/docs/en/snapshot-testing).
Except that in this case the SnapShots are used to test the expected AST result for a given XML text.

The reasoning behind this is that the AST is a complex and often verbose structure
and therefore it is not practical to manually perform assertions on every single nested property of a given AST.
Particularly as a small change to the AST builder may cause multiple tests to fail, e.g:

- renaming one of the properties of an XMLElement ASTNode.

Instead we are comparing the changes to automatically created expected outputs (snapshots).

- To update all the snapshots run: `yarn snapshots:update`.
- The above script is also needed when adding a new test case input.

Obviously we should not blindly update the snapshots to make the tests pass.
Instead every change(diff) in the snapshots must be manually reviewed to assert that no unexpected changes
have occurred to the expected output and that the AST Builder is behaving as expected.
