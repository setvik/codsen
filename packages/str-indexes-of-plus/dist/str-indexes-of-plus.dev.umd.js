/**
 * @name str-indexes-of-plus
 * @fileoverview Like indexOf but returns array and counts per-grapheme
 * @version 3.0.16
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/str-indexes-of-plus/}
 */

(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
typeof define === 'function' && define.amd ? define(['exports'], factory) :
(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.strIndexesOfPlus = {}));
}(this, (function (exports) { 'use strict';

var version$1 = "3.0.16";

const version = version$1;
function strIndexesOfPlus(str, searchValue, fromIndex = 0) {
    if (typeof str !== "string") {
        throw new TypeError(`str-indexes-of-plus/strIndexesOfPlus(): first input argument must be a string! Currently it's: ${typeof str}`);
    }
    if (typeof searchValue !== "string") {
        throw new TypeError(`str-indexes-of-plus/strIndexesOfPlus(): second input argument must be a string! Currently it's: ${typeof searchValue}`);
    }
    if (isNaN(+fromIndex) ||
        (typeof fromIndex === "string" && !/^\d*$/.test(fromIndex))) {
        throw new TypeError(`str-indexes-of-plus/strIndexesOfPlus(): third input argument must be a natural number! Currently it's: ${fromIndex}`);
    }
    const strArr = Array.from(str);
    const searchValueArr = Array.from(searchValue);
    if (strArr.length === 0 ||
        searchValueArr.length === 0 ||
        (fromIndex != null && +fromIndex >= strArr.length)) {
        return [];
    }
    if (!fromIndex) {
        // eslint-disable-next-line no-param-reassign
        fromIndex = 0;
    }
    const res = [];
    let matchMode = false;
    let potentialFinding;
    for (let i = fromIndex, len = strArr.length; i < len; i++) {
        if (matchMode) {
            if (strArr[i] === searchValueArr[i - +potentialFinding]) {
                if (i - +potentialFinding + 1 === searchValueArr.length) {
                    res.push(+potentialFinding);
                }
            }
            else {
                potentialFinding = null;
                matchMode = false;
            }
        }
        if (!matchMode) {
            if (strArr[i] === searchValueArr[0]) {
                if (searchValueArr.length === 1) {
                    res.push(i);
                }
                else {
                    matchMode = true;
                    potentialFinding = i;
                }
            }
        }
    }
    return res;
}

exports.strIndexesOfPlus = strIndexesOfPlus;
exports.version = version;

Object.defineProperty(exports, '__esModule', { value: true });

})));
