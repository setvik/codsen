/**
 * string-find-heads-tails
 * Search for string pairs. A special case of string search algorithm.
 * Version: 3.15.9
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-find-heads-tails
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).stringFindHeadsTails=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}
/*!
   * is-natural-number-string | MIT (c) Shinnosuke Watanabe
   * https://github.com/shinnn/is-natural-number-string
  */var e=function(t,e){if("string"!=typeof t)return!1;if(e&&"includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(t)}return/^[1-9]\d*(\.0+)?$/.test(t)};function r(t){return"string"==typeof t?t.length>0?[t]:[]:t}function n(t){if("string"==typeof t)return 0!==t.length&&(t.charCodeAt(0)>=55296&&t.charCodeAt(0)<=56319);if(void 0===t)return!1;throw new TypeError(`string-character-is-astral-surrogate/isHighSurrogate(): the input is not string but ${typeof t}`)}function i(t){if("string"==typeof t)return 0!==t.length&&(t.charCodeAt(0)>=56320&&t.charCodeAt(0)<=57343);if(void 0===t)return!1;throw new TypeError(`string-character-is-astral-surrogate/isLowSurrogate(): the input is not string but ${typeof t}`)}function o(t){return null!=t}function a(t){return"string"==typeof t&&(t.charCodeAt(0)>=55296&&t.charCodeAt(0)<=57343)}function s(t,e,r,a,s){const h="function"==typeof r?r():r;if(e>=t.length&&s&&"EOL"===h)return h;if(!(e<=t.length)){if(a.relaxedApi)return!1;throw new Error(`string-match-left-right/marchForward(): [THROW_ID_102] second argument, fromIndexInclusive is ${e} beyond the input string length, ${t.length}.`)}{let c=s?1:r.length;for(let s=e,h=t.length;s<h;s++){let e=t[s];if(n(t[s])&&i(t[s+1])&&(e=t[s]+t[s+1]),i(t[s])&&n(t[s-1])&&(e=t[s-1]+t[s]),a.trimBeforeMatching&&""===t[s].trim())continue;if(!a.i&&a.trimCharsBeforeMatching.includes(e)||a.i&&a.trimCharsBeforeMatching.map(t=>t.toLowerCase()).includes(e.toLowerCase())){2===e.length&&(s+=1);continue}let h=r[r.length-c];if(n(h)&&o(r[r.length-c+1])&&i(r[r.length-c+1])&&(h=r[r.length-c]+r[r.length-c+1]),!(!a.i&&e===h||a.i&&e.toLowerCase()===h.toLowerCase()))return!1;if(c-=e.length,c<1){let a=s-r.length+e.length;return a>=0&&i(t[a])&&o(t[a-1])&&n(t[a-1])&&(a-=1),a>=0?a:0}2===e.length&&n(t[s])&&(s+=1)}if(c>0)return!(!s||"EOL"!==h)}}function h(t,e,r,o,a){const s="function"==typeof r?r():r;if(e<0&&a&&"EOL"===s)return s;if(e>=t.length){if(o.relaxedApi)return!1;throw new Error(`string-match-left-right/marchBackward(): [THROW_ID_203] second argument, starting index, should not be beyond the last character of the input string! Currently the first argument's last character's index is ${t.length} but the second argument is beyond it:\n${JSON.stringify(e,null,4)}`)}let h=a?1:r.length;for(let s=e+1;s--;){if(o.trimBeforeMatching&&""===t[s].trim()){if(0===s&&a&&"EOL"===r)return!0;continue}let e=t[s];if(i(t[s])&&n(t[s-1])?e=t[s-1]+t[s]:n(t[s])&&i(t[s+1])&&(e=t[s]+t[s+1]),!o.i&&o.trimCharsBeforeMatching.includes(e)||o.i&&o.trimCharsBeforeMatching.map(t=>t.toLowerCase()).includes(e.toLowerCase())){if(2===e.length&&(s-=1),a&&"EOL"===r&&0===s)return!0;continue}let c=r[h-1];if(i(c)&&(c=`${r[h-2]}${r[h-1]}`,h-=1,s-=1),!(!o.i&&e===c||o.i&&e.toLowerCase()===c.toLowerCase()))return!1;if(h-=1,h<1)return s>=0?s:0}return h>0?!(!a||"EOL"!==s):void 0}function c(t,e,c,l){return function(t,e,c,l,f){if("object"==typeof f&&null!==f&&Object.prototype.hasOwnProperty.call(f,"trimBeforeMatching")&&"boolean"!=typeof f.trimBeforeMatching)throw new Error(`string-match-left-right/${t}(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!${Array.isArray(f.trimBeforeMatching)?" Did you mean to use opts.trimCharsBeforeMatching?":""}`);const u=Object.assign({},{i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],relaxedApi:!1},f);let g,d,m,y;if(u.trimCharsBeforeMatching=r(u.trimCharsBeforeMatching),u.trimCharsBeforeMatching=u.trimCharsBeforeMatching.map(t=>"string"==typeof t?t:String(t)),u.trimCharsBeforeMatching.some((t,e)=>t.length>1&&!a(t)&&(g=e,d=t,!0)))throw new Error(`string-match-left-right/${t}(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ${g} is longer than 1 character, ${d.length} (equals to ${d}). Please split it into separate characters and put into array as separate elements.`);if("string"!=typeof e){if(u.relaxedApi)return!1;throw new Error(`string-match-left-right/${t}(): [THROW_ID_01] the first argument should be a string. Currently it's of a type: ${typeof e}, equal to:\n${JSON.stringify(e,null,4)}`)}if(0===e.length){if(u.relaxedApi)return!1;throw new Error(`string-match-left-right/${t}(): [THROW_ID_02] the first argument should be a non-empty string. Currently it's empty!`)}if(!(Number.isInteger(c)&&c>=0)){if(u.relaxedApi)return!1;throw new Error(`string-match-left-right/${t}(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ${typeof c}, equal to:\n${JSON.stringify(c,null,4)}`)}if("string"==typeof l)m=[l];else if(Array.isArray(l))m=l;else if(o(l)){if("function"!=typeof l)throw new Error(`string-match-left-right/${t}(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ${typeof l}, equal to:\n${JSON.stringify(l,null,4)}`);m=[],m.push(l)}else m=l;if(o(f)&&"object"!=typeof f)throw new Error(`string-match-left-right/${t}(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type "${typeof f}", and equal to:\n${JSON.stringify(f,null,4)}`);if(!o(m)||!Array.isArray(m)||Array.isArray(m)&&!m.length||Array.isArray(m)&&1===m.length&&"string"==typeof m[0]&&0===m[0].trim().length){if("function"==typeof u.cb){let r,o=c;if("matchRight"===t&&n(e[c])&&i(e[c+1])&&(o+=1),"matchLeftIncl"!==t&&"matchRight"!==t||(o+=1),t.startsWith("matchLeft"))for(let t=o;t--;){if(i(e[t])&&n(e[t-1]))continue;let o=e[t];if(n(e[t])&&i(e[t+1])&&(o=e[t]+e[t+1]),(!u.trimBeforeMatching||u.trimBeforeMatching&&void 0!==o&&""!==o.trim())&&(0===u.trimCharsBeforeMatching.length||void 0!==o&&!u.trimCharsBeforeMatching.includes(o))){r=t;break}i(e[t-1])&&n(e[t-2])&&(t-=1)}else if(t.startsWith("matchRight"))for(let t=o;t<e.length;t++){let o=e[t];if(n(e[t])&&i(e[t+1])&&(o=e[t]+e[t+1]),(!u.trimBeforeMatching||u.trimBeforeMatching&&""!==o.trim())&&(0===u.trimCharsBeforeMatching.length||!u.trimCharsBeforeMatching.includes(o))){r=t;break}n(e[t])&&i(e[t+1])&&(t+=1)}if(void 0===r)return!1;let a=e[r];n(e[r])&&i(e[r+1])&&(a=e[r]+e[r+1]),i(e[r])&&n(e[r-1])&&(a=e[r-1]+e[r],r-=1);let s,h=r+1;return n(e[r])&&i(e[r+1])&&(h+=1),h&&h>0&&(s=e.slice(0,h)),t.startsWith("matchLeft")?u.cb(a,s,r):(r&&r>0&&(s=e.slice(r)),u.cb(a,s,r))}let r="";throw o(f)||(r=" More so, the whole options object, the fourth input argument, is missing!"),new Error(`string-match-left-right/${t}(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!${r}`)}if(t.startsWith("matchLeft")){for(let r=0,s=m.length;r<s;r++){y="function"==typeof m[r];const s=m[r];let l,f,g="",d=c;"matchLeft"===t&&(a(e[r-1])&&a(e[r-2])?d-=2:d-=1);const p=h(e,d,s,u,y);if(p&&y&&"function"==typeof s&&"EOL"===s())return!(!s()||u.cb&&!u.cb(l,g,f))&&s();if(o(p)&&p>0&&(f=p-1,l=e[f],g=e.slice(0,p)),i(e[f])&&o(e[f-1])&&n(e[f-1])&&(f-=1,l=e[f-1]+e[f]),n(e[f])&&o(e[f+1])&&i(e[f+1])&&(l=e[f]+e[f+1],g=e.slice(0,f+2)),!1!==p&&(!u.cb||u.cb(l,g,f)))return s}return!1}for(let r=0,a=m.length;r<a;r++){y="function"==typeof m[r];const a=m[r];let h=c+("matchRight"===t?1:0);"matchRight"===t&&n(e[h-1])&&i(e[h])&&(h+=1);const l=s(e,h,a,u,y);if(l&&y&&"function"==typeof a&&"EOL"===a()){let t,e,r;return!(!a()||u.cb&&!u.cb(t,e,r))&&a()}let f,g,d;if(o(l)&&o(e[l+a.length-1])&&(f=l+a.length,g=e[f],n(e[f])&&i(e[f+1])&&(g=e[f]+e[f+1])),o(f)&&f>=0&&(d=e.slice(f)),!1!==l&&(!u.cb||u.cb(g,d,f)))return a}return!1}("matchRightIncl",t,e,c,l)}function l(t){return"string"==typeof t}var f=Array.isArray;function u(t){throw new Error("string-find-heads-tails: [THROW_ID_01*] Missing ".concat(t,"th parameter!"))}return function(n,i,o,a){if(null!=a){if("object"!==t(a))throw new TypeError("string-find-heads-tails: [THROW_ID_13] the fourth input argument, Optional Options Object, must be a plain object! Currently it's: ".concat(t(a),", equal to: ").concat(a));e(a.fromIndex,{includeZero:!0})&&(a.fromIndex=Number(a.fromIndex))}var s,h,g={fromIndex:0,throwWhenSomethingWrongIsDetected:!0,allowWholeValueToBeOnlyHeadsOrTails:!0,source:"string-find-heads-tails",matchHeadsAndTailsStrictlyInPairsByTheirOrder:!1,relaxedAPI:!1};if((a=Object.assign({},g,a)).relaxedAPI||(void 0===n&&u(1),void 0===i&&u(2),void 0===o&&u(3)),!l(n)||0===n.length){if(a.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_02] the first input argument, input string, must be a non-zero-length string! Currently it's: ".concat(t(n),", equal to: ").concat(n))}if(!l(i)&&!f(i)){if(a.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_03] the second input argument, heads, must be either a string or an array of strings! Currently it's: ".concat(t(i),", equal to:\n").concat(JSON.stringify(i,null,4)))}if(l(i)){if(0===i.length){if(a.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_04] the second input argument, heads, must be a non-empty string! Currently it's empty.")}i=r(i)}else if(f(i)){if(0===i.length){if(a.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_05] the second input argument, heads, must be a non-empty array and contain at least one string! Currently it's empty.")}if(i.every((function(t,e){return s=t,h=e,l(t)}))){if(!i.every((function(t,e){return h=e,l(t)&&t.length>0&&""!==t.trim()}))){if(!a.relaxedAPI)throw new TypeError("string-find-heads-tails: [THROW_ID_07] the second input argument, heads, should not contain empty strings! For example, there's one detected at index ".concat(h," of heads array:\n").concat(JSON.stringify(i,null,4),"."));if(0===(i=i.filter((function(t){return l(t)&&t.length>0}))).length)return[]}}else{if(!a.relaxedAPI)throw new TypeError("string-find-heads-tails: [THROW_ID_06] the second input argument, heads, contains non-string elements! For example, element at ".concat(h,"th index is ").concat(t(s),", equal to:\n").concat(JSON.stringify(s,null,4),". Whole heads array looks like:\n").concat(JSON.stringify(i,null,4)));if(0===(i=i.filter((function(t){return l(t)&&t.length>0}))).length)return[]}}if(!l(o)&&!f(o)){if(a.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_08] the third input argument, tails, must be either a string or an array of strings! Currently it's: ".concat(t(o),", equal to:\n").concat(JSON.stringify(o,null,4)))}if(l(o)){if(0===o.length){if(a.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_09] the third input argument, tails, must be a non-empty string! Currently it's empty.")}o=r(o)}else if(f(o)){if(0===o.length){if(a.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_10] the third input argument, tails, must be a non-empty array and contain at least one string! Currently it's empty.")}if(o.every((function(t,e){return s=t,h=e,l(t)}))){if(!o.every((function(t,e){return h=e,l(t)&&t.length>0&&""!==t.trim()}))){if(!a.relaxedAPI)throw new TypeError("string-find-heads-tails: [THROW_ID_12] the third input argument, tails, should not contain empty strings! For example, there's one detected at index ".concat(h,". Whole tails array is equal to:\n").concat(JSON.stringify(o,null,4)));if(0===(o=o.filter((function(t){return l(t)&&t.length>0}))).length)return[]}}else{if(!a.relaxedAPI)throw new TypeError("string-find-heads-tails: [THROW_ID_11] the third input argument, tails, contains non-string elements! For example, element at ".concat(h,"th index is ").concat(t(s),", equal to:\n").concat(JSON.stringify(s,null,4),". Whole tails array is equal to:\n").concat(JSON.stringify(o,null,4)));if(0===(o=o.filter((function(t){return l(t)&&t.length>0}))).length)return[]}}var d=a.source===g.source;if(a.throwWhenSomethingWrongIsDetected&&!a.allowWholeValueToBeOnlyHeadsOrTails){if(r(i).includes(n))throw new Error("".concat(a.source).concat(d?": [THROW_ID_16]":""," the whole input string can't be equal to ").concat(l(i)?"":"one of ","heads (").concat(n,")!"));if(r(o).includes(n))throw new Error("".concat(a.source).concat(d?": [THROW_ID_17]":""," the whole input string can't be equal to ").concat(l(o)?"":"one of ","tails (").concat(n,")!"))}if(!(Number.isInteger(a.fromIndex)&&a.fromIndex>=0||e(a.fromIndex,{includeZero:!0})))throw new TypeError("".concat(a.source).concat(d?": [THROW_ID_18]":""," the fourth input argument must be a natural number! Currently it's: ").concat(a.fromIndex));for(var m,y=i.concat(o).map((function(t){return t.charAt(0)})).reduce((function(t,e){return e.charCodeAt(0)>t[1]?[t[0],e.charCodeAt(0)]:e.charCodeAt(0)<t[0]?[e.charCodeAt(0),t[1]]:t}),[i[0].charCodeAt(0),i[0].charCodeAt(0)]),p=[],w=!1,b={},I=!1,O=a.fromIndex,T=n.length;O<T;O++){var _=n[O].charCodeAt(0);if(_<=y[1]&&_>=y[0]){var W=c(n,O,i);if(W&&a.matchHeadsAndTailsStrictlyInPairsByTheirOrder)for(var A=i.length;A--;)if(i[A]===W){m=A;break}if(W){if(!w){(b={}).headsStartAt=O,b.headsEndAt=O+W.length,w=!0,O+=W.length-1,I&&(I=!1);continue}if(a.throwWhenSomethingWrongIsDetected)throw new TypeError("".concat(a.source).concat(d?": [THROW_ID_19]":"",' When processing "').concat(n,'", we found heads (').concat(n.slice(O,O+W.length),') starting at character with index number "').concat(O,'" and there was another set of heads before it! Generally speaking, there should be "heads-tails-heads-tails", not "heads-heads-tails"!\nWe\'re talking about the area of the code:\n\n\n--------------------------------------starts\n').concat(n.slice(Math.max(O-200,0),O),"\n      ","[".concat(33,"m-------\x3e[",39,"m")," ","[".concat(31,"m",n.slice(O,O+W.length),"[",39,"m")," [",33,"m","<-------","[",39,"m\n").concat(n.slice(O+W.length,Math.min(T,O+200)),"\n--------------------------------------ends\n\n\nTo turn off this error being thrown, set opts.throwWhenSomethingWrongIsDetected to Boolean false."))}var C=c(n,O,o);if(w&&C&&a.matchHeadsAndTailsStrictlyInPairsByTheirOrder&&void 0!==m&&void 0!==o[m]&&o[m]!==C){for(var x=void 0,E=o.length;E--;)if(o[E]===C){x=E;break}throw new TypeError("".concat(a.source).concat(d?": [THROW_ID_20]":"",' When processing "').concat(n,'", we had "opts.matchHeadsAndTailsStrictlyInPairsByTheirOrder" on. We found heads (').concat(i[m],") but the tails the followed it were not of the same index, ").concat(m," (").concat(o[m],") but ").concat(x," (").concat(C,")."))}if(C){if(w){b.tailsStartAt=O,b.tailsEndAt=O+C.length,p.push(b),b={},w=!1,O+=C.length-1;continue}a.throwWhenSomethingWrongIsDetected&&(I="".concat(a.source).concat(d?": [THROW_ID_21]":"",' When processing "').concat(n,'", we found tails (').concat(n.slice(O,O+C.length),') starting at character with index number "').concat(O,"\" but there were no heads preceding it. That's very naughty!"))}}if(a.throwWhenSomethingWrongIsDetected&&O===T-1){if(0!==Object.keys(b).length)throw new TypeError("".concat(a.source).concat(d?": [THROW_ID_22]":"",' When processing "').concat(n,"\", we reached the end of the string and yet didn't find any tails (").concat(JSON.stringify(o,null,4),") to match the last detected heads (").concat(n.slice(b.headsStartAt,b.headsEndAt),")!"));if(I)throw new Error(I)}}return p}}));
