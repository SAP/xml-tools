import { XMLAttribute, XMLElement } from "@xml-tools/ast";

interface XMLElementOpenName {
  kind: "XMLElementOpenName";
  astNode: XMLElement;
}

interface XMLElementCloseName {
  kind: "XMLElementCloseName";
  astNode: XMLElement;
}

interface XMLKeyAttribute {
  kind: "XMLKeyAttribute";
  astNode: XMLAttribute;
}

interface XMLValueAttribute {
  kind: "XMLValueAttribute";
  astNode: XMLAttribute;
}
