const { findNextTextualToken } = require("./find-next-textual-token");
const {
  isXMLNamespaceKey,
  getXMLNamespaceKeyPrefix,
} = require("./xml-ns-key.js");

module.exports = {
  findNextTextualToken: findNextTextualToken,
  isXMLNamespaceKey: isXMLNamespaceKey,
  getXMLNamespaceKeyPrefix: getXMLNamespaceKeyPrefix,
};
