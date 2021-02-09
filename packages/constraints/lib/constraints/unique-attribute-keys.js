const { groupBy, pickBy, reduce, map, filter } = require("lodash");

/**
 * @param {XMLElement} elem
 * @returns {ValidationIssue[]}
 */
function validateUniqueAttributeKeys(elem) {
  const attributesWithKeys = filter(elem.attributes, (_) => _.key !== null);
  const attribByKey = groupBy(attributesWithKeys, "key");
  const nonUniqueAttribsGroups = pickBy(attribByKey, (_) => _.length > 1);
  const nonUniqueAttribs = reduce(
    nonUniqueAttribsGroups,
    (result, attribsGroup) => result.concat(attribsGroup),
    []
  );

  const validationIssues = map(nonUniqueAttribs, (_) => {
    // the `key` is guaranteed to exist because we have filtered above
    // for attributes with valid keys
    const keyToken = _.syntax.key;
    return {
      msg: `duplicate attribute: "${_.key}"`,
      node: _,
      severity: "error",
      position: {
        startOffset: keyToken.startOffset,
        endOffset: keyToken.endOffset,
      },
    };
  });

  return validationIssues;
}

module.exports = {
  validateUniqueAttributeKeys,
};
