const { BaseXmlCstVisitor } = require("@xml-tools/parser");
const {
  last,
  forEach,
  reduce,
  map,
  pick,
  sortBy,
  isEmpty,
  isArray,
  assign,
} = require("lodash");
const {
  findNextTextualToken,
  isXMLNamespaceKey,
  getXMLNamespaceKeyPrefix,
} = require("@xml-tools/common");

const { getAstChildrenReflective } = require("./utils");
const { DEFAULT_NS } = require("./constants");

/**
 * @param {DocumentCstNode} docCst
 * @param {IToken[]} tokenVector
 * @returns {XMLDocument}
 */
function buildAst(docCst, tokenVector) {
  AstBuilder.setState({ tokenVector });
  const xmlDocAst = AstBuilder.visit(docCst);

  if (xmlDocAst.rootElement !== invalidSyntax) {
    updateNamespaces(xmlDocAst.rootElement);
  }
  return xmlDocAst;
}

/* eslint-disable no-unused-vars -- consistent signatures in visitor methods even if they are empty placeholders */
class CstToAstVisitor extends BaseXmlCstVisitor {
  constructor() {
    super();
  }

  setState({ tokenVector }) {
    this.tokenVector = tokenVector;
  }

  visit(cstNode, params = {}) {
    return super.visit(cstNode, { location: cstNode.location, ...params });
  }

  /**
   * @param ctx {DocumentCtx}
   * @param opts {Object}
   * @param opts.location {SourcePosition}
   *
   * @returns {XMLDocument}
   */
  document(ctx, { location }) {
    const astNode = {
      type: "XMLDocument",
      rootElement: invalidSyntax,
      position: location,
    };

    if (ctx.prolog !== undefined) {
      astNode.prolog = this.visit(ctx.prolog[0]);
    }

    if (
      ctx.element !== undefined &&
      isEmpty(ctx.element[0].children) === false
    ) {
      astNode.rootElement = this.visit(ctx.element[0]);
    }

    setChildrenParent(astNode);

    return astNode;
  }

  /**
   * @param ctx {PrologCtx}
   * @param opts {Object}
   * @param opts.location {SourcePosition}
   */
  prolog(ctx, { location }) {
    const astNode = {
      type: "XMLProlog",
      attributes: [],
      position: location,
    };

    if (ctx.attribute !== undefined) {
      astNode.attributes = map(ctx.attribute, (_) =>
        this.visit(_, { isPrologParent: true })
      );
    }

    setChildrenParent(astNode);

    return astNode;
  }

  /**
   * @param {docTypeDeclCtx} ctx
   */
  /* istanbul ignore next - place holder*/
  docTypeDecl(ctx, astNode) {}

  /**
   * @param {ExternalIDCtx} ctx
   */
  /* istanbul ignore next - place holder*/
  externalID(ctx, astNode) {}

  /**
   * @param ctx {ContentCtx}
   * @param opts {Object}
   * @param opts.location {SourcePosition}
   *
   * @return {{elements, textContents}}
   */
  content(ctx, { location }) {
    let elements = [];
    let textContents = [];

    if (ctx.element !== undefined) {
      elements = map(ctx.element, this.visit.bind(this));
    }

    if (ctx.chardata !== undefined) {
      textContents = map(ctx.chardata, this.visit.bind(this));
    }

    return { elements, textContents };
  }

  /**
   * @param ctx {ElementCtx}
   * @param opts {Object}
   * @param opts.location {SourcePosition}
   */
  element(ctx, { location }) {
    const astNode = {
      type: "XMLElement",
      // Avoid Accidental Keys in this map
      namespaces: Object.create(null),
      name: invalidSyntax,
      attributes: [],
      subElements: [],
      textContents: [],
      position: location,
      syntax: {},
    };

    if (ctx.attribute !== undefined) {
      astNode.attributes = map(ctx.attribute, this.visit.bind(this));
    }

    if (ctx.content !== undefined) {
      const { elements, textContents } = this.visit(ctx.content[0]);
      astNode.subElements = elements;
      astNode.textContents = textContents;
    }

    handleElementOpenCloseNameRanges(astNode, ctx);
    handleElementOpenCloseBodyRanges(astNode, ctx);
    handleElementAttributeRanges(astNode, ctx, this.tokenVector);

    setChildrenParent(astNode);

    return astNode;
  }

