/**
 * ast-loose-compare
 * Compare anything: AST, objects, arrays and strings
 * Version: 1.8.15
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ast-loose-compare/
 */

'use strict';

var empty = require('ast-contains-only-empty-space');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var empty__default = /*#__PURE__*/_interopDefaultLegacy(empty);

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
function looseCompare(bigObj, smallObj, res) {
  function existy(x) {
    return x != null;
  }
  var i;
  var len;
  if (res === undefined) {
    if (!existy(bigObj) || !existy(smallObj)) {
      return undefined;
    }
  } else if (!existy(bigObj) || !existy(smallObj)) {
    return false;
  }
  res = res || true;
  if (_typeof(bigObj) !== _typeof(smallObj)) {
    if (empty__default['default'](bigObj) && empty__default['default'](smallObj)) {
      return true;
    }
    return false;
  }
  if (Array.isArray(bigObj) && Array.isArray(smallObj)) {
    if (smallObj.length > 0) {
      for (i = 0, len = smallObj.length; i < len; i++) {
        if (Array.isArray(smallObj[i]) || isObj(smallObj[i])) {
          res = looseCompare(bigObj[i], smallObj[i], res);
          if (!res) {
            return false;
          }
        } else if (smallObj[i] !== bigObj[i]) {
          if (empty__default['default'](smallObj[i]) && empty__default['default'](bigObj[i])) {
            return true;
          }
          res = false;
          return false;
        }
      }
    } else {
      if (smallObj.length === 0 && bigObj.length === 0 || empty__default['default'](smallObj) && empty__default['default'](bigObj)) {
        return true;
      }
      res = false;
      return false;
    }
  } else if (isObj(bigObj) && isObj(smallObj)) {
    if (Object.keys(smallObj).length > 0) {
      var keysArr = Object.keys(smallObj);
      for (i = 0, len = keysArr.length; i < len; i++) {
        if (Array.isArray(smallObj[keysArr[i]]) || isObj(smallObj[keysArr[i]]) || typeof smallObj[keysArr[i]] === "string") {
          res = looseCompare(bigObj[keysArr[i]], smallObj[keysArr[i]], res);
          if (!res) {
            return false;
          }
        } else if (smallObj[keysArr[i]] !== bigObj[keysArr[i]]) {
          if (!empty__default['default'](smallObj[keysArr[i]]) || !empty__default['default'](bigObj[keysArr[i]])) {
            res = false;
            return false;
          }
        }
      }
    } else {
      if (Object.keys(smallObj).length === 0 && Object.keys(bigObj).length === 0 || empty__default['default'](smallObj) && empty__default['default'](bigObj)) {
        return true;
      }
      res = false;
      return false;
    }
  } else if (typeof bigObj === "string" && typeof smallObj === "string") {
    if (bigObj !== smallObj) {
      if (empty__default['default'](smallObj) && empty__default['default'](bigObj)) {
        return true;
      }
      res = false;
      return false;
    }
  } else {
    if (empty__default['default'](smallObj) && empty__default['default'](bigObj)) {
      return true;
    }
    res = false;
    return false;
  }
  return res;
}
function externalApi(bigObj, smallObj) {
  return looseCompare(bigObj, smallObj);
}

module.exports = externalApi;
