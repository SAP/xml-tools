import { XMLAttribute, XMLElement, XMLDocument } from "@xml-tools/ast";

interface XMLElementOpenName {
  kind: "XMLElementOpenName";
  astNode: XMLElement;
}

interface XMLElementCloseName {
  kind: "XMLElementCloseName";
  astNode: XMLElement;
}

interface XMLAttributeKey {
  kind: "XMLAttributeKey";
  astNode: XMLAttribute;
}

interface XMLAttributeValue {
  kind: "XMLAttributeValue";
  astNode: XMLAttribute;
}

declare function getAstNodeInPosition(
  ast: XMLDocument,
  offset: number
):
  | XMLElementOpenName
  | XMLElementCloseName
  | XMLAttributeKey
  | XMLAttributeValue
  | undefined;
