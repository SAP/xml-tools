const { findIndex } = require("lodash");

function findNextTextualToken(tokenVector, prevTokenEndOffset) {
  // The TokenVector is sorted, so we could use a BinarySearch to optimize performance
  const prevTokenIdx = findIndex(
    tokenVector,
    (tok) => tok.endOffset === prevTokenEndOffset
  );
  let nextTokenIdx = prevTokenIdx;
  let found = false;
  while (found === false) {
    nextTokenIdx++;
    const nextPossibleToken = tokenVector[nextTokenIdx];
    // No Next textualToken
    if (nextPossibleToken === undefined) {
      return null;
    }
    /* istanbul ignore next
     * I don't think this scenario can be created, however defensive coding never killed anyone...
     * Basically SEA_WS can only only appear in "OUTSIDE" mode, and we need a CLOSE/SLASH_CLOSE to get back to outside
     * mode, however if we had those  this function would never have been called...
     */
    if (nextPossibleToken.tokenType.name === "SEA_WS") {
      // skip pure WS tokens as they do not contain any actual text
    } else {
      return nextPossibleToken;
    }
  }
}

module.exports = {
  findNextTextualToken: findNextTextualToken,
};
