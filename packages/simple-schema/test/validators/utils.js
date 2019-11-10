const { parse } = require("@xml-tools/parser");
const { buildAst } = require("@xml-tools/ast");
const { validate } = require("@xml-tools/validation");
const { getSchemaValidators } = require("../../");

/**
 *
 * @param {string} xmlText
 * @param {SimpleSchema} schema
 * @returns {ValidationIssue[] | *}
 */
function validateBySchema(xmlText, schema) {
  const { cst } = parse(xmlText);
  const xmlDoc = buildAst(cst);
  const schemaValidators = getSchemaValidators(schema);
  const issues = validate({
    doc: xmlDoc,
    validators: {
      attribute: [schemaValidators.attribute],
      element: [schemaValidators.element]
    }
  });
  return issues;
}

module.exports = {
  validateBySchema: validateBySchema
};
