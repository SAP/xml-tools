import { DocumentCstNode } from "@xml-tools/parser";

/**
 * Builds an XML Ast from an XML Cst.
 * Can process even partial CSTs...
 *
 * @param docCst
 */
export function buildAst(docCst: DocumentCstNode): XMLDocument;

/**
 * An Abstract Syntax Tree structure
 * Which contains partial position information relevant
 * for validation and content assist scenarios.
 *
 * Note that:
 *
 * - This data structure is immutable.
 * - The AST is is a "pure data structure"
 *     there are no methods directly on the nodes, instead utilities are provided
 *     as external functions.
 * - The AST does not contain the full syntactic information, which means
 *     implementing certain editor services scenarios may require first augmenting
 *     this data structure (e.g formatting).
 * - Some properties are optional (marked with '?' syntax)
 * - Some properties are mandatory but may be `InvalidSyntax` (null) because
 *   this structure also represents partially valid XML.
 */
declare interface XMLDocument {
  readonly type: "XMLDocument";
  readonly prolog?: XMLProlog;
  readonly rootElement: XMLElement | InvalidSyntax;
  readonly position: SourcePosition;
}

declare interface XMLProlog {
  readonly type: "XMLProlog";
  readonly parent: XMLDocument;

  readonly attributes: XMLAttribute[];

  readonly position: SourcePosition;
}

declare interface XMLElement {
  readonly type: "XMLElement";
  readonly parent: XMLElement | XMLDocument;

  readonly namespaces: { prefix: string; uri: string }[];

  // namespace prefix used by this XML Element.
  // - Note that this is an optional syntax.
  readonly ns?: string;
  // Actual name part (without the namespace prefix) used by this XML Element.
  readonly name: string | InvalidSyntax;

  readonly attributes: XMLAttribute[];
  readonly subElements: XMLElement[];
  readonly textContents: XMLTextContent[];

  readonly syntax: {
    // Will only exist if there is a valid "Start Name" for the XML Element
    // - Note this would always exist in a valid XML.
    readonly openName?: XMLToken;
    // Will only exist if there is a valid "Closing Name" for the XML Element
    // - Note that this is an **optional** syntax in a valid XML.
    readonly closeName?: XMLToken;
  };
  readonly position: SourcePosition;
}

declare interface XMLTextContent {
  readonly type: "XMLTextContent";
  readonly parent: XMLElement;

  readonly text: string | InvalidSyntax;

  readonly position: SourcePosition;
}

declare interface XMLAttribute {
  readonly type: "XMLAttribute";
  readonly parent: XMLElement;

  readonly key: string | InvalidSyntax;
  // Semantic Value: Would not include the quotes!
  readonly value: string | InvalidSyntax;

  readonly syntax: {
    readonly key?: XMLToken;
    // Original Literal value, would include the quotes
    readonly value?: XMLToken;
  };
  readonly position: SourcePosition;
}

declare interface SourcePosition {
  readonly startOffset: number;
  readonly endOffset: number;
  readonly startLine: number;
  readonly endLine: number;
  readonly startColumn: number;
  readonly endColumn: number;
}

declare interface XMLToken extends SourcePosition {
  readonly image: string;
}

declare type XMLAstNode =
  | XMLDocument
  | XMLProlog
  | XMLElement
  | XMLAttribute
  | XMLTextContent;

/**
 * Will Traverse as XML AST and activate the relevant visitor method on each node.
 * There is no guarantee on the order in which the nodes will be visited.
 * For greater control of the traversal, one should evaluate implementing a recursive tree walker.
 */
declare function accept(node: XMLAstNode, visitor: XMLAstVisitor): void;

/**
 * Very Simple Visitor API.
 * Currently No support for IN/OUT params on the visit methods
 * Which
 */
declare interface XMLAstVisitor {
  visitXMLDocument?(node: XMLDocument): void;
  visitXMLProlog?(node: XMLProlog): void;
  visitXMLElement?(node: XMLElement): void;
  visitXMLAttribute?(node: XMLAttribute): void;
  visitXMLTextContent?(node: XMLTextContent): void;
}

export type InvalidSyntax = null;
