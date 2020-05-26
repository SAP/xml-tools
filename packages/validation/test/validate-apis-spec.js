const { expect } = require("chai");
const { map } = require("lodash");
const { parse } = require("@xml-tools/parser");
const { buildAst } = require("@xml-tools/ast");
const { validate } = require("../");

describe("The XML Validations APIs", () => {
  it("can validate attributes", () => {
    const xmlText = `<note>
    <to>Bill</to>
    <from>Tim</from>
    </note>`;

    const ast = xmlTextToAst(xmlText);

    const issues = validate({
      doc: ast,
      validators: {
        element: [
          (node) => {
            return [{ msg: node.name }];
          },
        ],
      },
    });

    const msgNodeNames = map(issues, (_) => _.msg);
    expect(msgNodeNames).to.have.lengthOf(3);
    expect(msgNodeNames).to.have.members(["note", "to", "from"]);
  });

  it("can validate elements", () => {
    const xmlText = `<note clearance="top-secret">
    <to hidden="true">Bill</to>
    <to>Gates</to>
    <from>Tim</from>
    </note>`;

    const ast = xmlTextToAst(xmlText);

    const issues = validate({
      doc: ast,
      validators: {
        attribute: [
          (node) => {
            return [{ msg: node.key }];
          },
        ],
      },
    });

    const msgNodeNames = map(issues, (_) => _.msg);
    expect(msgNodeNames).to.have.lengthOf(2);
    expect(msgNodeNames).to.have.members(["clearance", "hidden"]);
  });
});

function xmlTextToAst(text) {
  const { cst, tokenVector } = parse(text);
  const ast = buildAst(cst, tokenVector);
  return ast;
}
