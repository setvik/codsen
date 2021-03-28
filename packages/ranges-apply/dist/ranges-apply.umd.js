/**
 * ranges-apply
 * Take an array of string index ranges, delete/replace the string according to them
 * Version: 5.0.11
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ranges-apply/
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).rangesApply={})}(this,(function(e){"use strict";const r={strictlyTwoElementsInRangeArrays:!1,progressFn:null};function n(e,n){if(!Array.isArray(e)||!e.length)return e;const t={...r,...n};let s,o;if(t.strictlyTwoElementsInRangeArrays&&!e.filter((e=>e)).every(((e,r)=>2===e.length||(s=r,o=e.length,!1))))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${s}th range (${JSON.stringify(e[s],null,4)}) has not two but ${o} elements!`);if(!e.filter((e=>e)).every(((e,r)=>!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(s=r,!1))))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${s}th range (${JSON.stringify(e[s],null,4)}) does not consist of only natural numbers!`);const i=e.filter((e=>e)).length**2;let a=0;return Array.from(e).filter((e=>e)).sort(((e,r)=>(t.progressFn&&(a+=1,t.progressFn(Math.floor(100*a/i))),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1)))}const t={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};function s(e,r){function s(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!Array.isArray(e)||!e.length)return null;let o;if(r){if(!s(r))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(r,null,4)} (type ${typeof r})`);if(o={...t,...r},o.progressFn&&s(o.progressFn)&&!Object.keys(o.progressFn).length)o.progressFn=null;else if(o.progressFn&&"function"!=typeof o.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof o.progressFn}", equal to ${JSON.stringify(o.progressFn,null,4)}`);if(o.mergeType&&1!=+o.mergeType&&2!=+o.mergeType)throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof o.mergeType}", equal to ${JSON.stringify(o.mergeType,null,4)}`);if("boolean"!=typeof o.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof o.joinRangesThatTouchEdges}", equal to ${JSON.stringify(o.joinRangesThatTouchEdges,null,4)}`)}else o={...t};const i=e.filter((e=>e)).map((e=>[...e])).filter((e=>void 0!==e[2]||e[0]!==e[1]));let a,l,g;if(a=o.progressFn?n(i,{progressFn:e=>{g=Math.floor(e/5),g!==l&&(l=g,o.progressFn(g))}}):n(i),!a)return null;const u=a.length-1;for(let e=u;e>0;e--)o.progressFn&&(g=Math.floor(78*(1-e/u))+21,g!==l&&g>l&&(l=g,o.progressFn(g))),(a[e][0]<=a[e-1][0]||!o.joinRangesThatTouchEdges&&a[e][0]<a[e-1][1]||o.joinRangesThatTouchEdges&&a[e][0]<=a[e-1][1])&&(a[e-1][0]=Math.min(a[e][0],a[e-1][0]),a[e-1][1]=Math.max(a[e][1],a[e-1][1]),void 0!==a[e][2]&&(a[e-1][0]>=a[e][0]||a[e-1][1]<=a[e][1])&&null!==a[e-1][2]&&(null===a[e][2]&&null!==a[e-1][2]?a[e-1][2]=null:null!=a[e-1][2]?2==+o.mergeType&&a[e-1][0]===a[e][0]?a[e-1][2]=a[e][2]:a[e-1][2]+=a[e][2]:a[e-1][2]=a[e][2]),a.splice(e,1),e=a.length);return a.length?a:null}e.rApply=function(e,r,n){let t,o=0,i=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof e)throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(r&&!Array.isArray(r))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);if(n&&"function"!=typeof n)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof n}, equal to: ${JSON.stringify(n,null,4)}`);if(!r||!r.filter((e=>e)).length)return e;t=Array.isArray(r)&&Number.isInteger(r[0])&&Number.isInteger(r[1])?[Array.from(r)]:Array.from(r);const a=t.length;let l=0;t.filter((e=>e)).forEach(((e,r)=>{if(n&&(o=Math.floor(l/a*10),o!==i&&(i=o,n(o))),!Array.isArray(e))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${r}th element not an array: ${JSON.stringify(e,null,4)}, which is ${typeof e}`);if(!Number.isInteger(e[0])){if(!Number.isInteger(+e[0])||+e[0]<0)throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${r}th element, array ${JSON.stringify(e,null,0)}. Its first element is not an integer, string index, but ${typeof e[0]}, equal to: ${JSON.stringify(e[0],null,4)}.`);t[r][0]=+t[r][0]}if(!Number.isInteger(e[1])){if(!Number.isInteger(+e[1])||+e[1]<0)throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${r}th element, array ${JSON.stringify(e,null,0)}. Its second element is not an integer, string index, but ${typeof e[1]}, equal to: ${JSON.stringify(e[1],null,4)}.`);t[r][1]=+t[r][1]}l+=1}));const g=s(t,{progressFn:e=>{n&&(o=10+Math.floor(e/10),o!==i&&(i=o,n(o)))}}),u=Array.isArray(g)?g.length:0;if(u>0){const r=e.slice(g[u-1][1]);e=g.reduce(((r,t,s,a)=>{n&&(o=20+Math.floor(s/u*80),o!==i&&(i=o,n(o)));return r+e.slice(0===s?0:a[s-1][1],a[s][0])+(a[s][2]||"")}),""),e+=r}return e},e.version="5.0.11",Object.defineProperty(e,"__esModule",{value:!0})}));
