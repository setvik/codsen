/**
 * tap-parse-string-to-object
 * Parses raw Tap output, string-to-object
 * Version: 1.1.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/tap-parse-string-to-object
 */

'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var isStream = _interopDefault(require('isstream'));
var split2 = _interopDefault(require('split2'));
var through2 = _interopDefault(require('through2'));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function stringPingLineByLine(str, cb) {
  var start = null;
  for (var i = 0, len = str.length; i < len; i++) {
    if (["\n", "\r"].includes(str[i])) {
      if (start !== null) {
        cb(str.slice(start, i));
        start = null;
      }
    } else {
      if (start === null) {
        start = i;
      }
    }
    if (start !== null && !str[i + 1]) {
      cb(str.slice(start, i + 1));
    }
  }
}
var Counter =
function () {
  function Counter() {
    _classCallCheck(this, Counter);
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
  _createClass(Counter, [{
    key: "readLine",
    value: function readLine(lineStr) {
      if (!this.doNothing && lineStr.trim() === "---") {
        this.doNothing = true;
      }
      if (this.doNothing && lineStr.trim() === "...") {
        this.doNothing = false;
      } else {
        if (!this.doNothing && this.canCount) {
          if (lineStr.trim().startsWith("ok") || lineStr.trim().startsWith("not ok")) {
            if (lineStr.trim().startsWith("ok")) {
              this.total.assertsPassed = this.total.assertsPassed + 1;
            } else if (lineStr.trim().startsWith("not ok")) {
              this.total.assertsFailed = this.total.assertsFailed + 1;
              if (!this.thereWereFailuresInThisSuite) {
                this.thereWereFailuresInThisSuite = true;
              }
            }
            this.total.assertsTotal = this.total.assertsTotal + 1;
          } else {
            this.canCount = false;
          }
        }
      }
      if (!this.doNothing && lineStr.trim() === "{") {
        this.total.suitesTotal = this.total.suitesTotal + 1;
        if (this.thereWereFailuresInThisSuite !== null) {
          if (this.thereWereFailuresInThisSuite) {
            this.total.suitesFailed = this.total.suitesFailed + 1;
          } else {
            this.total.suitesPassed = this.total.suitesPassed + 1;
          }
        }
        this.thereWereFailuresInThisSuite = false;
      }
      var magicKeyw = "# Subtest";
      if (!this.doNothing && !this.canCount && lineStr.includes(magicKeyw)) {
        this.canCount = true;
        if (lineStr.slice(0, lineStr.indexOf(magicKeyw)).trim().endsWith("{")) {
          this.total.suitesTotal = this.total.suitesTotal + 1;
          if (this.thereWereFailuresInThisSuite === null) {
            this.thereWereFailuresInThisSuite = false;
          } else if (this.thereWereFailuresInThisSuite) {
            this.total.suitesFailed = this.total.suitesFailed + 1;
            this.thereWereFailuresInThisSuite = false;
          } else {
            this.total.suitesPassed = this.total.suitesPassed + 1;
          }
        }
      }
    }
  }, {
    key: "getTotal",
    value: function getTotal() {
      if (this.thereWereFailuresInThisSuite) {
        this.total.suitesFailed = this.total.suitesFailed + 1;
        this.thereWereFailuresInThisSuite = false;
      } else if (this.total.suitesTotal) {
        this.total.suitesPassed = this.total.suitesPassed + 1;
      }
      if (!this.total.suitesTotal && this.total.assertsTotal) {
        this.total.suitesTotal = 1;
        if (this.thereWereFailuresInThisSuite) {
          this.total.suitesFailed = 1;
        } else {
          this.total.suitesPassed = 1;
        }
      }
      return Object.assign({}, this.total);
    }
  }]);
  return Counter;
}();

function externalApi(something) {
  if (isStream(something)) {
    return new Promise(function (resolve, reject) {
      var counter = new Counter();
      something.pipe(split2()).pipe(through2.obj(function (line, encoding, next) {
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

module.exports = externalApi;