/**
 * string-collapse-white-space
 * Efficient collapsing of white space with optional outer- and/or line-trimming and HTML tag recognition
 * Version: 5.2.8
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-collapse-white-space
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).stringCollapseWhiteSpace=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var r="[object Object]";var n,o,i=Function.prototype,a=Object.prototype,s=i.toString,u=a.hasOwnProperty,c=s.call(Object),l=a.toString,f=(n=Object.getPrototypeOf,o=Object,function(t){return n(o(t))});var h=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||l.call(t)!=r||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=f(t);if(null===e)return!0;var n=u.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&s.call(n)==c},g=function(t,e){if("string"!=typeof t)return!1;if(e&&"includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(t)}return/^[1-9]\d*(\.0+)?$/.test(t)},p=function(t,e){if(e){if("object"!=typeof e)throw new TypeError(String(e)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1};
/*!
   * is-natural-number-string | MIT (c) Shinnosuke Watanabe
   * https://github.com/shinnn/is-natural-number-string
  */const y=Array.isArray;function b(t,e){if(!y(t))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(0===t.length)return t;const r=Object.assign({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null},e);let n,o;if(r.strictlyTwoElementsInRangeArrays&&!t.every((t,e)=>2===t.length||(n=e,o=t.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${n}th range (${JSON.stringify(t[n],null,4)}) has not two but ${o} elements!`);if(!t.every((t,e)=>!(!p(t[0],{includeZero:!0})||!p(t[1],{includeZero:!0}))||(n=e,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${n}th range (${JSON.stringify(t[n],null,4)}) does not consist of only natural numbers!`);const i=t.length*t.length;let a=0;return Array.from(t).sort((t,e)=>(r.progressFn&&(a++,r.progressFn(Math.floor(100*a/i))),t[0]===e[0]?t[1]<e[1]?-1:t[1]>e[1]?1:0:t[0]<e[0]?-1:1))}var m="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var d=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t,e){var r=200,n="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",a="[object Boolean]",s="[object Date]",u="[object Function]",c="[object GeneratorFunction]",l="[object Map]",f="[object Number]",h="[object Object]",g="[object RegExp]",p="[object Set]",y="[object String]",b="[object Symbol]",d="[object ArrayBuffer]",_="[object DataView]",w="[object Float32Array]",v="[object Float64Array]",O="[object Int8Array]",T="[object Int16Array]",j="[object Int32Array]",$="[object Uint8Array]",E="[object Uint8ClampedArray]",C="[object Uint16Array]",A="[object Uint32Array]",I=/\w*$/,S=/^\[object .+?Constructor\]$/,M=/^(?:0|[1-9]\d*)$/,R={};R[i]=R["[object Array]"]=R[d]=R[_]=R[a]=R[s]=R[w]=R[v]=R[O]=R[T]=R[j]=R[l]=R[f]=R[h]=R[g]=R[p]=R[y]=R[b]=R[$]=R[E]=R[C]=R[A]=!0,R["[object Error]"]=R[u]=R["[object WeakMap]"]=!1;var L="object"==typeof m&&m&&m.Object===Object&&m,B="object"==typeof self&&self&&self.Object===Object&&self,W=L||B||Function("return this")(),D=e&&!e.nodeType&&e,x=D&&t&&!t.nodeType&&t,k=x&&x.exports===D;function H(t,e){return t.set(e[0],e[1]),t}function N(t,e){return t.add(e),t}function q(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function F(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function Z(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function J(t,e){return function(r){return t(e(r))}}function P(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var Q,U=Array.prototype,z=Function.prototype,V=Object.prototype,G=W["__core-js_shared__"],K=(Q=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+Q:"",X=z.toString,Y=V.hasOwnProperty,tt=V.toString,et=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=k?W.Buffer:void 0,nt=W.Symbol,ot=W.Uint8Array,it=J(Object.getPrototypeOf,Object),at=Object.create,st=V.propertyIsEnumerable,ut=U.splice,ct=Object.getOwnPropertySymbols,lt=rt?rt.isBuffer:void 0,ft=J(Object.keys,Object),ht=xt(W,"DataView"),gt=xt(W,"Map"),pt=xt(W,"Promise"),yt=xt(W,"Set"),bt=xt(W,"WeakMap"),mt=xt(Object,"create"),dt=Ft(ht),_t=Ft(gt),wt=Ft(pt),vt=Ft(yt),Ot=Ft(bt),Tt=nt?nt.prototype:void 0,jt=Tt?Tt.valueOf:void 0;function $t(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Ct(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function At(t){this.__data__=new Et(t)}function It(t,e){var r=Jt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Pt(t)}(t)&&Y.call(t,"callee")&&(!st.call(t,"callee")||tt.call(t)==i)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var a in t)!e&&!Y.call(t,a)||o&&("length"==a||Nt(a,n))||r.push(a);return r}function St(t,e,r){var n=t[e];Y.call(t,e)&&Zt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Mt(t,e){for(var r=t.length;r--;)if(Zt(t[r][0],e))return r;return-1}function Rt(t,e,r,n,o,m,S){var M;if(n&&(M=m?n(t,o,m,S):n(t)),void 0!==M)return M;if(!zt(t))return t;var L=Jt(t);if(L){if(M=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Y.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,M)}else{var B=Ht(t),W=B==u||B==c;if(Qt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(B==h||B==i||W&&!m){if(F(t))return m?t:{};if(M=function(t){return"function"!=typeof t.constructor||qt(t)?{}:(e=it(t),zt(e)?at(e):{});var e}(W?{}:t),!e)return function(t,e){return Wt(t,kt(t),e)}(t,function(t,e){return t&&Wt(e,Vt(e),t)}(M,t))}else{if(!R[B])return m?t:{};M=function(t,e,r,n){var o=t.constructor;switch(e){case d:return Bt(t);case a:case s:return new o(+t);case _:return function(t,e){var r=e?Bt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case w:case v:case O:case T:case j:case $:case E:case C:case A:return function(t,e){var r=e?Bt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return function(t,e,r){return q(e?r(Z(t),!0):Z(t),H,new t.constructor)}(t,n,r);case f:case y:return new o(t);case g:return function(t){var e=new t.constructor(t.source,I.exec(t));return e.lastIndex=t.lastIndex,e}(t);case p:return function(t,e,r){return q(e?r(P(t),!0):P(t),N,new t.constructor)}(t,n,r);case b:return i=t,jt?Object(jt.call(i)):{}}var i}(t,B,Rt,e)}}S||(S=new At);var D=S.get(t);if(D)return D;if(S.set(t,M),!L)var x=r?function(t){return function(t,e,r){var n=e(t);return Jt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Vt,kt)}(t):Vt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(x||t,(function(o,i){x&&(o=t[i=o]),St(M,i,Rt(o,e,r,n,i,t,S))})),M}function Lt(t){return!(!zt(t)||function(t){return!!K&&K in t}(t))&&(Ut(t)||F(t)?et:S).test(Ft(t))}function Bt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Wt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],s=n?n(r[a],t[a],a,r,t):void 0;St(r,a,void 0===s?t[a]:s)}return r}function Dt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function xt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Lt(r)?r:void 0}$t.prototype.clear=function(){this.__data__=mt?mt(null):{}},$t.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},$t.prototype.get=function(t){var e=this.__data__;if(mt){var r=e[t];return r===n?void 0:r}return Y.call(e,t)?e[t]:void 0},$t.prototype.has=function(t){var e=this.__data__;return mt?void 0!==e[t]:Y.call(e,t)},$t.prototype.set=function(t,e){return this.__data__[t]=mt&&void 0===e?n:e,this},Et.prototype.clear=function(){this.__data__=[]},Et.prototype.delete=function(t){var e=this.__data__,r=Mt(e,t);return!(r<0)&&(r==e.length-1?e.pop():ut.call(e,r,1),!0)},Et.prototype.get=function(t){var e=this.__data__,r=Mt(e,t);return r<0?void 0:e[r][1]},Et.prototype.has=function(t){return Mt(this.__data__,t)>-1},Et.prototype.set=function(t,e){var r=this.__data__,n=Mt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Ct.prototype.clear=function(){this.__data__={hash:new $t,map:new(gt||Et),string:new $t}},Ct.prototype.delete=function(t){return Dt(this,t).delete(t)},Ct.prototype.get=function(t){return Dt(this,t).get(t)},Ct.prototype.has=function(t){return Dt(this,t).has(t)},Ct.prototype.set=function(t,e){return Dt(this,t).set(t,e),this},At.prototype.clear=function(){this.__data__=new Et},At.prototype.delete=function(t){return this.__data__.delete(t)},At.prototype.get=function(t){return this.__data__.get(t)},At.prototype.has=function(t){return this.__data__.has(t)},At.prototype.set=function(t,e){var n=this.__data__;if(n instanceof Et){var o=n.__data__;if(!gt||o.length<r-1)return o.push([t,e]),this;n=this.__data__=new Ct(o)}return n.set(t,e),this};var kt=ct?J(ct,Object):function(){return[]},Ht=function(t){return tt.call(t)};function Nt(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||M.test(t))&&t>-1&&t%1==0&&t<e}function qt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||V)}function Ft(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Zt(t,e){return t===e||t!=t&&e!=e}(ht&&Ht(new ht(new ArrayBuffer(1)))!=_||gt&&Ht(new gt)!=l||pt&&"[object Promise]"!=Ht(pt.resolve())||yt&&Ht(new yt)!=p||bt&&"[object WeakMap]"!=Ht(new bt))&&(Ht=function(t){var e=tt.call(t),r=e==h?t.constructor:void 0,n=r?Ft(r):void 0;if(n)switch(n){case dt:return _;case _t:return l;case wt:return"[object Promise]";case vt:return p;case Ot:return"[object WeakMap]"}return e});var Jt=Array.isArray;function Pt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!Ut(t)}var Qt=lt||function(){return!1};function Ut(t){var e=zt(t)?tt.call(t):"";return e==u||e==c}function zt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Vt(t){return Pt(t)?It(t):function(t){if(!qt(t))return ft(t);var e=[];for(var r in Object(t))Y.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return Rt(t,!0,!0)}}));function _(t,e){function r(t){return"string"==typeof t}if(!Array.isArray(t))return t;const n={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let o;if(e){if(!h(e))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(e,null,4)} (type ${typeof e})`);if(o=Object.assign({},n,e),o.progressFn&&h(o.progressFn)&&!Object.keys(o.progressFn).length)o.progressFn=null;else if(o.progressFn&&"function"!=typeof o.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof o.progressFn}", equal to ${JSON.stringify(o.progressFn,null,4)}`);if(o.mergeType&&1!==o.mergeType&&2!==o.mergeType)if(r(o.mergeType)&&"1"===o.mergeType.trim())o.mergeType=1;else{if(!r(o.mergeType)||"2"!==o.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof o.mergeType}", equal to ${JSON.stringify(o.mergeType,null,4)}`);o.mergeType=2}if("boolean"!=typeof o.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof o.joinRangesThatTouchEdges}", equal to ${JSON.stringify(o.joinRangesThatTouchEdges,null,4)}`)}else o=d(n);const i=d(t).filter(t=>void 0!==t[2]||t[0]!==t[1]);let a,s,u;a=o.progressFn?b(i,{progressFn:t=>{u=Math.floor(t/5),u!==s&&(s=u,o.progressFn(u))}}):b(i);const c=a.length-1;for(let t=c;t>0;t--)o.progressFn&&(u=Math.floor(78*(1-t/c))+21,u!==s&&u>s&&(s=u,o.progressFn(u))),(a[t][0]<=a[t-1][0]||!o.joinRangesThatTouchEdges&&a[t][0]<a[t-1][1]||o.joinRangesThatTouchEdges&&a[t][0]<=a[t-1][1])&&(a[t-1][0]=Math.min(a[t][0],a[t-1][0]),a[t-1][1]=Math.max(a[t][1],a[t-1][1]),void 0!==a[t][2]&&(a[t-1][0]>=a[t][0]||a[t-1][1]<=a[t][1])&&null!==a[t-1][2]&&(null===a[t][2]&&null!==a[t-1][2]?a[t-1][2]=null:void 0!==a[t-1][2]?2===o.mergeType&&a[t-1][0]===a[t][0]?a[t-1][2]=a[t][2]:a[t-1][2]+=a[t][2]:a[t-1][2]=a[t][2]),a.splice(t,1),t=a.length);return a}const w=Array.isArray;function v(t,e,r){let n=0,o=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof t)throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(null===e)return t;if(!w(e))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(r&&"function"!=typeof r)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);w(e)&&(Number.isInteger(e[0],{includeZero:!0})||g(e[0],{includeZero:!0}))&&(Number.isInteger(e[1],{includeZero:!0})||g(e[1],{includeZero:!0}))&&(e=[e]);const i=e.length;let a=0;e.forEach((t,s)=>{if(r&&(n=Math.floor(a/i*10),n!==o&&(o=n,r(n))),!w(t))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${s}th element not an array: ${JSON.stringify(t,null,4)}, which is ${typeof t}`);if(!Number.isInteger(t[0],{includeZero:!0})){if(!g(t[0],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${s}th element, array [${t[0]},${t[1]}]. That array has first element not an integer, but ${typeof t[0]}, equal to: ${JSON.stringify(t[0],null,4)}. Computer doesn't like this.`);e[s][0]=Number.parseInt(e[s][0],10)}if(!Number.isInteger(t[1],{includeZero:!0})){if(!g(t[1],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${s}th element, array [${t[0]},${t[1]}]. That array has second element not an integer, but ${typeof t[1]}, equal to: ${JSON.stringify(t[1],null,4)}. Computer doesn't like this.`);e[s][1]=Number.parseInt(e[s][1],10)}a++});const s=_(e,{progressFn:t=>{r&&(n=10+Math.floor(t/10),n!==o&&(o=n,r(n)))}}),u=s.length;if(u>0){const e=t.slice(s[u-1][1]);t=s.reduce((e,i,a,s)=>{r&&(n=20+Math.floor(a/u*80),n!==o&&(o=n,r(n)));const c=0===a?0:s[a-1][1],l=s[a][0];return e+t.slice(c,l)+(function(t){return null!=t}(s[a][2])?s[a][2]:"")},""),t+=e}return t}function O(t){if("string"==typeof t)return 0!==t.length&&(t.charCodeAt(0)>=55296&&t.charCodeAt(0)<=56319);if(void 0===t)return!1;throw new TypeError(`string-character-is-astral-surrogate/isHighSurrogate(): the input is not string but ${typeof t}`)}function T(t){if("string"==typeof t)return 0!==t.length&&(t.charCodeAt(0)>=56320&&t.charCodeAt(0)<=57343);if(void 0===t)return!1;throw new TypeError(`string-character-is-astral-surrogate/isLowSurrogate(): the input is not string but ${typeof t}`)}function j(t){return null!=t}function $(t){return"string"==typeof t&&(t.charCodeAt(0)>=55296&&t.charCodeAt(0)<=57343)}function E(t,e,r,n,o){const i="function"==typeof r?r():r;if(e>=t.length&&o&&"EOL"===i)return i;if(!(e<=t.length)){if(n.relaxedApi)return!1;throw new Error(`string-match-left-right/marchForward(): [THROW_ID_102] second argument, fromIndexInclusive is ${e} beyond the input string length, ${t.length}.`)}{let a=o?1:r.length;for(let o=e,i=t.length;o<i;o++){let e=t[o];if(O(t[o])&&T(t[o+1])&&(e=t[o]+t[o+1]),T(t[o])&&O(t[o-1])&&(e=t[o-1]+t[o]),n.trimBeforeMatching&&""===t[o].trim())continue;if(!n.i&&n.trimCharsBeforeMatching.includes(e)||n.i&&n.trimCharsBeforeMatching.map(t=>t.toLowerCase()).includes(e.toLowerCase())){2===e.length&&(o+=1);continue}let i=r[r.length-a];if(O(i)&&j(r[r.length-a+1])&&T(r[r.length-a+1])&&(i=r[r.length-a]+r[r.length-a+1]),!(!n.i&&e===i||n.i&&e.toLowerCase()===i.toLowerCase()))return!1;if(a-=e.length,a<1){let n=o-r.length+e.length;return n>=0&&T(t[n])&&j(t[n-1])&&O(t[n-1])&&(n-=1),n>=0?n:0}2===e.length&&O(t[o])&&(o+=1)}if(a>0)return!(!o||"EOL"!==i)}}function C(t,e,r,n,o){const i="function"==typeof r?r():r;if(e<0&&o&&"EOL"===i)return i;if(e>=t.length){if(n.relaxedApi)return!1;throw new Error(`string-match-left-right/marchBackward(): [THROW_ID_203] second argument, starting index, should not be beyond the last character of the input string! Currently the first argument's last character's index is ${t.length} but the second argument is beyond it:\n${JSON.stringify(e,null,4)}`)}let a=o?1:r.length;for(let i=e+1;i--;){if(n.trimBeforeMatching&&""===t[i].trim()){if(0===i&&o&&"EOL"===r)return!0;continue}let e=t[i];if(T(t[i])&&O(t[i-1])?e=t[i-1]+t[i]:O(t[i])&&T(t[i+1])&&(e=t[i]+t[i+1]),!n.i&&n.trimCharsBeforeMatching.includes(e)||n.i&&n.trimCharsBeforeMatching.map(t=>t.toLowerCase()).includes(e.toLowerCase())){if(2===e.length&&(i-=1),o&&"EOL"===r&&0===i)return!0;continue}let s=r[a-1];if(T(s)&&(s=`${r[a-2]}${r[a-1]}`,a-=1,i-=1),!(!n.i&&e===s||n.i&&e.toLowerCase()===s.toLowerCase()))return!1;if(a-=1,a<1)return i>=0?i:0}return a>0?!(!o||"EOL"!==i):void 0}function A(t,e,r,n){return function(t,e,r,n,o){if("object"==typeof o&&null!==o&&Object.prototype.hasOwnProperty.call(o,"trimBeforeMatching")&&"boolean"!=typeof o.trimBeforeMatching)throw new Error(`string-match-left-right/${t}(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!${Array.isArray(o.trimBeforeMatching)?" Did you mean to use opts.trimCharsBeforeMatching?":""}`);const i=Object.assign({},{i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],relaxedApi:!1},o);var a;let s,u,c,l;if(i.trimCharsBeforeMatching="string"==typeof(a=i.trimCharsBeforeMatching)?a.length>0?[a]:[]:a,i.trimCharsBeforeMatching=i.trimCharsBeforeMatching.map(t=>"string"==typeof t?t:String(t)),i.trimCharsBeforeMatching.some((t,e)=>t.length>1&&!$(t)&&(s=e,u=t,!0)))throw new Error(`string-match-left-right/${t}(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ${s} is longer than 1 character, ${u.length} (equals to ${u}). Please split it into separate characters and put into array as separate elements.`);if("string"!=typeof e){if(i.relaxedApi)return!1;throw new Error(`string-match-left-right/${t}(): [THROW_ID_01] the first argument should be a string. Currently it's of a type: ${typeof e}, equal to:\n${JSON.stringify(e,null,4)}`)}if(0===e.length){if(i.relaxedApi)return!1;throw new Error(`string-match-left-right/${t}(): [THROW_ID_02] the first argument should be a non-empty string. Currently it's empty!`)}if(!(Number.isInteger(r)&&r>=0)){if(i.relaxedApi)return!1;throw new Error(`string-match-left-right/${t}(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ${typeof r}, equal to:\n${JSON.stringify(r,null,4)}`)}if("string"==typeof n)c=[n];else if(Array.isArray(n))c=n;else if(j(n)){if("function"!=typeof n)throw new Error(`string-match-left-right/${t}(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ${typeof n}, equal to:\n${JSON.stringify(n,null,4)}`);c=[],c.push(n)}else c=n;if(j(o)&&"object"!=typeof o)throw new Error(`string-match-left-right/${t}(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type "${typeof o}", and equal to:\n${JSON.stringify(o,null,4)}`);if(!j(c)||!Array.isArray(c)||Array.isArray(c)&&!c.length||Array.isArray(c)&&1===c.length&&"string"==typeof c[0]&&0===c[0].trim().length){if("function"==typeof i.cb){let n,o=r;if("matchRight"===t&&O(e[r])&&T(e[r+1])&&(o+=1),"matchLeftIncl"!==t&&"matchRight"!==t||(o+=1),t.startsWith("matchLeft"))for(let t=o;t--;){if(T(e[t])&&O(e[t-1]))continue;let r=e[t];if(O(e[t])&&T(e[t+1])&&(r=e[t]+e[t+1]),(!i.trimBeforeMatching||i.trimBeforeMatching&&void 0!==r&&""!==r.trim())&&(0===i.trimCharsBeforeMatching.length||void 0!==r&&!i.trimCharsBeforeMatching.includes(r))){n=t;break}T(e[t-1])&&O(e[t-2])&&(t-=1)}else if(t.startsWith("matchRight"))for(let t=o;t<e.length;t++){let r=e[t];if(O(e[t])&&T(e[t+1])&&(r=e[t]+e[t+1]),(!i.trimBeforeMatching||i.trimBeforeMatching&&""!==r.trim())&&(0===i.trimCharsBeforeMatching.length||!i.trimCharsBeforeMatching.includes(r))){n=t;break}O(e[t])&&T(e[t+1])&&(t+=1)}if(void 0===n)return!1;let a=e[n];O(e[n])&&T(e[n+1])&&(a=e[n]+e[n+1]),T(e[n])&&O(e[n-1])&&(a=e[n-1]+e[n],n-=1);let s,u=n+1;return O(e[n])&&T(e[n+1])&&(u+=1),u&&u>0&&(s=e.slice(0,u)),t.startsWith("matchLeft")?i.cb(a,s,n):(n&&n>0&&(s=e.slice(n)),i.cb(a,s,n))}let n="";throw j(o)||(n=" More so, the whole options object, the fourth input argument, is missing!"),new Error(`string-match-left-right/${t}(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!${n}`)}if(t.startsWith("matchLeft")){for(let n=0,o=c.length;n<o;n++){l="function"==typeof c[n];const o=c[n];let a,s,u="",f=r;"matchLeft"===t&&($(e[n-1])&&$(e[n-2])?f-=2:f-=1);const h=C(e,f,o,i,l);if(h&&l&&"function"==typeof o&&"EOL"===o())return!(!o()||i.cb&&!i.cb(a,u,s))&&o();if(j(h)&&h>0&&(s=h-1,a=e[s],u=e.slice(0,h)),T(e[s])&&j(e[s-1])&&O(e[s-1])&&(s-=1,a=e[s-1]+e[s]),O(e[s])&&j(e[s+1])&&T(e[s+1])&&(a=e[s]+e[s+1],u=e.slice(0,s+2)),!1!==h&&(!i.cb||i.cb(a,u,s)))return o}return!1}for(let n=0,o=c.length;n<o;n++){l="function"==typeof c[n];const o=c[n];let a=r+("matchRight"===t?1:0);"matchRight"===t&&O(e[a-1])&&T(e[a])&&(a+=1);const s=E(e,a,o,i,l);if(s&&l&&"function"==typeof o&&"EOL"===o()){let t,e,r;return!(!o()||i.cb&&!i.cb(t,e,r))&&o()}let u,f,h;if(j(s)&&j(e[s+o.length-1])&&(u=s+o.length,f=e[u],O(e[u])&&T(e[u+1])&&(f=e[u]+e[u+1])),j(u)&&u>=0&&(h=e.slice(u)),!1!==s&&(!i.cb||i.cb(f,h,u)))return o}return!1}("matchLeftIncl",t,e,r,n)}return function(r,n){function o(t,e,r){return t.charCodeAt(0)>=e&&t.charCodeAt(0)<=r}function i(t){return"string"==typeof t&&("<"===t||""===t.trim())}if("string"!=typeof r)throw new Error("string-collapse-white-space/collapse(): [THROW_ID_01] The input is not string but ".concat(t(r),", equal to: ").concat(JSON.stringify(r,null,4)));if(null!=n&&!h(n))throw new Error("string-collapse-white-space/collapse(): [THROW_ID_02] The opts is not a plain object but ".concat(t(n),", equal to:\n").concat(JSON.stringify(n,null,4)));if(0===r.length)return"";var a,s=Number.isInteger,u=[],c=Object.assign({},{trimStart:!0,trimEnd:!0,trimLines:!1,trimnbsp:!1,recogniseHTML:!0,removeEmptyLines:!1,returnRangesOnly:!1,limitConsecutiveEmptyLinesTo:0},n);c.recogniseHTML&&(a=[]);var l,f,g=null,p=null,y=null,b=!1,m=!1,d=null,w=!1,O=!1,T=!1,j=!1;c.recogniseHTML&&(l={equalDoubleQuoteCombo:0,equalOnly:0,doubleQuoteOnly:0,spacesBetweenLetterChunks:0,linebreaks:0});for(var $=0,E=r.length;E--;){if("\n"===r[E]||"\r"===r[E]&&"\n"!==r[E+1]?$++:r[E].trim().length&&($=0)," "===r[E]?null===g&&(g=E):null!==g&&(E+1!==g&&u.push([E+1,g]),g=null),""===r[E].trim()&&(!c.trimnbsp&&" "!==r[E]||c.trimnbsp)){if(null===p&&(p=E),"\n"!==r[E]&&"\r"!==r[E]&&null===y&&(y=E+1),"\n"!==r[E]&&"\r"!==r[E]||(null!==y&&(c.trimLines&&u.push([E+1,y]),y=null),"\n"!==r[E-1]&&"\r"!==r[E-1]&&(y=E,b=!0)),"\n"===r[E]||"\r"===r[E]&&"\n"!==r[E+1]){var C=E+1,I=void 0;s(f)&&(I=f+1,c.removeEmptyLines&&void 0!==f&&""===r.slice(C,I).trim()&&$>c.limitConsecutiveEmptyLinesTo+1&&u.push([E+1,f+1])),f=E}}else null!==p&&(E+1!==p+1&&p===r.length-1&&c.trimEnd&&u.push([E+1,p+1]),p=null),null!==y&&(b&&c.trimLines&&(b=!1,y!==E+1&&u.push([E+1,y])),y=null);if(0===E&&(null!==p&&c.trimStart?u.push([0,p+1]):null!==g&&u.push([E+1,g+1])),c.recogniseHTML)if(""===r[E].trim()){if(m&&!O&&(O=!0),w&&!d&&(d=E+1),w&&void 0!==r[E-1]&&""!==r[E-1].trim()&&"<"!==r[E-1]&&"/"!==r[E-1]&&(w=!1,m=!1,a=[]),!T&&!j&&""===r[E].trim()&&"<"!==r[E-1]&&(void 0===r[E+1]||""!==r[E+1].trim()&&"/"!==r[E+1].trim()))if(void 0===r[E-1]||""!==r[E-1].trim()&&"<"!==r[E-1]&&"/"!==r[E-1])l.spacesBetweenLetterChunks+=1;else for(var S=E-1;S--;)if(""!==r[S].trim()){"<"===r[S]?T=!0:"/"!==r[S]&&(l.spacesBetweenLetterChunks+=E-S);break}}else"="===r[E]?(l.equalOnly+=1,'"'===r[E+1]&&(l.equalDoubleQuoteCombo+=1)):'"'===r[E]&&(l.doubleQuoteOnly+=1),j&&(j=!1),null!==d&&(a.push([E+1,d]),d=null),">"===r[E]?(l={equalDoubleQuoteCombo:0,equalOnly:0,doubleQuoteOnly:0,spacesBetweenLetterChunks:0,linebreaks:0},j=!0,m?a=[]:(m=!0,void 0===r[E-1]||""!==r[E-1].trim()||d||(d=E)),O||(O=!0)):"<"===r[E]?(m=!1,T&&(T=!1),l.spacesBetweenLetterChunks>0&&0===l.equalDoubleQuoteCombo&&(w=!1,a=[]),w&&(a.length&&a.forEach((function(t){var r=e(t,2),n=r[0],o=r[1];return u.push([n,o])})),w=!1),l={equalDoubleQuoteCombo:0,equalOnly:0,doubleQuoteOnly:0,spacesBetweenLetterChunks:0,linebreaks:0}):m&&"/"===r[E]?d=E:m&&!w&&(O&&o(r[E],97,122)?(O=!1,o(r[E],97,110)?("a"===r[E]&&("e"===r[E-1]&&A(r,E,["area","textarea"],{cb:i,i:!0})||"t"===r[E-1]&&A(r,E,["data","meta"],{cb:i,i:!0})||i(r[E-1]))||"b"===r[E]&&(A(r,E,["rb","sub"],{cb:i,i:!0})||i(r[E-1]))||"c"===r[E]&&A(r,E,"rtc",{cb:i,i:!0})||"d"===r[E]&&("a"===r[E-1]&&A(r,E,["head","thead"],{cb:i,i:!0})||A(r,E,["kbd","dd","embed","legend","td"],{cb:i,i:!0}))||"e"===r[E]&&(A(r,E,"source",{cb:i,i:!0})||"d"===r[E-1]&&A(r,E,["aside","code"],{cb:i,i:!0})||"l"===r[E-1]&&A(r,E,["table","article","title","style"],{cb:i,i:!0})||"m"===r[E-1]&&A(r,E,["iframe","time"],{cb:i,i:!0})||"r"===r[E-1]&&A(r,E,["pre","figure","picture"],{cb:i,i:!0})||"t"===r[E-1]&&A(r,E,["template","cite","blockquote"],{cb:i,i:!0})||A(r,E,"base",{cb:i,i:!0})||i(r[E-1]))||"g"===r[E]&&A(r,E,["img","strong","dialog","svg"],{cb:i,i:!0})||"h"===r[E]&&A(r,E,["th","math"],{cb:i,i:!0})||"i"===r[E]&&(A(r,E,["bdi","li"],{cb:i,i:!0})||i(r[E-1]))||"k"===r[E]&&A(r,E,["track","link","mark"],{cb:i,i:!0})||"l"===r[E]&&A(r,E,["html","ol","ul","dl","label","del","small","col"],{cb:i,i:!0})||"m"===r[E]&&A(r,E,["param","em","menuitem","form"],{cb:i,i:!0})||"n"===r[E]&&("o"===r[E-1]&&A(r,E,["section","caption","figcaption","option","button"],{cb:i,i:!0})||A(r,E,["span","keygen","dfn","main"],{cb:i,i:!0})))&&(w=!0):("o"===r[E]&&A(r,E,["bdo","video","audio"],{cb:i,i:!0})||"p"===r[E]&&(i(r[E-1])||"u"===r[E-1]&&A(r,E,["hgroup","colgroup","optgroup","sup"],{cb:i,i:!0})||A(r,E,["map","samp","rp"],{cb:i,i:!0}))||"q"===r[E]&&i(r[E-1])||"r"===r[E]&&("e"===r[E-1]&&A(r,E,["header","meter","footer"],{cb:i,i:!0})||A(r,E,["var","br","abbr","wbr","hr","tr"],{cb:i,i:!0}))||"s"===r[E]&&("s"===r[E-1]&&A(r,E,["address","progress"],{cb:i,i:!0})||A(r,E,["canvas","details","ins"],{cb:i,i:!0})||i(r[E-1]))||"t"===r[E]&&("c"===r[E-1]&&A(r,E,["object","select"],{cb:i,i:!0})||"o"===r[E-1]&&A(r,E,["slot","tfoot"],{cb:i,i:!0})||"p"===r[E-1]&&A(r,E,["script","noscript"],{cb:i,i:!0})||"u"===r[E-1]&&A(r,E,["input","output"],{cb:i,i:!0})||A(r,E,["fieldset","rt","datalist","dt"],{cb:i,i:!0}))||"u"===r[E]&&(i(r[E-1])||A(r,E,"menu",{cb:i,i:!0}))||"v"===r[E]&&A(r,E,["nav","div"],{cb:i,i:!0})||"y"===r[E]&&A(r,E,["ruby","body","tbody","summary"],{cb:i,i:!0}))&&(w=!0)):O&&o(r[E],49,54)?(O=!1,"h"!==r[E-1]||"<"!==r[E-2]&&""!==r[E-2].trim()||(w=!0)):"="!==r[E]&&'"'!==r[E]||(O=!1))}return c.returnRangesOnly?_(u):u.length?v(r,u):r}}));
