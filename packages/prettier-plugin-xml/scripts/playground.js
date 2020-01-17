/**
 * Small Script to quickly test how code snippets would be formatted using @xml-tools/prettier-plugin-xml
 */
const prettier = require("prettier");

const code = `
<mvc:View xmlns:mvc="sap.ui.core.mvc"></mvc:View>
`;
console.log(
  prettier.format(code, {
    parser: "xml",
    plugins: ["../"]
  })
);
