import { XMLAttribute, XMLElement, XMLDocument } from "@xml-tools/ast";

/**
 * Not all possible kinds of positions are currently supported.
 * More may be added in the future.
 */
type AstPosition =
  | XMLElementOpenName
  | XMLElementCloseName
  | XMLAttributeKey
  | XMLAttributeValue;

declare function astPositionAtOffset(
  ast: XMLDocument,
  offset: number
): AstPosition | undefined;

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
