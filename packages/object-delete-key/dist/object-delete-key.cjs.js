/**
 * @name object-delete-key
 * @fileoverview Delete keys from all arrays or plain objects, nested within anything, by key or by value or by both, and clean up afterwards. Accepts wildcards.
 * @version 2.0.16
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/object-delete-key/}
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _objectSpread = require('@babel/runtime/helpers/objectSpread2');
var astMonkey = require('ast-monkey');
var astIsEmpty = require('ast-is-empty');
var clone = require('lodash.clonedeep');
var utilArrayObjectOrBoth = require('util-array-object-or-both');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _objectSpread__default = /*#__PURE__*/_interopDefaultLegacy(_objectSpread);
var clone__default = /*#__PURE__*/_interopDefaultLegacy(clone);

var version$1 = "2.0.16";

var version = version$1;
function deleteKey(originalInput, originalOpts) {
  function existy(x) {
    return x != null;
  }
  if (!existy(originalInput)) {
    throw new Error("object-delete-key/deleteKey(): [THROW_ID_01] Please provide the first argument, something to work upon.");
  }
  var defaults = {
    key: null,
    val: undefined,
    cleanup: true,
    only: "any"
  };
  var opts = _objectSpread__default['default'](_objectSpread__default['default']({}, defaults), originalOpts);
  opts.only = utilArrayObjectOrBoth.arrObjOrBoth(opts.only, {
    msg: "object-delete-key/deleteKey(): [THROW_ID_03]",
    optsVarName: "opts.only"
  });
  if (!existy(opts.key) && !existy(opts.val)) {
    throw new Error("object-delete-key/deleteKey(): [THROW_ID_04] Please provide at least a key or a value.");
  }
  var input = clone__default['default'](originalInput);
  if (opts.cleanup) {
    var findings = astMonkey.find(input, {
      key: opts.key,
      val: opts.val,
      only: opts.only
    });
    var currentIndex;
    var nodeToDelete;
    while (Array.isArray(findings) && findings.length) {
      nodeToDelete = findings[0].index;
      for (var i = 1, len = findings[0].path.length; i < len; i++) {
        currentIndex = findings[0].path[len - 1 - i];
        if (astIsEmpty.isEmpty(astMonkey.del(astMonkey.get(input, {
          index: currentIndex
        }), {
          key: opts.key,
          val: opts.val,
          only: opts.only
        }))) {
          nodeToDelete = currentIndex;
        }
      }
      input = astMonkey.drop(input, {
        index: nodeToDelete
      });
      findings = astMonkey.find(input, {
        key: opts.key,
        val: opts.val,
        only: opts.only
      });
    }
    return input;
  }
  return astMonkey.del(input, {
    key: opts.key,
    val: opts.val,
    only: opts.only
  });
}

exports.deleteKey = deleteKey;
exports.version = version;
