import { XMLAstNode, XMLAttribute, XMLElement } from "@xml-tools/ast";

declare function validate(options: {
  doc: XMLDocument;
  validators: {
    attribute: ((node: XMLAttribute) => ValidationIssue[])[];
    element: ((node: XMLElement) => ValidationIssue[])[];
  };
}): ValidationIssue[];

interface ValidationIssue {
  msg: string;
  node: XMLAstNode;
  /**
   * The Severity is optional as that may need to be determined outside
   * the validation logic, For example in an IDE's inspections configuration.
   */
  severity?: "info" | "warning" | "error";
}
