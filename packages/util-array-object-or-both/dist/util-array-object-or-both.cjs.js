/**
 * @name util-array-object-or-both
 * @fileoverview Validate and normalise user choice: array, object or both?
 * @version 3.0.16
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/util-array-object-or-both/}
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _objectSpread = require('@babel/runtime/helpers/objectSpread2');
var includes = require('lodash.includes');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _objectSpread__default = /*#__PURE__*/_interopDefaultLegacy(_objectSpread);
var includes__default = /*#__PURE__*/_interopDefaultLegacy(includes);

function arrObjOrBoth(str, originalOpts) {
  var onlyObjectValues = ["object", "objects", "obj", "ob", "o"];
  var onlyArrayValues = ["array", "arrays", "arr", "aray", "arr", "a"];
  var onlyAnyValues = ["any", "all", "everything", "both", "either", "each", "whatever", "whatevs", "e"];
  var defaults = {
    msg: "",
    optsVarName: "given variable"
  };
  var opts = _objectSpread__default['default'](_objectSpread__default['default']({}, defaults), originalOpts);
  if (opts && opts.msg && opts.msg.length > 0) {
    opts.msg = "".concat(opts.msg.trim(), " ");
  }
  if (opts.optsVarName !== "given variable") {
    opts.optsVarName = "variable \"".concat(opts.optsVarName, "\"");
  }
  if (includes__default['default'](onlyObjectValues, str.toLowerCase().trim())) {
    return "object";
  }
  if (includes__default['default'](onlyArrayValues, str.toLowerCase().trim())) {
    return "array";
  }
  if (includes__default['default'](onlyAnyValues, str.toLowerCase().trim())) {
    return "any";
  }
  throw new TypeError("".concat(opts.msg, "The ").concat(opts.optsVarName, " was customised to an unrecognised value: ").concat(str, ". Please check it against the API documentation."));
}

exports.arrObjOrBoth = arrObjOrBoth;
