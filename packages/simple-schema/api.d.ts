import { XMLAstNode, XMLAttribute, XMLElement } from "@xml-tools/ast";
import {
  ValidationIssue,
  AttributeValidator,
  ElementValidator
} from "@xml-tools/validation";
import {
  AttributeNameCompletion,
  AttributeValueCompletion,
  ElementContentCompletion,
  ElementNameCompletion
} from "@xml-tools/content-assist";

// Represents the root element in an XML document
declare type SimpleSchema = XSSElement & {
  // There may only be a single top level element in XML
  cardinality: "single";
  // The top level element in mandatory in XML
  require: true;
};

declare type XSSElement = {
  required: boolean;
  cardinality: "many" | "single";
  name: string;
  namespace?: string;

  attributesType?: "open" | "closed";
  attributes: Record<string, XSSAttribute>;

  elementsType?: "open" | "closed";
  elements: Record<string, XSSElement>;
  // TODO: textValue definition (for simple pure text only?)
};

declare type XSSAttribute = {
  required: boolean;
  key: string;
  value?: XSSValue;
};

// TODO: could be expended to support more primitive types and also complex types such as `union type`
declare type XSSValue = RegExp | XSSValueEnum;

declare type XSSValueEnum = string[];

declare function getSchemaValidators(
  schema: SimpleSchema
): {
  attribute: AttributeValidator;
  element: ElementValidator;
};

declare function getSchemaSuggestionsProviders(
  schema: SimpleSchema
): {
  // TBD in the future...
  // schemaElementContentCompletion: ElementContentCompletion;
  schemaElementNameCompletion: ElementNameCompletion;
  schemaAttributeNameCompletion: AttributeNameCompletion;
  schemaAttributeValueCompletion: AttributeValueCompletion;
};
