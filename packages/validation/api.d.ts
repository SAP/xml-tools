import { XMLAstNode, XMLAttribute, XMLElement } from "@xml-tools/ast";

declare function validate(options: {
  doc: XMLDocument;
  validators: {
    attribute?: ((node: XMLAttribute) => ValidationIssue[])[];
    element?: ((node: XMLElement) => ValidationIssue[])[];
  };
}): ValidationIssue[];

interface ValidationIssue {
  msg: string;
  /**
   * ASTNode where the issue occurred.
   */
  node: XMLAstNode;
  /**
   * The Severity is optional as that may need to be determined outside
   * the validation logic, For example in an IDE's inspections configuration.
   */
  severity?: "info" | "warning" | "error";

  /**
   * Optional property to indicate a more specific error location.
   * For example: For Missing Attribute error in an element we may want to
   * only mark the Element **Name** area instead of the whole element.
   */
  position?: { startOffset: number; endOffset: number };
}
