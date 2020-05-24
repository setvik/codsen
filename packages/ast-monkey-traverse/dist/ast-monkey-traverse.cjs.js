/**
 * ast-monkey-traverse
 * Utility library to traverse parsed HTML (AST's) or anything nested (plain objects within arrays within plain objects)
 * Version: 1.12.13
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ast-monkey-traverse
 */

'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var clone = _interopDefault(require('lodash.clonedeep'));

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

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function trimFirstDot(str) {
  if (typeof str === "string" && str.length && str[0] === ".") {
    return str.slice(1);
  }
  return str;
}
function isObj(something) {
  return something && _typeof(something) === "object" && !Array.isArray(something);
}
function astMonkeyTraverse(tree1, cb1) {
  var stop2 = {
    now: false
  };
  function traverseInner(treeOriginal, callback, originalInnerObj, stop) {
    var tree = clone(treeOriginal);
    var i;
    var len;
    var res;
    var innerObj = _objectSpread2({
      depth: -1,
      path: ""
    }, originalInnerObj);
    innerObj.depth += 1;
    if (Array.isArray(tree)) {
      for (i = 0, len = tree.length; i < len; i++) {
        if (stop.now) {
          break;
        }
        var path = "".concat(innerObj.path, ".").concat(i);
        if (tree[i] !== undefined) {
          innerObj.parent = clone(tree);
          innerObj.parentType = "array";
          res = traverseInner(callback(tree[i], undefined, _objectSpread2(_objectSpread2({}, innerObj), {}, {
            path: trimFirstDot(path)
          }), stop), callback, _objectSpread2(_objectSpread2({}, innerObj), {}, {
            path: trimFirstDot(path)
          }), stop);
          if (Number.isNaN(res) && i < tree.length) {
            tree.splice(i, 1);
            i -= 1;
          } else {
            tree[i] = res;
          }
        } else {
          tree.splice(i, 1);
        }
      }
    } else if (isObj(tree)) {
      for (var key in tree) {
        if (stop.now && key != null) {
          break;
        }
        var _path = "".concat(innerObj.path, ".").concat(key);
        if (innerObj.depth === 0 && key != null) {
          innerObj.topmostKey = key;
        }
        innerObj.parent = clone(tree);
        innerObj.parentType = "object";
        res = traverseInner(callback(key, tree[key], _objectSpread2(_objectSpread2({}, innerObj), {}, {
          path: trimFirstDot(_path)
        }), stop), callback, _objectSpread2(_objectSpread2({}, innerObj), {}, {
          path: trimFirstDot(_path)
        }), stop);
        if (Number.isNaN(res)) {
          delete tree[key];
        } else {
          tree[key] = res;
        }
      }
    }
    return tree;
  }
  return traverseInner(tree1, cb1, {}, stop2);
}

module.exports = astMonkeyTraverse;
