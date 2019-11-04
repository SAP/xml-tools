import { XMLAstNode, XMLAttribute, XMLElement } from "@xml-tools/ast";
import { ValidationIssue } from "@xml-tools/validation";
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
  attributesDef: XSSSubAttributesDefinition;
  subElementsDef: XSSSubElementsDefinition;
};

declare type XSSSubAttributesDefinition = {
  /**
   * Are other (unknown) attributes allowed other then those defined here.
   */
  type: "open" | "closed";
  attributes: XSSAttribute[];
};

declare type XSSAttribute = {
  required: boolean;
  key: string;
  value: XSSValue;
};

// TODO: could be expended to support more primitive types and also complex types such as `union type`
declare type XSSValue = string | RegExp | XSSValueEnum;

declare type XSSValueEnum = string[];

declare type XSSSubElementsDefinition = {
  /**
   * Are other (unknown) elements allowed other then those defined here.
   */
  type: "open" | "closed";

  elements: XSSElement[];
};

declare function getSchemaValidators(
  schema: SimpleSchema
): {
  attribute: (node: XMLAttribute) => ValidationIssue[];
  element: (node: XMLElement) => ValidationIssue[];
};

declare function getSchemaSuggestionsProviders(
  schema: SimpleSchema
): {
  schemaElementContentCompletion: ElementContentCompletion;
  schemaElementNameCompletion: ElementNameCompletion;
  schemaAttributeNameCompletion: AttributeNameCompletion;
  schemaAttributeValueCompletion: AttributeValueCompletion;
};
