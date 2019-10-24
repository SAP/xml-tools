const { buildAst } = require("./build-ast");
const { accept } = require("./visit-ast");

module.exports = {
  buildAst: buildAst,
  accept: accept
};
