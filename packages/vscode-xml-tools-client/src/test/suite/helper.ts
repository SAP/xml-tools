import * as vscode from "vscode";
import * as path from "path";

export let doc: vscode.TextDocument;
export let editor: vscode.TextEditor;
export let documentEol: string;
export let platformEol: string;

/**
 * Activates the extension 'vscode.vscode-xml-tools-client'
 */
export async function activate() {
  let ext = vscode.extensions.getExtension("vscode.vscode-xml-tools-client");
  await ext.activate();
}

export async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const getDocUri = (p: string) => {
  return vscode.Uri.file(p);
};
