const { parse: XMLParse } = require("@xml-tools/parser");
const { buildAst } = require("@xml-tools/ast");

const parse = (text, _parsers, _opts) => {
  const { cst, tokenVector } = XMLParse(text);
  const xmlDocAst = buildAst(cst, tokenVector);

  return xmlDocAst;
};

module.exports = parse;
