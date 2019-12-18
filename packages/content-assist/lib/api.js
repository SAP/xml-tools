const { defaultsDeep, flatMap } = require("lodash");

const { computeCompletionContext } = require("./content-assist");

function getSuggestions(options) {
  const actualOptions = defaultsDeep(options, {
    providers: {
      elementContent: [],
      elementName: [],
      attributeName: [],
      attributeValue: []
    }
  });

  const { providerType, providerArgs } = computeCompletionContext({
    cst: actualOptions.cst,
    tokenVector: actualOptions.tokenVector,
    ast: actualOptions.ast,
    offset: actualOptions.offset
  });

  if (providerType === null) {
    return [];
  } else {
    const selectedProviders = actualOptions.providers[providerType];

    const suggestions = flatMap(selectedProviders, suggestionProvider =>
      suggestionProvider(providerArgs)
    );
    return suggestions;
  }
}

module.exports = {
  getSuggestions: getSuggestions
};
