/**
 * Absolute path to the server's "main" module
 * This is useful when launching the server in a separate process (e.g via spawn).
 */
export const SERVER_PATH: string;

export type ServerInitializationOptions = {
  /**
   * optional name of the IDE plugin/extension using this language server.
   * This name would be used in the `source` property of dignostic issues.
   */
  consumer?: string;
};
