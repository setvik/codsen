/**
 * string-convert-indexes
 * Convert between native JS string character indexes and grapheme-count-based indexes
 * Version: 3.0.1
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/string-convert-indexes/
 */

import{traverse as t}from"ast-monkey-traverse";import e from"grapheme-splitter";var r="3.0.1";function n(r,n,i){function s(t){return!(!["string","number"].includes(typeof t)||"string"==typeof t&&!/^\d*$/.test(t)||"number"==typeof t&&(!Number.isInteger(t)||0>t))}function o(t,e){let r=0,n=0;for(let i=0,s=t.length;s>i;i++){if(n+=t[i].length,e>=r&&n>e)return i;r+=t[i].length}throw Error(`string-convert-indexes: [THROW_ID_05] the "indexes" value, ${i}, is not covered by graphemes length!`)}function u(t,e){if(e>=t.length)throw Error(`string-convert-indexes: [THROW_ID_06] the index to convert, ${e}, is not covered by graphemes length!`);return t.slice(0,e).join("").length}if("string"!=typeof n||!n)throw new TypeError(`string-convert-indexes: [THROW_ID_01] the first input argument, input string, must be a non-zero-length string! Currently it's: ${typeof n}, equal to:\n${n}`);if(0===i)return 0;if("0"===i)return"0";const g=(new e).splitGraphemes(n);if(["string","number"].includes(typeof i)){if(s(i))return"u"===r?"string"==typeof i?u(g,+i)+"":u(g,+i):"string"==typeof i?o(g,+i)+"":o(g,+i);throw Error(`string-convert-indexes: [THROW_ID_02] the second input argument, "indexes" is not suitable to describe string index - it was given as ${JSON.stringify(i,null,4)} (${typeof i})`)}if(i&&"object"==typeof i)return t(i,"u"===r?(t,e,r)=>{const n=void 0!==e?e:t;if(["string","number"].includes(typeof n)){if(s(n))return"string"==typeof n?u(g,+n)+"":u(g,+n);throw Error(`string-convert-indexes: [THROW_ID_03] bad value was encountered, ${JSON.stringify(n,null,4)}, its path is ${r.path}`)}return n}:(t,e,r)=>{const n=void 0!==e?e:t;if(["string","number"].includes(typeof n)){if(s(n))return"string"==typeof n?o(g,+n)+"":o(g,+n);throw Error(`string-convert-indexes: [THROW_ID_04] bad value was encountered, ${JSON.stringify(n,null,4)}, its path is ${r.path}`)}return n});throw Error(`string-convert-indexes: [THROW_ID_07] the first input argument, a source string should be a string but it was given as ${n}, type ${typeof n}`)}function i(t,e){return n("n",t,e)}function s(t,e){return n("u",t,e)}export{i as nativeToUnicode,s as unicodeToNative,r as version};