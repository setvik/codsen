'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isObj = require('lodash.isplainobject');
var checkTypes = require('check-types-mini');
var isNatStr = require('is-natural-number-string');
var isNatNum = require('is-natural-number');
var ordinalSuffix = require('ordinal-number-suffix');
var rangesSort = require('ranges-sort');

var isArr = Array.isArray;

function wthn(originalIndex, rangesArr, originalOpts) {
  function existy(something) {
    return something != null;
  }
  var index = void 0;

  // validate
  // ================

  // - originalIndex
  if (isNatNum(originalIndex, { includeZero: true })) {
    index = originalIndex;
  } else if (isNatStr(originalIndex, { includeZero: true })) {
    index = parseInt(originalIndex, 10);
  } else {
    throw new TypeError('ranges-is-index-within/wthn(): [THROW_ID_01] Input must mean an index, so it has to be either a natural number or a string containing natural number! Currently its type is: ' + (typeof originalIndex === 'undefined' ? 'undefined' : _typeof(originalIndex)) + ', equal to: ' + JSON.stringify(originalIndex, null, 4));
  }
  // - rangesArr
  if (!existy(rangesArr)) {
    throw new TypeError('ranges-is-index-within/wthn(): [THROW_ID_02] We\'re missing the second input, rangesArr. It\'s meant to be an array of one or more range arrays.');
  } else if (!isArr(rangesArr)) {
    throw new TypeError('ranges-is-index-within/wthn(): [THROW_ID_03] Second input argument, rangesArr must be an array! Currently its type is: ' + (typeof originalIndex === 'undefined' ? 'undefined' : _typeof(originalIndex)) + ', equal to: ' + JSON.stringify(originalIndex, null, 4));
  } else if (rangesArr.length === 0) {
    throw new TypeError('ranges-is-index-within/wthn(): [THROW_ID_04] Second input argument, rangesArr must be not empty! Currently it\'s empty.');
  }
  var culpritsIndex = null;
  if (isArr(rangesArr) && rangesArr.length > 0 && !isArr(rangesArr[0])) {
    throw new TypeError('ranges-is-index-within/wthn(): [THROW_ID_05] Second input argument, rangesArr must be an array of (index range) arrays! Currently it\'s equal to: ' + rangesArr + '.');
  }
  if (!rangesArr.every(function (rangeArr, indx) {
    if (!isNatNum(rangeArr[0], { includeZero: true }) || !isNatNum(rangeArr[1], { includeZero: true })) {
      culpritsIndex = indx;
      return false;
    }
    return true;
  })) {
    throw new TypeError('ranges-is-index-within/wthn(): [THROW_ID_05] Second input argument, rangesArr must consist of arrays which are natural number indexes representing string index ranges. However, ' + ordinalSuffix(culpritsIndex) + ' range (' + JSON.stringify(rangesArr[culpritsIndex], null, 4) + ') does not consist of only natural numbers!');
  }
  // - originalOpts
  if (existy(originalOpts) && !isObj(originalOpts)) {
    throw new TypeError('ranges-is-index-within/wthn(): [THROW_ID_06] Options object must be a plain object! Currently its type is: ' + (typeof originalOpts === 'undefined' ? 'undefined' : _typeof(originalOpts)) + ', equal to: ' + JSON.stringify(originalOpts, null, 4));
  }

  //      D E F A U L T S
  var defaults = {
    inclusiveRangeEnds: false
  };

  var opts = Object.assign(Object.assign({}, defaults), originalOpts);
  checkTypes(opts, defaults, { msg: 'ranges-is-index-within/wthn(): [THROW_ID_07*]' });

  // now some real action
  // ====================

  if (rangesArr.length < 3) {
    // if equals 1
    if (rangesArr.length === 1) {
      if (opts.inclusiveRangeEnds) {
        return index >= rangesArr[0][0] && index <= rangesArr[0][1];
      }
      return index > rangesArr[0][0] && index < rangesArr[0][1];
    }
    // if not, equals 2 then because we checked for zero already, see row #30
    if (opts.inclusiveRangeEnds) {
      return index >= rangesArr[0][0] && index <= rangesArr[0][1] || index >= rangesArr[1][0] && index <= rangesArr[1][1];
    }
    return index > rangesArr[0][0] && index < rangesArr[0][1] || index > rangesArr[1][0] && index < rangesArr[1][1];
  }
  // more than two

  // 0. Get the ranges array sorted because few upcoming approaches depend on it.
  var rarr = rangesSort(rangesArr); // TODO attach sort when it's published

  // 1. check for quick wins - maybe given index is outside of the edge values?
  if (index < rarr[0][0] || index > rarr[rarr.length - 1][1]) {
    return false;
  } else if (index === rarr[0][0] || index === rarr[rarr.length - 1][1]) {
    // index we're checking is equal to the outermost edges of a given indexes
    // all depends then on opts.inclusiveRangeEnds
    return opts.inclusiveRangeEnds;
  }
  // 2. if not, then do some work and find out
  var dontStop = true;

  // the plan is the following.
  // We got bunch of ranges. Find the middle-one of them and check, is our
  // index within or below or above it. If it's within, Bob's your uncle,
  // return `true`. Else, fun continues:
  // - if it's below, set upper index to the index number of this range, essentially
  // shortening our searches to half.
  // - if index is above this range in the middle, set lower index to the index number
  // of this range.
  // ----
  // REPEAT above until the lower and upper index numbers are too close.

  var lowerIndex = 0; // at first, it's zero because we count how many ranges there are, from zero
  var upperIndex = rarr.length - 1; // at first, it's the total number of indexes.

  while (dontStop && Math.floor(upperIndex - lowerIndex) > 1) {
    // pick the middle index.
    var theIndexOfTheRangeInTheMiddle = Math.floor((upperIndex + lowerIndex) / 2);
    if (index < rarr[theIndexOfTheRangeInTheMiddle][0]) {
      upperIndex = theIndexOfTheRangeInTheMiddle;
    } else if (index > rarr[theIndexOfTheRangeInTheMiddle][1]) {
      lowerIndex = theIndexOfTheRangeInTheMiddle;
    } else if (index === rarr[theIndexOfTheRangeInTheMiddle][0] || index === rarr[theIndexOfTheRangeInTheMiddle][1]) {
      // it's on one of the edges! YAY! found!
      return opts.inclusiveRangeEnds;
    } else {
      // Bob's your uncle - index is within this middle range we calculated.
      return true;
    }
  }

  return false;
}

module.exports = wthn;