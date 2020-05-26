const { pick } = require("lodash");

function tokenToOffsetPosition(token) {
  return pick(token, ["startOffset", "endOffset"]);
}

module.exports = {
  tokenToOffsetPosition: tokenToOffsetPosition,
};
