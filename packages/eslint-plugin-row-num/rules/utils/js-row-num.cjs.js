/**
 * js-row-num
 * Update all row numbers in all console.logs in JS code
 * Version: 2.5.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/js-row-num
 */

"use strict";const rawNbsp=" ";function push(e,t=!0,r){if(!(r.trim().length||e.length&&"\n"!==r&&r!==rawNbsp&&" "===(t?e[e.length-1]:e[0])||e.length&&"\n"===(t?e[e.length-1]:e[0])&&"\n"!==r&&r!==rawNbsp))if(t){if(("\n"===r||r===rawNbsp)&&e.length&&" "===e[e.length-1])for(;e.length&&" "===e[e.length-1];)e.pop();e.push(r===rawNbsp||"\n"===r?r:" ")}else{if(("\n"===r||r===rawNbsp)&&e.length&&" "===e[0])for(;e.length&&" "===e[0];)e.shift();e.unshift(r===rawNbsp||"\n"===r?r:" ")}}function collapseLeadingWhitespace(e,t){if("string"==typeof e&&e.length){let r,n,o=!1;if(e.includes("\r\n")&&(o=!0),r=t&&"number"==typeof t?t:1,""===e.trim()){const t=[];for(n=r,Array.from(e).forEach(e=>{("\n"!==e||n)&&("\n"===e&&n--,push(t,!0,e))});t.length>1&&" "===t[t.length-1];)t.pop();return t.join("")}const i=[];if(n=r,""===e[0].trim())for(let t=0,r=e.length;t<r&&0===e[t].trim().length;t++)("\n"!==e[t]||n)&&("\n"===e[t]&&n--,push(i,!0,e[t]));const s=[];if(n=r,""===e.slice(-1).trim())for(let t=e.length;t--&&0===e[t].trim().length;)("\n"!==e[t]||n)&&("\n"===e[t]&&n--,push(s,!1,e[t]));return o?`${i.join("")}${e.trim()}${s.join("")}`.replace(/\n/g,"\r\n"):i.join("")+e.trim()+s.join("")}return e}var isNaturalNumberString=function(e,t){if("string"!=typeof e)return!1;if(t&&"includeZero"in t){if("boolean"!=typeof t.includeZero)throw new TypeError(String(t.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(t.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(e)}return/^[1-9]\d*(\.0+)?$/.test(e)},isNaturalNumber=function(e,t){if(t){if("object"!=typeof t)throw new TypeError(String(t)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in t){if("boolean"!=typeof t.includeZero)throw new TypeError(String(t.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(t.includeZero&&0===e)return!0}}return Number.isSafeInteger(e)&&e>=1};const isArr=Array.isArray;function rangesSort(e,t){if(!isArr(e))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(0===e.length)return e;const r=Object.assign({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null},t);let n,o;if(r.strictlyTwoElementsInRangeArrays&&!e.every((e,t)=>2===e.length||(n=t,o=e.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${n}th range (${JSON.stringify(e[n],null,4)}) has not two but ${o} elements!`);if(!e.every((e,t)=>!(!isNaturalNumber(e[0],{includeZero:!0})||!isNaturalNumber(e[1],{includeZero:!0}))||(n=t,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${n}th range (${JSON.stringify(e[n],null,4)}) does not consist of only natural numbers!`);const i=e.length*e.length;let s=0;return Array.from(e).sort((e,t)=>(r.progressFn&&(s++,r.progressFn(Math.floor(100*s/i))),e[0]===t[0]?e[1]<t[1]?-1:e[1]>t[1]?1:0:e[0]<t[0]?-1:1))}var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}var lodash_clonedeep=createCommonjsModule((function(e,t){var r=200,n="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",s="[object Boolean]",a="[object Date]",u="[object Function]",l="[object GeneratorFunction]",c="[object Map]",f="[object Number]",p="[object Object]",g="[object RegExp]",h="[object Set]",y="[object String]",d="[object Symbol]",m="[object ArrayBuffer]",b="[object DataView]",_="[object Float32Array]",v="[object Float64Array]",w="[object Int8Array]",T="[object Int16Array]",j="[object Int32Array]",O="[object Uint8Array]",N="[object Uint8ClampedArray]",S="[object Uint16Array]",$="[object Uint32Array]",A=/\w*$/,R=/^\[object .+?Constructor\]$/,I=/^(?:0|[1-9]\d*)$/,E={};E[i]=E["[object Array]"]=E[m]=E[b]=E[s]=E[a]=E[_]=E[v]=E[w]=E[T]=E[j]=E[c]=E[f]=E[p]=E[g]=E[h]=E[y]=E[d]=E[O]=E[N]=E[S]=E[$]=!0,E["[object Error]"]=E[u]=E["[object WeakMap]"]=!1;var x="object"==typeof commonjsGlobal&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal,W="object"==typeof self&&self&&self.Object===Object&&self,H=x||W||Function("return this")(),Z=t&&!t.nodeType&&t,F=Z&&e&&!e.nodeType&&e,D=F&&F.exports===Z;function C(e,t){return e.set(t[0],t[1]),e}function J(e,t){return e.add(t),e}function P(e,t,r,n){var o=-1,i=e?e.length:0;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r}function L(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function k(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function M(e,t){return function(r){return e(t(r))}}function B(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}var q,G=Array.prototype,K=Function.prototype,z=Object.prototype,U=H["__core-js_shared__"],V=(q=/[^.]+$/.exec(U&&U.keys&&U.keys.IE_PROTO||""))?"Symbol(src)_1."+q:"",Q=K.toString,X=z.hasOwnProperty,Y=z.toString,ee=RegExp("^"+Q.call(X).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),te=D?H.Buffer:void 0,re=H.Symbol,ne=H.Uint8Array,oe=M(Object.getPrototypeOf,Object),ie=Object.create,se=z.propertyIsEnumerable,ae=G.splice,ue=Object.getOwnPropertySymbols,le=te?te.isBuffer:void 0,ce=M(Object.keys,Object),fe=Fe(H,"DataView"),pe=Fe(H,"Map"),ge=Fe(H,"Promise"),he=Fe(H,"Set"),ye=Fe(H,"WeakMap"),de=Fe(Object,"create"),me=Le(fe),be=Le(pe),_e=Le(ge),ve=Le(he),we=Le(ye),Te=re?re.prototype:void 0,je=Te?Te.valueOf:void 0;function Oe(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ne(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Se(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function $e(e){this.__data__=new Ne(e)}function Ae(e,t){var r=Me(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&Be(e)}(e)&&X.call(e,"callee")&&(!se.call(e,"callee")||Y.call(e)==i)}(e)?function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],n=r.length,o=!!n;for(var s in e)!t&&!X.call(e,s)||o&&("length"==s||Je(s,n))||r.push(s);return r}function Re(e,t,r){var n=e[t];X.call(e,t)&&ke(n,r)&&(void 0!==r||t in e)||(e[t]=r)}function Ie(e,t){for(var r=e.length;r--;)if(ke(e[r][0],t))return r;return-1}function Ee(e,t,r,n,o,R,I){var x;if(n&&(x=R?n(e,o,R,I):n(e)),void 0!==x)return x;if(!Ke(e))return e;var W=Me(e);if(W){if(x=function(e){var t=e.length,r=e.constructor(t);t&&"string"==typeof e[0]&&X.call(e,"index")&&(r.index=e.index,r.input=e.input);return r}(e),!t)return function(e,t){var r=-1,n=e.length;t||(t=Array(n));for(;++r<n;)t[r]=e[r];return t}(e,x)}else{var H=Ce(e),Z=H==u||H==l;if(qe(e))return function(e,t){if(t)return e.slice();var r=new e.constructor(e.length);return e.copy(r),r}(e,t);if(H==p||H==i||Z&&!R){if(L(e))return R?e:{};if(x=function(e){return"function"!=typeof e.constructor||Pe(e)?{}:(t=oe(e),Ke(t)?ie(t):{});var t}(Z?{}:e),!t)return function(e,t){return He(e,De(e),t)}(e,function(e,t){return e&&He(t,ze(t),e)}(x,e))}else{if(!E[H])return R?e:{};x=function(e,t,r,n){var o=e.constructor;switch(t){case m:return We(e);case s:case a:return new o(+e);case b:return function(e,t){var r=t?We(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,n);case _:case v:case w:case T:case j:case O:case N:case S:case $:return function(e,t){var r=t?We(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}(e,n);case c:return function(e,t,r){return P(t?r(k(e),!0):k(e),C,new e.constructor)}(e,n,r);case f:case y:return new o(e);case g:return(l=new(u=e).constructor(u.source,A.exec(u))).lastIndex=u.lastIndex,l;case h:return function(e,t,r){return P(t?r(B(e),!0):B(e),J,new e.constructor)}(e,n,r);case d:return i=e,je?Object(je.call(i)):{}}var i;var u,l}(e,H,Ee,t)}}I||(I=new $e);var F=I.get(e);if(F)return F;if(I.set(e,x),!W)var D=r?function(e){return function(e,t,r){var n=t(e);return Me(e)?n:function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}(n,r(e))}(e,ze,De)}(e):ze(e);return function(e,t){for(var r=-1,n=e?e.length:0;++r<n&&!1!==t(e[r],r,e););}(D||e,(function(o,i){D&&(o=e[i=o]),Re(x,i,Ee(o,t,r,n,i,e,I))})),x}function xe(e){return!(!Ke(e)||(t=e,V&&V in t))&&(Ge(e)||L(e)?ee:R).test(Le(e));var t}function We(e){var t=new e.constructor(e.byteLength);return new ne(t).set(new ne(e)),t}function He(e,t,r,n){r||(r={});for(var o=-1,i=t.length;++o<i;){var s=t[o],a=n?n(r[s],e[s],s,r,e):void 0;Re(r,s,void 0===a?e[s]:a)}return r}function Ze(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function Fe(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return xe(r)?r:void 0}Oe.prototype.clear=function(){this.__data__=de?de(null):{}},Oe.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},Oe.prototype.get=function(e){var t=this.__data__;if(de){var r=t[e];return r===n?void 0:r}return X.call(t,e)?t[e]:void 0},Oe.prototype.has=function(e){var t=this.__data__;return de?void 0!==t[e]:X.call(t,e)},Oe.prototype.set=function(e,t){return this.__data__[e]=de&&void 0===t?n:t,this},Ne.prototype.clear=function(){this.__data__=[]},Ne.prototype.delete=function(e){var t=this.__data__,r=Ie(t,e);return!(r<0)&&(r==t.length-1?t.pop():ae.call(t,r,1),!0)},Ne.prototype.get=function(e){var t=this.__data__,r=Ie(t,e);return r<0?void 0:t[r][1]},Ne.prototype.has=function(e){return Ie(this.__data__,e)>-1},Ne.prototype.set=function(e,t){var r=this.__data__,n=Ie(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},Se.prototype.clear=function(){this.__data__={hash:new Oe,map:new(pe||Ne),string:new Oe}},Se.prototype.delete=function(e){return Ze(this,e).delete(e)},Se.prototype.get=function(e){return Ze(this,e).get(e)},Se.prototype.has=function(e){return Ze(this,e).has(e)},Se.prototype.set=function(e,t){return Ze(this,e).set(e,t),this},$e.prototype.clear=function(){this.__data__=new Ne},$e.prototype.delete=function(e){return this.__data__.delete(e)},$e.prototype.get=function(e){return this.__data__.get(e)},$e.prototype.has=function(e){return this.__data__.has(e)},$e.prototype.set=function(e,t){var n=this.__data__;if(n instanceof Ne){var o=n.__data__;if(!pe||o.length<r-1)return o.push([e,t]),this;n=this.__data__=new Se(o)}return n.set(e,t),this};var De=ue?M(ue,Object):function(){return[]},Ce=function(e){return Y.call(e)};function Je(e,t){return!!(t=null==t?o:t)&&("number"==typeof e||I.test(e))&&e>-1&&e%1==0&&e<t}function Pe(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||z)}function Le(e){if(null!=e){try{return Q.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function ke(e,t){return e===t||e!=e&&t!=t}(fe&&Ce(new fe(new ArrayBuffer(1)))!=b||pe&&Ce(new pe)!=c||ge&&"[object Promise]"!=Ce(ge.resolve())||he&&Ce(new he)!=h||ye&&"[object WeakMap]"!=Ce(new ye))&&(Ce=function(e){var t=Y.call(e),r=t==p?e.constructor:void 0,n=r?Le(r):void 0;if(n)switch(n){case me:return b;case be:return c;case _e:return"[object Promise]";case ve:return h;case we:return"[object WeakMap]"}return t});var Me=Array.isArray;function Be(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=o}(e.length)&&!Ge(e)}var qe=le||function(){return!1};function Ge(e){var t=Ke(e)?Y.call(e):"";return t==u||t==l}function Ke(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function ze(e){return Be(e)?Ae(e):function(e){if(!Pe(e))return ce(e);var t=[];for(var r in Object(e))X.call(e,r)&&"constructor"!=r&&t.push(r);return t}(e)}e.exports=function(e){return Ee(e,!0,!0)}})),objectTag="[object Object]";function isHostObject(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function overArg(e,t){return function(r){return e(t(r))}}var funcProto=Function.prototype,objectProto=Object.prototype,funcToString=funcProto.toString,hasOwnProperty=objectProto.hasOwnProperty,objectCtorString=funcToString.call(Object),objectToString=objectProto.toString,getPrototype=overArg(Object.getPrototypeOf,Object);function isObjectLike(e){return!!e&&"object"==typeof e}function isPlainObject(e){if(!isObjectLike(e)||objectToString.call(e)!=objectTag||isHostObject(e))return!1;var t=getPrototype(e);if(null===t)return!0;var r=hasOwnProperty.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&funcToString.call(r)==objectCtorString}var lodash_isplainobject=isPlainObject;function mergeRanges(e,t){function r(e){return"string"==typeof e}if(!Array.isArray(e))return e;const n={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let o;if(t){if(!lodash_isplainobject(t))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(t,null,4)} (type ${typeof t})`);if((o=Object.assign({},n,t)).progressFn&&lodash_isplainobject(o.progressFn)&&!Object.keys(o.progressFn).length)o.progressFn=null;else if(o.progressFn&&"function"!=typeof o.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof o.progressFn}", equal to ${JSON.stringify(o.progressFn,null,4)}`);if(o.mergeType&&1!==o.mergeType&&2!==o.mergeType)if(r(o.mergeType)&&"1"===o.mergeType.trim())o.mergeType=1;else{if(!r(o.mergeType)||"2"!==o.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof o.mergeType}", equal to ${JSON.stringify(o.mergeType,null,4)}`);o.mergeType=2}if("boolean"!=typeof o.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof o.joinRangesThatTouchEdges}", equal to ${JSON.stringify(o.joinRangesThatTouchEdges,null,4)}`)}else o=lodash_clonedeep(n);const i=lodash_clonedeep(e).filter(e=>void 0!==e[2]||e[0]!==e[1]);let s,a,u;const l=(s=o.progressFn?rangesSort(i,{progressFn:e=>{(u=Math.floor(e/5))!==a&&(a=u,o.progressFn(u))}}):rangesSort(i)).length-1;for(let e=l;e>0;e--)o.progressFn&&(u=Math.floor(78*(1-e/l))+21)!==a&&u>a&&(a=u,o.progressFn(u)),(s[e][0]<=s[e-1][0]||!o.joinRangesThatTouchEdges&&s[e][0]<s[e-1][1]||o.joinRangesThatTouchEdges&&s[e][0]<=s[e-1][1])&&(s[e-1][0]=Math.min(s[e][0],s[e-1][0]),s[e-1][1]=Math.max(s[e][1],s[e-1][1]),void 0!==s[e][2]&&(s[e-1][0]>=s[e][0]||s[e-1][1]<=s[e][1])&&null!==s[e-1][2]&&(null===s[e][2]&&null!==s[e-1][2]?s[e-1][2]=null:void 0!==s[e-1][2]?2===o.mergeType&&s[e-1][0]===s[e][0]?s[e-1][2]=s[e][2]:s[e-1][2]+=s[e][2]:s[e-1][2]=s[e][2]),s.splice(e,1),e=s.length);return s}function existy(e){return null!=e}const isArr$1=Array.isArray,isNum=Number.isInteger;function isStr(e){return"string"==typeof e}function prepNumStr(e){return isNaturalNumberString(e,{includeZero:!0})?parseInt(e,10):e}class Ranges{constructor(e){const t=Object.assign({},{limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1},e);if(t.mergeType&&1!==t.mergeType&&2!==t.mergeType)if(isStr(t.mergeType)&&"1"===t.mergeType.trim())t.mergeType=1;else{if(!isStr(t.mergeType)||"2"!==t.mergeType.trim())throw new Error(`ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof t.mergeType}", equal to ${JSON.stringify(t.mergeType,null,4)}`);t.mergeType=2}this.opts=t}add(e,t,r,...n){if(n.length>0)throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_03] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: ${JSON.stringify(n,null,4)}`);if(!existy(e)&&!existy(t))return;if(existy(e)&&!existy(t)){if(isArr$1(e)){if(e.length){if(e.some(e=>isArr$1(e)))return void e.forEach(e=>{isArr$1(e)&&this.add(...e)});e.length>1&&isNum(prepNumStr(e[0]))&&isNum(prepNumStr(e[1]))&&this.add(...e)}return}throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set (${JSON.stringify(e,null,0)}) but second-one, "to" is not (${JSON.stringify(t,null,0)})`)}if(!existy(e)&&existy(t))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set (${JSON.stringify(t,null,0)}) but first-one, "from" is not (${JSON.stringify(e,null,0)})`);const o=isNaturalNumberString(e,{includeZero:!0})?parseInt(e,10):e,i=isNaturalNumberString(t,{includeZero:!0})?parseInt(t,10):t;if(isNum(r)&&(r=String(r)),!isNaturalNumber(o,{includeZero:!0})||!isNaturalNumber(i,{includeZero:!0}))throw isNaturalNumber(o,{includeZero:!0})?new TypeError(`ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it's of a type "${typeof i}" equal to: ${JSON.stringify(i,null,4)}`):new TypeError(`ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it's of a type "${typeof o}" equal to: ${JSON.stringify(o,null,4)}`);if(existy(r)&&!isStr(r)&&!isNum(r))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ${typeof r}, equal to:\n${JSON.stringify(r,null,4)}`);if(existy(this.slices)&&isArr$1(this.last())&&o===this.last()[1]){if(this.last()[1]=i,this.last()[2],null!==this.last()[2]&&existy(r)){let e=!(existy(this.last()[2])&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?r:this.last()[2]+r;this.opts.limitToBeAddedWhitespace&&(e=collapseLeadingWhitespace(e,this.opts.limitLinebreaksCount)),isStr(e)&&!e.length||(this.last()[2]=e)}}else{this.slices||(this.slices=[]);const e=void 0===r||isStr(r)&&!r.length?[o,i]:[o,i,this.opts.limitToBeAddedWhitespace?collapseLeadingWhitespace(r,this.opts.limitLinebreaksCount):r];this.slices.push(e)}}push(e,t,r,...n){this.add(e,t,r,...n)}current(){return null!=this.slices?(this.slices=mergeRanges(this.slices,{mergeType:this.opts.mergeType}),this.opts.limitToBeAddedWhitespace?this.slices.map(e=>existy(e[2])?[e[0],e[1],collapseLeadingWhitespace(e[2],this.opts.limitLinebreaksCount)]:e):this.slices):null}wipe(){this.slices=void 0}replace(e){if(isArr$1(e)&&e.length){if(!isArr$1(e[0])||!isNum(e[0][0]))throw new Error(`ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ${JSON.stringify(e[0],null,4)} should be an array and its first element should be an integer, a string index.`);this.slices=lodash_clonedeep(e)}else this.slices=void 0}last(){return void 0!==this.slices&&Array.isArray(this.slices)?this.slices[this.slices.length-1]:null}}const isArr$2=Array.isArray;function existy$1(e){return null!=e}function isStr$1(e){return"string"==typeof e}function rangesApply(e,t,r){let n=0,o=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if(!isStr$1(e))throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(null===t)return e;if(!isArr$2(t))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(r&&"function"!=typeof r)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);isArr$2(t)&&(isNaturalNumber(t[0],{includeZero:!0})||isNaturalNumberString(t[0],{includeZero:!0}))&&(isNaturalNumber(t[1],{includeZero:!0})||isNaturalNumberString(t[1],{includeZero:!0}))&&(t=[t]);const i=t.length;let s=0;t.forEach((e,a)=>{if(r&&(n=Math.floor(s/i*10))!==o&&(o=n,r(n)),!isArr$2(e))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${a}th element not an array: ${JSON.stringify(e,null,4)}, which is ${typeof e}`);if(!isNaturalNumber(e[0],{includeZero:!0})){if(!isNaturalNumberString(e[0],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${a}th element, array [${e[0]},${e[1]}]. That array has first element not an integer, but ${typeof e[0]}, equal to: ${JSON.stringify(e[0],null,4)}. Computer doesn't like this.`);t[a][0]=Number.parseInt(t[a][0],10)}if(!isNaturalNumber(e[1],{includeZero:!0})){if(!isNaturalNumberString(e[1],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${a}th element, array [${e[0]},${e[1]}]. That array has second element not an integer, but ${typeof e[1]}, equal to: ${JSON.stringify(e[1],null,4)}. Computer doesn't like this.`);t[a][1]=Number.parseInt(t[a][1],10)}s++});const a=mergeRanges(t,{progressFn:e=>{r&&(n=10+Math.floor(e/10))!==o&&(o=n,r(n))}}),u=a.length;if(u>0){const t=e.slice(a[u-1][1]);e=a.reduce((t,i,s,a)=>{r&&(n=20+Math.floor(s/u*80))!==o&&(o=n,r(n));const l=0===s?0:a[s-1][1],c=a[s][0];return t+e.slice(l,c)+(existy$1(a[s][2])?a[s][2]:"")},""),e+=t}return e}var BACKSLASH="\\";function fixRowNums(e,t){if("string"!=typeof e||0===e.length)return e;function r(e){return/[0-9]/.test(e)}var n=Object.assign({},{padStart:3,overrideRowNum:null,returnRangesOnly:!1,triggerKeywords:["console.log"],extractedLogContentsWereGiven:!1},t);(!n.padStart||"number"!=typeof n.padStart||"number"==typeof n.padStart&&n.padStart<0)&&(n.padStart=0);var o,i,s=new Ranges,a=e.length,u=null,l=null,c=null,f=1,p=!1,g=null;for(n.padStart&&a>45e3&&(n.padStart=4),o=0;o<a;o++){if(null===n.overrideRowNum&&("\n"===e[o]||"\r"===e[o]&&"\n"!==e[o+1])&&f++,Number.isInteger(g)&&!r(e[o])&&o>g&&(s.push(g,o,n.padStart?String(null!==n.overrideRowNum?n.overrideRowNum:f).padStart(n.padStart,"0"):"".concat(null!==n.overrideRowNum?n.overrideRowNum:f)),g=null,p=!0),u&&Number.isInteger(u.start)&&u.start<o&&!p&&null===g&&r(e[o])&&(g=o),u&&Number.isInteger(u.start)&&u.start<o&&!p&&(i=e[o],/[A-Za-z]/.test(i))&&("n"!==e[o]||e[o-1]!==BACKSLASH)){if("\\"===e[o-1]&&"u"===e[o]&&"0"===e[o+1]&&"0"===e[o+2]&&"1"===e[o+3]&&("b"===e[o+4]||"B"===e[o+5])&&"["===e[o+5]){var h=void 0;r(e[o+6])?h=o+6:"$"===e[o+6]&&"{"===e[o+7]&&r(e[o+8])&&(h=o+8);var y=void 0;if(h)for(var d=h;d<a;d++)if(!r(e[d])){y=d;break}var m=void 0;if("m"===e[y]?m=y:"}"===e[y]&&"m"===e[y+1]&&(m=y+1),!m){p=!0;continue}if("$"===e[m+1]&&"{"===e[m+2]&&"`"===e[m+3]){o=m+3;continue}}p=!0}null!==u&&u.start<o&&u.type===e[o]&&(u=null,l=null,c=null,g=null,p=!1),null===u&&(n.extractedLogContentsWereGiven||l&&l<o&&c&&c<o)&&e[o].trim().length&&('"'===e[o]||"'"===e[o]||"`"===e[o]?((u={}).start=o,u.type=e[o],p=!1):n.extractedLogContentsWereGiven&&r(e[o])&&null===g?g=o:e[o].trim().length&&"/"!==e[o]&&!n.extractedLogContentsWereGiven&&(l=null,c=null,g=null)),!c&&e[o].trim().length&&l&&l<=o&&("("===e[o]?c=o:(l=null,g=null));var b=void 0;n&&n.triggerKeywords&&Array.isArray(n.triggerKeywords)&&n.triggerKeywords.some((function(t){if(e.startsWith(t,o))return b=t,!0}))&&(l=o+b.length,o=o+b.length-1)}return u=null,l=null,c=null,f=1,p=void 0,g=null,f=1,n.returnRangesOnly?s.current():s.current()?rangesApply(e,s.current()):e}module.exports=fixRowNums;