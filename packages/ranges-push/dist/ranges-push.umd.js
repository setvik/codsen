/**
 * ranges-push
 * Manage the array of ranges referencing the index ranges within the string
 * Version: 3.6.13
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ranges-push
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).rangesPush=t()}(this,(function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}const n=" ";function o(e,t=!0,r){if(!(r.trim().length||e.length&&"\n"!==r&&r!==n&&" "===(t?e[e.length-1]:e[0])||e.length&&"\n"===(t?e[e.length-1]:e[0])&&"\n"!==r&&r!==n))if(t){if(("\n"===r||r===n)&&e.length&&" "===e[e.length-1])for(;e.length&&" "===e[e.length-1];)e.pop();e.push(r===n||"\n"===r?r:" ")}else{if(("\n"===r||r===n)&&e.length&&" "===e[0])for(;e.length&&" "===e[0];)e.shift();e.unshift(r===n||"\n"===r?r:" ")}}function i(e,t){if("string"==typeof e&&e.length){let r,n,i=!1;if(e.includes("\r\n")&&(i=!0),r=t&&"number"==typeof t?t:1,""===e.trim()){const t=[];for(n=r,Array.from(e).forEach(e=>{("\n"!==e||n)&&("\n"===e&&n--,o(t,!0,e))});t.length>1&&" "===t[t.length-1];)t.pop();return t.join("")}const s=[];if(n=r,""===e[0].trim())for(let t=0,r=e.length;t<r&&0===e[t].trim().length;t++)("\n"!==e[t]||n)&&("\n"===e[t]&&n--,o(s,!0,e[t]));const a=[];if(n=r,""===e.slice(-1).trim())for(let t=e.length;t--&&0===e[t].trim().length;)("\n"!==e[t]||n)&&("\n"===e[t]&&n--,o(a,!1,e[t]));return i?`${s.join("")}${e.trim()}${a.join("")}`.replace(/\n/g,"\r\n"):s.join("")+e.trim()+a.join("")}return e}
/*!
   * is-natural-number-string | MIT (c) Shinnosuke Watanabe
   * https://github.com/shinnn/is-natural-number-string
  */var s=function(e,t){if("string"!=typeof e)return!1;if(t&&"includeZero"in t){if("boolean"!=typeof t.includeZero)throw new TypeError(String(t.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(t.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(e)}return/^[1-9]\d*(\.0+)?$/.test(e)},a=function(e,t){if(t){if("object"!=typeof t)throw new TypeError(String(t)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in t){if("boolean"!=typeof t.includeZero)throw new TypeError(String(t.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(t.includeZero&&0===e)return!0}}return Number.isSafeInteger(e)&&e>=1};
/*!
   * is-natural-number.js | MIT (c) Shinnosuke Watanabe
   * https://github.com/shinnn/is-natural-number.js
  */const u=Array.isArray;function c(e,t){if(!u(e))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(0===e.length)return e;const r=Object.assign({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null},t);let n,o;if(r.strictlyTwoElementsInRangeArrays&&!e.every((e,t)=>2===e.length||(n=t,o=e.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${n}th range (${JSON.stringify(e[n],null,4)}) has not two but ${o} elements!`);if(!e.every((e,t)=>!(!a(e[0],{includeZero:!0})||!a(e[1],{includeZero:!0}))||(n=t,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${n}th range (${JSON.stringify(e[n],null,4)}) does not consist of only natural numbers!`);const i=e.length*e.length;let s=0;return Array.from(e).sort((e,t)=>(r.progressFn&&(s++,r.progressFn(Math.floor(100*s/i))),e[0]===t[0]?e[1]<t[1]?-1:e[1]>t[1]?1:0:e[0]<t[0]?-1:1))}var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var f=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){var r=200,n="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",s="[object Boolean]",a="[object Date]",u="[object Function]",c="[object GeneratorFunction]",f="[object Map]",p="[object Number]",h="[object Object]",g="[object RegExp]",y="[object Set]",d="[object String]",b="[object Symbol]",m="[object ArrayBuffer]",v="[object DataView]",_="[object Float32Array]",w="[object Float64Array]",T="[object Int8Array]",j="[object Int16Array]",O="[object Int32Array]",A="[object Uint8Array]",S="[object Uint8ClampedArray]",E="[object Uint16Array]",I="[object Uint32Array]",R=/\w*$/,$=/^\[object .+?Constructor\]$/,F=/^(?:0|[1-9]\d*)$/,x={};x[i]=x["[object Array]"]=x[m]=x[v]=x[s]=x[a]=x[_]=x[w]=x[T]=x[j]=x[O]=x[f]=x[p]=x[h]=x[g]=x[y]=x[d]=x[b]=x[A]=x[S]=x[E]=x[I]=!0,x["[object Error]"]=x[u]=x["[object WeakMap]"]=!1;var W="object"==typeof l&&l&&l.Object===Object&&l,N="object"==typeof self&&self&&self.Object===Object&&self,k=W||N||Function("return this")(),D=t&&!t.nodeType&&t,H=D&&e&&!e.nodeType&&e,J=H&&H.exports===D;function Z(e,t){return e.set(t[0],t[1]),e}function P(e,t){return e.add(t),e}function B(e,t,r,n){var o=-1,i=e?e.length:0;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r}function M(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function C(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function q(e,t){return function(r){return e(t(r))}}function L(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}var U,z=Array.prototype,V=Function.prototype,G=Object.prototype,K=k["__core-js_shared__"],Q=(U=/[^.]+$/.exec(K&&K.keys&&K.keys.IE_PROTO||""))?"Symbol(src)_1."+U:"",X=V.toString,Y=G.hasOwnProperty,ee=G.toString,te=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),re=J?k.Buffer:void 0,ne=k.Symbol,oe=k.Uint8Array,ie=q(Object.getPrototypeOf,Object),se=Object.create,ae=G.propertyIsEnumerable,ue=z.splice,ce=Object.getOwnPropertySymbols,le=re?re.isBuffer:void 0,fe=q(Object.keys,Object),pe=He(k,"DataView"),he=He(k,"Map"),ge=He(k,"Promise"),ye=He(k,"Set"),de=He(k,"WeakMap"),be=He(Object,"create"),me=Me(pe),ve=Me(he),_e=Me(ge),we=Me(ye),Te=Me(de),je=ne?ne.prototype:void 0,Oe=je?je.valueOf:void 0;function Ae(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Se(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ee(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ie(e){this.__data__=new Se(e)}function Re(e,t){var r=qe(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&Le(e)}(e)&&Y.call(e,"callee")&&(!ae.call(e,"callee")||ee.call(e)==i)}(e)?function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],n=r.length,o=!!n;for(var s in e)!t&&!Y.call(e,s)||o&&("length"==s||Pe(s,n))||r.push(s);return r}function $e(e,t,r){var n=e[t];Y.call(e,t)&&Ce(n,r)&&(void 0!==r||t in e)||(e[t]=r)}function Fe(e,t){for(var r=e.length;r--;)if(Ce(e[r][0],t))return r;return-1}function xe(e,t,r,n,o,l,$){var F;if(n&&(F=l?n(e,o,l,$):n(e)),void 0!==F)return F;if(!Ve(e))return e;var W=qe(e);if(W){if(F=function(e){var t=e.length,r=e.constructor(t);t&&"string"==typeof e[0]&&Y.call(e,"index")&&(r.index=e.index,r.input=e.input);return r}(e),!t)return function(e,t){var r=-1,n=e.length;t||(t=Array(n));for(;++r<n;)t[r]=e[r];return t}(e,F)}else{var N=Ze(e),k=N==u||N==c;if(Ue(e))return function(e,t){if(t)return e.slice();var r=new e.constructor(e.length);return e.copy(r),r}(e,t);if(N==h||N==i||k&&!l){if(M(e))return l?e:{};if(F=function(e){return"function"!=typeof e.constructor||Be(e)?{}:(t=ie(e),Ve(t)?se(t):{});var t}(k?{}:e),!t)return function(e,t){return ke(e,Je(e),t)}(e,function(e,t){return e&&ke(t,Ge(t),e)}(F,e))}else{if(!x[N])return l?e:{};F=function(e,t,r,n){var o=e.constructor;switch(t){case m:return Ne(e);case s:case a:return new o(+e);case v:return function(e,t){var r=t?Ne(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,n);case _:case w:case T:case j:case O:case A:case S:case E:case I:return function(e,t){var r=t?Ne(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}(e,n);case f:return function(e,t,r){return B(t?r(C(e),!0):C(e),Z,new e.constructor)}(e,n,r);case p:case d:return new o(e);case g:return function(e){var t=new e.constructor(e.source,R.exec(e));return t.lastIndex=e.lastIndex,t}(e);case y:return function(e,t,r){return B(t?r(L(e),!0):L(e),P,new e.constructor)}(e,n,r);case b:return i=e,Oe?Object(Oe.call(i)):{}}var i}(e,N,xe,t)}}$||($=new Ie);var D=$.get(e);if(D)return D;if($.set(e,F),!W)var H=r?function(e){return function(e,t,r){var n=t(e);return qe(e)?n:function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}(n,r(e))}(e,Ge,Je)}(e):Ge(e);return function(e,t){for(var r=-1,n=e?e.length:0;++r<n&&!1!==t(e[r],r,e););}(H||e,(function(o,i){H&&(o=e[i=o]),$e(F,i,xe(o,t,r,n,i,e,$))})),F}function We(e){return!(!Ve(e)||(t=e,Q&&Q in t))&&(ze(e)||M(e)?te:$).test(Me(e));var t}function Ne(e){var t=new e.constructor(e.byteLength);return new oe(t).set(new oe(e)),t}function ke(e,t,r,n){r||(r={});for(var o=-1,i=t.length;++o<i;){var s=t[o],a=n?n(r[s],e[s],s,r,e):void 0;$e(r,s,void 0===a?e[s]:a)}return r}function De(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function He(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return We(r)?r:void 0}Ae.prototype.clear=function(){this.__data__=be?be(null):{}},Ae.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},Ae.prototype.get=function(e){var t=this.__data__;if(be){var r=t[e];return r===n?void 0:r}return Y.call(t,e)?t[e]:void 0},Ae.prototype.has=function(e){var t=this.__data__;return be?void 0!==t[e]:Y.call(t,e)},Ae.prototype.set=function(e,t){return this.__data__[e]=be&&void 0===t?n:t,this},Se.prototype.clear=function(){this.__data__=[]},Se.prototype.delete=function(e){var t=this.__data__,r=Fe(t,e);return!(r<0)&&(r==t.length-1?t.pop():ue.call(t,r,1),!0)},Se.prototype.get=function(e){var t=this.__data__,r=Fe(t,e);return r<0?void 0:t[r][1]},Se.prototype.has=function(e){return Fe(this.__data__,e)>-1},Se.prototype.set=function(e,t){var r=this.__data__,n=Fe(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},Ee.prototype.clear=function(){this.__data__={hash:new Ae,map:new(he||Se),string:new Ae}},Ee.prototype.delete=function(e){return De(this,e).delete(e)},Ee.prototype.get=function(e){return De(this,e).get(e)},Ee.prototype.has=function(e){return De(this,e).has(e)},Ee.prototype.set=function(e,t){return De(this,e).set(e,t),this},Ie.prototype.clear=function(){this.__data__=new Se},Ie.prototype.delete=function(e){return this.__data__.delete(e)},Ie.prototype.get=function(e){return this.__data__.get(e)},Ie.prototype.has=function(e){return this.__data__.has(e)},Ie.prototype.set=function(e,t){var n=this.__data__;if(n instanceof Se){var o=n.__data__;if(!he||o.length<r-1)return o.push([e,t]),this;n=this.__data__=new Ee(o)}return n.set(e,t),this};var Je=ce?q(ce,Object):function(){return[]},Ze=function(e){return ee.call(e)};function Pe(e,t){return!!(t=null==t?o:t)&&("number"==typeof e||F.test(e))&&e>-1&&e%1==0&&e<t}function Be(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||G)}function Me(e){if(null!=e){try{return X.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Ce(e,t){return e===t||e!=e&&t!=t}(pe&&Ze(new pe(new ArrayBuffer(1)))!=v||he&&Ze(new he)!=f||ge&&"[object Promise]"!=Ze(ge.resolve())||ye&&Ze(new ye)!=y||de&&"[object WeakMap]"!=Ze(new de))&&(Ze=function(e){var t=ee.call(e),r=t==h?e.constructor:void 0,n=r?Me(r):void 0;if(n)switch(n){case me:return v;case ve:return f;case _e:return"[object Promise]";case we:return y;case Te:return"[object WeakMap]"}return t});var qe=Array.isArray;function Le(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=o}(e.length)&&!ze(e)}var Ue=le||function(){return!1};function ze(e){var t=Ve(e)?ee.call(e):"";return t==u||t==c}function Ve(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Ge(e){return Le(e)?Re(e):function(e){if(!Be(e))return fe(e);var t=[];for(var r in Object(e))Y.call(e,r)&&"constructor"!=r&&t.push(r);return t}(e)}e.exports=function(e){return xe(e,!0,!0)}})),p="[object Object]";var h,g,y=Function.prototype,d=Object.prototype,b=y.toString,m=d.hasOwnProperty,v=b.call(Object),_=d.toString,w=(h=Object.getPrototypeOf,g=Object,function(e){return h(g(e))});var T=function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||_.call(e)!=p||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e))return!1;var t=w(e);if(null===t)return!0;var r=m.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&b.call(r)==v};function j(e){return null!=e}var O=Array.isArray,A=Number.isInteger;function S(e){return"string"==typeof e}function E(e){return s(e,{includeZero:!0})?parseInt(e,10):e}return function(){function n(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var r=Object.assign({},{limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1},t);if(r.mergeType&&1!==r.mergeType&&2!==r.mergeType)if(S(r.mergeType)&&"1"===r.mergeType.trim())r.mergeType=1;else{if(!S(r.mergeType)||"2"!==r.mergeType.trim())throw new Error('ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'.concat(e(r.mergeType),'", equal to ').concat(JSON.stringify(r.mergeType,null,4)));r.mergeType=2}this.opts=r}var o,a,u;return o=n,(a=[{key:"add",value:function(t,n,o){for(var a=this,u=arguments.length,c=new Array(u>3?u-3:0),l=3;l<u;l++)c[l-3]=arguments[l];if(c.length>0)throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_03] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: ".concat(JSON.stringify(c,null,4)));if(j(t)||j(n)){if(j(t)&&!j(n)){if(O(t)){if(t.length){if(t.some((function(e){return O(e)})))return void t.forEach((function(e){O(e)&&a.add.apply(a,r(e))}));t.length>1&&A(E(t[0]))&&A(E(t[1]))&&this.add.apply(this,r(t))}return}throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set ('.concat(JSON.stringify(t,null,0),') but second-one, "to" is not (').concat(JSON.stringify(n,null,0),")"))}if(!j(t)&&j(n))throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set ('.concat(JSON.stringify(n,null,0),') but first-one, "from" is not (').concat(JSON.stringify(t,null,0),")"));var f=s(t,{includeZero:!0})?parseInt(t,10):t,p=s(n,{includeZero:!0})?parseInt(n,10):n;if(A(o)&&(o=String(o)),!A(f)||!A(p))throw A(f)&&f>=0?new TypeError('ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it\'s of a type "'.concat(e(p),'" equal to: ').concat(JSON.stringify(p,null,4))):new TypeError('ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it\'s of a type "'.concat(e(f),'" equal to: ').concat(JSON.stringify(f,null,4)));if(j(o)&&!S(o)&&!A(o))throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ".concat(e(o),", equal to:\n").concat(JSON.stringify(o,null,4)));if(j(this.slices)&&O(this.last())&&f===this.last()[1]){if(this.last()[1]=p,this.last()[2],null!==this.last()[2]&&j(o)){var h=!(j(this.last()[2])&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?o:this.last()[2]+o;this.opts.limitToBeAddedWhitespace&&(h=i(h,this.opts.limitLinebreaksCount)),S(h)&&!h.length||(this.last()[2]=h)}}else{this.slices||(this.slices=[]);var g=void 0===o||S(o)&&!o.length?[f,p]:[f,p,this.opts.limitToBeAddedWhitespace?i(o,this.opts.limitLinebreaksCount):o];this.slices.push(g)}}}},{key:"push",value:function(e,t,r){for(var n=arguments.length,o=new Array(n>3?n-3:0),i=3;i<n;i++)o[i-3]=arguments[i];this.add.apply(this,[e,t,r].concat(o))}},{key:"current",value:function(){var e=this;return null!=this.slices?(this.slices=function(e,t){function r(e){return"string"==typeof e}if(!Array.isArray(e))return e;const n={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let o;if(t){if(!T(t))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(t,null,4)} (type ${typeof t})`);if(o=Object.assign({},n,t),o.progressFn&&T(o.progressFn)&&!Object.keys(o.progressFn).length)o.progressFn=null;else if(o.progressFn&&"function"!=typeof o.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof o.progressFn}", equal to ${JSON.stringify(o.progressFn,null,4)}`);if(o.mergeType&&1!==o.mergeType&&2!==o.mergeType)if(r(o.mergeType)&&"1"===o.mergeType.trim())o.mergeType=1;else{if(!r(o.mergeType)||"2"!==o.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof o.mergeType}", equal to ${JSON.stringify(o.mergeType,null,4)}`);o.mergeType=2}if("boolean"!=typeof o.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof o.joinRangesThatTouchEdges}", equal to ${JSON.stringify(o.joinRangesThatTouchEdges,null,4)}`)}else o=f(n);const i=f(e).filter(e=>void 0!==e[2]||e[0]!==e[1]);let s,a,u;s=o.progressFn?c(i,{progressFn:e=>{u=Math.floor(e/5),u!==a&&(a=u,o.progressFn(u))}}):c(i);const l=s.length-1;for(let e=l;e>0;e--)o.progressFn&&(u=Math.floor(78*(1-e/l))+21,u!==a&&u>a&&(a=u,o.progressFn(u))),(s[e][0]<=s[e-1][0]||!o.joinRangesThatTouchEdges&&s[e][0]<s[e-1][1]||o.joinRangesThatTouchEdges&&s[e][0]<=s[e-1][1])&&(s[e-1][0]=Math.min(s[e][0],s[e-1][0]),s[e-1][1]=Math.max(s[e][1],s[e-1][1]),void 0!==s[e][2]&&(s[e-1][0]>=s[e][0]||s[e-1][1]<=s[e][1])&&null!==s[e-1][2]&&(null===s[e][2]&&null!==s[e-1][2]?s[e-1][2]=null:void 0!==s[e-1][2]?2===o.mergeType&&s[e-1][0]===s[e][0]?s[e-1][2]=s[e][2]:s[e-1][2]+=s[e][2]:s[e-1][2]=s[e][2]),s.splice(e,1),e=s.length);return s}(this.slices,{mergeType:this.opts.mergeType}),this.opts.limitToBeAddedWhitespace?this.slices.map((function(t){return j(t[2])?[t[0],t[1],i(t[2],e.opts.limitLinebreaksCount)]:t})):this.slices):null}},{key:"wipe",value:function(){this.slices=void 0}},{key:"replace",value:function(e){if(O(e)&&e.length){if(!O(e[0])||!A(e[0][0]))throw new Error("ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ".concat(JSON.stringify(e[0],null,4)," should be an array and its first element should be an integer, a string index."));this.slices=f(e)}else this.slices=void 0}},{key:"last",value:function(){return void 0!==this.slices&&Array.isArray(this.slices)?this.slices[this.slices.length-1]:null}}])&&t(o.prototype,a),u&&t(o,u),n}()}));
