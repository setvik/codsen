/**
 * string-collapse-white-space
 * Replace chunks of whitespace with a single spaces
 * Version: 8.0.5
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/string-collapse-white-space/
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).stringCollapseWhiteSpace={})}(this,(function(t){"use strict";function e(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(r){e(t,r,i[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var i={strictlyTwoElementsInRangeArrays:!1,progressFn:null};function o(t,e){if(!Array.isArray(t)||!t.length)return t;var r,o,s=n(n({},i),e);if(s.strictlyTwoElementsInRangeArrays&&!t.filter((function(t){return t})).every((function(t,e){return 2===t.length||(r=e,o=t.length,!1)})))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, "+r+"th range ("+JSON.stringify(t[r],null,4)+") has not two but "+o+" elements!");if(!t.filter((function(t){return t})).every((function(t,e){return!(!Number.isInteger(t[0])||t[0]<0||!Number.isInteger(t[1])||t[1]<0)||(r=e,!1)})))throw new TypeError("ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, "+r+"th range ("+JSON.stringify(t[r],null,4)+") does not consist of only natural numbers!");var a=Math.pow(t.filter((function(t){return t})).length,2),u=0;return Array.from(t).filter((function(t){return t})).sort((function(t,e){return s.progressFn&&s.progressFn(Math.floor(100*(u+=1)/a)),t[0]===e[0]?t[1]<e[1]?-1:t[1]>e[1]?1:0:t[0]<e[0]?-1:1}))}var s={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};function a(t,e){function r(t){return t&&"object"==typeof t&&!Array.isArray(t)}if(!Array.isArray(t)||!t.length)return null;var i;if(e){if(!r(e))throw new Error("emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n"+JSON.stringify(e,null,4)+" (type "+typeof e+")");if((i=n(n({},s),e)).progressFn&&r(i.progressFn)&&!Object.keys(i.progressFn).length)i.progressFn=null;else if(i.progressFn&&"function"!=typeof i.progressFn)throw new Error('ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "'+typeof i.progressFn+'", equal to '+JSON.stringify(i.progressFn,null,4));if(i.mergeType&&1!=+i.mergeType&&2!=+i.mergeType)throw new Error('ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'+typeof i.mergeType+'", equal to '+JSON.stringify(i.mergeType,null,4));if("boolean"!=typeof i.joinRangesThatTouchEdges)throw new Error('ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "'+typeof i.joinRangesThatTouchEdges+'", equal to '+JSON.stringify(i.joinRangesThatTouchEdges,null,4))}else i=n({},s);var a,u,l,c=t.filter((function(t){return t})).map((function(t){return[].concat(t)})).filter((function(t){return void 0!==t[2]||t[0]!==t[1]}));if(!(a=i.progressFn?o(c,{progressFn:function(t){(l=Math.floor(t/5))!==u&&(u=l,i.progressFn(l))}}):o(c)))return null;for(var f=a.length-1,p=f;p>0;p--)i.progressFn&&(l=Math.floor(78*(1-p/f))+21)!==u&&l>u&&(u=l,i.progressFn(l)),(a[p][0]<=a[p-1][0]||!i.joinRangesThatTouchEdges&&a[p][0]<a[p-1][1]||i.joinRangesThatTouchEdges&&a[p][0]<=a[p-1][1])&&(a[p-1][0]=Math.min(a[p][0],a[p-1][0]),a[p-1][1]=Math.max(a[p][1],a[p-1][1]),void 0!==a[p][2]&&(a[p-1][0]>=a[p][0]||a[p-1][1]<=a[p][1])&&null!==a[p-1][2]&&(null===a[p][2]&&null!==a[p-1][2]?a[p-1][2]=null:null!=a[p-1][2]?2==+i.mergeType&&a[p-1][0]===a[p][0]?a[p-1][2]=a[p][2]:a[p-1][2]+=a[p][2]:a[p-1][2]=a[p][2]),a.splice(p,1),p=a.length);return a.length?a:null}function u(t,e,r){var n,i=0,o=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof t)throw new TypeError("ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: "+typeof t+", equal to: "+JSON.stringify(t,null,4));if(e&&!Array.isArray(e))throw new TypeError("ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: "+typeof e+", equal to: "+JSON.stringify(e,null,4));if(r&&"function"!=typeof r)throw new TypeError("ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: "+typeof r+", equal to: "+JSON.stringify(r,null,4));if(!e||!e.filter((function(t){return t})).length)return t;var s=(n=Array.isArray(e)&&Number.isInteger(e[0])&&Number.isInteger(e[1])?[Array.from(e)]:Array.from(e)).length,u=0;n.filter((function(t){return t})).forEach((function(t,e){if(r&&(i=Math.floor(u/s*10))!==o&&(o=i,r(i)),!Array.isArray(t))throw new TypeError("ranges-apply: [THROW_ID_05] ranges array, second input arg., has "+e+"th element not an array: "+JSON.stringify(t,null,4)+", which is "+typeof t);if(!Number.isInteger(t[0])){if(!Number.isInteger(+t[0])||+t[0]<0)throw new TypeError("ranges-apply: [THROW_ID_06] ranges array, second input arg. has "+e+"th element, array "+JSON.stringify(t,null,0)+". Its first element is not an integer, string index, but "+typeof t[0]+", equal to: "+JSON.stringify(t[0],null,4)+".");n[e][0]=+n[e][0]}if(!Number.isInteger(t[1])){if(!Number.isInteger(+t[1])||+t[1]<0)throw new TypeError("ranges-apply: [THROW_ID_07] ranges array, second input arg. has "+e+"th element, array "+JSON.stringify(t,null,0)+". Its second element is not an integer, string index, but "+typeof t[1]+", equal to: "+JSON.stringify(t[1],null,4)+".");n[e][1]=+n[e][1]}u+=1}));var l=a(n,{progressFn:function(t){r&&(i=10+Math.floor(t/10))!==o&&(o=i,r(i))}}),c=l.length;if(c>0){var f=t.slice(l[c-1][1]);t=l.reduce((function(e,n,s,a){return r&&(i=20+Math.floor(s/c*80))!==o&&(o=i,r(i)),e+t.slice(0===s?0:a[s-1][1],a[s][0])+(a[s][2]||"")}),""),t+=f}return t}function l(t,e){void 0===e&&(e=1);function r(t){return Array.from(t).reverse().join("")}function n(t,e,r){var n=r?"\n":"\r",i=r?"\r":"\n";if(!t)return t;for(var o=0,s="",a=0,u=t.length;a<u;a++)(t[a]===n||t[a]===i&&t[a-1]!==n)&&o++,"\r\n".includes(t[a])||" "===t[a]?" "===t[a]?s+=t[a]:t[a]===n?o<=e&&(s+=t[a],t[a+1]===i&&(s+=t[a+1],a++)):t[a]===i&&(!t[a-1]||t[a-1]!==n)&&o<=e&&(s+=t[a]):t[a+1]||o||(s+=" ");return s}if("string"==typeof t&&t.length){var i=1;"number"==typeof+e&&Number.isInteger(+e)&&+e>=0&&(i=+e);var o="",s="";if(t.trim()){if(!t[0].trim())for(var a=0,u=t.length;a<u;a++)if(t[a].trim()){o=t.slice(0,a);break}}else o=t;if(t.trim()&&(""===t.slice(-1).trim()||" "===t.slice(-1)))for(var l=t.length;l--;)if(t[l].trim()){s=t.slice(l+1);break}return""+n(o,i,!1)+t.trim()+r(n(r(s),i,!0))}return t}function c(t){return null!=t}function f(t){return Number.isInteger(t)&&t>=0}function p(t){return"string"==typeof t}var g={limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1},h=function(){function t(t){var e=n(n({},g),t);if(e.mergeType&&1!==e.mergeType&&2!==e.mergeType)if(p(e.mergeType)&&"1"===e.mergeType.trim())e.mergeType=1;else{if(!p(e.mergeType)||"2"!==e.mergeType.trim())throw new Error('ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'+typeof e.mergeType+'", equal to '+JSON.stringify(e.mergeType,null,4));e.mergeType=2}this.opts=e,this.ranges=[]}var e=t.prototype;return e.add=function(t,e,r){var n=this;if(null!=t||null!=e){if(c(t)&&!c(e)){if(Array.isArray(t)){if(t.length){if(t.some((function(t){return Array.isArray(t)})))return void t.forEach((function(t){Array.isArray(t)&&n.add.apply(n,t)}));t.length&&f(+t[0])&&f(+t[1])&&this.add.apply(this,t)}return}throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set ('+JSON.stringify(t,null,0)+') but second-one, "to" is not ('+JSON.stringify(e,null,0)+")")}if(!c(t)&&c(e))throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set ('+JSON.stringify(e,null,0)+') but first-one, "from" is not ('+JSON.stringify(t,null,0)+")");var i=+t,o=+e;if(f(r)&&(r=String(r)),!f(i)||!f(o))throw f(i)&&i>=0?new TypeError('ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it\'s of a type "'+typeof o+'" equal to: '+JSON.stringify(o,null,4)):new TypeError('ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it\'s of a type "'+typeof i+'" equal to: '+JSON.stringify(i,null,4));if(c(r)&&!p(r)&&!f(r))throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but "+typeof r+", equal to:\n"+JSON.stringify(r,null,4));if(c(this.ranges)&&Array.isArray(this.last())&&i===this.last()[1]){if(this.last()[1]=o,this.last(),null!==this.last()[2]&&c(r)){var s=!(this.last()[2]&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?r:this.last()[2]+r;this.opts.limitToBeAddedWhitespace&&(s=l(s,this.opts.limitLinebreaksCount)),p(s)&&!s.length||(this.last()[2]=s)}}else{this.ranges||(this.ranges=[]);var a=void 0===r||p(r)&&!r.length?[i,o]:[i,o,r&&this.opts.limitToBeAddedWhitespace?l(r,this.opts.limitLinebreaksCount):r];this.ranges.push(a)}}},e.push=function(t,e,r){this.add(t,e,r)},e.current=function(){var t=this;return Array.isArray(this.ranges)&&this.ranges.length?(this.ranges=a(this.ranges,{mergeType:this.opts.mergeType}),this.ranges&&this.opts.limitToBeAddedWhitespace?this.ranges.map((function(e){return c(e[2])?[e[0],e[1],l(e[2],t.opts.limitLinebreaksCount)]:e})):this.ranges):null},e.wipe=function(){this.ranges=[]},e.replace=function(t){if(Array.isArray(t)&&t.length){if(!Array.isArray(t[0])||!f(t[0][0]))throw new Error("ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, "+JSON.stringify(t[0],null,4)+" should be an array and its first element should be an integer, a string index.");this.ranges=Array.from(t)}else this.ranges=[]},e.last=function(){return Array.isArray(this.ranges)&&this.ranges.length?this.ranges[this.ranges.length-1]:null},t}();Function.prototype.toString.call(Object);var y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(t){var e={exports:{}};t(e,e.exports)}((function(t,e){var r="__lodash_hash_undefined__",n=9007199254740991,i="[object Arguments]",o="[object Boolean]",s="[object Date]",a="[object Function]",u="[object GeneratorFunction]",l="[object Map]",c="[object Number]",f="[object Object]",p="[object Promise]",g="[object RegExp]",h="[object Set]",d="[object String]",m="[object Symbol]",b="[object WeakMap]",v="[object ArrayBuffer]",_="[object DataView]",w="[object Float32Array]",O="[object Float64Array]",T="[object Int8Array]",A="[object Int16Array]",S="[object Int32Array]",j="[object Uint8Array]",E="[object Uint8ClampedArray]",I="[object Uint16Array]",R="[object Uint32Array]",N=/\w*$/,W=/^\[object .+?Constructor\]$/,D=/^(?:0|[1-9]\d*)$/,x={};x[i]=x["[object Array]"]=x[v]=x[_]=x[o]=x[s]=x[w]=x[O]=x[T]=x[A]=x[S]=x[l]=x[c]=x[f]=x[g]=x[h]=x[d]=x[m]=x[j]=x[E]=x[I]=x[R]=!0,x["[object Error]"]=x[a]=x[b]=!1;var F="object"==typeof self&&self&&self.Object===Object&&self,J="object"==typeof y&&y&&y.Object===Object&&y||F||Function("return this")(),H=e&&!e.nodeType&&e,L=H&&t&&!t.nodeType&&t,P=L&&L.exports===H;function C(t,e){return t.set(e[0],e[1]),t}function q(t,e){return t.add(e),t}function M(t,e,r,n){var i=-1,o=t?t.length:0;for(n&&o&&(r=t[++i]);++i<o;)r=e(r,t[i],i,t);return r}function k(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function B(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function $(t,e){return function(r){return t(e(r))}}function U(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var z,V=Array.prototype,G=Function.prototype,K=Object.prototype,Q=J["__core-js_shared__"],X=(z=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+z:"",Y=G.toString,Z=K.hasOwnProperty,tt=K.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=P?J.Buffer:void 0,nt=J.Symbol,it=J.Uint8Array,ot=$(Object.getPrototypeOf,Object),st=Object.create,at=K.propertyIsEnumerable,ut=V.splice,lt=Object.getOwnPropertySymbols,ct=rt?rt.isBuffer:void 0,ft=$(Object.keys,Object),pt=Lt(J,"DataView"),gt=Lt(J,"Map"),ht=Lt(J,"Promise"),yt=Lt(J,"Set"),dt=Lt(J,"WeakMap"),mt=Lt(Object,"create"),bt=kt(pt),vt=kt(gt),_t=kt(ht),wt=kt(yt),Ot=kt(dt),Tt=nt?nt.prototype:void 0,At=Tt?Tt.valueOf:void 0;function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function jt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function It(t){this.__data__=new jt(t)}function Rt(t,e){var r=$t(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Ut(t)}(t)&&Z.call(t,"callee")&&(!at.call(t,"callee")||tt.call(t)==i)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var s in t)!e&&!Z.call(t,s)||o&&("length"==s||qt(s,n))||r.push(s);return r}function Nt(t,e,r){var n=t[e];Z.call(t,e)&&Bt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Wt(t,e){for(var r=t.length;r--;)if(Bt(t[r][0],e))return r;return-1}function Dt(t,e,r,n,p,y,b){var W;if(n&&(W=y?n(t,p,y,b):n(t)),void 0!==W)return W;if(!Gt(t))return t;var D=$t(t);if(D){if(W=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,W)}else{var F=Ct(t),J=F==a||F==u;if(zt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(F==f||F==i||J&&!y){if(k(t))return y?t:{};if(W=function(t){return"function"!=typeof t.constructor||Mt(t)?{}:(e=ot(t),Gt(e)?st(e):{});var e}(J?{}:t),!e)return function(t,e){return Jt(t,Pt(t),e)}(t,function(t,e){return t&&Jt(e,Kt(e),t)}(W,t))}else{if(!x[F])return y?t:{};W=function(t,e,r,n){var i=t.constructor;switch(e){case v:return Ft(t);case o:case s:return new i(+t);case _:return function(t,e){var r=e?Ft(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case w:case O:case T:case A:case S:case j:case E:case I:case R:return function(t,e){var r=e?Ft(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return function(t,e,r){return M(e?r(B(t),!0):B(t),C,new t.constructor)}(t,n,r);case c:case d:return new i(t);case g:return function(t){var e=new t.constructor(t.source,N.exec(t));return e.lastIndex=t.lastIndex,e}(t);case h:return function(t,e,r){return M(e?r(U(t),!0):U(t),q,new t.constructor)}(t,n,r);case m:return a=t,At?Object(At.call(a)):{}}var a}(t,F,Dt,e)}}b||(b=new It);var H=b.get(t);if(H)return H;if(b.set(t,W),!D)var L=r?function(t){return function(t,e,r){var n=e(t);return $t(t)?n:function(t,e){for(var r=-1,n=e.length,i=t.length;++r<n;)t[i+r]=e[r];return t}(n,r(t))}(t,Kt,Pt)}(t):Kt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(L||t,(function(i,o){L&&(i=t[o=i]),Nt(W,o,Dt(i,e,r,n,o,t,b))})),W}function xt(t){return!(!Gt(t)||(e=t,X&&X in e))&&(Vt(t)||k(t)?et:W).test(kt(t));var e}function Ft(t){var e=new t.constructor(t.byteLength);return new it(e).set(new it(t)),e}function Jt(t,e,r,n){r||(r={});for(var i=-1,o=e.length;++i<o;){var s=e[i],a=n?n(r[s],t[s],s,r,t):void 0;Nt(r,s,void 0===a?t[s]:a)}return r}function Ht(t,e){var r,n,i=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?i["string"==typeof e?"string":"hash"]:i.map}function Lt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return xt(r)?r:void 0}St.prototype.clear=function(){this.__data__=mt?mt(null):{}},St.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},St.prototype.get=function(t){var e=this.__data__;if(mt){var n=e[t];return n===r?void 0:n}return Z.call(e,t)?e[t]:void 0},St.prototype.has=function(t){var e=this.__data__;return mt?void 0!==e[t]:Z.call(e,t)},St.prototype.set=function(t,e){return this.__data__[t]=mt&&void 0===e?r:e,this},jt.prototype.clear=function(){this.__data__=[]},jt.prototype.delete=function(t){var e=this.__data__,r=Wt(e,t);return!(r<0)&&(r==e.length-1?e.pop():ut.call(e,r,1),!0)},jt.prototype.get=function(t){var e=this.__data__,r=Wt(e,t);return r<0?void 0:e[r][1]},jt.prototype.has=function(t){return Wt(this.__data__,t)>-1},jt.prototype.set=function(t,e){var r=this.__data__,n=Wt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Et.prototype.clear=function(){this.__data__={hash:new St,map:new(gt||jt),string:new St}},Et.prototype.delete=function(t){return Ht(this,t).delete(t)},Et.prototype.get=function(t){return Ht(this,t).get(t)},Et.prototype.has=function(t){return Ht(this,t).has(t)},Et.prototype.set=function(t,e){return Ht(this,t).set(t,e),this},It.prototype.clear=function(){this.__data__=new jt},It.prototype.delete=function(t){return this.__data__.delete(t)},It.prototype.get=function(t){return this.__data__.get(t)},It.prototype.has=function(t){return this.__data__.has(t)},It.prototype.set=function(t,e){var r=this.__data__;if(r instanceof jt){var n=r.__data__;if(!gt||n.length<199)return n.push([t,e]),this;r=this.__data__=new Et(n)}return r.set(t,e),this};var Pt=lt?$(lt,Object):function(){return[]},Ct=function(t){return tt.call(t)};function qt(t,e){return!!(e=null==e?n:e)&&("number"==typeof t||D.test(t))&&t>-1&&t%1==0&&t<e}function Mt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||K)}function kt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Bt(t,e){return t===e||t!=t&&e!=e}(pt&&Ct(new pt(new ArrayBuffer(1)))!=_||gt&&Ct(new gt)!=l||ht&&Ct(ht.resolve())!=p||yt&&Ct(new yt)!=h||dt&&Ct(new dt)!=b)&&(Ct=function(t){var e=tt.call(t),r=e==f?t.constructor:void 0,n=r?kt(r):void 0;if(n)switch(n){case bt:return _;case vt:return l;case _t:return p;case wt:return h;case Ot:return b}return e});var $t=Array.isArray;function Ut(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}(t.length)&&!Vt(t)}var zt=ct||function(){return!1};function Vt(t){var e=Gt(t)?tt.call(t):"";return e==a||e==u}function Gt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Kt(t){return Ut(t)?Rt(t):function(t){if(!Mt(t))return ft(t);var e=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return Dt(t,!0,!0)}}));function d(t,e){return void 0===e&&(e=0),function(t){var e=t.str,r=t.idx,n=void 0===r?0:r,i=t.stopAtNewlines,o=void 0!==i&&i,s=t.stopAtRawNbsp,a=void 0!==s&&s;if("string"!=typeof e||!e.length)return null;if(n&&"number"==typeof n||(n=0),!e[n+1])return null;if(e[n+1]&&(e[n+1].trim()||o&&"\n\r".includes(e[n+1])||a&&" "===e[n+1]))return n+1;if(e[n+2]&&(e[n+2].trim()||o&&"\n\r".includes(e[n+2])||a&&" "===e[n+2]))return n+2;for(var u=n+1,l=e.length;u<l;u++)if(e[u].trim()||o&&"\n\r".includes(e[u])||a&&" "===e[u])return u;return null}({str:t,idx:e,stopAtNewlines:!1,stopAtRawNbsp:!1})}var m={trimStart:!0,trimEnd:!0,trimLines:!1,trimnbsp:!1,removeEmptyLines:!1,limitConsecutiveEmptyLinesTo:0,enforceSpacesOnly:!1,cb:function(t){return t.suggested}};t.cbSchema=["suggested","whiteSpaceStartsAt","whiteSpaceEndsAt","str"],t.collapse=function(t,e){if("string"!=typeof t)throw new Error("string-collapse-white-space/collapse(): [THROW_ID_01] The input is not string but "+typeof t+", equal to: "+JSON.stringify(t,null,4));if(e&&"object"!=typeof e)throw new Error("string-collapse-white-space/collapse(): [THROW_ID_02] The opts is not a plain object but "+typeof e+", equal to:\n"+JSON.stringify(e,null,4));if(!t.length)return{result:"",ranges:null};var r=new h,i=" ",o=n(n({},m),e);function s(t,e){if("function"==typeof o.cb){var i=o.cb(n({suggested:t},e));Array.isArray(i)&&r.push.apply(r,i)}else t&&r.push.apply(r,t)}for(var a=null,l=null,c=null,f=null,p=null,g=!1,y=[],b=0,v=0,_=t.length;v<=_;v++){if(("\r"===t[v]||"\n"===t[v]&&"\r"!==t[v-1])&&(b+=1,null===f&&(f=v),p="\r"===t[v]&&"\n"===t[v+1]?v+2:v+1),o.trimnbsp||t[v]!==i||g||(g=!0),null!==a&&" "!==t[v]){var w=a&&l||!l&&(!o.trimStart||!o.trimnbsp&&(t[v]===i||t[a-1]===i)),O=t[v]||!o.trimEnd||!o.trimnbsp&&(t[v]===i||t[a-1]===i),T=!o.enforceSpacesOnly||(!t[a-1]||t[a-1].trim())&&(!t[v]||t[v].trim());if(a<v-1&&w&&O&&T){var A=a,S=v,j=" ";o.trimLines&&(!a||!t[v]||t[a-1]&&"\r\n".includes(t[a-1])||t[v]&&"\r\n".includes(t[v]))&&(j=null),j&&" "===t[a]&&(S-=1,j=null),(!a&&o.trimStart||!t[v]&&o.trimEnd)&&(S=v),y.push([j?[A,S,j]:[A,S],{whiteSpaceStartsAt:l,whiteSpaceEndsAt:d(t,v-1)||v,str:t}])}}if(null===a&&" "===t[v]&&(a=v),null===l&&t[v]&&!t[v].trim()&&(l=v),null!==c&&("\n\r".includes(t[v])||!t[v]||t[v].trim()||!o.trimnbsp&&!o.enforceSpacesOnly&&t[v]===i)&&(c||!o.trimStart||o.enforceSpacesOnly&&g)&&(t[v]||!o.trimEnd||o.enforceSpacesOnly&&g)){if(o.enforceSpacesOnly&&(v>c+1||" "!==t[c])){var E=c,I=v,R=" ";" "===t[I-1]?(I-=1,R=null):" "===t[c]&&(E+=1,R=null),((o.trimStart||o.trimLines)&&!c||(o.trimEnd||o.trimLines)&&!t[v])&&(R=null),s(R?[E,I,R]:[E,I],{whiteSpaceStartsAt:l,whiteSpaceEndsAt:v,str:t})}!o.trimLines||c&&!"\r\n".includes(t[c-1])&&t[v]&&!"\r\n".includes(t[v])||!o.trimnbsp&&g||s([c,v],{whiteSpaceStartsAt:l,whiteSpaceEndsAt:d(t,v-1)||v,str:t}),c=null}if(null!==c||"\r\n".includes(t[v])||!t[v]||t[v].trim()||!o.trimnbsp&&t[v]===i&&!o.enforceSpacesOnly||(c=v),null!==l&&(!t[v]||t[v].trim())){if((!l&&(o.trimStart||o.trimLines&&null===f)||!t[v]&&(o.trimEnd||o.trimLines&&null===f))&&(o.trimnbsp||!g||o.enforceSpacesOnly))s([l,v],{whiteSpaceStartsAt:l,whiteSpaceEndsAt:v,str:t});else{var N=!1;if(o.removeEmptyLines&&null!==f&&b>(o.limitConsecutiveEmptyLinesTo||0)+1){N=!0;var W=f,D=p||t.length,x=(""+("\r"===t[f]&&"\n"===t[f+1]?"\r\n":t[f])).repeat((o.limitConsecutiveEmptyLinesTo||0)+1);t.endsWith(x,p)?(D-=x.length||0,x=null):t.startsWith(x,f)&&(W+=x.length,x=null),s(x?[W,D,x]:[W,D],{whiteSpaceStartsAt:l,whiteSpaceEndsAt:v,str:t})}if(y.length){for(;y.length;)s.apply(void 0,y.shift());N=!0}N||s(null,{whiteSpaceStartsAt:l,whiteSpaceEndsAt:v,str:t})}l=null,c=null,g=!1,b&&(b=0,f=null,p=null)}null!==a&&" "!==t[v]&&(a=null)}return{result:u(t,r.current()),ranges:r.current()}},t.defaults=m,t.version="8.0.5",Object.defineProperty(t,"__esModule",{value:!0})}));
