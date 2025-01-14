/**
 * @name ranges-is-index-within
 * @fileoverview Checks if index is within any of the given string index ranges
 * @version 2.0.16
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-is-index-within/}
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _typeof = require('@babel/runtime/helpers/typeof');
var _objectSpread = require('@babel/runtime/helpers/objectSpread2');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _typeof__default = /*#__PURE__*/_interopDefaultLegacy(_typeof);
var _objectSpread__default = /*#__PURE__*/_interopDefaultLegacy(_objectSpread);

var version$1 = "2.0.16";

var version = version$1;
var defaults = {
  inclusiveRangeEnds: false,
  returnMatchedRangeInsteadOfTrue: false
};
function isIndexWithin(originalIndex, rangesArr, originalOpts) {
  var opts = _objectSpread__default['default'](_objectSpread__default['default']({}, defaults), originalOpts);
  if (!Number.isInteger(originalIndex)) {
    throw new Error("ranges-is-index-within: [THROW_ID_01] the first input argument should be string index, a natural number (or zero). It was given as ".concat(originalIndex, " (type ").concat(_typeof__default['default'](originalIndex), ")"));
  }
  if (!Array.isArray(rangesArr)) {
    return false;
  }
  if (opts.returnMatchedRangeInsteadOfTrue) {
    return rangesArr.find(function (arr) {
      return opts.inclusiveRangeEnds ? originalIndex >= arr[0] && originalIndex <= arr[1] : originalIndex > arr[0] && originalIndex < arr[1];
    }) || false;
  }
  return rangesArr.some(function (arr) {
    return opts.inclusiveRangeEnds ? originalIndex >= arr[0] && originalIndex <= arr[1] : originalIndex > arr[0] && originalIndex < arr[1];
  });
}

exports.defaults = defaults;
exports.isIndexWithin = isIndexWithin;
exports.version = version;
