/**
 * @name string-remove-duplicate-heads-tails
 * @fileoverview Detect and (recursively) remove head and tail wrappings around the input string
 * @version 5.0.16
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-remove-duplicate-heads-tails/}
 */

(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
typeof define === 'function' && define.amd ? define(['exports'], factory) :
(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.stringRemoveDuplicateHeadsTails = {}));
}(this, (function (exports) { 'use strict';

var version$1 = "5.0.16";

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
/** `Object#toString` result references. */
var objectTag = '[object Object]';

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) ||
      objectToString.call(value) != objectTag || isHostObject(value)) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return (typeof Ctor == 'function' &&
    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
}

var lodash_isplainobject = isPlainObject;

/**
 * @name arrayiffy-if-string
 * @fileoverview Put non-empty strings into arrays, turn empty-ones into empty arrays. Bypass everything else.
 * @version 3.13.16
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/arrayiffy-if-string/}
 */

function arrayiffy(something) {
  if (typeof something === "string") {
    if (something.length) {
      return [something];
    }
    return [];
  }
  return something;
}

/**
 * @name string-match-left-right
 * @fileoverview Match substrings on the left or right of a given index, ignoring whitespace
 * @version 7.0.10
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-match-left-right/}
 */

function isObj(something) {
  return something && typeof something === "object" && !Array.isArray(something);
}
function isStr$1(something) {
  return typeof something === "string";
}
const defaults$5 = {
  cb: undefined,
  i: false,
  trimBeforeMatching: false,
  trimCharsBeforeMatching: [],
  maxMismatches: 0,
  firstMustMatch: false,
  lastMustMatch: false,
  hungry: false
};
const defaultGetNextIdx = index => index + 1;
function march(str, position, whatToMatchVal, originalOpts, special = false, getNextIdx = defaultGetNextIdx) {
  const whatToMatchValVal = typeof whatToMatchVal === "function" ? whatToMatchVal() : whatToMatchVal;
  if (+position < 0 && special && whatToMatchValVal === "EOL") {
    return whatToMatchValVal;
  }
  const opts = { ...defaults$5,
    ...originalOpts
  };
  if (position >= str.length && !special) {
    return false;
  }
  let charsToCheckCount = special ? 1 : whatToMatchVal.length;
  let charsMatchedTotal = 0;
  let patienceReducedBeforeFirstMatch = false;
  let lastWasMismatched = false;
  let atLeastSomethingWasMatched = false;
  let patience = opts.maxMismatches;
  let i = position;
  let somethingFound = false;
  let firstCharacterMatched = false;
  let lastCharacterMatched = false;
  function whitespaceInFrontOfFirstChar() {
    return (
      charsMatchedTotal === 1 &&
      patience < opts.maxMismatches - 1
    );
  }
  while (str[i]) {
    const nextIdx = getNextIdx(i);
    if (opts.trimBeforeMatching && str[i].trim() === "") {
      if (!str[nextIdx] && special && whatToMatchVal === "EOL") {
        return true;
      }
      i = getNextIdx(i);
      continue;
    }
    if (opts && !opts.i && opts.trimCharsBeforeMatching && opts.trimCharsBeforeMatching.includes(str[i]) || opts && opts.i && opts.trimCharsBeforeMatching && opts.trimCharsBeforeMatching.map(val => val.toLowerCase()).includes(str[i].toLowerCase())) {
      if (special && whatToMatchVal === "EOL" && !str[nextIdx]) {
        return true;
      }
      i = getNextIdx(i);
      continue;
    }
    const charToCompareAgainst = nextIdx > i ? whatToMatchVal[whatToMatchVal.length - charsToCheckCount] : whatToMatchVal[charsToCheckCount - 1];
    if (!opts.i && str[i] === charToCompareAgainst || opts.i && str[i].toLowerCase() === charToCompareAgainst.toLowerCase()) {
      if (!somethingFound) {
        somethingFound = true;
      }
      if (!atLeastSomethingWasMatched) {
        atLeastSomethingWasMatched = true;
      }
      if (charsToCheckCount === whatToMatchVal.length) {
        firstCharacterMatched = true;
        if (patience !== opts.maxMismatches) {
          return false;
        }
      } else if (charsToCheckCount === 1) {
        lastCharacterMatched = true;
      }
      charsToCheckCount -= 1;
      charsMatchedTotal++;
      if (whitespaceInFrontOfFirstChar()) {
        return false;
      }
      if (!charsToCheckCount) {
        return (
          charsMatchedTotal !== whatToMatchVal.length ||
          patience === opts.maxMismatches ||
          !patienceReducedBeforeFirstMatch ? i : false
        );
      }
    } else {
      if (!patienceReducedBeforeFirstMatch && !charsMatchedTotal) {
        patienceReducedBeforeFirstMatch = true;
      }
      if (opts.maxMismatches && patience && i) {
        patience -= 1;
        for (let y = 0; y <= patience; y++) {
          const nextCharToCompareAgainst = nextIdx > i ? whatToMatchVal[whatToMatchVal.length - charsToCheckCount + 1 + y] : whatToMatchVal[charsToCheckCount - 2 - y];
          const nextCharInSource = str[getNextIdx(i)];
          if (nextCharToCompareAgainst && (!opts.i && str[i] === nextCharToCompareAgainst || opts.i && str[i].toLowerCase() === nextCharToCompareAgainst.toLowerCase()) && (
          !opts.firstMustMatch || charsToCheckCount !== whatToMatchVal.length)) {
            charsMatchedTotal++;
            if (whitespaceInFrontOfFirstChar()) {
              return false;
            }
            charsToCheckCount -= 2;
            somethingFound = true;
            break;
          } else if (nextCharInSource && nextCharToCompareAgainst && (!opts.i && nextCharInSource === nextCharToCompareAgainst || opts.i && nextCharInSource.toLowerCase() === nextCharToCompareAgainst.toLowerCase()) && (
          !opts.firstMustMatch || charsToCheckCount !== whatToMatchVal.length)) {
            if (!charsMatchedTotal && !opts.hungry) {
              return false;
            }
            charsToCheckCount -= 1;
            somethingFound = true;
            break;
          } else if (nextCharToCompareAgainst === undefined && patience >= 0 && somethingFound && (!opts.firstMustMatch || firstCharacterMatched) && (!opts.lastMustMatch || lastCharacterMatched)) {
            return i;
          }
        }
        if (!somethingFound) {
          lastWasMismatched = i;
        }
      } else if (i === 0 && charsToCheckCount === 1 && !opts.lastMustMatch && atLeastSomethingWasMatched) {
        return 0;
      } else {
        return false;
      }
    }
    if (lastWasMismatched !== false && lastWasMismatched !== i) {
      lastWasMismatched = false;
    }
    if (charsToCheckCount < 1) {
      return i;
    }
    i = getNextIdx(i);
  }
  if (charsToCheckCount > 0) {
    if (special && whatToMatchValVal === "EOL") {
      return true;
    }
    if (opts && opts.maxMismatches >= charsToCheckCount && atLeastSomethingWasMatched) {
      return lastWasMismatched || 0;
    }
    return false;
  }
}
function main(mode, str, position, originalWhatToMatch, originalOpts) {
  if (isObj(originalOpts) && Object.prototype.hasOwnProperty.call(originalOpts, "trimBeforeMatching") && typeof originalOpts.trimBeforeMatching !== "boolean") {
    throw new Error(`string-match-left-right/${mode}(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!${Array.isArray(originalOpts.trimBeforeMatching) ? ` Did you mean to use opts.trimCharsBeforeMatching?` : ""}`);
  }
  const opts = { ...defaults$5,
    ...originalOpts
  };
  if (typeof opts.trimCharsBeforeMatching === "string") {
    opts.trimCharsBeforeMatching = arrayiffy(opts.trimCharsBeforeMatching);
  }
  opts.trimCharsBeforeMatching = opts.trimCharsBeforeMatching.map(el => isStr$1(el) ? el : String(el));
  if (!isStr$1(str)) {
    return false;
  }
  if (!str.length) {
    return false;
  }
  if (!Number.isInteger(position) || position < 0) {
    throw new Error(`string-match-left-right/${mode}(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ${typeof position}, equal to:\n${JSON.stringify(position, null, 4)}`);
  }
  let whatToMatch;
  let special;
  if (isStr$1(originalWhatToMatch)) {
    whatToMatch = [originalWhatToMatch];
  } else if (Array.isArray(originalWhatToMatch)) {
    whatToMatch = originalWhatToMatch;
  } else if (!originalWhatToMatch) {
    whatToMatch = originalWhatToMatch;
  } else if (typeof originalWhatToMatch === "function") {
    whatToMatch = [];
    whatToMatch.push(originalWhatToMatch);
  } else {
    throw new Error(`string-match-left-right/${mode}(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ${typeof originalWhatToMatch}, equal to:\n${JSON.stringify(originalWhatToMatch, null, 4)}`);
  }
  if (originalOpts && !isObj(originalOpts)) {
    throw new Error(`string-match-left-right/${mode}(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type "${typeof originalOpts}", and equal to:\n${JSON.stringify(originalOpts, null, 4)}`);
  }
  let culpritsIndex = 0;
  let culpritsVal = "";
  if (opts && opts.trimCharsBeforeMatching && opts.trimCharsBeforeMatching.some((el, i) => {
    if (el.length > 1) {
      culpritsIndex = i;
      culpritsVal = el;
      return true;
    }
    return false;
  })) {
    throw new Error(`string-match-left-right/${mode}(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ${culpritsIndex} is longer than 1 character, ${culpritsVal.length} (equals to ${culpritsVal}). Please split it into separate characters and put into array as separate elements.`);
  }
  if (!whatToMatch || !Array.isArray(whatToMatch) ||
  Array.isArray(whatToMatch) && !whatToMatch.length ||
  Array.isArray(whatToMatch) && whatToMatch.length === 1 && isStr$1(whatToMatch[0]) && !whatToMatch[0].trim()
  ) {
      if (typeof opts.cb === "function") {
        let firstCharOutsideIndex;
        let startingPosition = position;
        if (mode === "matchLeftIncl" || mode === "matchRight") {
          startingPosition += 1;
        }
        if (mode[5] === "L") {
          for (let y = startingPosition; y--;) {
            const currentChar = str[y];
            if ((!opts.trimBeforeMatching || opts.trimBeforeMatching && currentChar !== undefined && currentChar.trim()) && (!opts.trimCharsBeforeMatching || !opts.trimCharsBeforeMatching.length || currentChar !== undefined && !opts.trimCharsBeforeMatching.includes(currentChar))) {
              firstCharOutsideIndex = y;
              break;
            }
          }
        } else if (mode.startsWith("matchRight")) {
          for (let y = startingPosition; y < str.length; y++) {
            const currentChar = str[y];
            if ((!opts.trimBeforeMatching || opts.trimBeforeMatching && currentChar.trim()) && (!opts.trimCharsBeforeMatching || !opts.trimCharsBeforeMatching.length || !opts.trimCharsBeforeMatching.includes(currentChar))) {
              firstCharOutsideIndex = y;
              break;
            }
          }
        }
        if (firstCharOutsideIndex === undefined) {
          return false;
        }
        const wholeCharacterOutside = str[firstCharOutsideIndex];
        const indexOfTheCharacterAfter = firstCharOutsideIndex + 1;
        let theRemainderOfTheString = "";
        if (indexOfTheCharacterAfter && indexOfTheCharacterAfter > 0) {
          theRemainderOfTheString = str.slice(0, indexOfTheCharacterAfter);
        }
        if (mode[5] === "L") {
          return opts.cb(wholeCharacterOutside, theRemainderOfTheString, firstCharOutsideIndex);
        }
        if (firstCharOutsideIndex && firstCharOutsideIndex > 0) {
          theRemainderOfTheString = str.slice(firstCharOutsideIndex);
        }
        return opts.cb(wholeCharacterOutside, theRemainderOfTheString, firstCharOutsideIndex);
      }
      let extraNote = "";
      if (!originalOpts) {
        extraNote = " More so, the whole options object, the fourth input argument, is missing!";
      }
      throw new Error(`string-match-left-right/${mode}(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!${extraNote}`);
    }
  for (let i = 0, len = whatToMatch.length; i < len; i++) {
    special = typeof whatToMatch[i] === "function";
    const whatToMatchVal = whatToMatch[i];
    let fullCharacterInFront;
    let indexOfTheCharacterInFront;
    let restOfStringInFront = "";
    let startingPosition = position;
    if (mode === "matchRight") {
      startingPosition += 1;
    } else if (mode === "matchLeft") {
      startingPosition -= 1;
    }
    const found = march(str, startingPosition, whatToMatchVal, opts, special, i2 => mode[5] === "L" ? i2 - 1 : i2 + 1);
    if (found && special && typeof whatToMatchVal === "function" && whatToMatchVal() === "EOL") {
      return whatToMatchVal() && (opts.cb ? opts.cb(fullCharacterInFront, restOfStringInFront, indexOfTheCharacterInFront) : true) ? whatToMatchVal() : false;
    }
    if (Number.isInteger(found)) {
      indexOfTheCharacterInFront = mode.startsWith("matchLeft") ? found - 1 : found + 1;
      if (mode[5] === "L") {
        restOfStringInFront = str.slice(0, found);
      } else {
        restOfStringInFront = str.slice(indexOfTheCharacterInFront);
      }
    }
    if (indexOfTheCharacterInFront < 0) {
      indexOfTheCharacterInFront = undefined;
    }
    if (str[indexOfTheCharacterInFront]) {
      fullCharacterInFront = str[indexOfTheCharacterInFront];
    }
    if (Number.isInteger(found) && (opts.cb ? opts.cb(fullCharacterInFront, restOfStringInFront, indexOfTheCharacterInFront) : true)) {
      return whatToMatchVal;
    }
  }
  return false;
}
function matchLeftIncl(str, position, whatToMatch, opts) {
  return main("matchLeftIncl", str, position, whatToMatch, opts);
}
function matchRightIncl(str, position, whatToMatch, opts) {
  return main("matchRightIncl", str, position, whatToMatch, opts);
}

/**
 * @name string-collapse-leading-whitespace
 * @fileoverview Collapse the leading and trailing whitespace of a string
 * @version 5.0.16
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-collapse-leading-whitespace/}
 */
function collWhitespace(str, originallineBreakLimit = 1) {
  const rawNbsp = "\u00A0";
  function reverse(s) {
    return Array.from(s).reverse().join("");
  }
  function prep(whitespaceChunk, limit, trailing) {
    const firstBreakChar = trailing ? "\n" : "\r";
    const secondBreakChar = trailing ? "\r" : "\n";
    if (!whitespaceChunk) {
      return whitespaceChunk;
    }
    let crlfCount = 0;
    let res = "";
    for (let i = 0, len = whitespaceChunk.length; i < len; i++) {
      if (whitespaceChunk[i] === firstBreakChar || whitespaceChunk[i] === secondBreakChar && whitespaceChunk[i - 1] !== firstBreakChar) {
        crlfCount++;
      }
      if (`\r\n`.includes(whitespaceChunk[i]) || whitespaceChunk[i] === rawNbsp) {
        if (whitespaceChunk[i] === rawNbsp) {
          res += whitespaceChunk[i];
        } else if (whitespaceChunk[i] === firstBreakChar) {
          if (crlfCount <= limit) {
            res += whitespaceChunk[i];
            if (whitespaceChunk[i + 1] === secondBreakChar) {
              res += whitespaceChunk[i + 1];
              i++;
            }
          }
        } else if (whitespaceChunk[i] === secondBreakChar && (!whitespaceChunk[i - 1] || whitespaceChunk[i - 1] !== firstBreakChar) && crlfCount <= limit) {
          res += whitespaceChunk[i];
        }
      } else {
        if (!whitespaceChunk[i + 1] && !crlfCount) {
          res += " ";
        }
      }
    }
    return res;
  }
  if (typeof str === "string" && str.length) {
    let lineBreakLimit = 1;
    if (typeof +originallineBreakLimit === "number" && Number.isInteger(+originallineBreakLimit) && +originallineBreakLimit >= 0) {
      lineBreakLimit = +originallineBreakLimit;
    }
    let frontPart = "";
    let endPart = "";
    if (!str.trim()) {
      frontPart = str;
    } else if (!str[0].trim()) {
      for (let i = 0, len = str.length; i < len; i++) {
        if (str[i].trim()) {
          frontPart = str.slice(0, i);
          break;
        }
      }
    }
    if (str.trim() && (str.slice(-1).trim() === "" || str.slice(-1) === rawNbsp)) {
      for (let i = str.length; i--;) {
        if (str[i].trim()) {
          endPart = str.slice(i + 1);
          break;
        }
      }
    }
    return `${prep(frontPart, lineBreakLimit, false)}${str.trim()}${reverse(prep(reverse(endPart), lineBreakLimit, true))}`;
  }
  return str;
}

/**
 * @name ranges-sort
 * @fileoverview Sort string index ranges
 * @version 4.0.16
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-sort/}
 */
const defaults$4 = {
  strictlyTwoElementsInRangeArrays: false,
  progressFn: null
};
function rSort(arrOfRanges, originalOptions) {
  if (!Array.isArray(arrOfRanges) || !arrOfRanges.length) {
    return arrOfRanges;
  }
  const opts = { ...defaults$4,
    ...originalOptions
  };
  let culpritsIndex;
  let culpritsLen;
  if (opts.strictlyTwoElementsInRangeArrays && !arrOfRanges.filter(range => range).every((rangeArr, indx) => {
    if (rangeArr.length !== 2) {
      culpritsIndex = indx;
      culpritsLen = rangeArr.length;
      return false;
    }
    return true;
  })) {
    throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${culpritsIndex}th range (${JSON.stringify(arrOfRanges[culpritsIndex], null, 4)}) has not two but ${culpritsLen} elements!`);
  }
  if (!arrOfRanges.filter(range => range).every((rangeArr, indx) => {
    if (!Number.isInteger(rangeArr[0]) || rangeArr[0] < 0 || !Number.isInteger(rangeArr[1]) || rangeArr[1] < 0) {
      culpritsIndex = indx;
      return false;
    }
    return true;
  })) {
    throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${culpritsIndex}th range (${JSON.stringify(arrOfRanges[culpritsIndex], null, 4)}) does not consist of only natural numbers!`);
  }
  const maxPossibleIterations = arrOfRanges.filter(range => range).length ** 2;
  let counter = 0;
  return Array.from(arrOfRanges).filter(range => range).sort((range1, range2) => {
    if (opts.progressFn) {
      counter += 1;
      opts.progressFn(Math.floor(counter * 100 / maxPossibleIterations));
    }
    if (range1[0] === range2[0]) {
      if (range1[1] < range2[1]) {
        return -1;
      }
      if (range1[1] > range2[1]) {
        return 1;
      }
      return 0;
    }
    if (range1[0] < range2[0]) {
      return -1;
    }
    return 1;
  });
}

