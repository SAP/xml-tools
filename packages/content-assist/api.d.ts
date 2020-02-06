import { IToken } from "chevrotain";
import { DocumentCstNode } from "@xml-tools/parser";
import {
  XMLAttribute,
  XMLElement,
  XMLTextContent,
  XMLDocument
} from "@xml-tools/ast";

declare function getSuggestions<OUT>(options: {
  cst: DocumentCstNode;
  ast: XMLDocument;
  offset: number;
  tokenVector: IToken[];
  providers: SuggestionProviders<OUT, void>;
}): OUT[];

/**
 * The `context` argument can be used to inject state/data
 * to the be used in the implementation of the suggestionsProviders.
 * For example a Symbol Table of known Attributes / Tags.
 */
declare function getSuggestions<OUT, CONTEXT>(options: {
  cst: DocumentCstNode;
  ast: XMLDocument;
  offset: number;
  tokenVector: IToken[];
  providers: SuggestionProviders<OUT, CONTEXT>;
  context: CONTEXT;
}): OUT[];

declare type SuggestionProviders<OUT, CONTEXT> = {
  elementContent?: ElementContentCompletion<OUT, CONTEXT>[];
  elementName?: ElementNameCompletion<OUT, CONTEXT>[];
  attributeName?: AttributeNameCompletion<OUT, CONTEXT>[];
  attributeValue?: AttributeValueCompletion<OUT, CONTEXT>[];
};

declare type ProviderOptions<CONTEXT> =
  | ElementContentCompletionOptions<CONTEXT>
  | ElementNameCompletionOptions<CONTEXT>
  | AttributeNameCompletionOptions<CONTEXT>
  | AttributeValueCompletionOptions<CONTEXT>;

declare type SuggestionProvider<
  IN extends ProviderOptions<CONTEXT>,
  OUT,
  CONTEXT
> = (options: IN) => OUT[];

declare type ElementContentCompletionOptions<CONTEXT> = {
  /**
   * Element ASTNode for which the name content assist was requested.
   * This ASTNode may be used to:
   * - Inspect if there is any other content in the Element.
   * - Inspect the available namespaces aliases in this scope.
   * - ...
   */
  element: XMLElement;

  /**
   * The pre-existing part of the name at the content assist request offset.
   * This would normally be used to filter out suggestions that do not match the prefix.
   */
  prefix: string | undefined;

  /**
   * TextContent ASTNode in which content assist was requested
   * Note that this property may be undefined if no prefix was provided.
   */
  textContent: XMLTextContent | undefined;

  context: CONTEXT | undefined;
};
/**
 *  Suggestions provider for element's contents.
 *  This is triggered when content assist is requested:
 *  1. **inside** an element's contents.
 *  2. And **outside** any of the element's sub-parts
 *
 *  For example: ('⇶' marks the content assist position):
 *  - <note>
 *     <to>bobi</to>
 *     ⇶
 *     <!-- I am a comment! -->
 *    </note>
 *
 *  - <name>⇶</name>
 */
declare type ElementContentCompletion<OUT, CONTEXT> = SuggestionProvider<
  ElementContentCompletionOptions<CONTEXT>,
  OUT,
  CONTEXT
>;

declare type ElementNameCompletionOptions<CONTEXT> = {
  /**
   * Element ASTNode for which the name content assist was requested
   */
  element: XMLElement;
  /**
   * The pre-existing part of the name at the content assist request offset.
   * This would normally be used to filter out suggestions that do not match the prefix.
   */
  prefix: string | undefined;

  context: CONTEXT | undefined;
};
/**
 *  Suggestions provider for element names.
 *  This is triggered when content assist is requested:
 *  1. **inside** an element's contents.
 *  2. Following the '<' character.
 *  3. optionally also following a name prefix.
 *
 *  For example: ('⇶' marks the content assist position):
 *  - <pers⇶
 *  - <⇶
 */
declare type ElementNameCompletion<OUT, CONTEXT> = SuggestionProvider<
  ElementNameCompletionOptions<CONTEXT>,
  OUT,
  CONTEXT
>;

declare type AttributeNameCompletionOptions<CONTEXT> = {
  /**
   * Element ASTNode in which content assist was requested
   * This ASTNode may be used to:
   * - Inspect pre-existing attribute names.
   * - Identify namespaces aliases available in this "scope"
   * - ...
   */
  element: XMLElement;
  /**
   * Attribute ASTNode in which content assist was requested
   * Note that this property may be undefined if no prefix was provided.
   */
  attribute: XMLAttribute | undefined;
  /**
   * The pre-existing part of the name at the content assist request offset.
   * This would normally be used to filter out suggestions that do not match the prefix.
   */
  prefix: string | undefined;

  context: CONTEXT | undefined;
};

/**
 *  Suggestions provider for attribute names.
 *  This is triggered when content assist is requested **inside** an element opening name block
 *  in a position where an attribute is valid e.g ('⇶' marks the content assist position):
 *  - <person age='45' nam⇶  >
 *  - <person age='45' ⇶  >
 */
declare type AttributeNameCompletion<OUT, CONTEXT> = SuggestionProvider<
  AttributeNameCompletionOptions<CONTEXT>,
  OUT,
  CONTEXT
>;

declare type AttributeValueCompletionOptions<CONTEXT> = {
  /**
   * Element ASTNode in which content assist was requested
   */
  element: XMLElement;
  /**
   * Attribute ASTNode in which content assist was requested
   * Note that **unlike** `AttributeNameCompletion` this property **always** exists.
   * This ASTNode may be used to:
   * - Inspect the attribute key for which value suggestions are requested.
   * - Inspect the **whole** pre-existing value of the attribute.
   */
  attribute: XMLAttribute;
  /**
   * The pre-existing part of the value at the content assist request location.
   * This would normally be used to filter out suggestions that do not match the prefix.
   *
   * Note that the prefix does not include any quotes.
   */
  prefix: string | undefined;

  context: CONTEXT | undefined;
};

/**
 *  Suggestions provider for attribute values.
 *  This is triggered when content assist is requested **inside** the quotes
 *  d.g: ('⇶' marks the content assist position):
 *  - <meeting day='wednes⇶' >
 *  - <meeting day='⇶' >
 *  - ...
 */
declare type AttributeValueCompletion<OUT, CONTEXT> = SuggestionProvider<
  AttributeValueCompletionOptions<CONTEXT>,
  OUT,
  CONTEXT
>;
