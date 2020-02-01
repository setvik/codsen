/**
 * string-match-left-right
 * Do substrings match what's on the left or right of a given index?
 * Version: 3.11.19
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-match-left-right
 */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t=t||self).stringMatchLeftRight={})}(this,(function(t){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e(t){if("string"==typeof t)return 0!==t.length&&(t.charCodeAt(0)>=55296&&t.charCodeAt(0)<=56319);if(void 0===t)return!1;throw new TypeError(`string-character-is-astral-surrogate/isHighSurrogate(): the input is not string but ${typeof t}`)}function n(t){if("string"==typeof t)return 0!==t.length&&(t.charCodeAt(0)>=56320&&t.charCodeAt(0)<=57343);if(void 0===t)return!1;throw new TypeError(`string-character-is-astral-surrogate/isLowSurrogate(): the input is not string but ${typeof t}`)}function i(t){return null!=t}function o(t){return"string"==typeof t&&(t.charCodeAt(0)>=55296&&t.charCodeAt(0)<=57343)}function a(t,r,o,a,c){var h="function"==typeof o?o():o;if(r>=t.length&&c&&"EOL"===h)return h;if(!(r<=t.length)){if(a.relaxedApi)return!1;throw new Error("string-match-left-right/marchForward(): [THROW_ID_102] second argument, fromIndexInclusive is ".concat(r," beyond the input string length, ").concat(t.length,"."))}for(var f=c?1:o.length,s=r,u=t.length;s<u;s++){var g=t[s];if(e(t[s])&&n(t[s+1])&&(g=t[s]+t[s+1]),n(t[s])&&e(t[s-1])&&(g=t[s-1]+t[s]),!a.trimBeforeMatching||""!==t[s].trim())if(!a.i&&a.trimCharsBeforeMatching.includes(g)||a.i&&a.trimCharsBeforeMatching.map((function(t){return t.toLowerCase()})).includes(g.toLowerCase()))2===g.length&&(s+=1);else{var l=o[o.length-f];if(e(l)&&i(o[o.length-f+1])&&n(o[o.length-f+1])&&(l=o[o.length-f]+o[o.length-f+1]),!(!a.i&&g===l||a.i&&g.toLowerCase()===l.toLowerCase()))return!1;if((f-=g.length)<1){var m=s-o.length+g.length;return m>=0&&n(t[m])&&i(t[m-1])&&e(t[m-1])&&(m-=1),m>=0?m:0}2===g.length&&e(t[s])&&(s+=1)}}return f>0?!(!c||"EOL"!==h):void 0}function c(t,r,i,o,a){var c="function"==typeof i?i():i;if(r<0&&a&&"EOL"===c)return c;if(r>=t.length){if(o.relaxedApi)return!1;throw new Error("string-match-left-right/marchBackward(): [THROW_ID_203] second argument, starting index, should not be beyond the last character of the input string! Currently the first argument's last character's index is ".concat(t.length," but the second argument is beyond it:\n").concat(JSON.stringify(r,null,4)))}for(var h=a?1:i.length,f=r+1;f--;)if(o.trimBeforeMatching&&""===t[f].trim()){if(0===f&&a&&"EOL"===i)return!0}else{var s=t[f];if(n(t[f])&&e(t[f-1])?s=t[f-1]+t[f]:e(t[f])&&n(t[f+1])&&(s=t[f]+t[f+1]),!o.i&&o.trimCharsBeforeMatching.includes(s)||o.i&&o.trimCharsBeforeMatching.map((function(t){return t.toLowerCase()})).includes(s.toLowerCase())){if(2===s.length&&(f-=1),a&&"EOL"===i&&0===f)return!0}else{var u=i[h-1];if(n(u)&&(u="".concat(i[h-2]).concat(i[h-1]),h-=1,f-=1),!(!o.i&&s===u||o.i&&s.toLowerCase()===u.toLowerCase()))return!1;if((h-=1)<1)return f>=0?f:0}}return h>0?!(!a||"EOL"!==c):void 0}function h(t,h,f,s,u){if("object"===r(u)&&null!==u&&Object.prototype.hasOwnProperty.call(u,"trimBeforeMatching")&&"boolean"!=typeof u.trimBeforeMatching)throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!").concat(Array.isArray(u.trimBeforeMatching)?" Did you mean to use opts.trimCharsBeforeMatching?":""));var g,l,m,y,p,d=Object.assign({},{i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],relaxedApi:!1},u);if(d.trimCharsBeforeMatching="string"==typeof(g=d.trimCharsBeforeMatching)?g.length>0?[g]:[]:g,d.trimCharsBeforeMatching=d.trimCharsBeforeMatching.map((function(t){return"string"==typeof t?t:String(t)})),d.trimCharsBeforeMatching.some((function(t,r){return t.length>1&&!o(t)&&(l=r,m=t,!0)})))throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ").concat(l," is longer than 1 character, ").concat(m.length," (equals to ").concat(m,"). Please split it into separate characters and put into array as separate elements."));if("string"!=typeof h){if(d.relaxedApi)return!1;throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_01] the first argument should be a string. Currently it's of a type: ").concat(r(h),", equal to:\n").concat(JSON.stringify(h,null,4)))}if(0===h.length){if(d.relaxedApi)return!1;throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_02] the first argument should be a non-empty string. Currently it's empty!"))}if(!(Number.isInteger(f)&&f>=0)){if(d.relaxedApi)return!1;throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ").concat(r(f),", equal to:\n").concat(JSON.stringify(f,null,4)))}if("string"==typeof s)y=[s];else if(Array.isArray(s))y=s;else if(i(s)){if("function"!=typeof s)throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ").concat(r(s),", equal to:\n").concat(JSON.stringify(s,null,4)));(y=[]).push(s)}else y=s;if(i(u)&&"object"!==r(u))throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type \"").concat(r(u),'", and equal to:\n').concat(JSON.stringify(u,null,4)));if(!i(y)||!Array.isArray(y)||Array.isArray(y)&&!y.length||Array.isArray(y)&&1===y.length&&"string"==typeof y[0]&&0===y[0].trim().length){if("function"==typeof d.cb){var b,v=f;if("matchRight"===t&&e(h[f])&&n(h[f+1])&&(v+=1),"matchLeftIncl"!==t&&"matchRight"!==t||(v+=1),t.startsWith("matchLeft")){for(var w=v;w--;)if(!n(h[w])||!e(h[w-1])){var C=h[w];if(e(h[w])&&n(h[w+1])&&(C=h[w]+h[w+1]),(!d.trimBeforeMatching||d.trimBeforeMatching&&void 0!==C&&""!==C.trim())&&(0===d.trimCharsBeforeMatching.length||void 0!==C&&!d.trimCharsBeforeMatching.includes(C))){b=w;break}n(h[w-1])&&e(h[w-2])&&(w-=1)}}else if(t.startsWith("matchRight"))for(var M=v;M<h.length;M++){var B=h[M];if(e(h[M])&&n(h[M+1])&&(B=h[M]+h[M+1]),(!d.trimBeforeMatching||d.trimBeforeMatching&&""!==B.trim())&&(0===d.trimCharsBeforeMatching.length||!d.trimCharsBeforeMatching.includes(B))){b=M;break}e(h[M])&&n(h[M+1])&&(M+=1)}if(void 0===b)return!1;var L=h[b];e(h[b])&&n(h[b+1])&&(L=h[b]+h[b+1]),n(h[b])&&e(h[b-1])&&(L=h[b-1]+h[b],b-=1);var O,A=b+1;return e(h[b])&&n(h[b+1])&&(A+=1),A&&A>0&&(O=h.slice(0,A)),t.startsWith("matchLeft")?d.cb(L,O,b):(b&&b>0&&(O=h.slice(b)),d.cb(L,O,b))}var _="";throw i(u)||(_=" More so, the whole options object, the fourth input argument, is missing!"),new Error("string-match-left-right/".concat(t,'(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!').concat(_))}if(t.startsWith("matchLeft")){for(var E=0,I=y.length;E<I;E++){p="function"==typeof y[E];var R=y[E],T=void 0,W=void 0,x="",S=f;"matchLeft"===t&&(o(h[E-1])&&o(h[E-2])?S-=2:S-=1);var D=c(h,S,R,d,p);if(D&&p&&"function"==typeof R&&"EOL"===R())return!(!R()||d.cb&&!d.cb(T,x,W))&&R();if(i(D)&&D>0&&(T=h[W=D-1],x=h.slice(0,D)),n(h[W])&&i(h[W-1])&&e(h[W-1])&&(T=h[(W-=1)-1]+h[W]),e(h[W])&&i(h[W+1])&&n(h[W+1])&&(T=h[W]+h[W+1],x=h.slice(0,W+2)),!1!==D&&(!d.cb||d.cb(T,x,W)))return R}return!1}for(var H=0,j=y.length;H<j;H++){p="function"==typeof y[H];var k=y[H],N=f+("matchRight"===t?1:0);"matchRight"===t&&e(h[N-1])&&n(h[N])&&(N+=1);var q=a(h,N,k,d,p);if(q&&p&&"function"==typeof k&&"EOL"===k()){return!(!k()||d.cb&&!d.cb(void 0,void 0,void 0))&&k()}var J=void 0,P=void 0;i(q)&&i(h[q+k.length-1])&&(P=h[J=q+k.length],e(h[J])&&n(h[J+1])&&(P=h[J]+h[J+1]));var $=void 0;if(i(J)&&J>=0&&($=h.slice(J)),!1!==q&&(!d.cb||d.cb(P,$,J)))return k}return!1}t.matchLeft=function(t,r,e,n){return h("matchLeft",t,r,e,n)},t.matchLeftIncl=function(t,r,e,n){return h("matchLeftIncl",t,r,e,n)},t.matchRight=function(t,r,e,n){return h("matchRight",t,r,e,n)},t.matchRightIncl=function(t,r,e,n){return h("matchRightIncl",t,r,e,n)},Object.defineProperty(t,"__esModule",{value:!0})}));