/**
 * @name ranges-merge
 * @fileoverview Merge and sort string index ranges
 * @version 7.0.16
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-merge/}
 */
const defaults$3 = {
  mergeType: 1,
  progressFn: null,
  joinRangesThatTouchEdges: true
};
function rMerge(arrOfRanges, originalOpts) {
  function isObj(something) {
    return something && typeof something === "object" && !Array.isArray(something);
  }
  if (!Array.isArray(arrOfRanges) || !arrOfRanges.length) {
    return null;
  }
  let opts;
  if (originalOpts) {
    if (isObj(originalOpts)) {
      opts = { ...defaults$3,
        ...originalOpts
      };
      if (opts.progressFn && isObj(opts.progressFn) && !Object.keys(opts.progressFn).length) {
        opts.progressFn = null;
      } else if (opts.progressFn && typeof opts.progressFn !== "function") {
        throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof opts.progressFn}", equal to ${JSON.stringify(opts.progressFn, null, 4)}`);
      }
      if (opts.mergeType && +opts.mergeType !== 1 && +opts.mergeType !== 2) {
        throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof opts.mergeType}", equal to ${JSON.stringify(opts.mergeType, null, 4)}`);
      }
      if (typeof opts.joinRangesThatTouchEdges !== "boolean") {
        throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof opts.joinRangesThatTouchEdges}", equal to ${JSON.stringify(opts.joinRangesThatTouchEdges, null, 4)}`);
      }
    } else {
      throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(originalOpts, null, 4)} (type ${typeof originalOpts})`);
    }
  } else {
    opts = { ...defaults$3
    };
  }
  const filtered = arrOfRanges
  .filter(range => range).map(subarr => [...subarr]).filter(
  rangeArr => rangeArr[2] !== undefined || rangeArr[0] !== rangeArr[1]);
  let sortedRanges;
  let lastPercentageDone;
  let percentageDone;
  if (opts.progressFn) {
    sortedRanges = rSort(filtered, {
      progressFn: percentage => {
        percentageDone = Math.floor(percentage / 5);
        if (percentageDone !== lastPercentageDone) {
          lastPercentageDone = percentageDone;
          opts.progressFn(percentageDone);
        }
      }
    });
  } else {
    sortedRanges = rSort(filtered);
  }
  if (!sortedRanges) {
    return null;
  }
  const len = sortedRanges.length - 1;
  for (let i = len; i > 0; i--) {
    if (opts.progressFn) {
      percentageDone = Math.floor((1 - i / len) * 78) + 21;
      if (percentageDone !== lastPercentageDone && percentageDone > lastPercentageDone) {
        lastPercentageDone = percentageDone;
        opts.progressFn(percentageDone);
      }
    }
    if (sortedRanges[i][0] <= sortedRanges[i - 1][0] || !opts.joinRangesThatTouchEdges && sortedRanges[i][0] < sortedRanges[i - 1][1] || opts.joinRangesThatTouchEdges && sortedRanges[i][0] <= sortedRanges[i - 1][1]) {
      sortedRanges[i - 1][0] = Math.min(sortedRanges[i][0], sortedRanges[i - 1][0]);
      sortedRanges[i - 1][1] = Math.max(sortedRanges[i][1], sortedRanges[i - 1][1]);
      if (sortedRanges[i][2] !== undefined && (sortedRanges[i - 1][0] >= sortedRanges[i][0] || sortedRanges[i - 1][1] <= sortedRanges[i][1])) {
        if (sortedRanges[i - 1][2] !== null) {
          if (sortedRanges[i][2] === null && sortedRanges[i - 1][2] !== null) {
            sortedRanges[i - 1][2] = null;
          } else if (sortedRanges[i - 1][2] != null) {
            if (+opts.mergeType === 2 && sortedRanges[i - 1][0] === sortedRanges[i][0]) {
              sortedRanges[i - 1][2] = sortedRanges[i][2];
            } else {
              sortedRanges[i - 1][2] += sortedRanges[i][2];
            }
          } else {
            sortedRanges[i - 1][2] = sortedRanges[i][2];
          }
        }
      }
      sortedRanges.splice(i, 1);
      i = sortedRanges.length;
    }
  }
  return sortedRanges.length ? sortedRanges : null;
}

/**
 * @name ranges-push
 * @fileoverview Gather string index ranges
 * @version 5.0.16
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-push/}
 */
function existy(x) {
  return x != null;
}
function isNum(something) {
  return Number.isInteger(something) && something >= 0;
}
function isStr(something) {
  return typeof something === "string";
}
const defaults$2 = {
  limitToBeAddedWhitespace: false,
  limitLinebreaksCount: 1,
  mergeType: 1
};
class Ranges {
  constructor(originalOpts) {
    const opts = { ...defaults$2,
      ...originalOpts
    };
    if (opts.mergeType && opts.mergeType !== 1 && opts.mergeType !== 2) {
      if (isStr(opts.mergeType) && opts.mergeType.trim() === "1") {
        opts.mergeType = 1;
      } else if (isStr(opts.mergeType) && opts.mergeType.trim() === "2") {
        opts.mergeType = 2;
      } else {
        throw new Error(`ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof opts.mergeType}", equal to ${JSON.stringify(opts.mergeType, null, 4)}`);
      }
    }
    this.opts = opts;
    this.ranges = [];
  }
  add(originalFrom, originalTo, addVal) {
    if (originalFrom == null && originalTo == null) {
      return;
    }
    if (existy(originalFrom) && !existy(originalTo)) {
      if (Array.isArray(originalFrom)) {
        if (originalFrom.length) {
          if (originalFrom.some(el => Array.isArray(el))) {
            originalFrom.forEach(thing => {
              if (Array.isArray(thing)) {
                this.add(...thing);
              }
            });
            return;
          }
          if (originalFrom.length && isNum(+originalFrom[0]) && isNum(+originalFrom[1])) {
            this.add(...originalFrom);
          }
        }
        return;
      }
      throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set (${JSON.stringify(originalFrom, null, 0)}) but second-one, "to" is not (${JSON.stringify(originalTo, null, 0)})`);
    } else if (!existy(originalFrom) && existy(originalTo)) {
      throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set (${JSON.stringify(originalTo, null, 0)}) but first-one, "from" is not (${JSON.stringify(originalFrom, null, 0)})`);
    }
    const from = +originalFrom;
    const to = +originalTo;
    if (isNum(addVal)) {
      addVal = String(addVal);
    }
    if (isNum(from) && isNum(to)) {
      if (existy(addVal) && !isStr(addVal) && !isNum(addVal)) {
        throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ${typeof addVal}, equal to:\n${JSON.stringify(addVal, null, 4)}`);
      }
      if (existy(this.ranges) && Array.isArray(this.last()) && from === this.last()[1]) {
        this.last()[1] = to;
        if (this.last()[2] === null || addVal === null) ;
        if (this.last()[2] !== null && existy(addVal)) {
          let calculatedVal = this.last()[2] && this.last()[2].length > 0 && (!this.opts || !this.opts.mergeType || this.opts.mergeType === 1) ? this.last()[2] + addVal : addVal;
          if (this.opts.limitToBeAddedWhitespace) {
            calculatedVal = collWhitespace(calculatedVal, this.opts.limitLinebreaksCount);
          }
          if (!(isStr(calculatedVal) && !calculatedVal.length)) {
            this.last()[2] = calculatedVal;
          }
        }
      } else {
        if (!this.ranges) {
          this.ranges = [];
        }
        const whatToPush = addVal !== undefined && !(isStr(addVal) && !addVal.length) ? [from, to, addVal && this.opts.limitToBeAddedWhitespace ? collWhitespace(addVal, this.opts.limitLinebreaksCount) : addVal] : [from, to];
        this.ranges.push(whatToPush);
      }
    } else {
      if (!(isNum(from) && from >= 0)) {
        throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it's of a type "${typeof from}" equal to: ${JSON.stringify(from, null, 4)}`);
      } else {
        throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it's of a type "${typeof to}" equal to: ${JSON.stringify(to, null, 4)}`);
      }
    }
  }
  push(originalFrom, originalTo, addVal) {
    this.add(originalFrom, originalTo, addVal);
  }
  current() {
    if (Array.isArray(this.ranges) && this.ranges.length) {
      this.ranges = rMerge(this.ranges, {
        mergeType: this.opts.mergeType
      });
      if (this.ranges && this.opts.limitToBeAddedWhitespace) {
        return this.ranges.map(val => {
          if (existy(val[2])) {
            return [val[0], val[1], collWhitespace(val[2], this.opts.limitLinebreaksCount)];
          }
          return val;
        });
      }
      return this.ranges;
    }
    return null;
  }
  wipe() {
    this.ranges = [];
  }
  replace(givenRanges) {
    if (Array.isArray(givenRanges) && givenRanges.length) {
      if (!(Array.isArray(givenRanges[0]) && isNum(givenRanges[0][0]))) {
        throw new Error(`ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ${JSON.stringify(givenRanges[0], null, 4)} should be an array and its first element should be an integer, a string index.`);
      } else {
        this.ranges = Array.from(givenRanges);
      }
    } else {
      this.ranges = [];
    }
  }
  last() {
    if (Array.isArray(this.ranges) && this.ranges.length) {
      return this.ranges[this.ranges.length - 1];
    }
    return null;
  }
}