  /**
   * @param ctx {ReferenceCtx}
   * @param opts {Object}
   * @param opts.location {SourcePosition}
   */
  /* istanbul ignore next - place holder*/
  reference(ctx, { location }) {
    // Irrelevant for the AST at this time
  }

  /**
   * @param ctx {AttributeCtx}
   * @param opts {Object}
   * @param opts.location {SourcePosition}
   * @param opts.isPrologParent {boolean}
   */
  attribute(ctx, { location, isPrologParent }) {
    const astNode = {
      type: isPrologParent ? "XMLPrologAttribute" : "XMLAttribute",
      position: location,
      key: invalidSyntax,
      value: invalidSyntax,
      syntax: {},
    };

    /* istanbul ignore else - Defensive Coding, not actually possible else branch */
    if (ctx.Name !== undefined && ctx.Name[0].isInsertedInRecovery !== true) {
      const keyToken = ctx.Name[0];
      astNode.key = keyToken.image;
      astNode.syntax.key = toXMLToken(keyToken);
    }

    if (
      ctx.STRING !== undefined &&
      ctx.STRING[0].isInsertedInRecovery !== true
    ) {
      const valueToken = ctx.STRING[0];
      astNode.value = stripQuotes(valueToken.image);
      astNode.syntax.value = toXMLToken(valueToken);
    }

    setChildrenParent(astNode);

    return astNode;
  }

  /**
   * @param ctx {ChardataCtx}
   * @param opts {Object}
   * @param opts.location {SourcePosition}
   */
  chardata(ctx, { location }) {
    const astNode = {
      type: "XMLTextContent",
      position: location,
      text: invalidSyntax,
    };

    let allTokens = [];
    if (ctx.SEA_WS !== undefined) {
      allTokens = allTokens.concat(ctx.SEA_WS);
    }
    if (ctx.TEXT !== undefined) {
      allTokens = allTokens.concat(ctx.TEXT);
    }
    const sortedTokens = sortBy(allTokens, ["startOffset"]);
    const fullText = map(sortedTokens, "image").join("");
    astNode.text = fullText;

    return astNode;
  }

  /**
   * @param ctx {MiscCtx}
   * @param opts {Object}
   * @param opts.location {SourcePosition}
   */
  /* istanbul ignore next - place holder*/
  misc(ctx, { location }) {
    // Irrelevant for the AST at this time
  }
}
/* eslint-enable no-unused-vars -- see matching disable comment */

const AstBuilder = new CstToAstVisitor();

function setChildrenParent(astParent) {
  const astChildren = getAstChildrenReflective(astParent);
  forEach(astChildren, (child) => (child.parent = astParent));
}

/**
 * @param {XMLElement} element
 * @param {Record<Prefix, Uri>} prevNamespaces
 */
function updateNamespaces(element, prevNamespaces = []) {
  const currElemNamespaces = reduce(
    element.attributes,
    (result, attrib) => {
      /* istanbul ignore else - Defensive Coding, not actually possible branch */
      if (attrib.key !== invalidSyntax) {
        if (
          isXMLNamespaceKey({ key: attrib.key, includeEmptyPrefix: false }) ===
          true
        ) {
          const prefix = getXMLNamespaceKeyPrefix(attrib.key);
          // TODO: Support un-defining namespaces (including the default one)
          if (attrib.value) {
            const uri = attrib.value;
            if (prefix !== "") {
              result[prefix] = uri;
            } else {
              // default namespace
              result[DEFAULT_NS] = uri;
            }
          }
        }
      }

      return result;
    },
    {}
  );

  const emptyMap = Object.create(null);
  // "newer" (closer scope)  namespaces definitions will overwrite "older" ones.
  element.namespaces = assign(emptyMap, prevNamespaces, currElemNamespaces);

  forEach(element.subElements, (subElem) =>
    updateNamespaces(subElem, element.namespaces)
  );
}

/**
 * @param {chevrotain.IToken} token
 */
function toXMLToken(token) {
  return pick(token, [
    "image",
    "startOffset",
    "endOffset",
    "startLine",
    "endLine",
    "startColumn",
    "endColumn",
  ]);
}

