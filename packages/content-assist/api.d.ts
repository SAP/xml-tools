import { XMLAttribute, XMLElement } from "@xml-tools/ast";

declare function getSuggestions(options: {
  text: string;
  offset: number;
  providers: {
    elementContent?: ElementContentCompletion[];
    elementName?: ElementNameCompletion[];
    attributeName?: AttributeNameCompletion[];
    attributeValue?: AttributeValueCompletion[];
  };
}): CompletionSuggestion[];

interface CompletionSuggestion {
  text: string;
  label?: string;
  docs?: string;
  /**
   * A measure of how certain we are about this suggestion's relevance.
   * This value could be used to:
   * - Filter out less relevant suggestions when there are too many possible suggestions.
   * - Sort the suggestions by relevance.
   */
  confidence?: number;
}

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
declare type ElementContentCompletion = (options: {
  /**
   * Element ASTNode for which the name content assist was requested.
   * This ASTNode may be used to:
   * - Inspect if there is any other content in the Element.
   * - Inspect the available namespaces aliases in this scope.
   * - ...
   */
  element: XMLElement;
}) => CompletionSuggestion[];

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
declare type ElementNameCompletion = (options: {
  /**
   * Element ASTNode for which the name content assist was requested
   */
  element: XMLElement;
  /**
   * The pre-existing part of the name at the content assist request offset.
   * This would normally be used to filter out suggestions that do not match the prefix.
   */
  prefix: string | undefined;
}) => CompletionSuggestion[];

/**
 *  Suggestions provider for attribute names.
 *  This is triggered when content assist is requested **inside** an element opening name block
 *  in a position where an attribute is valid e.g ('⇶' marks the content assist position):
 *  - <person age='45' nam⇶  >
 *  - <person age='45' ⇶  >
 */
declare type AttributeNameCompletion = (options: {
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
}) => CompletionSuggestion[];

/**
 *  Suggestions provider for attribute values.
 *  This is triggered when content assist is requested **inside** the quotes
 *  d.g: ('⇶' marks the content assist position):
 *  - <meeting day='wednes⇶' >
 *  - <meeting day='⇶' >
 *  - ...
 */
declare type AttributeValueCompletion = (options: {
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
}) => CompletionSuggestion[];
