/**
 * string-find-heads-tails
 * Search for string pairs. A special case of string search algorithm.
 * Version: 3.16.2
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-find-heads-tails
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).stringFindHeadsTails=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t){return"string"==typeof t?t.length>0?[t]:[]:t}function r(t){return t&&"object"==typeof t&&!Array.isArray(t)}function n(t){return"string"==typeof t}function i(t,e,r,n,i,a){const o="function"==typeof r?r():r;if(e<0&&i&&"EOL"===o)return o;if(e>=t.length&&!i)return!1;let s=i?1:r.length,c=!1,h=!1,l=n.maxMismatches,f=e,u=!1,g=!1,d=!1;for(;t[f];){const e=a(f);if(n.trimBeforeMatching&&""===t[f].trim()){if(!t[e]&&i&&"EOL"===r)return!0;f=a(f);continue}if(!n.i&&n.trimCharsBeforeMatching.includes(t[f])||n.i&&n.trimCharsBeforeMatching.map(t=>t.toLowerCase()).includes(t[f].toLowerCase())){if(i&&"EOL"===r&&!t[e])return!0;f=a(f);continue}const o=e>f?r[r.length-s]:r[s-1];if(!n.i&&t[f]===o||n.i&&t[f].toLowerCase()===o.toLowerCase()){if(u||(u=!0),h||(h=!0),s===r.length?g=!0:1===s&&(d=!0),s-=1,s<1)return f}else{if(!(n.maxMismatches&&l&&f))return!(0!==f||1!==s||n.lastMustMatch||!h)&&0;l--;for(let i=0;i<=l;i++){const o=e>f?r[r.length-s+1+i]:r[s-2-i],c=t[a(f)];if(o&&(!n.i&&t[f]===o||n.i&&t[f].toLowerCase()===o.toLowerCase())&&(!n.firstMustMatch||s!==r.length)){s-=2,u=!0;break}if(c&&o&&(!n.i&&c===o||n.i&&c.toLowerCase()===o.toLowerCase())&&(!n.firstMustMatch||s!==r.length)){s-=1,u=!0;break}if(void 0===o&&l>=0&&u&&(!n.firstMustMatch||g)&&(!n.lastMustMatch||d))return f}u||(c=f)}if(!1!==c&&c!==f&&(c=!1),s<1)return f;f=a(f)}return s>0?!(!i||"EOL"!==o)||!!(n.maxMismatches>=s&&h)&&(c||0):void 0}function a(t,a,o,s){return function(t,a,o,s,c){if(r(c)&&Object.prototype.hasOwnProperty.call(c,"trimBeforeMatching")&&"boolean"!=typeof c.trimBeforeMatching)throw new Error(`string-match-left-right/${t}(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!${Array.isArray(c.trimBeforeMatching)?" Did you mean to use opts.trimCharsBeforeMatching?":""}`);const h=Object.assign({},{i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],maxMismatches:0,firstMustMatch:!1,lastMustMatch:!1},c);if(h.trimCharsBeforeMatching=e(h.trimCharsBeforeMatching),h.trimCharsBeforeMatching=h.trimCharsBeforeMatching.map(t=>n(t)?t:String(t)),!n(a))return!1;if(!a.length)return!1;if(!Number.isInteger(o)||o<0)throw new Error(`string-match-left-right/${t}(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ${typeof o}, equal to:\n${JSON.stringify(o,null,4)}`);let l,f,u,g;if(n(s))l=[s];else if(Array.isArray(s))l=s;else if(s){if("function"!=typeof s)throw new Error(`string-match-left-right/${t}(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ${typeof s}, equal to:\n${JSON.stringify(s,null,4)}`);l=[],l.push(s)}else l=s;if(c&&!r(c))throw new Error(`string-match-left-right/${t}(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type "${typeof c}", and equal to:\n${JSON.stringify(c,null,4)}`);if(h.trimCharsBeforeMatching.some((t,e)=>t.length>1&&(u=e,g=t,!0)))throw new Error(`string-match-left-right/${t}(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ${u} is longer than 1 character, ${g.length} (equals to ${g}). Please split it into separate characters and put into array as separate elements.`);if(!l||!Array.isArray(l)||Array.isArray(l)&&!l.length||Array.isArray(l)&&1===l.length&&n(l[0])&&!l[0].trim().length){if("function"==typeof h.cb){let e,r=o;if("matchLeftIncl"!==t&&"matchRight"!==t||(r+=1),"L"===t[5])for(let t=r;t--;){const r=a[t];if((!h.trimBeforeMatching||h.trimBeforeMatching&&void 0!==r&&r.trim().length)&&(!h.trimCharsBeforeMatching.length||void 0!==r&&!h.trimCharsBeforeMatching.includes(r))){e=t;break}}else if(t.startsWith("matchRight"))for(let t=r;t<a.length;t++){const r=a[t];if((!h.trimBeforeMatching||h.trimBeforeMatching&&r.trim().length)&&(!h.trimCharsBeforeMatching.length||!h.trimCharsBeforeMatching.includes(r))){e=t;break}}if(void 0===e)return!1;const n=a[e],i=e+1;let s="";return i&&i>0&&(s=a.slice(0,i)),"L"===t[5]?h.cb(n,s,e):(e&&e>0&&(s=a.slice(e)),h.cb(n,s,e))}let e="";throw c||(e=" More so, the whole options object, the fourth input argument, is missing!"),new Error(`string-match-left-right/${t}(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!${e}`)}for(let e=0,r=l.length;e<r;e++){f="function"==typeof l[e];const r=l[e];let n,s,c="",u=o;"matchRight"===t?u++:"matchLeft"===t&&u--;const g=i(a,u,r,h,f,e=>"L"===t[5]?e-1:e+1);if(g&&f&&"function"==typeof r&&"EOL"===r())return!(!r()||h.cb&&!h.cb(n,c,s))&&r();if(Number.isInteger(g)&&(s=t.startsWith("matchLeft")?g-1:g+1,c="L"===t[5]?a.slice(0,g):a.slice(s)),s<0&&(s=void 0),a[s]&&(n=a[s]),Number.isInteger(g)&&(!h.cb||h.cb(n,c,s)))return r}return!1}("matchRightIncl",t,a,o,s)}function o(t){return"string"==typeof t}return function(r,n,i,s){if(s&&(!(c=s)||"object"!==t(c)||Array.isArray(c)))throw new TypeError("string-find-heads-tails: [THROW_ID_01] the fourth input argument, an Optional Options Object, must be a plain object! Currently it's equal to: ".concat(s," (type: ").concat(t(s),")"));var c,h,l,f={fromIndex:0,throwWhenSomethingWrongIsDetected:!0,allowWholeValueToBeOnlyHeadsOrTails:!0,source:"string-find-heads-tails",matchHeadsAndTailsStrictlyInPairsByTheirOrder:!1,relaxedAPI:!1},u=Object.assign({},f,s);if("string"==typeof u.fromIndex&&/^\d*$/.test(u.fromIndex))u.fromIndex=Number(u.fromIndex);else if(!Number.isInteger(u.fromIndex)||u.fromIndex<0)throw new TypeError("".concat(u.source," [THROW_ID_18] the fourth input argument must be a natural number or zero! Currently it's: ").concat(u.fromIndex));if(!o(r)||0===r.length){if(u.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_02] the first input argument, input string, must be a non-zero-length string! Currently it's: ".concat(t(r),", equal to: ").concat(r))}if("string"!=typeof n&&!Array.isArray(n)){if(u.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_03] the second input argument, heads, must be either a string or an array of strings! Currently it's: ".concat(t(n),", equal to:\n").concat(JSON.stringify(n,null,4)))}if("string"==typeof n){if(0===n.length){if(u.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_04] the second input argument, heads, must be a non-empty string! Currently it's empty.")}n=e(n)}else if(Array.isArray(n)){if(0===n.length){if(u.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_05] the second input argument, heads, must be a non-empty array and contain at least one string! Currently it's empty.")}if(n.every((function(t,e){return h=t,l=e,o(t)}))){if(!n.every((function(t,e){return l=e,o(t)&&t.length>0&&""!==t.trim()}))){if(!u.relaxedAPI)throw new TypeError("string-find-heads-tails: [THROW_ID_07] the second input argument, heads, should not contain empty strings! For example, there's one detected at index ".concat(l," of heads array:\n").concat(JSON.stringify(n,null,4),"."));if(0===(n=n.filter((function(t){return o(t)&&t.length>0}))).length)return[]}}else{if(!u.relaxedAPI)throw new TypeError("string-find-heads-tails: [THROW_ID_06] the second input argument, heads, contains non-string elements! For example, element at ".concat(l,"th index is ").concat(t(h),", equal to:\n").concat(JSON.stringify(h,null,4),". Whole heads array looks like:\n").concat(JSON.stringify(n,null,4)));if(0===(n=n.filter((function(t){return o(t)&&t.length>0}))).length)return[]}}if(!o(i)&&!Array.isArray(i)){if(u.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_08] the third input argument, tails, must be either a string or an array of strings! Currently it's: ".concat(t(i),", equal to:\n").concat(JSON.stringify(i,null,4)))}if(o(i)){if(0===i.length){if(u.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_09] the third input argument, tails, must be a non-empty string! Currently it's empty.")}i=e(i)}else if(Array.isArray(i)){if(0===i.length){if(u.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_10] the third input argument, tails, must be a non-empty array and contain at least one string! Currently it's empty.")}if(i.every((function(t,e){return h=t,l=e,o(t)}))){if(!i.every((function(t,e){return l=e,o(t)&&t.length>0&&""!==t.trim()}))){if(!u.relaxedAPI)throw new TypeError("string-find-heads-tails: [THROW_ID_12] the third input argument, tails, should not contain empty strings! For example, there's one detected at index ".concat(l,". Whole tails array is equal to:\n").concat(JSON.stringify(i,null,4)));if(0===(i=i.filter((function(t){return o(t)&&t.length>0}))).length)return[]}}else{if(!u.relaxedAPI)throw new TypeError("string-find-heads-tails: [THROW_ID_11] the third input argument, tails, contains non-string elements! For example, element at ".concat(l,"th index is ").concat(t(h),", equal to:\n").concat(JSON.stringify(h,null,4),". Whole tails array is equal to:\n").concat(JSON.stringify(i,null,4)));if(0===(i=i.filter((function(t){return o(t)&&t.length>0}))).length)return[]}}var g=u.source===f.source;if(u.throwWhenSomethingWrongIsDetected&&!u.allowWholeValueToBeOnlyHeadsOrTails){if(e(n).includes(r))throw new Error("".concat(u.source).concat(g?": [THROW_ID_16]":""," the whole input string can't be equal to ").concat(o(n)?"":"one of ","heads (").concat(r,")!"));if(e(i).includes(r))throw new Error("".concat(u.source).concat(g?": [THROW_ID_17]":""," the whole input string can't be equal to ").concat(o(i)?"":"one of ","tails (").concat(r,")!"))}for(var d,m=n.concat(i).map((function(t){return t.charAt(0)})).reduce((function(t,e){return e.charCodeAt(0)>t[1]?[t[0],e.charCodeAt(0)]:e.charCodeAt(0)<t[0]?[e.charCodeAt(0),t[1]]:t}),[n[0].charCodeAt(0),n[0].charCodeAt(0)]),y=[],p=!1,w={},b=!1,I=u.fromIndex,T=r.length;I<T;I++){var O=r[I].charCodeAt(0);if(O<=m[1]&&O>=m[0]){var A=a(r,I,n);if(A&&u.matchHeadsAndTailsStrictlyInPairsByTheirOrder)for(var W=n.length;W--;)if(n[W]===A){d=W;break}if(A){if(!p){(w={}).headsStartAt=I,w.headsEndAt=I+A.length,p=!0,I+=A.length-1,b&&(b=!1);continue}if(u.throwWhenSomethingWrongIsDetected)throw new TypeError("".concat(u.source).concat(g?": [THROW_ID_19]":"",' When processing "').concat(r,'", we found heads (').concat(r.slice(I,I+A.length),') starting at character with index number "').concat(I,'" and there was another set of heads before it! Generally speaking, there should be "heads-tails-heads-tails", not "heads-heads-tails"!\nWe\'re talking about the area of the code:\n\n\n--------------------------------------starts\n').concat(r.slice(Math.max(I-200,0),I),"\n      ","[".concat(33,"m-------\x3e[",39,"m")," ","[".concat(31,"m",r.slice(I,I+A.length),"[",39,"m")," [",33,"m","<-------","[",39,"m\n").concat(r.slice(I+A.length,Math.min(T,I+200)),"\n--------------------------------------ends\n\n\nTo turn off this error being thrown, set opts.throwWhenSomethingWrongIsDetected to Boolean false."))}var _=a(r,I,i);if(p&&_&&u.matchHeadsAndTailsStrictlyInPairsByTheirOrder&&void 0!==d&&void 0!==i[d]&&i[d]!==_){for(var M=void 0,x=i.length;x--;)if(i[x]===_){M=x;break}throw new TypeError("".concat(u.source).concat(g?": [THROW_ID_20]":"",' When processing "').concat(r,'", we had "opts.matchHeadsAndTailsStrictlyInPairsByTheirOrder" on. We found heads (').concat(n[d],") but the tails the followed it were not of the same index, ").concat(d," (").concat(i[d],") but ").concat(M," (").concat(_,")."))}if(_){if(p){w.tailsStartAt=I,w.tailsEndAt=I+_.length,y.push(w),w={},p=!1,I+=_.length-1;continue}u.throwWhenSomethingWrongIsDetected&&(b="".concat(u.source).concat(g?": [THROW_ID_21]":"",' When processing "').concat(r,'", we found tails (').concat(r.slice(I,I+_.length),') starting at character with index number "').concat(I,"\" but there were no heads preceding it. That's very naughty!"))}}if(u.throwWhenSomethingWrongIsDetected&&I===T-1){if(0!==Object.keys(w).length)throw new TypeError("".concat(u.source).concat(g?": [THROW_ID_22]":"",' When processing "').concat(r,"\", we reached the end of the string and yet didn't find any tails (").concat(JSON.stringify(i,null,4),") to match the last detected heads (").concat(r.slice(w.headsStartAt,w.headsEndAt),")!"));if(b)throw new Error(b)}}return y}}));
