/**
 * string-remove-thousand-separators
 * Detects and removes thousand separators (dot/comma/quote/space) from string-type digits
 * Version: 5.0.2
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/string-remove-thousand-separators/
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).stringRemoveThousandSeparators={})}(this,(function(e){"use strict";function r(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function t(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function n(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?t(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(i,r))}))}return e}var i={strictlyTwoElementsInRangeArrays:!1,progressFn:null};function s(e,r){if(!Array.isArray(e)||!e.length)return e;var t,s,o=n(n({},i),r);if(o.strictlyTwoElementsInRangeArrays&&!e.filter((function(e){return e})).every((function(e,r){return 2===e.length||(t=r,s=e.length,!1)})))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, "+t+"th range ("+JSON.stringify(e[t],null,4)+") has not two but "+s+" elements!");if(!e.filter((function(e){return e})).every((function(e,r){return!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(t=r,!1)})))throw new TypeError("ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, "+t+"th range ("+JSON.stringify(e[t],null,4)+") does not consist of only natural numbers!");var a=Math.pow(e.filter((function(e){return e})).length,2),u=0;return Array.from(e).filter((function(e){return e})).sort((function(e,r){return o.progressFn&&o.progressFn(Math.floor(100*(u+=1)/a)),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1}))}var o={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};function a(e,r){function t(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!Array.isArray(e)||!e.length)return null;var i;if(r){if(!t(r))throw new Error("emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n"+JSON.stringify(r,null,4)+" (type "+typeof r+")");if((i=n(n({},o),r)).progressFn&&t(i.progressFn)&&!Object.keys(i.progressFn).length)i.progressFn=null;else if(i.progressFn&&"function"!=typeof i.progressFn)throw new Error('ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "'+typeof i.progressFn+'", equal to '+JSON.stringify(i.progressFn,null,4));if(i.mergeType&&1!=+i.mergeType&&2!=+i.mergeType)throw new Error('ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'+typeof i.mergeType+'", equal to '+JSON.stringify(i.mergeType,null,4));if("boolean"!=typeof i.joinRangesThatTouchEdges)throw new Error('ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "'+typeof i.joinRangesThatTouchEdges+'", equal to '+JSON.stringify(i.joinRangesThatTouchEdges,null,4))}else i=n({},o);var a,u,f,l=e.filter((function(e){return e})).map((function(e){return[].concat(e)})).filter((function(e){return void 0!==e[2]||e[0]!==e[1]}));if(!(a=i.progressFn?s(l,{progressFn:function(e){(f=Math.floor(e/5))!==u&&(u=f,i.progressFn(f))}}):s(l)))return null;for(var g=a.length-1,p=g;p>0;p--)i.progressFn&&(f=Math.floor(78*(1-p/g))+21)!==u&&f>u&&(u=f,i.progressFn(f)),(a[p][0]<=a[p-1][0]||!i.joinRangesThatTouchEdges&&a[p][0]<a[p-1][1]||i.joinRangesThatTouchEdges&&a[p][0]<=a[p-1][1])&&(a[p-1][0]=Math.min(a[p][0],a[p-1][0]),a[p-1][1]=Math.max(a[p][1],a[p-1][1]),void 0!==a[p][2]&&(a[p-1][0]>=a[p][0]||a[p-1][1]<=a[p][1])&&null!==a[p-1][2]&&(null===a[p][2]&&null!==a[p-1][2]?a[p-1][2]=null:null!=a[p-1][2]?2==+i.mergeType&&a[p-1][0]===a[p][0]?a[p-1][2]=a[p][2]:a[p-1][2]+=a[p][2]:a[p-1][2]=a[p][2]),a.splice(p,1),p=a.length);return a.length?a:null}function u(e,r){void 0===r&&(r=1);function t(e){return Array.from(e).reverse().join("")}function n(e,r,t){var n=t?"\n":"\r",i=t?"\r":"\n";if(!e)return e;for(var s=0,o="",a=0,u=e.length;a<u;a++)(e[a]===n||e[a]===i&&e[a-1]!==n)&&s++,"\r\n".includes(e[a])||" "===e[a]?" "===e[a]?o+=e[a]:e[a]===n?s<=r&&(o+=e[a],e[a+1]===i&&(o+=e[a+1],a++)):e[a]===i&&(!e[a-1]||e[a-1]!==n)&&s<=r&&(o+=e[a]):e[a+1]||s||(o+=" ");return o}if("string"==typeof e&&e.length){var i=1;"number"==typeof+r&&Number.isInteger(+r)&&+r>=0&&(i=+r);var s="",o="";if(e.trim()){if(!e[0].trim())for(var a=0,u=e.length;a<u;a++)if(e[a].trim()){s=e.slice(0,a);break}}else s=e;if(e.trim()&&(""===e.slice(-1).trim()||" "===e.slice(-1)))for(var f=e.length;f--;)if(e[f].trim()){o=e.slice(f+1);break}return""+n(s,i,!1)+e.trim()+t(n(t(o),i,!0))}return e}function f(e){return null!=e}function l(e){return Number.isInteger(e)&&e>=0}function g(e){return"string"==typeof e}var p={limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1},y=function(){function e(e){var r=n(n({},p),e);if(r.mergeType&&1!==r.mergeType&&2!==r.mergeType)if(g(r.mergeType)&&"1"===r.mergeType.trim())r.mergeType=1;else{if(!g(r.mergeType)||"2"!==r.mergeType.trim())throw new Error('ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'+typeof r.mergeType+'", equal to '+JSON.stringify(r.mergeType,null,4));r.mergeType=2}this.opts=r,this.ranges=[]}var r=e.prototype;return r.add=function(e,r,t){var n=this;if(null!=e||null!=r){if(f(e)&&!f(r)){if(Array.isArray(e)){if(e.length){if(e.some((function(e){return Array.isArray(e)})))return void e.forEach((function(e){Array.isArray(e)&&n.add.apply(n,e)}));e.length&&l(+e[0])&&l(+e[1])&&this.add.apply(this,e)}return}throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set ('+JSON.stringify(e,null,0)+') but second-one, "to" is not ('+JSON.stringify(r,null,0)+")")}if(!f(e)&&f(r))throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set ('+JSON.stringify(r,null,0)+') but first-one, "from" is not ('+JSON.stringify(e,null,0)+")");var i=+e,s=+r;if(l(t)&&(t=String(t)),!l(i)||!l(s))throw l(i)&&i>=0?new TypeError('ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it\'s of a type "'+typeof s+'" equal to: '+JSON.stringify(s,null,4)):new TypeError('ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it\'s of a type "'+typeof i+'" equal to: '+JSON.stringify(i,null,4));if(f(t)&&!g(t)&&!l(t))throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but "+typeof t+", equal to:\n"+JSON.stringify(t,null,4));if(f(this.ranges)&&Array.isArray(this.last())&&i===this.last()[1]){if(this.last()[1]=s,this.last(),null!==this.last()[2]&&f(t)){var o=!(this.last()[2]&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?t:this.last()[2]+t;this.opts.limitToBeAddedWhitespace&&(o=u(o,this.opts.limitLinebreaksCount)),g(o)&&!o.length||(this.last()[2]=o)}}else{this.ranges||(this.ranges=[]);var a=void 0===t||g(t)&&!t.length?[i,s]:[i,s,t&&this.opts.limitToBeAddedWhitespace?u(t,this.opts.limitLinebreaksCount):t];this.ranges.push(a)}}},r.push=function(e,r,t){this.add(e,r,t)},r.current=function(){var e=this;return Array.isArray(this.ranges)&&this.ranges.length?(this.ranges=a(this.ranges,{mergeType:this.opts.mergeType}),this.ranges&&this.opts.limitToBeAddedWhitespace?this.ranges.map((function(r){return f(r[2])?[r[0],r[1],u(r[2],e.opts.limitLinebreaksCount)]:r})):this.ranges):null},r.wipe=function(){this.ranges=[]},r.replace=function(e){if(Array.isArray(e)&&e.length){if(!Array.isArray(e[0])||!l(e[0][0]))throw new Error("ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, "+JSON.stringify(e[0],null,4)+" should be an array and its first element should be an integer, a string index.");this.ranges=Array.from(e)}else this.ranges=[]},r.last=function(){return Array.isArray(this.ranges)&&this.ranges.length?this.ranges[this.ranges.length-1]:null},e}(),h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},c="[object Symbol]",d=/^\s+|\s+$/g,m="\\u0300-\\u036f\\ufe20-\\ufe23",b="[\\ud800-\\udfff]",T="["+m+"\\u20d0-\\u20f0]",v="\\ud83c[\\udffb-\\udfff]",w="[^\\ud800-\\udfff]",O="(?:\\ud83c[\\udde6-\\uddff]){2}",S="[\\ud800-\\udbff][\\udc00-\\udfff]",_="(?:"+T+"|"+v+")"+"?",I="[\\ufe0e\\ufe0f]?",A=I+_+("(?:\\u200d(?:"+[w,O,S].join("|")+")"+I+_+")*"),N="(?:"+[w+T+"?",T,O,S,b].join("|")+")",j=RegExp(v+"(?="+v+")|"+N+A,"g"),R=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),E="object"==typeof self&&self&&self.Object===Object&&self,D="object"==typeof h&&h&&h.Object===Object&&h||E||Function("return this")();function W(e,r,t){if(r!=r)return function(e,r,t,n){for(var i=e.length,s=t+(n?1:-1);n?s--:++s<i;)if(r(e[s],s,e))return s;return-1}(e,F,t);for(var n=t-1,i=e.length;++n<i;)if(e[n]===r)return n;return-1}function F(e){return e!=e}function J(e){return function(e){return R.test(e)}(e)?function(e){return e.match(j)||[]}(e):function(e){return e.split("")}(e)}var H=Object.prototype.toString,k=D.Symbol,q=k?k.prototype:void 0,x=q?q.toString:void 0;function P(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&H.call(e)==c}(e))return x?x.call(e):"";var r=e+"";return"0"==r&&1/e==-Infinity?"-0":r}function C(e,r,t){var n=e.length;return t=void 0===t?n:t,!r&&t>=n?e:function(e,r,t){var n=-1,i=e.length;r<0&&(r=-r>i?0:i+r),(t=t>i?i:t)<0&&(t+=i),i=r>t?0:t-r>>>0,r>>>=0;for(var s=Array(i);++n<i;)s[n]=e[n+r];return s}(e,r,t)}var M=function(e,r,t){var n;if((e=null==(n=e)?"":P(n))&&(t||void 0===r))return e.replace(d,"");if(!e||!(r=P(r)))return e;var i=J(e),s=J(r);return C(i,function(e,r){for(var t=-1,n=e.length;++t<n&&W(r,e[t],0)>-1;);return t}(i,s),function(e,r){for(var t=e.length;t--&&W(r,e[t],0)>-1;);return t}(i,s)+1).join("")};e.remSep=function(e,r){var t,i=!0,s=[".",",","'"," "];if("string"!=typeof e)throw new TypeError("string-remove-thousand-separators/remSep(): [THROW_ID_01] Input must be string! Currently it's: "+typeof e+", equal to:\n"+JSON.stringify(e,null,4));if(r&&"object"!=typeof r)throw new TypeError("string-remove-thousand-separators/remSep(): [THROW_ID_02] Options object must be a plain object! Currently it's: "+typeof r+", equal to:\n"+JSON.stringify(r,null,4));var o=n(n({},{removeThousandSeparatorsFromNumbers:!0,padSingleDecimalPlaceNumbers:!0,forceUKStyle:!1}),r),u=M(e.trim(),'"');if(""===u)return u;for(var f=new y,l=0,g=u.length;l<g;l++){if(o.removeThousandSeparatorsFromNumbers&&""===u[l].trim()&&f.add(l,l+1),o.removeThousandSeparatorsFromNumbers&&"'"===u[l]&&(f.add(l,l+1),"'"===u[l+1])){i=!1;break}if(s.includes(u[l])){if(void 0!==u[l+1]&&/^\d*$/.test(u[l+1]))if(void 0!==u[l+2]){if(!/^\d*$/.test(u[l+2])){i=!1;break}if(void 0!==u[l+3]){if(!/^\d*$/.test(u[l+3])){i=!1;break}if(void 0!==u[l+4]&&/^\d*$/.test(u[l+4])){i=!1;break}if(o.removeThousandSeparatorsFromNumbers&&f.add(l,l+1),t){if(u[l]!==t){i=!1;break}}else t=u[l]}else o.removeThousandSeparatorsFromNumbers&&o.forceUKStyle&&","===u[l]&&f.add(l,l+1,".")}else o.forceUKStyle&&","===u[l]&&f.add(l,l+1,"."),o.padSingleDecimalPlaceNumbers&&f.add(l+2,l+2,"0")}else if(!/^\d*$/.test(u[l])){i=!1;break}}return i&&f.current()?function(e,r,t){var n,i=0,s=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof e)throw new TypeError("ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: "+typeof e+", equal to: "+JSON.stringify(e,null,4));if(r&&!Array.isArray(r))throw new TypeError("ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: "+typeof r+", equal to: "+JSON.stringify(r,null,4));if(t&&"function"!=typeof t)throw new TypeError("ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: "+typeof t+", equal to: "+JSON.stringify(t,null,4));if(!r||!r.filter((function(e){return e})).length)return e;var o=(n=Array.isArray(r)&&Number.isInteger(r[0])&&Number.isInteger(r[1])?[Array.from(r)]:Array.from(r)).length,u=0;n.filter((function(e){return e})).forEach((function(e,r){if(t&&(i=Math.floor(u/o*10))!==s&&(s=i,t(i)),!Array.isArray(e))throw new TypeError("ranges-apply: [THROW_ID_05] ranges array, second input arg., has "+r+"th element not an array: "+JSON.stringify(e,null,4)+", which is "+typeof e);if(!Number.isInteger(e[0])){if(!Number.isInteger(+e[0])||+e[0]<0)throw new TypeError("ranges-apply: [THROW_ID_06] ranges array, second input arg. has "+r+"th element, array "+JSON.stringify(e,null,0)+". Its first element is not an integer, string index, but "+typeof e[0]+", equal to: "+JSON.stringify(e[0],null,4)+".");n[r][0]=+n[r][0]}if(!Number.isInteger(e[1])){if(!Number.isInteger(+e[1])||+e[1]<0)throw new TypeError("ranges-apply: [THROW_ID_07] ranges array, second input arg. has "+r+"th element, array "+JSON.stringify(e,null,0)+". Its second element is not an integer, string index, but "+typeof e[1]+", equal to: "+JSON.stringify(e[1],null,4)+".");n[r][1]=+n[r][1]}u+=1}));var f=a(n,{progressFn:function(e){t&&(i=10+Math.floor(e/10))!==s&&(s=i,t(i))}}),l=Array.isArray(f)?f.length:0;if(l>0){var g=e.slice(f[l-1][1]);e=f.reduce((function(r,n,o,a){return t&&(i=20+Math.floor(o/l*80))!==s&&(s=i,t(i)),r+e.slice(0===o?0:a[o-1][1],a[o][0])+(a[o][2]||"")}),""),e+=g}return e}(u,f.current()):u},e.version="5.0.2",Object.defineProperty(e,"__esModule",{value:!0})}));
