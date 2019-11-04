const { has, isRegExp, forEach, isArray } = require("lodash");

/**
 * @param {XMLAttribute} attributeNode
 * @param {XSSAttribute} xssAttribute
 * @param {string} prefix
 *
 * @returns {CompletionSuggestion[]}
 */
function attributeValueCompletion(attributeNode, xssAttribute, prefix = "") {
  // An XSS Attribute definition may not specify any constraints on a value
  if (has(xssAttribute, "value") === false) {
    return [];
  }

  const suggestions = [];
  const valueDef = xssAttribute.value;
  /* istanbul ignore else - defensive programming */
  if (isRegExp(valueDef)) {
    // No suggestions for regExp value definitions...
  } else if (isArray(valueDef)) {
    forEach(valueDef, enumVal => {
      if (enumVal.startsWith(prefix)) {
        suggestions.push({
          text: enumVal.substring(prefix.length),
          label: enumVal
        });
      }
    });
  } else {
    /* istanbul ignore next  defensive programming */
    throw Error("None Exhaustive Match");
  }

  return suggestions;
}

module.exports = {
  attributeValueCompletion: attributeValueCompletion
};
