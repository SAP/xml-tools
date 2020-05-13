// The xml parser takes care of validating the attribute name.
// If the user started the attribute name with "xmlns:" we can assume that
// they meant for it to be an xml namespace attribute.
// xmlns attributes explicitly can't contain ":" after the "xmlns:" part.
const namespaceRegex = /^xmlns(?<prefixWithColon>:(?<prefix>[^:]*))?$/;

function isXMLNamespaceKey(key, includeEmptyPrefix) {
  if (typeof key !== "string") {
    return false;
  }
  const matchArr = key.match(namespaceRegex);
  if (matchArr === null) {
    return false;
  }
  if (includeEmptyPrefix === true) {
    return true;
  }
  /* istanbul ignore next - defensive coding */
  const groups = matchArr.groups || {};
  // In the case where key === "xmlns:", prefix will be empty and prefixWithColon will not be empty
  return !(groups.prefixWithColon && !groups.prefix);
}

function getXMLNamespaceKeyPrefix(key) {
  if (typeof key !== "string") {
    return undefined;
  }
  const matchArr = key.match(namespaceRegex);
  if (matchArr === null) {
    return undefined;
  }
  return (matchArr.groups && matchArr.groups.prefix) || "";
}

module.exports = {
  isXMLNamespaceKey: isXMLNamespaceKey,
  getXMLNamespaceKeyPrefix: getXMLNamespaceKeyPrefix
};
