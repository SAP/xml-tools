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
