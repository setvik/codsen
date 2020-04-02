/**
 * string-overlap-one-on-another
 * Lay one string on top of another, with an optional offset
 * Version: 1.5.54
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-overlap-one-on-another
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.stringOverlapOneOnAnother = factory());
}(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function overlap(str1, str2, originalOpts) {
    if (typeof str1 !== "string") {
      throw new Error("string-overlap-one-on-another: [THROW_ID_01] The first input argument must be a string but it was given as ".concat(JSON.stringify(str1, null, 4), ", which is type \"").concat(_typeof(str1), "\""));
    }

    if (typeof str2 !== "string") {
      throw new Error("string-overlap-one-on-another: [THROW_ID_02] The second input argument must be a string but it was given as ".concat(JSON.stringify(str2, null, 4), ", which is type \"").concat(_typeof(str2), "\""));
    }

    var opts;
    var defaults = {
      offset: 0,
      // how many characters str2 is to the right? (negative means it's off to the left)
      offsetFillerCharacter: " " // how many characters str2 is to the right? (negative means it's off to the left)

    };

    if (!originalOpts) {
      // it's fine because we won't overwrite opts:
      opts = defaults;
    } else if (_typeof(originalOpts) !== "object") {
      throw new Error("string-overlap-one-on-another: [THROW_ID_03] The third input argument must be a plain object but it was given as ".concat(JSON.stringify(str2, null, 4), ", which is type \"").concat(_typeof(originalOpts), "\""));
    } else {
      opts = Object.assign({}, defaults, originalOpts);

      if (!opts.offset) {
        opts.offset = 0;
      } else if (!Number.isInteger(Math.abs(opts.offset))) {
        throw new Error("string-overlap-one-on-another: [THROW_ID_04] The second input argument must be a string but it was given as ".concat(JSON.stringify(str2, null, 4), ", which is type \"").concat(_typeof(str2), "\""));
      }

      if (!opts.offsetFillerCharacter && opts.offsetFillerCharacter !== "") {
        opts.offsetFillerCharacter = " ";
      }
    }

    if (str2.length === 0) {
      return str1;
    } else if (str1.length === 0) {
      return str2;
    }

    if (opts.offset < 0) {
      // filler character sequence - space or opts.offsetFillerCharacter:
      var part2 = Math.abs(opts.offset) > str2.length ? opts.offsetFillerCharacter.repeat(Math.abs(opts.offset) - str2.length) : ""; // the reset of str1 string protruding from underneath, if any:

      var part3 = str1.slice(str2.length - Math.abs(opts.offset) > 0 ? str2.length - Math.abs(opts.offset) : 0);
      return str2 + part2 + part3;
    } else if (opts.offset > 0) {
      // filler character sequence, if any, the space or opts.offsetFillerCharacter:
      var par1 = str1.slice(0, opts.offset) + (opts.offset > str1.length ? opts.offsetFillerCharacter.repeat(Math.abs(opts.offset) - str1.length) : ""); // the rest of str1 string, if applicable:

      var _part = str1.length - opts.offset - str2.length > 0 ? str1.slice(str1.length - opts.offset - str2.length + 1) : "";

      return par1 + str2 + _part;
    }

    return str2 + (str1.length > str2.length ? str1.slice(str2.length) : "");
  }

  return overlap;

})));