/**
 * object-no-new-keys
 * Check, does a plain object (AST/JSON) has any unique keys, not present in a reference object (another AST/JSON)
 * Version: 2.9.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/object-no-new-keys
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.objectNoNewKeys = factory());
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

  function isObj(something) {
    return something && _typeof(something) === "object" && !Array.isArray(something);
  }

  function objectNoNewKeys(inputOuter, referenceOuter, originalOptsOuter) {
    if (originalOptsOuter && !isObj(originalOptsOuter)) {
      throw new TypeError("object-no-new-keys/objectNoNewKeys(): [THROW_ID_02] opts should be a plain object. It was given as ".concat(JSON.stringify(originalOptsOuter, null, 4), " (type ").concat(_typeof(originalOptsOuter), ")"));
    }

    var defaults = {
      mode: 2
    };
    var optsOuter = Object.assign({}, defaults, originalOptsOuter);

    if (typeof optsOuter.mode === "string" && ["1", "2"].includes(optsOuter.mode)) {
      if (optsOuter.mode === "1") {
        optsOuter.mode = 1;
      } else {
        optsOuter.mode = 2;
      }
    } else if (![1, 2].includes(optsOuter.mode)) {
      throw new TypeError("object-no-new-keys/objectNoNewKeys(): [THROW_ID_01] opts.mode should be \"1\" or \"2\" (string or number).");
    }

    function objectNoNewKeysInternal(input, reference, opts, innerVar) {
      var temp;

      if (innerVar === undefined) {
        innerVar = {
          path: "",
          res: []
        };
      }

      if (isObj(input)) {
        if (isObj(reference)) {
          // input and reference both are objects.
          // match the keys and record any unique-ones.
          // then traverse recursively.
          Object.keys(input).forEach(function (key) {
            if (!Object.prototype.hasOwnProperty.call(reference, key)) {
              temp = innerVar.path.length > 0 ? "".concat(innerVar.path, ".").concat(key) : key;
              innerVar.res.push(temp);
            } else if (isObj(input[key]) || Array.isArray(input[key])) {
              temp = {
                path: innerVar.path.length > 0 ? "".concat(innerVar.path, ".").concat(key) : key,
                res: innerVar.res
              };
              innerVar.res = objectNoNewKeysInternal(input[key], reference[key], opts, temp).res;
            }
          });
        } else {
          // input is object, but reference is not.
          // record all the keys of the input, but don't traverse deeper
          innerVar.res = innerVar.res.concat(Object.keys(input).map(function (key) {
            return innerVar.path.length > 0 ? "".concat(innerVar.path, ".").concat(key) : key;
          }));
        }
      } else if (Array.isArray(input)) {
        if (Array.isArray(reference)) {
          // both input and reference are arrays.
          // traverse each
          for (var i = 0, len = input.length; i < len; i++) {
            temp = {
              path: "".concat(innerVar.path.length > 0 ? innerVar.path : "", "[").concat(i, "]"),
              res: innerVar.res
            };

            if (opts.mode === 2) {
              innerVar.res = objectNoNewKeysInternal(input[i], reference[0], opts, temp).res;
            } else {
              innerVar.res = objectNoNewKeysInternal(input[i], reference[i], opts, temp).res;
            }
          }
        } else {
          // mismatch
          // traverse all elements of the input and put their locations to innerVar.res
          innerVar.res = innerVar.res.concat(input.map(function (el, i) {
            return "".concat(innerVar.path.length > 0 ? innerVar.path : "", "[").concat(i, "]");
          }));
        }
      }

      return innerVar;
    }

    return objectNoNewKeysInternal(inputOuter, referenceOuter, optsOuter).res;
  }

  return objectNoNewKeys;

})));