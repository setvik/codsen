!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.easyReplace=t()}(this,function(){"use strict";var w="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=9007199254740991,c="[object Arguments]",o="[object Function]",i="[object GeneratorFunction]",a="[object Map]",u="[object Promise]",f="[object Set]",s="[object String]",l="[object WeakMap]",y="[object DataView]",h=/^\[object .+?Constructor\]$/,p=/^(?:0|[1-9]\d*)$/,e="\\ud800-\\udfff",t="\\u0300-\\u036f\\ufe20-\\ufe23",g="\\u20d0-\\u20f0",d="\\ufe0e\\ufe0f",b="["+e+"]",m="["+t+g+"]",v="\\ud83c[\\udffb-\\udfff]",O="[^"+e+"]",_="(?:\\ud83c[\\udde6-\\uddff]){2}",j="[\\ud800-\\udbff][\\udc00-\\udfff]",S="\\u200d",k="(?:"+m+"|"+v+")"+"?",A="["+d+"]?",M=A+k+("(?:"+S+"(?:"+[O,_,j].join("|")+")"+A+k+")*"),T="(?:"+[O+m+"?",m,_,j,b].join("|")+")",E=RegExp(v+"(?="+v+")|"+T+M,"g"),N=RegExp("["+S+e+t+g+d+"]"),$="object"==r(w)&&w&&w.Object===Object&&w,L="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,C=$||L||Function("return this")();function I(t,e){return function(e,t){for(var r=-1,n=e?e.length:0,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}(e,function(e){return t[e]})}function F(e){var r=-1,n=Array(e.size);return e.forEach(function(e,t){n[++r]=[t,e]}),n}function P(e){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r}function D(e){return t=e,N.test(t)?e.match(E)||[]:e.split("");var t}var V,x,R,W=Function.prototype,H=Object.prototype,K=C["__core-js_shared__"],J=(V=/[^.]+$/.exec(K&&K.keys&&K.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"",B=W.toString,q=H.hasOwnProperty,z=H.toString,G=RegExp("^"+B.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Q=C.Symbol,U=Q?Q.iterator:undefined$1,X=H.propertyIsEnumerable,Y=(x=Object.keys,R=Object,function(e){return x(R(e))}),Z=ye(C,"DataView"),ee=ye(C,"Map"),te=ye(C,"Promise"),re=ye(C,"Set"),ne=ye(C,"WeakMap"),oe=ge(Z),ie=ge(ee),ae=ge(te),ue=ge(re),ce=ge(ne);function fe(e,t){var r,n,o=de(e)||we(n=r=e)&&be(n)&&q.call(r,"callee")&&(!X.call(r,"callee")||z.call(r)==c)?function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],i=o.length,a=!!i;for(var u in e)!t&&!q.call(e,u)||a&&pe(u,i)||o.push(u);return o}function se(e){return!(!ve(e)||(t=e,J&&J in t))&&(me(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?G:h).test(ge(e));var t}function le(e){if(r=(t=e)&&t.constructor,n="function"==typeof r&&r.prototype||H,t!==n)return Y(e);var t,r,n,o=[];for(var i in Object(e))q.call(e,i)&&"constructor"!=i&&o.push(i);return o}function ye(e,t){var r,n,o=(n=t,null==(r=e)?undefined$1:r[n]);return se(o)?o:undefined$1}var he=function(e){return z.call(e)};function pe(e,t){return!!(t=null==t?n:t)&&("number"==typeof e||p.test(e))&&-1<e&&e%1==0&&e<t}function ge(e){if(null!=e){try{return B.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(Z&&he(new Z(new ArrayBuffer(1)))!=y||ee&&he(new ee)!=a||te&&he(te.resolve())!=u||re&&he(new re)!=f||ne&&he(new ne)!=l)&&(he=function(e){var t=z.call(e),r="[object Object]"==t?e.constructor:undefined$1,n=r?ge(r):undefined$1;if(n)switch(n){case oe:return y;case ie:return a;case ae:return u;case ue:return f;case ce:return l}return t});var de=Array.isArray;function be(e){return null!=e&&("number"==typeof(t=e.length)&&-1<t&&t%1==0&&t<=n)&&!me(e);var t}function me(e){var t=ve(e)?z.call(e):"";return t==o||t==i}function ve(e){var t=void 0===e?"undefined":r(e);return!!e&&("object"==t||"function"==t)}function we(e){return!!e&&"object"==(void 0===e?"undefined":r(e))}function Oe(e){return e?I(e,be(t=e)?fe(t):le(t)):[];var t}var _e,je=function(e){if(!e)return[];if(be(e))return"string"==typeof(t=e)||!de(t)&&we(t)&&z.call(t)==s?D(e):function(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}(e);var t;if(U&&e[U])return function(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}(e[U]());var r=he(e);return(r==a?F:r==f?P:Oe)(e)},Se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ke=(function(e,t){var o,i,r,a,u,c,f,s,n,l,y,h,p,g,d,b,m,v;e.exports=(o="function"==typeof Promise,i="object"===("undefined"==typeof self?"undefined":Se(self))?self:w,r="undefined"!=typeof Symbol,a="undefined"!=typeof Map,u="undefined"!=typeof Set,c="undefined"!=typeof WeakMap,f="undefined"!=typeof WeakSet,s="undefined"!=typeof DataView,n=r&&void 0!==Symbol.iterator,l=r&&void 0!==Symbol.toStringTag,y=u&&"function"==typeof Set.prototype.entries,h=a&&"function"==typeof Map.prototype.entries,p=y&&Object.getPrototypeOf((new Set).entries()),g=h&&Object.getPrototypeOf((new Map).entries()),d=n&&"function"==typeof Array.prototype[Symbol.iterator],b=d&&Object.getPrototypeOf([][Symbol.iterator]()),m=n&&"function"==typeof String.prototype[Symbol.iterator],v=m&&Object.getPrototypeOf(""[Symbol.iterator]()),function(e){var t=void 0===e?"undefined":Se(e);if("object"!==t)return t;if(null===e)return"null";if(e===i)return"global";if(Array.isArray(e)&&(!1===l||!(Symbol.toStringTag in e)))return"Array";if("object"===("undefined"==typeof window?"undefined":Se(window))&&null!==window){if("object"===Se(window.location)&&e===window.location)return"Location";if("object"===Se(window.document)&&e===window.document)return"Document";if("object"===Se(window.navigator)){if("object"===Se(window.navigator.mimeTypes)&&e===window.navigator.mimeTypes)return"MimeTypeArray";if("object"===Se(window.navigator.plugins)&&e===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"===Se(window.HTMLElement))&&e instanceof window.HTMLElement){if("BLOCKQUOTE"===e.tagName)return"HTMLQuoteElement";if("TD"===e.tagName)return"HTMLTableDataCellElement";if("TH"===e.tagName)return"HTMLTableHeaderCellElement"}}var r=l&&e[Symbol.toStringTag];if("string"==typeof r)return r;var n=Object.getPrototypeOf(e);return n===RegExp.prototype?"RegExp":n===Date.prototype?"Date":o&&n===Promise.prototype?"Promise":u&&n===Set.prototype?"Set":a&&n===Map.prototype?"Map":f&&n===WeakSet.prototype?"WeakSet":c&&n===WeakMap.prototype?"WeakMap":s&&n===DataView.prototype?"DataView":a&&n===g?"Map Iterator":u&&n===p?"Set Iterator":d&&n===b?"Array Iterator":m&&n===v?"String Iterator":null===n?"Object":Object.prototype.toString.call(e).slice(8,-1)})}(_e={exports:{}},_e.exports),_e.exports);function Ae(e,t,r){if(t!=t)return function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}(e,Te,r);for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}function Me(e,t,r,n){for(var o=r-1,i=e.length;++o<i;)if(n(e[o],t))return o;return-1}function Te(e){return e!=e}var Ee=Array.prototype.splice;function Ne(e,t,r,n){var o,i=n?Me:Ae,a=-1,u=t.length,c=e;for(e===t&&(t=function(e,t){var r=-1,n=e.length;t||(t=Array(n));for(;++r<n;)t[r]=e[r];return t}(t)),r&&(c=function(e,t){for(var r=-1,n=e?e.length:0,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}(e,(o=r,function(e){return o(e)})));++a<u;)for(var f=0,s=t[a],l=r?r(s):s;-1<(f=i(c,l,f,n));)c!==e&&Ee.call(c,f,1),Ee.call(e,f,1);return e}var $e=function(e,t){return e&&e.length&&t&&t.length?Ne(e,t):e},Le="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ce="__lodash_hash_undefined__",Ie=9007199254740991,Fe="[object Function]",Pe="[object GeneratorFunction]",De=/^\[object .+?Constructor\]$/,Ve="object"==Le(w)&&w&&w.Object===Object&&w,xe="object"==("undefined"==typeof self?"undefined":Le(self))&&self&&self.Object===Object&&self,Re=Ve||xe||Function("return this")();function We(e,t){return!!(e?e.length:0)&&-1<function(e,t,r){if(t!=t)return function(e,t,r,n){var o=e.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}(e,Je,r);var n=r-1,o=e.length;for(;++n<o;)if(e[n]===t)return n;return-1}(e,t,0)}function He(e,t,r){for(var n=-1,o=e?e.length:0;++n<o;)if(r(t,e[n]))return!0;return!1}function Ke(e,t){for(var r=-1,n=e?e.length:0,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}function Je(e){return e!=e}function Be(t){return function(e){return t(e)}}function qe(e,t){return e.has(t)}var ze,Ge,Qe,Ue=Array.prototype,Xe=Function.prototype,Ye=Object.prototype,Ze=Re["__core-js_shared__"],et=(ze=/[^.]+$/.exec(Ze&&Ze.keys&&Ze.keys.IE_PROTO||""))?"Symbol(src)_1."+ze:"",tt=Xe.toString,rt=Ye.hasOwnProperty,nt=Ye.toString,ot=RegExp("^"+tt.call(rt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),it=Ue.splice,at=Math.max,ut=Math.min,ct=mt(Re,"Map"),ft=mt(Object,"create");function st(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function lt(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function yt(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function ht(e){var t=-1,r=e?e.length:0;for(this.__data__=new yt;++t<r;)this.add(e[t])}function pt(e,t){for(var r,n,o=e.length;o--;)if((r=e[o][0])===(n=t)||r!=r&&n!=n)return o;return-1}function gt(e){return!(!wt(e)||(t=e,et&&et in t))&&(vt(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?ot:De).test(function(e){if(null!=e){try{return tt.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e));var t}function dt(e){return(o=t=e)&&"object"==(void 0===o?"undefined":Le(o))&&(null!=(r=t)&&("number"==typeof(n=r.length)&&-1<n&&n%1==0&&n<=Ie)&&!vt(r))?e:[];var t,r,n,o}function bt(e,t){var r,n,o=e.__data__;return("string"==(n=void 0===(r=t)?"undefined":Le(r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function mt(e,t){var r,n,o=(n=t,null==(r=e)?undefined$4:r[n]);return gt(o)?o:undefined$4}function vt(e){var t=wt(e)?nt.call(e):"";return t==Fe||t==Pe}function wt(e){var t=void 0===e?"undefined":Le(e);return!!e&&("object"==t||"function"==t)}st.prototype.clear=function(){this.__data__=ft?ft(null):{}},st.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},st.prototype.get=function(e){var t=this.__data__;if(ft){var r=t[e];return r===Ce?undefined$4:r}return rt.call(t,e)?t[e]:undefined$4},st.prototype.has=function(e){var t=this.__data__;return ft?t[e]!==undefined$4:rt.call(t,e)},st.prototype.set=function(e,t){return this.__data__[e]=ft&&t===undefined$4?Ce:t,this},lt.prototype.clear=function(){this.__data__=[]},lt.prototype.delete=function(e){var t=this.__data__,r=pt(t,e);return!(r<0||(r==t.length-1?t.pop():it.call(t,r,1),0))},lt.prototype.get=function(e){var t=this.__data__,r=pt(t,e);return r<0?undefined$4:t[r][1]},lt.prototype.has=function(e){return-1<pt(this.__data__,e)},lt.prototype.set=function(e,t){var r=this.__data__,n=pt(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},yt.prototype.clear=function(){this.__data__={hash:new st,map:new(ct||lt),string:new st}},yt.prototype.delete=function(e){return bt(this,e).delete(e)},yt.prototype.get=function(e){return bt(this,e).get(e)},yt.prototype.has=function(e){return bt(this,e).has(e)},yt.prototype.set=function(e,t){return bt(this,e).set(e,t),this},ht.prototype.add=ht.prototype.push=function(e){return this.__data__.set(e,Ce),this},ht.prototype.has=function(e){return this.__data__.has(e)};var Ot=(Ge=function(e){var t=Ke(e,dt);return t.length&&t[0]===e[0]?function(e,t,r){for(var n=r?He:We,o=e[0].length,i=e.length,a=i,u=Array(i),c=1/0,f=[];a--;){var s=e[a];a&&t&&(s=Ke(s,Be(t))),c=ut(s.length,c),u[a]=!r&&(t||120<=o&&120<=s.length)?new ht(a&&s):undefined$4}s=e[0];var l=-1,y=u[0];e:for(;++l<o&&f.length<c;){var h=s[l],p=t?t(h):h;if(h=r||0!==h?h:0,!(y?qe(y,p):n(f,p,r))){for(a=i;--a;){var g=u[a];if(!(g?qe(g,p):n(e[a],p,r)))continue e}y&&y.push(p),f.push(h)}}return f}(t):[]},Qe=at(Qe===undefined$4?Ge.length-1:Qe,0),function(){for(var e=arguments,t=-1,r=at(e.length-Qe,0),n=Array(r);++t<r;)n[t]=e[Qe+t];t=-1;for(var o=Array(Qe+1);++t<Qe;)o[t]=e[t];return o[Qe]=n,function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}(Ge,this,o)});function _t(e){return"string"==typeof e?0<e.length?[e]:[]:e}function jt(e){return null!=e}function St(e){return"boolean"==typeof e}function kt(e){return!jt(e)||St(e)?[""]:Array.isArray(e)?e.filter(function(e){return jt(e)&&!St(e)}).map(function(e){return String(e)}).filter(function(e){return 0<e.length}):[String(e)]}function At(e,t,r,n){for(var o=!0,i=je(e),a=0,u=i.length;a<u;a++)if(n){if(i[a].toLowerCase()!==t[r-je(e).length+a].toLowerCase()){o=!1;break}}else if(i[a]!==t[r-je(e).length+a]){o=!1;break}return o}function Mt(e,t,r,n){for(var o=!0,i=je(e),a=0,u=i.length;a<u;a++)if(n){if(i[a].toLowerCase()!==t[r+a].toLowerCase()){o=!1;break}}else if(i[a]!==t[r+a]){o=!1;break}return o}return function(e,t,r){var n={i:{leftOutsideNot:!1,leftOutside:!1,leftMaybe:!1,searchFor:!1,rightMaybe:!1,rightOutside:!1,rightOutsideNot:!1}},o=Object.assign({},n,t);!function(n,e,t){function o(e){return null!=e}function r(e){return"boolean"===ke(e)}function i(e){return"string"===ke(e)}function a(e){return"Object"===ke(e)}var u=["any","anything","every","everything","all","whatever","whatevs"],c=Array.isArray;if(0===arguments.length)throw new Error("check-types-mini: [THROW_ID_01] Missing all arguments!");if(1===arguments.length)throw new Error("check-types-mini: [THROW_ID_02] Missing second argument!");var f=a(e)?e:{},s={ignoreKeys:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"},l=void 0;if(!i((l=o(t)&&a(t)?Object.assign({},s,t):Object.assign({},s)).msg))throw new Error("check-types-mini: [THROW_ID_03] opts.msg must be string! Currently it's: "+ke(l.msg)+", equal to "+JSON.stringify(l.msg,null,4));if(l.msg=l.msg.trim(),":"===l.msg[l.msg.length-1]&&(l.msg=l.msg.slice(0,l.msg.length-1)),!i(l.optsVarName))throw new Error("check-types-mini: [THROW_ID_04] opts.optsVarName must be string! Currently it's: "+ke(l.optsVarName)+", equal to "+JSON.stringify(l.optsVarName,null,4));if(l.ignoreKeys=_t(l.ignoreKeys),l.acceptArraysIgnore=_t(l.acceptArraysIgnore),!c(l.ignoreKeys))throw new TypeError("check-types-mini: [THROW_ID_05] opts.ignoreKeys should be an array, currently it's: "+ke(l.ignoreKeys));if(!r(l.acceptArrays))throw new TypeError("check-types-mini: [THROW_ID_06] opts.acceptArrays should be a Boolean, currently it's: "+ke(l.acceptArrays));if(!c(l.acceptArraysIgnore))throw new TypeError("check-types-mini: [THROW_ID_07] opts.acceptArraysIgnore should be an array, currently it's: "+ke(l.acceptArraysIgnore));if(!r(l.enforceStrictKeyset))throw new TypeError("check-types-mini: [THROW_ID_08] opts.enforceStrictKeyset should be a Boolean, currently it's: "+ke(l.enforceStrictKeyset));if(Object.keys(l.schema).forEach(function(e){c(l.schema[e])||(l.schema[e]=[l.schema[e]]),l.schema[e]=l.schema[e].map(String).map(function(e){return e.toLowerCase()}).map(function(e){return e.trim()})}),l.enforceStrictKeyset)if(o(l.schema)&&0<Object.keys(l.schema).length){if(0!==$e(Object.keys(n),Object.keys(f).concat(Object.keys(l.schema))).length)throw new TypeError(l.msg+": "+l.optsVarName+".enforceStrictKeyset is on and the following keys are not covered by schema and/or reference objects: "+JSON.stringify($e(Object.keys(n),Object.keys(f).concat(Object.keys(l.schema))),null,4))}else{if(!(o(f)&&0<Object.keys(f).length))throw new TypeError(l.msg+": Both "+l.optsVarName+".schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!");if(0!==$e(Object.keys(n),Object.keys(f)).length)throw new TypeError(l.msg+": The input object has keys that are not covered by reference object: "+JSON.stringify($e(Object.keys(n),Object.keys(f)),null,4));if(0!==$e(Object.keys(f),Object.keys(n)).length)throw new TypeError(l.msg+": The reference object has keys that are not present in the input object: "+JSON.stringify($e(Object.keys(f),Object.keys(n)),null,4))}Object.keys(n).forEach(function(t){if(o(l.schema)&&Object.prototype.hasOwnProperty.call(l.schema,t)){if(l.schema[t]=_t(l.schema[t]).map(String).map(function(e){return e.toLowerCase()}),!(Ot(l.schema[t],u).length||(!0===n[t]||!1===n[t]||l.schema[t].includes(ke(n[t]).toLowerCase()))&&(!0!==n[t]&&!1!==n[t]||l.schema[t].includes(String(n[t]))||l.schema[t].includes("boolean")))){if(!c(n[t])||!l.acceptArrays)throw new TypeError(l.msg+": "+l.optsVarName+"."+t+" was customised to "+JSON.stringify(n[t],null,4)+" which is not among the allowed types in schema ("+l.schema[t]+") but "+ke(n[t]));for(var e=0,r=n[t].length;e<r;e++)if(!l.schema[t].includes(ke(n[t][e]).toLowerCase()))throw new TypeError(l.msg+": "+l.optsVarName+"."+t+" is of type "+ke(n[t][e]).toLowerCase()+", but only the following are allowed in "+l.optsVarName+".schema: "+l.schema[t])}}else if(o(f)&&Object.prototype.hasOwnProperty.call(f,t)&&ke(n[t])!==ke(f[t])&&!l.ignoreKeys.includes(t)){if(!l.acceptArrays||!c(n[t])||l.acceptArraysIgnore.includes(t))throw new TypeError(l.msg+": "+l.optsVarName+"."+t+" was customised to "+JSON.stringify(n[t],null,4)+" which is not "+ke(f[t])+" but "+ke(n[t]));if(!n[t].every(function(e){return ke(e)===ke(f[t])}))throw new TypeError(l.msg+": "+l.optsVarName+"."+t+" was customised to be array, but not all of its elements are "+ke(f[t])+"-type")}})}(o,n,{schema:{leftOutsideNot:["string","number","null","undefined"],leftOutside:["string","number","null","undefined"],leftMaybe:["string","number","null","undefined"],searchFor:["string","number"],rightMaybe:["string","number","null","undefined"],rightOutside:["string","number","null","undefined"],rightOutsideNot:["string","number","null","undefined"]},msg:"easy-replace/module.exports():",optsVarName:"options",acceptArrays:!0,acceptArraysIgnore:["i"]});var i=kt(e);o.leftOutsideNot=kt(o.leftOutsideNot),o.leftOutside=kt(o.leftOutside),o.leftMaybe=kt(o.leftMaybe),o.searchFor=String(o.searchFor),o.rightMaybe=kt(o.rightMaybe),o.rightOutside=kt(o.rightOutside),o.rightOutsideNot=kt(o.rightOutsideNot);for(var a=kt(r),u=je(i[0]),c=void 0,f=void 0,s=void 0,l=void 0,y=[],h="",p=function(e,t,r){if("string"!=typeof e||0===e.length||"string"!=typeof t||0===t.length)return[];for(var n=[],o=je(e),i=je(t),a=void 0,u=0;u<o.length;u++)if(r.i){if(o[u].toLowerCase()===i[0].toLowerCase()){a=!0;for(var c=0;c<i.length;c++)if(!jt(o[u+c])||!jt(i[c])||o[u+c].toLowerCase()!==i[c].toLowerCase()){a=!1;break}a&&n.push(u)}}else if(o[u]===i[0]){a=!0;for(var f=0;f<i.length;f++)if(o[u+f]!==i[f]){a=!1;break}a&&n.push(u)}return n}(i[0],o.searchFor,{i:o.i.searchFor}),g=0,d=p.length;g<d;g++){var b=p[g];if(f=(c=b)+je(o.searchFor).length,0<o.leftMaybe.length)for(var m=0,v=o.leftMaybe.length;m<v;m++){s=!0;for(var w=je(o.leftMaybe[m]),O=0,_=w.length;O<_;O++)if(o.i.leftMaybe){if(w[O].toLowerCase()!==u[b-w.length+O].toLowerCase()){s=!1;break}}else if(w[O]!==u[b-w.length+O]){s=!1;break}s&&b-w.length<c&&(c=b-w.length)}if(0<o.rightMaybe.length)for(var j=0,S=o.rightMaybe.length;j<S;j++){s=!0;for(var k=je(o.rightMaybe[j]),A=0,M=k.length;A<M;A++)if(o.i.rightMaybe){if(k[A].toLowerCase()!==u[b+je(o.searchFor).length+A].toLowerCase()){s=!1;break}}else if(k[A]!==u[b+je(o.searchFor).length+A]){s=!1;break}s&&f<b+je(o.searchFor).length+k.length&&(f=b+je(o.searchFor).length+k.length)}if(""!==o.leftOutside[0]){l=!1;for(var T=0,E=o.leftOutside.length;T<E;T++)(s=At(o.leftOutside[T],u,c,o.i.leftOutside))&&(l=!0);if(!l)continue}if(""!==o.rightOutside[0]){l=!1;for(var N=0,$=o.rightOutside.length;N<$;N++)(s=Mt(o.rightOutside[N],u,f,o.i.rightOutside))&&(l=!0);if(!l)continue}if(""!==o.leftOutsideNot[0]){for(var L=0,C=o.leftOutsideNot.length;L<C;L++)if(s=At(o.leftOutsideNot[L],u,c,o.i.leftOutsideNot)){f=c=-1;break}if(-1===c)continue}if(""!==o.rightOutsideNot[0]){for(var I=0,F=o.rightOutsideNot.length;I<F;I++)if(s=Mt(o.rightOutsideNot[I],u,f,o.i.rightOutsideNot)){f=c=-1;break}if(-1===c)continue}y.push([c,f])}return 0<y.length?(y.forEach(function(e,t){y[t+1]!==undefined$7&&y[t][1]>y[t+1][0]&&(y[t+1][0]=y[t][1])}),y.forEach(function(e,t){e[0]===e[1]&&y.splice(t,1)}),0<y.length&&0!==y[0][0]&&(h+=u.slice(0,y[0][0]).join("")),y.forEach(function(e,t){h+=a.join(""),y[t+1]!==undefined$7?h+=u.slice(y[t][1],y[t+1][0]).join(""):h+=u.slice(y[t][1]).join("")}),h):i.join("")}});
