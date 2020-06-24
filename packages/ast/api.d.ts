import { IToken } from "chevrotain";
import { DocumentCstNode } from "@xml-tools/parser";

/**
 * Builds an XML Ast from an XML Cst.
 * Can process even partial CSTs...
 */
export function buildAst(
  docCst: DocumentCstNode,
  tokenVector: IToken[]
): XMLDocument;

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

  readonly attributes: XMLPrologAttribute[];

  readonly position: SourcePosition;
}

// A Prefix cannot include a colon ":" so the below string will never conflict
// with a valid namespace prefix.
declare type DefaultNS = "::DEFAULT";
declare const DEFAULT_NS: DefaultNS;
declare type Prefix = string | DefaultNS;
declare type Uri = string;

declare interface XMLElement {
  readonly type: "XMLElement";
  readonly parent: XMLElement | XMLDocument;

  readonly namespaces: Record<Prefix, Uri>;

  // namespace prefix used by this XML Element.
  // - Note that this is an optional syntax.
  readonly ns?: string;
  // Actual name part (without the namespace prefix) used by this XML Element.
  readonly name: string | InvalidSyntax;

  readonly attributes: XMLAttribute[];
  readonly subElements: XMLElement[];
  readonly textContents: XMLTextContent[];

  readonly syntax: {
    // Is the XML Element self closing or with a distinct closing tag.
    // - e.g: `<foo/>` vs `<foo></foo>`
    // This value depends on the existence of the self closing "/>" token
    // versus the regular closing ">" token of the opening tag.
    // If none of these tokens exist than this property would not be defined.
    //
    // - Note that the a missing `closeName` token is not sufficient to conclude
    //   the element is self closing, e.g when dealing with invalid syntax:
    //   - `<foo></>`
    readonly isSelfClosing?: boolean;

    // Will only exist if there is a valid "Start Name" for the XML Element
    // - Note this would always exist in a valid XML.
    readonly openName?: XMLToken;

    // Will only exist if there is a valid "Closing Name" for the XML Element
    // - Note that this is an **optional** syntax in a valid XML.
    readonly closeName?: XMLToken;

    // Describes the range of the opening element name + attributes area:
    // Examples:
    // <SomeTag attribute="value" >Some content</SomeTag>
    // <===== openBody range =====>
    // <SelfClosingTag attribute="value" />
    // <======= openBody range ===========>
    //
    // Will not exist if there is no open '<' or closing '>' | "/>" (self closing) tokens.
    readonly openBody?: XMLToken;

    // Describes the range of the **closing** element name area:
    // Example:
    // <SomeTag attribute="value" >Some content</SomeTag>
    //                                         < ------ >
    //
    // Will not exist if any of the closing "brackets" are missing
    // - e.g in a self closing element.
    readonly closeBody?: XMLToken;

    // Describes the range of the attributes section:
    // This starts one character **after** the opening name token
    // and ends one character before the open body closing '>' or self closing '/>
    // Examples:
    // <SomeTag attribute1="value1" attrib2="666" >Some content</SomeTag>
    //          <===== attributesRange      =====>
    // <SomeTag attribute1="value1" attrib2="666" />
    //          <===== attributesRange      =====>
    readonly attributesRange?: SourceRange;

    // Same as attributesRange except this property will be used for partially valid
    // XMLElements when the AstBuilder cannot be certain what is the exact attributes range.
    // - Only one of the attributeRanges properties may exist at the same time.
    // - It is possible that in some cases it won't be possible to even guess the attributes range.
    //   In that scenario neither of the properties will exist.
    readonly guessedAttributesRange?: SourceRange;
  };
  readonly position: SourcePosition;
}

declare interface XMLTextContent {
  readonly type: "XMLTextContent";
  readonly parent: XMLElement;

  readonly text: string | InvalidSyntax;

  readonly position: SourcePosition;
}

declare interface XMLAttributeBase {
  readonly type: string;

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

declare interface XMLAttribute extends XMLAttributeBase {
  readonly type: "XMLAttribute";
  readonly parent: XMLElement;
}

/**
 * XMLPrologAttribute is virtually identical to a regular `XMLAttribute`.
 * However it was moved to a separate interface to allow consistent handling of the `parent`
 * property in `XMLAttribute`, as 99.9% of the time the edge case of a parent being an XMLProlog
 * is not relevant.
 */
declare interface XMLPrologAttribute extends XMLAttributeBase {
  readonly type: "XMLPrologAttribute";
  readonly parent: XMLProlog;
}

declare interface SourceRange {
  readonly startOffset: number;
  readonly endOffset: number;
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
  | XMLPrologAttribute
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
  visitXMLPrologAttribute?(node: XMLPrologAttribute): void;
  visitXMLElement?(node: XMLElement): void;
  visitXMLAttribute?(node: XMLAttribute): void;
  visitXMLTextContent?(node: XMLTextContent): void;
}

export type InvalidSyntax = null;
