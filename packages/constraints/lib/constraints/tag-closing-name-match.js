/**
 * @param {XMLElement} elem
 * @returns {ValidationIssue[]}
 */
function validateTagClosingNameMatch(elem) {
  const openTagToken = elem.syntax.openName;
  const closeTagToken = elem.syntax.closeName;

  // The element tag must have **both** the opening and closing tokens
  // to be able to validate.
  if (!openTagToken || !closeTagToken) {
    return [];
  }

  // alles gut
  if (openTagToken.image === closeTagToken.image) {
    return [];
  } else {
    return [
      {
        msg: `opening tag: "${openTagToken.image}" must match closing tag: "${closeTagToken.image}"`,
        node: elem,
        severity: "error",
        position: {
          startOffset: openTagToken.startOffset,
          endOffset: openTagToken.endOffset,
        },
      },
      {
        msg: `closing tag: "${closeTagToken.image}" must match opening tag: "${openTagToken.image}"`,
        node: elem,
        severity: "error",
        position: {
          startOffset: closeTagToken.startOffset,
          endOffset: closeTagToken.endOffset,
        },
      },
    ];
  }
}

module.exports = {
  validateTagClosingNameMatch,
};
