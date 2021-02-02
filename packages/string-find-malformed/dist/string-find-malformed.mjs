/**
 * string-find-malformed
 * Search for a malformed string. Think of Levenshtein distance but in search.
 * Version: 2.0.2
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/string-find-malformed/
 */

import{right as t}from"string-left-right";const e="2.0.2";function n(t){return"string"==typeof t}const r={stringOffset:0,maxDistance:1,ignoreWhitespace:!0};function i(e,i,o,s){if(!n(e))throw new TypeError(`string-find-malformed: [THROW_ID_01] the first input argument, string where to look for, must be a string! Currently it's equal to: ${e} (type: ${typeof e})`);if(!e.length)return;if(!n(i))throw new TypeError(`string-find-malformed: [THROW_ID_02] the second input argument, string we should find, must be a string! Currently it's equal to: ${i} (type: ${typeof i})`);if(!i.length)return;if("function"!=typeof o)throw new TypeError(`string-find-malformed: [THROW_ID_03] the third input argument, a callback function, must be a function! Currently it's equal to: ${o} (type: ${typeof o})`);if(s&&(!(f=s)||"object"!=typeof f||Array.isArray(f)))throw new TypeError(`string-find-malformed: [THROW_ID_04] the fourth input argument, an Optional Options Object, must be a plain object! Currently it's equal to: ${s} (type: ${typeof s})`);var f;const g={...r,...s};if("string"==typeof g.stringOffset&&/^\d*$/.test(g.stringOffset))g.stringOffset=Number(g.stringOffset);else if(!Number.isInteger(g.stringOffset)||g.stringOffset<0)throw new TypeError(`[THROW_ID_05] opts.stringOffset must be a natural number or zero! Currently it's: ${g.stringOffset}`);const a=e.length,p=Math.min(i.length,(g.maxDistance||0)+1);let h=[];const c=g.maxDistance||1;let l;for(let n=0;n<a;n++){if(g.ignoreWhitespace&&!e[n].trim())continue;for(let r=0,i=h.length;r<i;r++)l=!1,Array.isArray(h[r].pendingToCheck)&&h[r].pendingToCheck.length&&e[n]===h[r].pendingToCheck[0]?(l=!0,h[r].pendingToCheck.shift()):Array.isArray(h[r].pendingToCheck)&&h[r].pendingToCheck.length&&e[n]===h[r].pendingToCheck[1]?(l=!0,h[r].pendingToCheck.shift(),h[r].pendingToCheck.shift(),h[r].patienceLeft-=1):(h[r].patienceLeft-=1,e[t(e,n)]!==h[r].pendingToCheck[0]&&(h[r].pendingToCheck.shift(),e[n]===h[r].pendingToCheck[0]&&h[r].pendingToCheck.shift()));h=h.filter((t=>t.patienceLeft>=0));const r=h.filter((t=>0===t.pendingToCheck.length)).map((t=>t.startsAt));if(Array.isArray(r)&&r.length){const t=Math.min(...r),s=n+(l?1:0);e.slice(t,s)!==i&&o({idxFrom:t+(g.stringOffset||0),idxTo:s+(g.stringOffset||0)}),h=h.filter((t=>t.pendingToCheck.length))}for(let t=0;t<p;t++)if(e[n]===i[t]){const e={startsAt:n,patienceLeft:c-t,pendingToCheck:Array.from(i.slice(t+1))};h.push(e);break}}}export{r as defaults,i as findMalformed,e as version};