/**
 * @name ranges-apply
 * @fileoverview Take an array of string index ranges, delete/replace the string according to them
 * @version 5.0.16
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-apply/}
 */
function rApply(str, originalRangesArr, progressFn) {
  let percentageDone = 0;
  let lastPercentageDone = 0;
  if (arguments.length === 0) {
    throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");
  }
  if (typeof str !== "string") {
    throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof str}, equal to: ${JSON.stringify(str, null, 4)}`);
  }
  if (originalRangesArr && !Array.isArray(originalRangesArr)) {
    throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof originalRangesArr}, equal to: ${JSON.stringify(originalRangesArr, null, 4)}`);
  }
  if (progressFn && typeof progressFn !== "function") {
    throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof progressFn}, equal to: ${JSON.stringify(progressFn, null, 4)}`);
  }
  if (!originalRangesArr || !originalRangesArr.filter(range => range).length) {
    return str;
  }
  let rangesArr;
  if (Array.isArray(originalRangesArr) && Number.isInteger(originalRangesArr[0]) && Number.isInteger(originalRangesArr[1])) {
    rangesArr = [Array.from(originalRangesArr)];
  } else {
    rangesArr = Array.from(originalRangesArr);
  }
  const len = rangesArr.length;
  let counter = 0;
  rangesArr.filter(range => range).forEach((el, i) => {
    if (progressFn) {
      percentageDone = Math.floor(counter / len * 10);
      /* istanbul ignore else */
      if (percentageDone !== lastPercentageDone) {
        lastPercentageDone = percentageDone;
        progressFn(percentageDone);
      }
    }
    if (!Array.isArray(el)) {
      throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${i}th element not an array: ${JSON.stringify(el, null, 4)}, which is ${typeof el}`);
    }
    if (!Number.isInteger(el[0])) {
      if (!Number.isInteger(+el[0]) || +el[0] < 0) {
        throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${i}th element, array ${JSON.stringify(el, null, 0)}. Its first element is not an integer, string index, but ${typeof el[0]}, equal to: ${JSON.stringify(el[0], null, 4)}.`);
      } else {
        rangesArr[i][0] = +rangesArr[i][0];
      }
    }
    if (!Number.isInteger(el[1])) {
      if (!Number.isInteger(+el[1]) || +el[1] < 0) {
        throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${i}th element, array ${JSON.stringify(el, null, 0)}. Its second element is not an integer, string index, but ${typeof el[1]}, equal to: ${JSON.stringify(el[1], null, 4)}.`);
      } else {
        rangesArr[i][1] = +rangesArr[i][1];
      }
    }
    counter += 1;
  });
  const workingRanges = rMerge(rangesArr, {
    progressFn: perc => {
      if (progressFn) {
        percentageDone = 10 + Math.floor(perc / 10);
        /* istanbul ignore else */
        if (percentageDone !== lastPercentageDone) {
          lastPercentageDone = percentageDone;
          progressFn(percentageDone);
        }
      }
    }
  });
  const len2 = Array.isArray(workingRanges) ? workingRanges.length : 0;
  /* istanbul ignore else */
  if (len2 > 0) {
    const tails = str.slice(workingRanges[len2 - 1][1]);
    str = workingRanges.reduce((acc, _val, i, arr) => {
      if (progressFn) {
        percentageDone = 20 + Math.floor(i / len2 * 80);
        /* istanbul ignore else */
        if (percentageDone !== lastPercentageDone) {
          lastPercentageDone = percentageDone;
          progressFn(percentageDone);
        }
      }
      const beginning = i === 0 ? 0 : arr[i - 1][1];
      const ending = arr[i][0];
      return acc + str.slice(beginning, ending) + (arr[i][2] || "");
    }, "");
    str += tails;
  }
  return str;
}

