import { ValidationIssue } from "@xml-tools/validation";

/**
 * detects XML constraints issues (e.g none well-formed XML)
 * - https://www.w3.org/TR/xml/#sec-starttags
 *   - see: "Well-formedness constraint: Unique Att Spec".
 */
export function checkConstraints(ast: XMLDocument): ValidationIssue[];
