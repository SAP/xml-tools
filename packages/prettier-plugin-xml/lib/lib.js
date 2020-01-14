const parse = require("./parse");
const print = require("./print");

module.exports = {
  languages: [
    {
      name: "xml",
      parsers: ["xml"],
      extensions: [".xml"],
      vscodeLanguageIds: ["xml"]
    }
  ],
  parsers: {
    xml: {
      parse,
      astFormat: "xml"
    }
  },
  printers: {
    xml: {
      print
    }
  },
  options: {},
  defaultOptions: {
    printWidth: 80,
    tabWidth: 2
  }
};
