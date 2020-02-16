import * as sinon from "sinon";
import { assert } from "chai";

import {
  Settings,
  configureSettings,
  validateDocument,
  SYNTAX_ERROR_MSG
} from "../src/serverHelper";

import {
  TextDocument,
  IConnection,
  Diagnostic,
  DiagnosticSeverity,
  Position
} from "vscode-languageserver";

describe("Test XML Language Server", () => {
  let sandbox: any;
  let doc: TextDocument;
  let connection: IConnection;
  let connectionSpy: any;

  before(() => {
    sandbox = sinon.createSandbox();
  });

  after(() => {
    sandbox = sinon.restore();
  });

  beforeEach(() => {
    const settings: Settings = configureSettings();
    connection = settings.connection;
    connectionSpy = sandbox.spy(connection, "sendDiagnostics");
  });

  afterEach(() => {
    connectionSpy.restore();
  });

  it("Test parsing error validation in xml document", async () => {
    doc = createTextDocument("xml", ">");
    const pos: Position = { line: 0, character: 0 };
    const diagnostic: Diagnostic = {
      message: "Expecting token of type --> OPEN <-- but found --> '>' <--",
      range: {
        start: pos,
        end: pos
      },
      severity: DiagnosticSeverity.Error,
      source: SYNTAX_ERROR_MSG
    };

    const diagnostics: Diagnostic[] = [diagnostic];
    await validateDocument(connection, doc);
    assert(connectionSpy.withArgs({ uri: doc.uri, diagnostics }).calledOnce);
  });

  it("Test lexing error validation in xml document", async () => {
    doc = createTextDocument("xml", "<Name");
    const pos: Position = { line: 0, character: NaN };
    const diagnostic: Diagnostic = {
      message:
        "Expecting: one of these possible Token sequences:\n  1. [CLOSE]\n  2. [SLASH_CLOSE]\nbut found: ''",
      range: {
        start: pos,
        end: pos
      },
      severity: DiagnosticSeverity.Error,
      source: SYNTAX_ERROR_MSG
    };

    const diagnostics: Diagnostic[] = [diagnostic];
    await validateDocument(connection, doc);
    assert(connectionSpy.withArgs({ uri: doc.uri, diagnostics }).calledOnce);
  });

  it("Test no syntax validation in non xml document", async () => {
    doc = createTextDocument("txt", ">");
    await validateDocument(connection, doc);
    assert(connectionSpy.notCalled);
  });
});

function createTextDocument(languageId: string, content: string): TextDocument {
  return TextDocument.create("uri", languageId, 0, content);
}
