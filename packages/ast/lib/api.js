const { buildAst } = require("./build-ast");
const { accept } = require("./visit-ast");
const { DEFAULT_NS } = require("./constants");

module.exports = {
  buildAst: buildAst,
  accept: accept,
  DEFAULT_NS: DEFAULT_NS
};
