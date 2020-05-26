// The xml parser takes care of validating the attribute name.
// If the user started the attribute name with "xmlns:" we can assume that
// they meant for it to be an xml namespace attribute.
// xmlns attributes explicitly can't contain ":" after the "xmlns:" part.
const namespaceRegex = /^xmlns(?<prefixWithColon>:(?<prefix>[^:]*))?$/;

/**
 * See comment in api.d.ts.
 *
 * @param {string} key
 * @param {boolean} includeEmptyPrefix
 * @returns {boolean}
 */
function isXMLNamespaceKey({ key, includeEmptyPrefix }) {
  if (typeof key !== "string") {
    return false;
  }
  const matchArr = key.match(namespaceRegex);

  // No match - this is not an xmlns key
  if (matchArr === null) {
    return false;
  }

  return !!(
    includeEmptyPrefix === true ||
    // "xmlns" case
    !matchArr.groups.prefixWithColon ||
    // "xmlns:<prefix>" case
    matchArr.groups.prefix
  );
}

/**
 * See comment in api.d.ts.
 *
 * @param {string} key
 * @returns {string|undefined}
 */
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
  getXMLNamespaceKeyPrefix: getXMLNamespaceKeyPrefix,
};
