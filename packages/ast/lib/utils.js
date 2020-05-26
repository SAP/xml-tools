const { values, reduce, has, isArray } = require("lodash");

function getAstChildrenReflective(astParent) {
  const astChildren = reduce(
    astParent,
    (result, prop, name) => {
      if (name === "parent") {
        // parent property is never a child...
      } else if (has(prop, "type")) {
        result.push(prop);
      } else if (isArray(prop) && prop.length > 0 && has(prop[0], "type")) {
        result = result.concat(prop);
      }

      return result;
    },
    []
  );

  return astChildren;
}

module.exports = {
  getAstChildrenReflective: getAstChildrenReflective,
};