/**
 * @name string-trim-spaces-only
 * @fileoverview Like String.trim() but you can choose granularly what to trim
 * @version 3.0.16
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-trim-spaces-only/}
 */
const defaults$1 = {
  classicTrim: false,
  cr: false,
  lf: false,
  tab: false,
  space: true,
  nbsp: false
};
function trimSpaces(str, originalOpts) {
  if (typeof str !== "string") {
    throw new Error(`string-trim-spaces-only: [THROW_ID_01] input must be string! It was given as ${typeof str}, equal to:\n${JSON.stringify(str, null, 4)}`);
  }
  const opts = { ...defaults$1,
    ...originalOpts
  };
  function check(char) {
    return opts.classicTrim && !char.trim() || !opts.classicTrim && (opts.space && char === " " || opts.cr && char === "\r" || opts.lf && char === "\n" || opts.tab && char === "\t" || opts.nbsp && char === "\u00a0");
  }
  let newStart;
  let newEnd;
  if (str.length) {
    if (check(str[0])) {
      for (let i = 0, len = str.length; i < len; i++) {
        if (!check(str[i])) {
          newStart = i;
          break;
        }
        if (i === str.length - 1) {
          return {
            res: "",
            ranges: [[0, str.length]]
          };
        }
      }
    }
    if (check(str[str.length - 1])) {
      for (let i = str.length; i--;) {
        if (!check(str[i])) {
          newEnd = i + 1;
          break;
        }
      }
    }
    if (newStart) {
      if (newEnd) {
        return {
          res: str.slice(newStart, newEnd),
          ranges: [[0, newStart], [newEnd, str.length]]
        };
      }
      return {
        res: str.slice(newStart),
        ranges: [[0, newStart]]
      };
    }
    if (newEnd) {
      return {
        res: str.slice(0, newEnd),
        ranges: [[newEnd, str.length]]
      };
    }
    return {
      res: str,
      ranges: []
    };
  }
  return {
    res: "",
    ranges: []
  };
}

