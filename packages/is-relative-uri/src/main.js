// Reference used:
// https://en.wikipedia.org/wiki/Uniform_Resource_Identifier#URI_references

const BACKSLASH = "\u005C";

function isRel(str, originalOpts) {
  // insurance first
  // ---------------------------------------------------------------------------
  if (typeof str !== "string") {
    throw new Error(
      `is-relative-uri: [THROW_ID_01] input string must be string, it was given as "${str}" (type ${typeof str})`
    );
  }
  if (originalOpts && typeof originalOpts !== "object") {
    throw new Error(
      `is-relative-uri: [THROW_ID_02] opts be plain object, it was given as ${originalOpts} (type ${typeof originalOpts})`
    );
  }
  const defaults = {
    offset: 0
  };
  let opts;
  if (originalOpts) {
    opts = Object.assign({}, defaults, originalOpts);
  } else {
    opts = Object.assign({}, defaults);
  }
  if (opts.offset && !Number.isInteger(opts.offset)) {
    throw new Error(
      `is-relative-uri: [THROW_ID_02] opts.offset must be an integer, it was given as ${
        opts.offset
      } (type ${typeof opts.offset})`
    );
  }
  if (!opts.offset) {
    // to cater false/null
    opts.offset = 0;
  }
  console.log(
    `040 ${`\u001b[${32}m${`FINAL`}\u001b[${39}m`} opts = ${JSON.stringify(
      opts,
      null,
      4
    )}`
  );

  // ---------------------------------------------------------------------------

  if (str.split("").some(char => !char.trim().length)) {
    return { res: false, message: `Remove whitespace.` };
  }
  if (str.match(/\/\s*\/\s*\//g)) {
    return { res: false, message: `Three consecutive slashes found.` };
  }
  if (str.match(/.\/\s*\//g)) {
    return {
      res: false,
      message: `Two consecutive slashes surrounded by other characters.`
    };
  }
  if (str.match(/\.\.\./g)) {
    return {
      res: false,
      message: `Three consecutive dots.`
    };
  }

  // RFC 3986 bad characters
  if (str.includes("%") && !str.match(/%[0-9a-f]/gi)) {
    // percentages should be escaped in URI's, so the next
    // character after percentage should be 0-9 or a-f
    return {
      res: false,
      message: `Unescaped "%" character.`
    };
  }
  if (str.includes("<")) {
    return {
      res: false,
      message: `Unescaped "<" character.`
    };
  }
  if (str.includes(">")) {
    return {
      res: false,
      message: `Unescaped ">" character.`
    };
  }
  if (str.includes("[")) {
    return {
      res: false,
      message: `Unescaped "[" character.`
    };
  }
  if (str.includes("]")) {
    return {
      res: false,
      message: `Unescaped "]" character.`
    };
  }
  if (str.includes("{")) {
    return {
      res: false,
      message: `Unescaped "{" character.`
    };
  }
  if (str.includes("}")) {
    return {
      res: false,
      message: `Unescaped "}" character.`
    };
  }
  if (str.includes("|")) {
    return {
      res: false,
      message: `Unescaped "|" character.`
    };
  }
  if (str.includes(BACKSLASH)) {
    return {
      res: false,
      message: `Unescaped backslash (${BACKSLASH}) character.`
    };
  }
  if (str.includes("^")) {
    return {
      res: false,
      message: `Unescaped caret (^) character.`
    };
  }

  // ---------------------------------------------------------------------------
  console.log(`133 ${`\u001b[${32}m${`FINAL RETURN`}\u001b[${39}m`}`);
  return {
    res: true,
    message: null
  };
}

export default isRel;
