const { defaultsDeep, flatMap } = require("lodash");

const { computeCompletionSyntacticContext } = require("./content-assist");

function getSuggestions(options) {
  const actualOptions = defaultsDeep(options, {
    providers: {
      elementContent: [],
      elementName: [],
      attributeName: [],
      attributeValue: [],
    },
    context: undefined,
  });

  let { providerType, providerArgs } = computeCompletionSyntacticContext({
    cst: actualOptions.cst,
    tokenVector: actualOptions.tokenVector,
    ast: actualOptions.ast,
    offset: actualOptions.offset,
  });

  // Inject Additional semantic context for the content assist providers.
  providerArgs.context = actualOptions.context;

  if (providerType === null) {
    return [];
  } else {
    const selectedProviders = actualOptions.providers[providerType];

    const suggestions = flatMap(selectedProviders, (suggestionProvider) =>
      suggestionProvider(providerArgs)
    );
    return suggestions;
  }
}

module.exports = {
  getSuggestions: getSuggestions,
};
