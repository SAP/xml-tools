const { getSchemaValidators } = require("./get-validators");
const { getSchemaSuggestionsProviders } = require("./get-content-assist");

module.exports = {
  getSchemaValidators: getSchemaValidators,
  getSchemaSuggestionsProviders: getSchemaSuggestionsProviders,
};