const version = version$1;
const defaults = {
    heads: ["{{"],
    tails: ["}}"],
};
function remDup(str, originalOpts) {
    //
    const has = Object.prototype.hasOwnProperty;
    // ===================== insurance =====================
    if (str === undefined) {
        throw new Error("string-remove-duplicate-heads-tails: [THROW_ID_01] The input is missing!");
    }
    if (typeof str !== "string") {
        return str;
    }
    if (originalOpts && !lodash_isplainobject(originalOpts)) {
        throw new Error(`string-remove-duplicate-heads-tails: [THROW_ID_03] The given options are not a plain object but ${typeof originalOpts}!`);
    }
    // at this point, we can clone the originalOpts
    const clonedOriginalOpts = { ...originalOpts };
    if (clonedOriginalOpts && has.call(clonedOriginalOpts, "heads")) {
        if (!arrayiffy(clonedOriginalOpts.heads).every((val) => typeof val === "string" || Array.isArray(val))) {
            throw new Error("string-remove-duplicate-heads-tails: [THROW_ID_04] The opts.heads contains elements which are not string-type!");
        }
        else if (typeof clonedOriginalOpts.heads === "string") {
            clonedOriginalOpts.heads = arrayiffy(clonedOriginalOpts.heads);
        }
    }
    if (clonedOriginalOpts && has.call(clonedOriginalOpts, "tails")) {
        if (!arrayiffy(clonedOriginalOpts.tails).every((val) => typeof val === "string" || Array.isArray(val))) {
            throw new Error("string-remove-duplicate-heads-tails: [THROW_ID_05] The opts.tails contains elements which are not string-type!");
        }
        else if (typeof clonedOriginalOpts.tails === "string") {
            clonedOriginalOpts.tails = arrayiffy(clonedOriginalOpts.tails);
        }
    }
    // trim but only if it's not trimmable to zero length (in that case return intact)
    const temp = trimSpaces(str).res;
    if (temp.length === 0) {
        return str;
    }
    str = temp;
    const defaults = {
        heads: ["{{"],
        tails: ["}}"],
    };
    const opts = { ...defaults, ...clonedOriginalOpts };
    // first, let's trim heads and tails' array elements:
    opts.heads = opts.heads.map((el) => el.trim());
    opts.tails = opts.tails.map((el) => el.trim());
    //                        P R E P A R A T I O N S
    // this flag is on after the first non-heads/tails chunk
    let firstNonMarkerChunkFound = false;
    // When second non-heads/tails chunk is met, this flag is turned on.
    // It wipes all conditional ranges and after that, only second heads/tails-onwards
    // that leads to string-end or whitespace and string-end will be moved to real slices
    // ranges array.
    let secondNonMarkerChunkFound = false;
    // Real ranges array is the array that we'll process in the end, cropping pieces
    // out of the string:
    const realRanges = new Ranges({ limitToBeAddedWhitespace: true });
    // Conditional ranges array depends of the conditions what follows them. If the
    // condition is satisfied, range is merged into realRanges[]; if not, it's deleted.
    // For example, for leading head chunks, condition would be other heads/tails following
    // precisely after (not counting whitespace). For another example, for trailing
    // chunks, condition would be end of the string or other heads/tails that leads to
    // the end of the string:
    const conditionalRanges = new Ranges({
        limitToBeAddedWhitespace: true,
    });
    // this flag is requirement for cases where there are at least two chunks
    // wrapped with heads/tails, and we can't "peel off" the first tail that follows
    // the last chunk - each chunk has its wrapping:
    // {{ {{ chunk1}} {{chunk2}} }}
    //                        ^^ That's these tails we're talking about.
    //                           We don't want these deleted!
    let itsFirstTail = true;
    // This is a flag to mark the first letter in a non-head/tail/whitespace chunk.
    // Otherwise, second letter would trigger "secondNonMarkerChunkFound = true" and
    // we don't want that.
    let itsFirstLetter = true;
    // = heads or tails:
    let lastMatched = "";
    //                              P A R T   I
    // delete leading empty head-tail clumps as in "((()))((())) a"
    function delLeadingEmptyHeadTailChunks(str1, opts1) {
        let noteDownTheIndex;
        // do heads, from beginning of the input string:
        const resultOfAttemptToMatchHeads = matchRightIncl(str1, 0, opts1.heads, {
            trimBeforeMatching: true,
            cb: (_char, _theRemainderOfTheString, index) => {
                noteDownTheIndex = index;
                return true;
            },
        });
        if (!resultOfAttemptToMatchHeads) {
            // if heads were not matched, bail - there's no point matching trailing tails
            return str1;
        }
        // do tails now:
        const resultOfAttemptToMatchTails = matchRightIncl(str1, noteDownTheIndex, opts1.tails, {
            trimBeforeMatching: true,
            cb: (_char, _theRemainderOfTheString, index) => {
                // reassign noteDownTheIndex to new value, this time shifted right by
                // the width of matched tails
                noteDownTheIndex = index;
                return true;
            },
        });
        if (resultOfAttemptToMatchTails) {
            return str1.slice(noteDownTheIndex);
        }
        return str1;
    }
    // action
    while (str !== delLeadingEmptyHeadTailChunks(str, opts)) {
        str = trimSpaces(delLeadingEmptyHeadTailChunks(str, opts)).res;
    }
    // delete trailing empty head-tail clumps as in "a ((()))((()))"
    function delTrailingEmptyHeadTailChunks(str1, opts1) {
        let noteDownTheIndex;
        // do tails now - match from the end of a string, trimming along:
        const resultOfAttemptToMatchTails = matchLeftIncl(str1, str1.length - 1, opts1.tails, {
            trimBeforeMatching: true,
            cb: (_char, _theRemainderOfTheString, index) => {
                noteDownTheIndex = index;
                return true;
            },
        });
        if (!resultOfAttemptToMatchTails || !noteDownTheIndex) {
            // if tails were not matched, bail - there's no point checking preceding heads
            return str1;
        }
        // do heads that precede those tails:
        const resultOfAttemptToMatchHeads = matchLeftIncl(str1, noteDownTheIndex, opts1.heads, {
            trimBeforeMatching: true,
            cb: (_char, _theRemainderOfTheString, index) => {
                // reassign noteDownTheIndex to new value, this time shifted left by
                // the width of matched heads
                noteDownTheIndex = index;
                return true;
            },
        });
        if (resultOfAttemptToMatchHeads) {
            return str1.slice(0, noteDownTheIndex + 1);
        }
        return str1;
    }
    // action
    while (str !== delTrailingEmptyHeadTailChunks(str, opts)) {
        str = trimSpaces(delTrailingEmptyHeadTailChunks(str, opts)).res;
    }
    //                      E A R L Y    E N D I N G
    if (!opts.heads.length ||
        !matchRightIncl(str, 0, opts.heads, {
            trimBeforeMatching: true,
        }) ||
        !opts.tails.length ||
        !matchLeftIncl(str, str.length - 1, opts.tails, {
            trimBeforeMatching: true,
        })) {
        return trimSpaces(str).res;
    }
    //                             P A R T   II
    // iterate the input string
    for (let i = 0, len = str.length; i < len; i++) {
        //
        // console log bits for development
        // catch whitespace
        if (str[i].trim() === "") ;
        else {
            // so it's not a whitespace character.
            // "beginning" is a special state which lasts until first non-head/tail
            // character is met.
            // For example: {{{  }}} {{{ {{{ something }}} }}}
            // ------------>             <----------------
            //                 ^^^ indexes where "beginning" is "true"
            // match heads
            let noteDownTheIndex;
            const resultOfAttemptToMatchHeads = matchRightIncl(str, i, opts.heads, {
                trimBeforeMatching: true,
                cb: (_char, _theRemainderOfTheString, index) => {
                    noteDownTheIndex = index;
                    return true;
                },
            });
            if (resultOfAttemptToMatchHeads && noteDownTheIndex) {
                // reset marker
                itsFirstLetter = true;
                // reset firstTails
                if (itsFirstTail) {
                    itsFirstTail = true;
                }
                // 0. Just in case, check maybe there are tails following right away,
                // in that case definitely remove both
                let tempIndexUpTo;
                const resultOfAttemptToMatchTails = matchRightIncl(str, noteDownTheIndex, opts.tails, {
                    trimBeforeMatching: true,
                    cb: (_char, _theRemainderOfTheString, index) => {
                        tempIndexUpTo = index;
                        return true;
                    },
                });
                if (resultOfAttemptToMatchTails) {
                    realRanges.push(i, tempIndexUpTo);
                }
                // 1. At this moment, in case {{ hi {{ name }}! }}
                // when we reach the second "{{", first "{{" are still in conditional
                // holding array. We'll evaluate the situation by "lastMatched" variable.
                if (conditionalRanges.current() &&
                    firstNonMarkerChunkFound &&
                    lastMatched !== "tails") {
                    realRanges.push(conditionalRanges.current());
                }
                // 2. let's evaluate the situation and possibly submit this range of indexes
                // to conditional ranges array.
                // if it's the beginning of a file, where no non-head/tail character was
                // met yet, add it to conditionals array:
                if (!firstNonMarkerChunkFound) {
                    // deal with any existing content in the conditionals:
                    if (conditionalRanges.current()) {
                        // first, if there are any conditional ranges, they become real-ones:
                        realRanges.push(conditionalRanges.current());
                        // then, wipe conditionals:
                        conditionalRanges.wipe();
                    }
                    // then, add this new range:
                    conditionalRanges.push(i, noteDownTheIndex);
                }
                else {
                    // Every heads or tails go to conditional array. First encountered
                    // non-head/tail wipes all.
                    conditionalRanges.push(i, noteDownTheIndex);
                }
                // 3. set the new lastMatched
                lastMatched = "heads";
                // 4. offset the index
                i = noteDownTheIndex - 1;
                continue;
            }
            // match tails
            const resultOfAttemptToMatchTails = matchRightIncl(str, i, opts.tails, {
                trimBeforeMatching: true,
                cb: (_char, _theRemainderOfTheString, index) => {
                    noteDownTheIndex = Number.isInteger(index) ? index : str.length;
                    return true;
                },
            });
            if (resultOfAttemptToMatchTails && noteDownTheIndex) {
                // reset marker
                itsFirstLetter = true;
                if (!itsFirstTail) {
                    // if that's a second chunk, this means each chunk will be wrapped
                    // and we can't peel of those wrappings, hence only the second tail
                    // can be added to conditionals' array.
                    conditionalRanges.push(i, noteDownTheIndex);
                }
                else {
                    // 1.
                    if (lastMatched === "heads") {
                        conditionalRanges.wipe();
                    }
                    // 2. if it's just the first tail, do nothing, but turn off the flag
                    itsFirstTail = false;
                }
                // set lastMatched
                lastMatched = "tails";
                // 2. offset the index
                i = noteDownTheIndex - 1;
                continue;
            }
            // if we reached this point, this means, it's neither head nor tail, also
            // not a whitespace
            if (itsFirstTail) {
                itsFirstTail = true;
            }
            if (itsFirstLetter && !firstNonMarkerChunkFound) {
                // wipe the conditionals:
                // conditionalRanges.wipe()
                // set the flags:
                firstNonMarkerChunkFound = true;
                itsFirstLetter = false;
            }
            else if (itsFirstLetter && !secondNonMarkerChunkFound) {
                secondNonMarkerChunkFound = true;
                itsFirstTail = true;
                itsFirstLetter = false;
                // wipe the conditionals.
                // That's for example where we reached "n" in "{{ hi {{ name }}! }}"
                if (lastMatched === "heads") {
                    conditionalRanges.wipe();
                }
            }
            else if (itsFirstLetter && secondNonMarkerChunkFound) {
                // in this case we reached "!" in "{{ hi }} name {{! }}", for example.
                // Let's wipe the conditionals
                conditionalRanges.wipe();
            }
        }
        //
    }
    if (conditionalRanges.current()) {
        realRanges.push(conditionalRanges.current());
    }
    if (realRanges.current()) {
        return rApply(str, realRanges.current()).trim();
    }
    return str.trim();
}

exports.defaults = defaults;
exports.remDup = remDup;
exports.version = version;

Object.defineProperty(exports, '__esModule', { value: true });

})));
