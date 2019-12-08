const { parse } = require("@xml-tools/parser");
const { buildAst, tokenVector } = require("@xml-tools/ast");
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
  const { cst, tokenVector } = parse(actualOptions.text);
  const ast = buildAst(cst, tokenVector);

  const { providerType, providerArgs } = computeCompletionContext({
    cst: cst,
    tokenVector: tokenVector,
    ast: ast,
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
