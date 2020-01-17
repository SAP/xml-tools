const prettier = require("prettier");

// Use this for quickly testing
const code = `
<mvc:View xmlns:mvc="sap.ui.core.mvc"></mvc:View>
`;
console.log(
  prettier.format(code, {
    parser: "xml",
    plugins: ["."]
  })
);
