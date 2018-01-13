'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var checkTypes = _interopDefault(require('check-types-mini'));

function _typeof(obj) {
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

function trimSpaces(s, originalOpts) {
  if (typeof s !== "string") {
    throw new Error("string-trim-spaces-only: [THROW_ID_01] input must be string! It was given as ".concat(_typeof(s), ", equal to:\n").concat(JSON.stringify(s, null, 4)));
  }
  var defaults = {
    classicTrim: false
  };
  var opts = Object.assign({}, defaults, originalOpts);
  checkTypes(opts, defaults, {
    msg: "string-trim-spaces-only: [THROW_ID_02*]"
  });
  var newStart;
  var newEnd;
  if (s.length > 0) {
    if (opts.classicTrim && s[0].trim().length === 0 || !opts.classicTrim && s[0] === " ") {
      for (var i = 0, len = s.length; i < len; i++) {
        if (opts.classicTrim && s[i].trim().length !== 0 || !opts.classicTrim && s[i] !== " ") {
          newStart = i;
          break;
        }
        if (i === s.length - 1) {
          return {
            res: "",
            ranges: [[0, s.length]]
          };
        }
      }
    }
    if (opts.classicTrim && s[s.length - 1].trim().length === 0 || !opts.classicTrim && s[s.length - 1] === " ") {
      for (var _i = s.length; _i--;) {
        if (opts.classicTrim && s[_i].trim().length !== 0 || !opts.classicTrim && s[_i] !== " ") {
          newEnd = _i + 1;
          break;
        }
      }
    }
    if (newStart) {
      if (newEnd) {
        return {
          res: s.slice(newStart, newEnd),
          ranges: [[0, newStart], [newEnd, s.length]]
        };
      }
      return {
        res: s.slice(newStart),
        ranges: [[0, newStart]]
      };
    }
    if (newEnd) {
      return {
        res: s.slice(0, newEnd),
        ranges: [[newEnd, s.length]]
      };
    }
    return {
      res: s,
      ranges: []
    };
  }
  return {
    res: "",
    ranges: []
  };
}

module.exports = trimSpaces;