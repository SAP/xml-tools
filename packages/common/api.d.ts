import { IToken } from "chevrotain";

/**
 * Finds the next none "SEA_WS" Token after a specific offset.
 *
 * @param tokenVector - The TokenVector returned from @xml-tools/parser parse method.
 * @param prevTokEndOffset - This must be the endOffset of an existing token.
 */
export function findNextTextualToken(
  tokenVector: IToken[],
  prevTokEndOffset: number
): IToken | null;

/**
 * Check if an xml attribute key is an xmlns key.
 * @param key - the attribute key
 * @param includeEmptyPrefix - should true be returned when there is no prefix (key === "xmlns:")
 */
export function isXMLNamespaceKey(
  key: string,
  includeEmptyPrefix: boolean
): boolean;

/**
 * Get the attribute name, without its "xmlns:" prefix, from an xmlns attribute key.
 * If the attribute key is not an xmlns key, undefined is returned.
 * @param key - the attribute key
 */
export function getXMLNamespaceKeyPrefix(key: string): string | undefined;