function startOfXMLToken(token) {
  return pick(token, ["startOffset", "startLine", "startColumn"]);
}

function endOfXMLToken(token) {
  return pick(token, ["endOffset", "endLine", "endColumn"]);
}

function exists(tokArr) {
  return (
    isArray(tokArr) &&
    tokArr.length === 1 &&
    tokArr[0].isInsertedInRecovery !== true
  );
}

function stripQuotes(quotedText) {
  return quotedText.substring(1, quotedText.length - 1);
}

/**
 * @param {string} text
 */
function nsToParts(text) {
  const matchResult = /^([^:]+):([^:]+)$/.exec(text);
  if (matchResult === null) {
    return null;
  }
  const ns = matchResult[1];
  const name = matchResult[2];
  return { ns, name };
}

/**
 * @type {InvalidSyntax}
 */
const invalidSyntax = null;

/**
 * @param {XMLElement} astNode
 * @param {ElementCtx} ctx
 */
function handleElementOpenCloseNameRanges(astNode, ctx) {
  if (ctx.Name !== undefined && ctx.Name[0].isInsertedInRecovery !== true) {
    const openNameToken = ctx.Name[0];
    astNode.syntax.openName = toXMLToken(openNameToken);
    const nsParts = nsToParts(openNameToken.image);
    if (nsParts !== null) {
      astNode.ns = nsParts.ns;
      astNode.name = nsParts.name;
    } else {
      astNode.name = openNameToken.image;
    }
  }

  if (
    ctx.END_NAME !== undefined &&
    ctx.END_NAME[0].isInsertedInRecovery !== true
  ) {
    astNode.syntax.closeName = toXMLToken(ctx.END_NAME[0]);
  }
}

/**
 * @param {XMLElement} astNode
 * @param {ElementCtx} ctx
 */
function handleElementOpenCloseBodyRanges(astNode, ctx) {
  /* istanbul ignore else - Defensive Coding */
  if (exists(ctx.OPEN)) {
    let openBodyCloseTok = undefined;
    /* istanbul ignore else - Defensive Coding */
    if (exists(ctx.START_CLOSE)) {
      openBodyCloseTok = ctx.START_CLOSE[0];
      astNode.syntax.isSelfClosing = false;
    } else if (exists(ctx.SLASH_CLOSE)) {
      openBodyCloseTok = ctx.SLASH_CLOSE[0];
      astNode.syntax.isSelfClosing = true;
    }

    if (openBodyCloseTok !== undefined) {
      astNode.syntax.openBody = {
        ...startOfXMLToken(ctx.OPEN[0]),
        ...endOfXMLToken(openBodyCloseTok),
      };
    }

    if (exists(ctx.SLASH_OPEN) && exists(ctx.END)) {
      astNode.syntax.closeBody = {
        ...startOfXMLToken(ctx.SLASH_OPEN[0]),
        ...endOfXMLToken(ctx.END[0]),
      };
    }
  }
}

/**
 * @param {XMLElement} astNode
 * @param {ElementCtx} ctx
 * @param {IToken[]} tokenVector
 */
function handleElementAttributeRanges(astNode, ctx, tokenVector) {
  if (exists(ctx.Name)) {
    const startOffset = ctx.Name[0].endOffset + 2;
    // Valid `attributesRange` exists
    if (exists(ctx.START_CLOSE) || exists(ctx.SLASH_CLOSE)) {
      const endOffset =
        (exists(ctx.START_CLOSE)
          ? ctx.START_CLOSE[0].startOffset
          : ctx.SLASH_CLOSE[0].startOffset) - 1;
      astNode.syntax.attributesRange = { startOffset, endOffset };
    }
    // Have to scan-ahead and guess where the attributes range ends
    else {
      const hasAttributes = isArray(ctx.attribute);
      const lastKnownAttribRangeTokenEnd = hasAttributes
        ? last(ctx.attribute).location.endOffset
        : ctx.Name[0].endOffset;
      const nextTextualToken = findNextTextualToken(
        tokenVector,
        lastKnownAttribRangeTokenEnd
      );
      if (nextTextualToken !== null) {
        astNode.syntax.guessedAttributesRange = {
          startOffset,
          endOffset: nextTextualToken.endOffset - 1,
        };
      }
    }
  }
}

module.exports = {
  buildAst: buildAst,
};
