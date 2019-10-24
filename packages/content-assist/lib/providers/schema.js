function createSchemaProvider(schema) {
  return function provideSuggestions(ctx) {};
}

module.exports = {
  create: createSchemaProvider
};
