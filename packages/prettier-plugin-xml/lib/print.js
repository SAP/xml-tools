const {
  concat,
  hardline,
  line,
  indent,
  group,
  join
} = require("prettier").doc.builders;

const printAttributes = attributes => {
  if (attributes.length === 0) {
    return "";
  }

  const parts = [];

  for (let i = 0; i < attributes.length; i++) {
    const { key, value } = attributes[i];

    if (i === 0) {
      if (key.startsWith("xmlns")) {
        parts.push(hardline);
      } else {
        parts.push(line);
      }
    } else if (key.startsWith("xmlns")) {
      parts.push(hardline);
    } else {
      parts.push(line);
    }
    parts.push(key, "=", '"', value, '"');
  }
  return group(indent(concat(parts)));
};

const getOpeningTab = (tagName, attributes) => {
  return concat([
    group(concat(["<", tagName, printAttributes(attributes)])),
    ">"
  ]);
};

const getClosingTag = tagName => {
  return `</${tagName}>`;
};

const printSelfClosingTag = (tagName, attributes) => {
  return group(concat(["<", tagName, printAttributes(attributes), "/>"]));
};

const getTagName = (ns, name) => {
  if (ns) {
    return `${ns}:${name}`;
  }
  return `${name}`;
};

const genericPrint = (path, opts, print) => {
  const type = path.getValue().type;

  switch (type) {
    case "XMLDocument":
      return concat([path.call(print, "rootElement"), hardline]);
    case "XMLElement":
      const { ns, name, attributes, subElements } = path.getValue();

      const tagName = getTagName(ns, name);
      if (subElements.length == 0) {
        return printSelfClosingTag(tagName, attributes);
      }

      const openingTag = getOpeningTab(tagName, attributes);
      const closingTag = getClosingTag(tagName);

      const inner = concat([
        indent(
          concat([hardline, join(hardline, path.map(print, "subElements"))])
        ),
        hardline
      ]);
      return group(concat([openingTag, inner, closingTag]));
  }
};

module.exports = genericPrint;
