/**
 * @name tap-parse-string-to-object
 * @fileoverview Parses raw Tap: string-to-object or stream-to-a-promise-of-an-object
 * @version 2.0.16
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/tap-parse-string-to-object/}
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isStream = require('isstream');
var split2 = require('split2');
var through2 = require('through2');
var _objectSpread = require('@babel/runtime/helpers/objectSpread2');
var _classCallCheck = require('@babel/runtime/helpers/classCallCheck');
var _createClass = require('@babel/runtime/helpers/createClass');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var isStream__default = /*#__PURE__*/_interopDefaultLegacy(isStream);
var split2__default = /*#__PURE__*/_interopDefaultLegacy(split2);
var through2__default = /*#__PURE__*/_interopDefaultLegacy(through2);
var _objectSpread__default = /*#__PURE__*/_interopDefaultLegacy(_objectSpread);
var _classCallCheck__default = /*#__PURE__*/_interopDefaultLegacy(_classCallCheck);
var _createClass__default = /*#__PURE__*/_interopDefaultLegacy(_createClass);

function stringPingLineByLine(str, cb) {
  var start = null;
  for (var i = 0, len = str.length; i < len; i++) {
    if (["\n", "\r"].includes(str[i])) {
      if (start !== null) {
        cb(str.slice(start, i));
        start = null;
      }
    }
    else if (start === null) {
        start = i;
      }
    if (start !== null && !str[i + 1]) {
      cb(str.slice(start, i + 1));
    }
  }
}
var Counter = function () {
  function Counter() {
    _classCallCheck__default['default'](this, Counter);
    this.canCount = false;
    this.doNothing = false;
    this.thereWereFailuresInThisSuite = null;
    this.total = {
      ok: true,
      assertsTotal: 0,
      assertsPassed: 0,
      assertsFailed: 0,
      suitesTotal: 0,
      suitesPassed: 0,
      suitesFailed: 0
    };
  }
  _createClass__default['default'](Counter, [{
    key: "readLine",
    value: function readLine(lineStr) {
      if (!this.doNothing && lineStr.trim() === "---") {
        this.doNothing = true;
      }
      if (this.doNothing && lineStr.trim() === "...") {
        this.doNothing = false;
      }
      else if (!this.doNothing && this.canCount) {
          if (lineStr.trim().startsWith("ok") || lineStr.trim().startsWith("not ok")) {
            if (lineStr.trim().startsWith("ok")) {
              this.total.assertsPassed += 1;
            } else if (lineStr.trim().startsWith("not ok")) {
              this.total.assertsFailed += 1;
              if (!this.thereWereFailuresInThisSuite) {
                this.thereWereFailuresInThisSuite = true;
              }
            }
            this.total.assertsTotal += 1;
          } else {
            this.canCount = false;
          }
        }
      if (!this.doNothing && lineStr.trim() === "{") {
        this.total.suitesTotal += 1;
        if (this.thereWereFailuresInThisSuite !== null) {
          if (this.thereWereFailuresInThisSuite) {
            this.total.suitesFailed += 1;
          } else {
            this.total.suitesPassed += 1;
          }
        }
        this.thereWereFailuresInThisSuite = false;
      }
      var magicKeyw = "# Subtest";
      if (!this.doNothing && !this.canCount && lineStr.includes(magicKeyw)) {
        this.canCount = true;
        if (lineStr.slice(0, lineStr.indexOf(magicKeyw)).trim().endsWith("{")) {
          this.total.suitesTotal += 1;
          if (this.thereWereFailuresInThisSuite === null) {
            this.thereWereFailuresInThisSuite = false;
          } else if (this.thereWereFailuresInThisSuite) {
            this.total.suitesFailed += 1;
            this.thereWereFailuresInThisSuite = false;
          } else {
            this.total.suitesPassed += 1;
          }
        }
      }
    }
  }, {
    key: "getTotal",
    value: function getTotal() {
      if (this.thereWereFailuresInThisSuite) {
        this.total.suitesFailed += 1;
        this.thereWereFailuresInThisSuite = false;
      } else if (this.total.suitesTotal) {
        this.total.suitesPassed += 1;
      }
      if (!this.total.suitesTotal && this.total.assertsTotal) {
        this.total.suitesTotal = 1;
        if (this.thereWereFailuresInThisSuite) {
          this.total.suitesFailed = 1;
        } else {
          this.total.suitesPassed = 1;
        }
      }
      return _objectSpread__default['default']({}, this.total);
    }
  }]);
  return Counter;
}();

var version$1 = "2.0.16";

var version = version$1;
function parseTap(something) {
  if (isStream__default['default'](something)) {
    return new Promise(function (resolve, reject) {
      var counter = new Counter();
      something.pipe(split2__default['default']()).pipe(through2__default['default'].obj(function (line, _encoding, next) {
        counter.readLine(line);
        next();
      }));
      something.on("end", function () {
        return resolve(counter.getTotal());
      });
      something.on("error", reject);
    });
  } else if (typeof something === "string") {
    if (!something.length) {
      return {
        ok: true,
        assertsTotal: 0,
        assertsPassed: 0,
        assertsFailed: 0,
        suitesTotal: 0,
        suitesPassed: 0,
        suitesFailed: 0
      };
    }
    var counter = new Counter();
    stringPingLineByLine(something, function (line) {
      counter.readLine(line);
    });
    return counter.getTotal();
  }
  throw new Error("tap-parse-string-to-object: [THROW_ID_01] inputs should be either string or stream");
}

exports.parseTap = parseTap;
exports.version = version;
