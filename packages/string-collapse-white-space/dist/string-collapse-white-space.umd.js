/**
 * string-collapse-white-space
 * Replace chunks of whitespace with a single spaces
 * Version: 8.0.5
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/string-collapse-white-space/
 */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).stringCollapseWhiteSpace=r()}(this,(function(){"use strict";function t(r){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(r)}function r(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function e(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function n(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(r){e(t,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r))}))}return t}function i(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return a(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return a(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function s(t,r){if(!Array.isArray(t)||!t.length)return t;var e,n,i=o(o({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null}),r);if(i.strictlyTwoElementsInRangeArrays&&!t.filter((function(t){return t})).every((function(t,r){return 2===t.length||(e=r,n=t.length,!1)})))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ".concat(e,"th range (").concat(JSON.stringify(t[e],null,4),") has not two but ").concat(n," elements!"));if(!t.filter((function(t){return t})).every((function(t,r){return!(!Number.isInteger(t[0])||t[0]<0||!Number.isInteger(t[1])||t[1]<0)||(e=r,!1)})))throw new TypeError("ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ".concat(e,"th range (").concat(JSON.stringify(t[e],null,4),") does not consist of only natural numbers!"));var a=Math.pow(t.filter((function(t){return t})).length,2),s=0;return Array.from(t).filter((function(t){return t})).sort((function(t,r){return i.progressFn&&(s+=1,i.progressFn(Math.floor(100*s/a))),t[0]===r[0]?t[1]<r[1]?-1:t[1]>r[1]?1:0:t[0]<r[0]?-1:1}))}function u(r,e){function n(r){return r&&"object"===t(r)&&!Array.isArray(r)}if(!Array.isArray(r)||!r.length)return null;var a,u={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};if(e){if(!n(e))throw new Error("emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n".concat(JSON.stringify(e,null,4)," (type ").concat(t(e),")"));if((a=o(o({},u),e)).progressFn&&n(a.progressFn)&&!Object.keys(a.progressFn).length)a.progressFn=null;else if(a.progressFn&&"function"!=typeof a.progressFn)throw new Error('ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "'.concat(t(a.progressFn),'", equal to ').concat(JSON.stringify(a.progressFn,null,4)));if(a.mergeType&&1!=+a.mergeType&&2!=+a.mergeType)throw new Error('ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'.concat(t(a.mergeType),'", equal to ').concat(JSON.stringify(a.mergeType,null,4)));if("boolean"!=typeof a.joinRangesThatTouchEdges)throw new Error('ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "'.concat(t(a.joinRangesThatTouchEdges),'", equal to ').concat(JSON.stringify(a.joinRangesThatTouchEdges,null,4)))}else a=o({},u);for(var c,l,f,p=r.filter((function(t){return t})).map((function(t){return i(t)})).filter((function(t){return void 0!==t[2]||t[0]!==t[1]})),h=(c=a.progressFn?s(p,{progressFn:function(t){(f=Math.floor(t/5))!==l&&(l=f,a.progressFn(f))}}):s(p)).length-1,g=h;g>0;g--)a.progressFn&&(f=Math.floor(78*(1-g/h))+21)!==l&&f>l&&(l=f,a.progressFn(f)),(c[g][0]<=c[g-1][0]||!a.joinRangesThatTouchEdges&&c[g][0]<c[g-1][1]||a.joinRangesThatTouchEdges&&c[g][0]<=c[g-1][1])&&(c[g-1][0]=Math.min(c[g][0],c[g-1][0]),c[g-1][1]=Math.max(c[g][1],c[g-1][1]),void 0!==c[g][2]&&(c[g-1][0]>=c[g][0]||c[g-1][1]<=c[g][1])&&null!==c[g-1][2]&&(null===c[g][2]&&null!==c[g-1][2]?c[g-1][2]=null:void 0!==c[g-1][2]?2==+a.mergeType&&c[g-1][0]===c[g][0]?c[g-1][2]=c[g][2]:c[g-1][2]+=c[g][2]:c[g-1][2]=c[g][2]),c.splice(g,1),g=c.length);return c.length?c:null}function c(t){return null!=t}function l(t){return"string"==typeof t}function f(r,e,n){var o,i=0,a=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if(!l(r))throw new TypeError("ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ".concat(t(r),", equal to: ").concat(JSON.stringify(r,null,4)));if(e&&!Array.isArray(e))throw new TypeError("ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ".concat(t(e),", equal to: ").concat(JSON.stringify(e,null,4)));if(n&&"function"!=typeof n)throw new TypeError("ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ".concat(t(n),", equal to: ").concat(JSON.stringify(n,null,4)));if(!e||!e.filter((function(t){return t})).length)return r;var s=(o=Array.isArray(e)&&(Number.isInteger(e[0])&&e[0]>=0||/^\d*$/.test(e[0]))&&(Number.isInteger(e[1])&&e[1]>=0||/^\d*$/.test(e[1]))?[Array.from(e)]:Array.from(e)).length,f=0;o.filter((function(t){return t})).forEach((function(r,e){if(n&&(i=Math.floor(f/s*10))!==a&&(a=i,n(i)),!Array.isArray(r))throw new TypeError("ranges-apply: [THROW_ID_05] ranges array, second input arg., has ".concat(e,"th element not an array: ").concat(JSON.stringify(r,null,4),", which is ").concat(t(r)));if(!Number.isInteger(r[0])||r[0]<0){if(!/^\d*$/.test(r[0]))throw new TypeError("ranges-apply: [THROW_ID_06] ranges array, second input arg. has ".concat(e,"th element, array [").concat(r[0],",").concat(r[1],"]. That array has first element not an integer, but ").concat(t(r[0]),", equal to: ").concat(JSON.stringify(r[0],null,4),". Computer doesn't like this."));o[e][0]=Number.parseInt(o[e][0],10)}if(!Number.isInteger(r[1])){if(!/^\d*$/.test(r[1]))throw new TypeError("ranges-apply: [THROW_ID_07] ranges array, second input arg. has ".concat(e,"th element, array [").concat(r[0],",").concat(r[1],"]. That array has second element not an integer, but ").concat(t(r[1]),", equal to: ").concat(JSON.stringify(r[1],null,4),". Computer doesn't like this."));o[e][1]=Number.parseInt(o[e][1],10)}f+=1}));var p=u(o,{progressFn:function(t){n&&(i=10+Math.floor(t/10))!==a&&(a=i,n(i))}});if(!p)return r;var h=p.length;if(h>0){var g=r.slice(p[h-1][1]);r=p.reduce((function(t,e,o,s){n&&(i=20+Math.floor(o/h*80))!==a&&(a=i,n(i));var u=0===o?0:s[o-1][1],l=s[o][0];return t+r.slice(u,l)+(c(s[o][2])?s[o][2]:"")}),""),r+=g}return r}var p=" ";function h(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;function e(t){return Array.from(t).reverse().join("")}function n(t,r,e){var n=e?"\n":"\r",o=e?"\r":"\n";if(!t)return t;for(var i=0,a="",s=0,u=t.length;s<u;s++)(t[s]===n||t[s]===o&&t[s-1]!==n)&&i++,"\r\n".includes(t[s])||t[s]===p?t[s]===p?a+=t[s]:t[s]===n?i<=r&&(a+=t[s],t[s+1]===o&&(a+=t[s+1],s++)):t[s]===o&&(!t[s-1]||t[s-1]!==n)&&i<=r&&(a+=t[s]):t[s+1]||i||(a+=" ");return a}if("string"==typeof t&&t.length){var o=1;"number"==typeof+r&&Number.isInteger(+r)&&+r>=0&&(o=+r);var i="",a="";if(t.trim()){if(!t[0].trim())for(var s=0,u=t.length;s<u;s++)if(t[s].trim()){i=t.slice(0,s);break}}else i=t;if(t.trim()&&(""===t.slice(-1).trim()||t.slice(-1)===p))for(var c=t.length;c--;)if(t[c].trim()){a=t.slice(c+1);break}return"".concat(n(i,o,!1)).concat(t.trim()).concat(e(n(e(a),o,!0)))}return t}function g(t){return null!=t}function y(t){return Number.isInteger(t)&&t>=0}function d(t){return"string"==typeof t}function m(t){return/^\d*$/.test(t)?parseInt(t,10):t}var b=function(){function e(r){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e);var n=o(o({},{limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1}),r);if(n.mergeType&&1!==n.mergeType&&2!==n.mergeType)if(d(n.mergeType)&&"1"===n.mergeType.trim())n.mergeType=1;else{if(!d(n.mergeType)||"2"!==n.mergeType.trim())throw new Error('ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'.concat(t(n.mergeType),'", equal to ').concat(JSON.stringify(n.mergeType,null,4)));n.mergeType=2}this.opts=n}var n,a,s;return n=e,(a=[{key:"add",value:function(r,e,n){for(var o=this,a=arguments.length,s=new Array(a>3?a-3:0),u=3;u<a;u++)s[u-3]=arguments[u];if(s.length>0)throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_03] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: ".concat(JSON.stringify(s,null,4)));if(g(r)||g(e)){if(g(r)&&!g(e)){if(Array.isArray(r)){if(r.length){if(r.some((function(t){return Array.isArray(t)})))return void r.forEach((function(t){Array.isArray(t)&&o.add.apply(o,i(t))}));r.length>1&&y(m(r[0]))&&y(m(r[1]))&&this.add.apply(this,i(r))}return}throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set ('.concat(JSON.stringify(r,null,0),') but second-one, "to" is not (').concat(JSON.stringify(e,null,0),")"))}if(!g(r)&&g(e))throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set ('.concat(JSON.stringify(e,null,0),') but first-one, "from" is not (').concat(JSON.stringify(r,null,0),")"));var c=/^\d*$/.test(r)?parseInt(r,10):r,l=/^\d*$/.test(e)?parseInt(e,10):e;if(y(n)&&(n=String(n)),!y(c)||!y(l))throw y(c)&&c>=0?new TypeError('ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it\'s of a type "'.concat(t(l),'" equal to: ').concat(JSON.stringify(l,null,4))):new TypeError('ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it\'s of a type "'.concat(t(c),'" equal to: ').concat(JSON.stringify(c,null,4)));if(g(n)&&!d(n)&&!y(n))throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ".concat(t(n),", equal to:\n").concat(JSON.stringify(n,null,4)));if(g(this.ranges)&&Array.isArray(this.last())&&c===this.last()[1]){if(this.last()[1]=l,this.last()[2],null!==this.last()[2]&&g(n)){var f=!(g(this.last()[2])&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?n:this.last()[2]+n;this.opts.limitToBeAddedWhitespace&&(f=h(f,this.opts.limitLinebreaksCount)),d(f)&&!f.length||(this.last()[2]=f)}}else{this.ranges||(this.ranges=[]);var p=void 0===n||d(n)&&!n.length?[c,l]:[c,l,this.opts.limitToBeAddedWhitespace?h(n,this.opts.limitLinebreaksCount):n];this.ranges.push(p)}}}},{key:"push",value:function(t,r,e){for(var n=arguments.length,o=new Array(n>3?n-3:0),i=3;i<n;i++)o[i-3]=arguments[i];this.add.apply(this,[t,r,e].concat(o))}},{key:"current",value:function(){var t=this;return null!=this.ranges?(this.ranges=u(this.ranges,{mergeType:this.opts.mergeType}),this.ranges&&this.opts.limitToBeAddedWhitespace?this.ranges.map((function(r){return g(r[2])?[r[0],r[1],h(r[2],t.opts.limitLinebreaksCount)]:r})):this.ranges):null}},{key:"wipe",value:function(){this.ranges=void 0}},{key:"replace",value:function(t){if(Array.isArray(t)&&t.length){if(!Array.isArray(t[0])||!y(t[0][0]))throw new Error("ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ".concat(JSON.stringify(t[0],null,4)," should be an array and its first element should be an integer, a string index."));this.ranges=Array.from(t)}else this.ranges=void 0}},{key:"last",value:function(){return void 0!==this.ranges&&Array.isArray(this.ranges)?this.ranges[this.ranges.length-1]:null}}])&&r(n.prototype,a),s&&r(n,s),e}(),v=(Function.prototype.toString.call(Object),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{});!function(t){var r={exports:{}};t(r,r.exports)}((function(r,e){var n="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",a="[object Boolean]",s="[object Date]",u="[object Function]",c="[object GeneratorFunction]",l="[object Map]",f="[object Number]",p="[object Object]",h="[object Promise]",g="[object RegExp]",y="[object Set]",d="[object String]",m="[object Symbol]",b="[object WeakMap]",_="[object ArrayBuffer]",w="[object DataView]",O="[object Float32Array]",T="[object Float64Array]",A="[object Int8Array]",S="[object Int16Array]",j="[object Int32Array]",E="[object Uint8Array]",I="[object Uint8ClampedArray]",R="[object Uint16Array]",N="[object Uint32Array]",W=/\w*$/,D=/^\[object .+?Constructor\]$/,F=/^(?:0|[1-9]\d*)$/,H={};H[i]=H["[object Array]"]=H[_]=H[w]=H[a]=H[s]=H[O]=H[T]=H[A]=H[S]=H[j]=H[l]=H[f]=H[p]=H[g]=H[y]=H[d]=H[m]=H[E]=H[I]=H[R]=H[N]=!0,H["[object Error]"]=H[u]=H[b]=!1;var x="object"==t(v)&&v&&v.Object===Object&&v,J="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,k=x||J||Function("return this")(),C=e&&!e.nodeType&&e,L=C&&r&&!r.nodeType&&r,P=L&&L.exports===C;function $(t,r){return t.set(r[0],r[1]),t}function q(t,r){return t.add(r),t}function M(t,r,e,n){var o=-1,i=t?t.length:0;for(n&&i&&(e=t[++o]);++o<i;)e=r(e,t[o],o,t);return e}function B(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function U(t){var r=-1,e=Array(t.size);return t.forEach((function(t,n){e[++r]=[n,t]})),e}function z(t,r){return function(e){return t(r(e))}}function V(t){var r=-1,e=Array(t.size);return t.forEach((function(t){e[++r]=t})),e}var G,K=Array.prototype,Q=Function.prototype,X=Object.prototype,Y=k["__core-js_shared__"],Z=(G=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||""))?"Symbol(src)_1."+G:"",tt=Q.toString,rt=X.hasOwnProperty,et=X.toString,nt=RegExp("^"+tt.call(rt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ot=P?k.Buffer:void 0,it=k.Symbol,at=k.Uint8Array,st=z(Object.getPrototypeOf,Object),ut=Object.create,ct=X.propertyIsEnumerable,lt=K.splice,ft=Object.getOwnPropertySymbols,pt=ot?ot.isBuffer:void 0,ht=z(Object.keys,Object),gt=Lt(k,"DataView"),yt=Lt(k,"Map"),dt=Lt(k,"Promise"),mt=Lt(k,"Set"),bt=Lt(k,"WeakMap"),vt=Lt(Object,"create"),_t=Bt(gt),wt=Bt(yt),Ot=Bt(dt),Tt=Bt(mt),At=Bt(bt),St=it?it.prototype:void 0,jt=St?St.valueOf:void 0;function Et(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function It(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Rt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Nt(t){this.__data__=new It(t)}function Wt(r,e){var n=zt(r)||function(r){return function(r){return function(r){return!!r&&"object"==t(r)}(r)&&Vt(r)}(r)&&rt.call(r,"callee")&&(!ct.call(r,"callee")||et.call(r)==i)}(r)?function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}(r.length,String):[],o=n.length,a=!!o;for(var s in r)!e&&!rt.call(r,s)||a&&("length"==s||qt(s,o))||n.push(s);return n}function Dt(t,r,e){var n=t[r];rt.call(t,r)&&Ut(n,e)&&(void 0!==e||r in t)||(t[r]=e)}function Ft(t,r){for(var e=t.length;e--;)if(Ut(t[e][0],r))return e;return-1}function Ht(t,r,e,n,o,h,b){var v;if(n&&(v=h?n(t,o,h,b):n(t)),void 0!==v)return v;if(!Qt(t))return t;var D=zt(t);if(D){if(v=function(t){var r=t.length,e=t.constructor(r);r&&"string"==typeof t[0]&&rt.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!r)return function(t,r){var e=-1,n=t.length;r||(r=Array(n));for(;++e<n;)r[e]=t[e];return r}(t,v)}else{var F=$t(t),x=F==u||F==c;if(Gt(t))return function(t,r){if(r)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,r);if(F==p||F==i||x&&!h){if(B(t))return h?t:{};if(v=function(t){return"function"!=typeof t.constructor||Mt(t)?{}:(r=st(t),Qt(r)?ut(r):{});var r}(x?{}:t),!r)return function(t,r){return kt(t,Pt(t),r)}(t,function(t,r){return t&&kt(r,Xt(r),t)}(v,t))}else{if(!H[F])return h?t:{};v=function(t,r,e,n){var o=t.constructor;switch(r){case _:return Jt(t);case a:case s:return new o(+t);case w:return function(t,r){var e=r?Jt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,n);case O:case T:case A:case S:case j:case E:case I:case R:case N:return function(t,r){var e=r?Jt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,n);case l:return function(t,r,e){return M(r?e(U(t),!0):U(t),$,new t.constructor)}(t,n,e);case f:case d:return new o(t);case g:return function(t){var r=new t.constructor(t.source,W.exec(t));return r.lastIndex=t.lastIndex,r}(t);case y:return function(t,r,e){return M(r?e(V(t),!0):V(t),q,new t.constructor)}(t,n,e);case m:return i=t,jt?Object(jt.call(i)):{}}var i}(t,F,Ht,r)}}b||(b=new Nt);var J=b.get(t);if(J)return J;if(b.set(t,v),!D)var k=e?function(t){return function(t,r,e){var n=r(t);return zt(t)?n:function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t}(n,e(t))}(t,Xt,Pt)}(t):Xt(t);return function(t,r){for(var e=-1,n=t?t.length:0;++e<n&&!1!==r(t[e],e,t););}(k||t,(function(o,i){k&&(o=t[i=o]),Dt(v,i,Ht(o,r,e,n,i,t,b))})),v}function xt(t){return!(!Qt(t)||(r=t,Z&&Z in r))&&(Kt(t)||B(t)?nt:D).test(Bt(t));var r}function Jt(t){var r=new t.constructor(t.byteLength);return new at(r).set(new at(t)),r}function kt(t,r,e,n){e||(e={});for(var o=-1,i=r.length;++o<i;){var a=r[o],s=n?n(e[a],t[a],a,e,t):void 0;Dt(e,a,void 0===s?t[a]:s)}return e}function Ct(r,e){var n,o,i=r.__data__;return("string"==(o=t(n=e))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==n:null===n)?i["string"==typeof e?"string":"hash"]:i.map}function Lt(t,r){var e=function(t,r){return null==t?void 0:t[r]}(t,r);return xt(e)?e:void 0}Et.prototype.clear=function(){this.__data__=vt?vt(null):{}},Et.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Et.prototype.get=function(t){var r=this.__data__;if(vt){var e=r[t];return e===n?void 0:e}return rt.call(r,t)?r[t]:void 0},Et.prototype.has=function(t){var r=this.__data__;return vt?void 0!==r[t]:rt.call(r,t)},Et.prototype.set=function(t,r){return this.__data__[t]=vt&&void 0===r?n:r,this},It.prototype.clear=function(){this.__data__=[]},It.prototype.delete=function(t){var r=this.__data__,e=Ft(r,t);return!(e<0)&&(e==r.length-1?r.pop():lt.call(r,e,1),!0)},It.prototype.get=function(t){var r=this.__data__,e=Ft(r,t);return e<0?void 0:r[e][1]},It.prototype.has=function(t){return Ft(this.__data__,t)>-1},It.prototype.set=function(t,r){var e=this.__data__,n=Ft(e,t);return n<0?e.push([t,r]):e[n][1]=r,this},Rt.prototype.clear=function(){this.__data__={hash:new Et,map:new(yt||It),string:new Et}},Rt.prototype.delete=function(t){return Ct(this,t).delete(t)},Rt.prototype.get=function(t){return Ct(this,t).get(t)},Rt.prototype.has=function(t){return Ct(this,t).has(t)},Rt.prototype.set=function(t,r){return Ct(this,t).set(t,r),this},Nt.prototype.clear=function(){this.__data__=new It},Nt.prototype.delete=function(t){return this.__data__.delete(t)},Nt.prototype.get=function(t){return this.__data__.get(t)},Nt.prototype.has=function(t){return this.__data__.has(t)},Nt.prototype.set=function(t,r){var e=this.__data__;if(e instanceof It){var n=e.__data__;if(!yt||n.length<199)return n.push([t,r]),this;e=this.__data__=new Rt(n)}return e.set(t,r),this};var Pt=ft?z(ft,Object):function(){return[]},$t=function(t){return et.call(t)};function qt(t,r){return!!(r=null==r?o:r)&&("number"==typeof t||F.test(t))&&t>-1&&t%1==0&&t<r}function Mt(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||X)}function Bt(t){if(null!=t){try{return tt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ut(t,r){return t===r||t!=t&&r!=r}(gt&&$t(new gt(new ArrayBuffer(1)))!=w||yt&&$t(new yt)!=l||dt&&$t(dt.resolve())!=h||mt&&$t(new mt)!=y||bt&&$t(new bt)!=b)&&($t=function(t){var r=et.call(t),e=r==p?t.constructor:void 0,n=e?Bt(e):void 0;if(n)switch(n){case _t:return w;case wt:return l;case Ot:return h;case Tt:return y;case At:return b}return r});var zt=Array.isArray;function Vt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!Kt(t)}var Gt=pt||function(){return!1};function Kt(t){var r=Qt(t)?et.call(t):"";return r==u||r==c}function Qt(r){var e=t(r);return!!r&&("object"==e||"function"==e)}function Xt(t){return Vt(t)?Wt(t):function(t){if(!Mt(t))return ht(t);var r=[];for(var e in Object(t))rt.call(t,e)&&"constructor"!=e&&r.push(e);return r}(t)}r.exports=function(t){return Ht(t,!0,!0)}}));function _(t,r){return function(t){var r=t.str,e=t.idx,n=t.stopAtNewlines,o=t.stopAtRawNbsp;if("string"!=typeof r||!r.length)return null;if(e&&"number"==typeof e||(e=0),!r[e+1])return null;if(r[e+1]&&(r[e+1].trim()||n&&"\n\r".includes(r[e+1])||o&&" "===r[e+1]))return e+1;if(r[e+2]&&(r[e+2].trim()||n&&"\n\r".includes(r[e+2])||o&&" "===r[e+2]))return e+2;for(var i=e+1,a=r.length;i<a;i++)if(r[i].trim()||n&&"\n\r".includes(r[i])||o&&" "===r[i])return i;return null}({str:t,idx:r,stopAtNewlines:!1,stopAtRawNbsp:!1})}var w={trimStart:!0,trimEnd:!0,trimLines:!1,trimnbsp:!1,removeEmptyLines:!1,limitConsecutiveEmptyLinesTo:0,enforceSpacesOnly:!1,cb:function(t){return t.suggested}};return function(r,e){if("string"!=typeof r)throw new Error("string-collapse-white-space/collapse(): [THROW_ID_01] The input is not string but ".concat(t(r),", equal to: ").concat(JSON.stringify(r,null,4)));if(e&&"object"!==t(e))throw new Error("string-collapse-white-space/collapse(): [THROW_ID_02] The opts is not a plain object but ".concat(t(e),", equal to:\n").concat(JSON.stringify(e,null,4)));if(!r.length)return{result:"",ranges:null};var n=new b,a=" ",s=o(o({},w),e);function u(t){var r=s.cb(o({suggested:t},arguments.length<=1?void 0:arguments[1]));Array.isArray(r)&&n.push.apply(n,i(r))}for(var c=null,l=null,p=null,h=null,g=null,y=!1,d=[],m=0,v=0,O=r.length;v<=O;v++){if(("\r"===r[v]||"\n"===r[v]&&"\r"!==r[v-1])&&(m+=1,null===h&&(h=v),g="\r"===r[v]&&"\n"===r[v+1]?v+2:v+1),s.trimnbsp||r[v]!==a||y||(y=!0),null!==c&&" "!==r[v]){var T=c&&l||!l&&(!s.trimStart||!s.trimnbsp&&(r[v]===a||r[c-1]===a)),A=r[v]||!s.trimEnd||!s.trimnbsp&&(r[v]===a||r[c-1]===a),S=!s.enforceSpacesOnly||(!r[c-1]||r[c-1].trim())&&(!r[v]||r[v].trim());if(c<v-1&&T&&A&&S){var j=c,E=v,I=" ";s.trimLines&&(!c||!r[v]||r[c-1]&&"\r\n".includes(r[c-1])||r[v]&&"\r\n".includes(r[v]))&&(I=null),I&&" "===r[c]&&(E-=1,I=null),(!c&&s.trimStart||!r[v]&&s.trimEnd)&&(E=v),d.push([I?[j,E,I]:[j,E],{whiteSpaceStartsAt:l,whiteSpaceEndsAt:_(v-1)||v,str:r}])}}if(null===c&&" "===r[v]&&(c=v),null===l&&r[v]&&!r[v].trim()&&(l=v),null!==p&&("\n\r".includes(r[v])||!r[v]||r[v].trim()||!s.trimnbsp&&!s.enforceSpacesOnly&&r[v]===a)&&(p||!s.trimStart||s.enforceSpacesOnly&&y)&&(r[v]||!s.trimEnd||s.enforceSpacesOnly&&y)){if(s.enforceSpacesOnly&&(v>p+1||" "!==r[p])){var R=p,N=v,W=" ";" "===r[N-1]?(N-=1,W=null):" "===r[p]&&(R+=1,W=null),((s.trimStart||s.trimLines)&&!p||(s.trimEnd||s.trimLines)&&!r[v])&&(W=null),u(W?[R,N,W]:[R,N],{whiteSpaceStartsAt:l,whiteSpaceEndsAt:v,str:r})}!s.trimLines||p&&!"\r\n".includes(r[p-1])&&r[v]&&!"\r\n".includes(r[v])||!s.trimnbsp&&y||u([p,v],{whiteSpaceStartsAt:l,whiteSpaceEndsAt:_(r,v-1)||v,str:r}),p=null}if(null!==p||"\r\n".includes(r[v])||!r[v]||r[v].trim()||!s.trimnbsp&&r[v]===a&&!s.enforceSpacesOnly||(p=v),null!==l&&(!r[v]||r[v].trim())){if((!l&&(s.trimStart||s.trimLines&&null===h)||!r[v]&&(s.trimEnd||s.trimLines&&null===h))&&(s.trimnbsp||!y||s.enforceSpacesOnly))u([l,v],{whiteSpaceStartsAt:l,whiteSpaceEndsAt:v,str:r});else{var D=!1;if(s.removeEmptyLines&&null!==h&&m>s.limitConsecutiveEmptyLinesTo+1){D=!0;var F=h,H=g,x="".concat("\r"===r[h]&&"\n"===r[h+1]?"\r\n":r[h]).repeat(s.limitConsecutiveEmptyLinesTo+1);r.endsWith(x,g)?(H-=x.length,x=null):r.startsWith(x,h)&&(F+=x.length,x=null),u(x?[F,H,x]:[F,H],{whiteSpaceStartsAt:l,whiteSpaceEndsAt:v,str:r})}if(d.length){for(;d.length;)u.apply(void 0,i(d.shift()).concat([{whiteSpaceStartsAt:l,whiteSpaceEndsAt:v,str:r}]));D=!0}D||u(null,{whiteSpaceStartsAt:l,whiteSpaceEndsAt:v,str:r})}l=null,p=null,y=!1,m&&(m=0,h=null,g=null)}null!==c&&" "!==r[v]&&(c=null)}return{result:f(r,n.current()),ranges:n.current()}}}));
