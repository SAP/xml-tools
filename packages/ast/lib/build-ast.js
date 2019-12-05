const { BaseXmlCstVisitor } = require("@xml-tools/parser");
const {
  forEach,
  reduce,
  map,
  pick,
  sortBy,
  isEmpty,
  isArray
} = require("lodash");

const { getAstChildrenReflective } = require("./utils");

/**
 * @param {DocumentCstNode} docCst
 * @returns {XMLDocument}
 */
function buildAst(docCst) {
  const xmlDocAst = AstBuilder.visit(docCst);

  if (xmlDocAst.rootElement !== invalidSyntax) {
    updateNamespaces(xmlDocAst.rootElement);
  }
  return xmlDocAst;
}

class CstToAstVisitor extends BaseXmlCstVisitor {
  constructor() {
    super();
  }

  visit(cstNode) {
    return super.visit(cstNode, cstNode.location);
  }

  /**
   * @param ctx {DocumentCtx}
   * @param location {SourcePosition}
   *
   * @returns {XMLDocument}
   */
  document(ctx, location) {
    const astNode = {
      type: "XMLDocument",
      rootElement: invalidSyntax,
      position: location
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
   * @param location {SourcePosition}
   */
  prolog(ctx, location) {
    const astNode = {
      type: "XMLProlog",
      attributes: [],
      position: location
    };

    if (ctx.attribute !== undefined) {
      astNode.attributes = map(ctx.attribute, this.visit.bind(this));
    }

    setChildrenParent(astNode);

    return astNode;
  }

  /**
   * @param ctx {ContentCtx}
   * @param location {SourcePosition}
   *
   * @return {{elements, textContents}}
   */
  content(ctx, location) {
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
   * @param ctx {ElementCstNode}
   * @param location {SourcePosition}
   */
  element(ctx, location) {
    const astNode = {
      type: "XMLElement",
      namespaces: [],
      name: invalidSyntax,
      attributes: [],
      subElements: [],
      textContents: [],
      position: location,
      syntax: {}
    };

    if (ctx.attribute !== undefined) {
      astNode.attributes = map(ctx.attribute, this.visit.bind(this));
    }

    if (ctx.content !== undefined) {
      const { elements, textContents } = this.visit(ctx.content[0]);
      astNode.subElements = elements;
      astNode.textContents = textContents;
    }

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

    /* istanbul ignore else - Defensive Coding */
    if (exists(ctx.OPEN)) {
      let openBodyCloseTok = undefined;
      /* istanbul ignore else - Defensive Coding */
      if (exists(ctx.START_CLOSE)) {
        openBodyCloseTok = ctx.START_CLOSE[0];
      } else if (exists(ctx.SLASH_CLOSE)) {
        openBodyCloseTok = ctx.SLASH_CLOSE[0];
      }

      if (openBodyCloseTok !== undefined) {
        astNode.syntax.openBody = {
          ...startOfXMLToken(ctx.OPEN[0]),
          ...endOfXMLToken(openBodyCloseTok)
        };
      }
    }

    if (exists(ctx.SLASH_OPEN) && exists(ctx.END)) {
      astNode.syntax.closeBody = {
        ...startOfXMLToken(ctx.SLASH_OPEN[0]),
        ...endOfXMLToken(ctx.END[0])
      };
    }
    setChildrenParent(astNode);

    return astNode;
  }

  /**
   * @param ctx {ReferenceCtx}
   * @param location {SourcePosition}
   */
  /* istanbul ignore next - place holder*/
  reference(ctx, location) {
    // Irrelevant for the AST at this time
  }

  /**
   * @param ctx {AttributeCtx}
   * @param location {SourcePosition}
   */
  attribute(ctx, location) {
    const astNode = {
      type: "XMLAttribute",
      position: location,
      key: invalidSyntax,
      value: invalidSyntax,
      syntax: {}
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
   * @param location {SourcePosition}
   */
  chardata(ctx, location) {
    const astNode = {
      type: "XMLTextContent",
      position: location,
      text: invalidSyntax
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
   * @param location {SourcePosition}
   */
  /* istanbul ignore next - place holder*/
  misc(ctx, location) {
    // Irrelevant for the AST at this time
  }
}

const AstBuilder = new CstToAstVisitor();

function setChildrenParent(astParent) {
  const astChildren = getAstChildrenReflective(astParent);
  forEach(astChildren, child => (child.parent = astParent));
}

/**
 * @param {XMLElement} element
 * @param {{prefix:string, uri:string}[]} prevNamespaces
 */
function updateNamespaces(element, prevNamespaces = []) {
  const currElemNamespaces = reduce(
    element.attributes,
    (result, attrib) => {
      /* istanbul ignore else - Defensive Coding, not actually possible branch */
      if (attrib.key !== invalidSyntax) {
        const nsMatch = /^xmlns(?::([^:]+))?$/.exec(attrib.key);
        if (nsMatch !== null) {
          const prefix = nsMatch[1];
          if (attrib.value) {
            const uri = attrib.value;
            // Only add a namespace is
            result.push({ prefix: prefix, uri: uri });
          }
        }
      }

      return result;
    },
    []
  );

  element.namespaces = currElemNamespaces.concat(prevNamespaces);

  forEach(element.subElements, subElem =>
    updateNamespaces(subElem, element.namespaces)
  );
}

/**
 *
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
    "endColumn"
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

module.exports = {
  buildAst: buildAst
};
