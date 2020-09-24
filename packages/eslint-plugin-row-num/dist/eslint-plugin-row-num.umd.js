/**
 * eslint-plugin-row-num
 * ESLint plugin to update row numbers on each console.log
 * Version: 1.2.11
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/eslint-plugin-row-num/
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).eslintPluginRowNum=r()}(this,(function(){"use strict";function e(r){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}function r(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?n(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function o(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return i(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var s=" ";function u(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;function t(e){return Array.from(e).reverse().join("")}function n(e,r,t){var n=t?"\n":"\r",a=t?"\r":"\n";if(!e)return e;for(var o=0,i="",u=0,l=e.length;u<l;u++)(e[u]===n||e[u]===a&&e[u-1]!==n)&&o++,"\r\n".includes(e[u])||e[u]===s?e[u]===s?i+=e[u]:e[u]===n?o<=r&&(i+=e[u],e[u+1]===a&&(i+=e[u+1],u++)):e[u]===a&&(!e[u-1]||e[u-1]!==n)&&o<=r&&(i+=e[u]):e[u+1]||o||(i+=" ");return i}if("string"==typeof e&&e.length){var a=1;"number"==typeof+r&&Number.isInteger(+r)&&+r>=0&&(a=+r);var o="",i="";if(e.trim()){if(!e[0].trim())for(var u=0,l=e.length;u<l;u++)if(e[u].trim()){o=e.slice(0,u);break}}else o=e;if(e.trim()&&(""===e.slice(-1).trim()||e.slice(-1)===s))for(var c=e.length;c--;)if(e[c].trim()){i=e.slice(c+1);break}return"".concat(n(o,a,!1)).concat(e.trim()).concat(t(n(t(i),a,!0)))}return e}function l(e,r){if(!Array.isArray(e)||!e.length)return e;var t,n,o=a(a({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null}),r);if(o.strictlyTwoElementsInRangeArrays&&!e.filter((function(e){return e})).every((function(e,r){return 2===e.length||(t=r,n=e.length,!1)})))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ".concat(t,"th range (").concat(JSON.stringify(e[t],null,4),") has not two but ").concat(n," elements!"));if(!e.filter((function(e){return e})).every((function(e,r){return!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(t=r,!1)})))throw new TypeError("ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ".concat(t,"th range (").concat(JSON.stringify(e[t],null,4),") does not consist of only natural numbers!"));var i=Math.pow(e.filter((function(e){return e})).length,2),s=0;return Array.from(e).filter((function(e){return e})).sort((function(e,r){return o.progressFn&&(s+=1,o.progressFn(Math.floor(100*s/i))),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1}))}function c(r,t){function n(e){return"string"==typeof e}function i(r){return r&&"object"===e(r)&&!Array.isArray(r)}if(!Array.isArray(r)||!r.length)return null;var s,u={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};if(t){if(!i(t))throw new Error("emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n".concat(JSON.stringify(t,null,4)," (type ").concat(e(t),")"));if((s=a(a({},u),t)).progressFn&&i(s.progressFn)&&!Object.keys(s.progressFn).length)s.progressFn=null;else if(s.progressFn&&"function"!=typeof s.progressFn)throw new Error('ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "'.concat(e(s.progressFn),'", equal to ').concat(JSON.stringify(s.progressFn,null,4)));if(s.mergeType&&1!==s.mergeType&&2!==s.mergeType)if(n(s.mergeType)&&"1"===s.mergeType.trim())s.mergeType=1;else{if(!n(s.mergeType)||"2"!==s.mergeType.trim())throw new Error('ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'.concat(e(s.mergeType),'", equal to ').concat(JSON.stringify(s.mergeType,null,4)));s.mergeType=2}if("boolean"!=typeof s.joinRangesThatTouchEdges)throw new Error('ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "'.concat(e(s.joinRangesThatTouchEdges),'", equal to ').concat(JSON.stringify(s.joinRangesThatTouchEdges,null,4)))}else s=a({},u);for(var c,g,f,y=r.filter((function(e){return e})).map((function(e){return o(e)})).filter((function(e){return void 0!==e[2]||e[0]!==e[1]})),p=(c=s.progressFn?l(y,{progressFn:function(e){(f=Math.floor(e/5))!==g&&(g=f,s.progressFn(f))}}):l(y)).length-1,h=p;h>0;h--)s.progressFn&&(f=Math.floor(78*(1-h/p))+21)!==g&&f>g&&(g=f,s.progressFn(f)),(c[h][0]<=c[h-1][0]||!s.joinRangesThatTouchEdges&&c[h][0]<c[h-1][1]||s.joinRangesThatTouchEdges&&c[h][0]<=c[h-1][1])&&(c[h-1][0]=Math.min(c[h][0],c[h-1][0]),c[h-1][1]=Math.max(c[h][1],c[h-1][1]),void 0!==c[h][2]&&(c[h-1][0]>=c[h][0]||c[h-1][1]<=c[h][1])&&null!==c[h-1][2]&&(null===c[h][2]&&null!==c[h-1][2]?c[h-1][2]=null:void 0!==c[h-1][2]?2===s.mergeType&&c[h-1][0]===c[h][0]?c[h-1][2]=c[h][2]:c[h-1][2]+=c[h][2]:c[h-1][2]=c[h][2]),c.splice(h,1),h=c.length);return c.length?c:null}function g(e){return null!=e}function f(e){return Number.isInteger(e)&&e>=0}function y(e){return"string"==typeof e}function p(e){return/^\d*$/.test(e)?parseInt(e,10):e}var h=function(){function t(r){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t);var n=a(a({},{limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1}),r);if(n.mergeType&&1!==n.mergeType&&2!==n.mergeType)if(y(n.mergeType)&&"1"===n.mergeType.trim())n.mergeType=1;else{if(!y(n.mergeType)||"2"!==n.mergeType.trim())throw new Error('ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'.concat(e(n.mergeType),'", equal to ').concat(JSON.stringify(n.mergeType,null,4)));n.mergeType=2}this.opts=n}var n,i,s;return n=t,(i=[{key:"add",value:function(r,t,n){for(var a=this,i=arguments.length,s=new Array(i>3?i-3:0),l=3;l<i;l++)s[l-3]=arguments[l];if(s.length>0)throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_03] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: ".concat(JSON.stringify(s,null,4)));if(g(r)||g(t)){if(g(r)&&!g(t)){if(Array.isArray(r)){if(r.length){if(r.some((function(e){return Array.isArray(e)})))return void r.forEach((function(e){Array.isArray(e)&&a.add.apply(a,o(e))}));r.length>1&&f(p(r[0]))&&f(p(r[1]))&&this.add.apply(this,o(r))}return}throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set ('.concat(JSON.stringify(r,null,0),') but second-one, "to" is not (').concat(JSON.stringify(t,null,0),")"))}if(!g(r)&&g(t))throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set ('.concat(JSON.stringify(t,null,0),') but first-one, "from" is not (').concat(JSON.stringify(r,null,0),")"));var c=/^\d*$/.test(r)?parseInt(r,10):r,h=/^\d*$/.test(t)?parseInt(t,10):t;if(f(n)&&(n=String(n)),!f(c)||!f(h))throw f(c)&&c>=0?new TypeError('ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it\'s of a type "'.concat(e(h),'" equal to: ').concat(JSON.stringify(h,null,4))):new TypeError('ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it\'s of a type "'.concat(e(c),'" equal to: ').concat(JSON.stringify(c,null,4)));if(g(n)&&!y(n)&&!f(n))throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ".concat(e(n),", equal to:\n").concat(JSON.stringify(n,null,4)));if(g(this.ranges)&&Array.isArray(this.last())&&c===this.last()[1]){if(this.last()[1]=h,this.last()[2],null!==this.last()[2]&&g(n)){var m=!(g(this.last()[2])&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?n:this.last()[2]+n;this.opts.limitToBeAddedWhitespace&&(m=u(m,this.opts.limitLinebreaksCount)),y(m)&&!m.length||(this.last()[2]=m)}}else{this.ranges||(this.ranges=[]);var d=void 0===n||y(n)&&!n.length?[c,h]:[c,h,this.opts.limitToBeAddedWhitespace?u(n,this.opts.limitLinebreaksCount):n];this.ranges.push(d)}}}},{key:"push",value:function(e,r,t){for(var n=arguments.length,a=new Array(n>3?n-3:0),o=3;o<n;o++)a[o-3]=arguments[o];this.add.apply(this,[e,r,t].concat(a))}},{key:"current",value:function(){var e=this;return null!=this.ranges?(this.ranges=c(this.ranges,{mergeType:this.opts.mergeType}),this.ranges&&this.opts.limitToBeAddedWhitespace?this.ranges.map((function(r){return g(r[2])?[r[0],r[1],u(r[2],e.opts.limitLinebreaksCount)]:r})):this.ranges):null}},{key:"wipe",value:function(){this.ranges=void 0}},{key:"replace",value:function(e){if(Array.isArray(e)&&e.length){if(!Array.isArray(e[0])||!f(e[0][0]))throw new Error("ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ".concat(JSON.stringify(e[0],null,4)," should be an array and its first element should be an integer, a string index."));this.ranges=Array.from(e)}else this.ranges=void 0}},{key:"last",value:function(){return void 0!==this.ranges&&Array.isArray(this.ranges)?this.ranges[this.ranges.length-1]:null}}])&&r(n.prototype,i),s&&r(n,s),t}();function m(e){return null!=e}function d(e){return"string"==typeof e}function w(r,t){if("string"!=typeof r||!r.length)return r;function n(e){return/[0-9]/.test(e)}function a(r){return r&&"object"===e(r)&&!Array.isArray(r)}var o=Object.assign({padStart:3,overrideRowNum:null,returnRangesOnly:!1,triggerKeywords:["console.log"],extractedLogContentsWereGiven:!1},t);(!o.padStart||"number"!=typeof o.padStart||"number"==typeof o.padStart&&o.padStart<0)&&(o.padStart=0);var i,s,u=new h,l=r.length,g=null,f=null,y=null,p=1,w=!1,v=null;for(o.padStart&&l>45e3&&(o.padStart=4),i=0;i<l;i++){if(null===o.overrideRowNum&&("\n"===r[i]||"\r"===r[i]&&"\n"!==r[i+1])&&(p+=1),!o.extractedLogContentsWereGiven&&null!==g&&g.start<i&&g.type===r[i]&&(g=null,f=null,y=null,v=null,w=!1),null===g&&(o.extractedLogContentsWereGiven||f&&f<i&&y&&y<i)&&r[i].trim())if('"'===r[i]||"'"===r[i]||"`"===r[i])(g={}).start=i,g.type=r[i],w=!1;else if(o.extractedLogContentsWereGiven&&null===v){if(!n(r[i]))break;v=i}else r[i].trim()&&"/"!==r[i]&&!o.extractedLogContentsWereGiven&&(f=null,y=null,v=null);if(g&&Number.isInteger(g.start)&&g.start<i&&!w&&null===v&&n(r[i])&&(v=i),!Number.isInteger(v)||n(r[i])&&r[i+1]||!(i>v)&&r[i+1]||(o.padStart||o.overrideRowNum,u.push(v,n(r[i])?i+1:i,o.padStart?String(null!=o.overrideRowNum?o.overrideRowNum:p).padStart(o.padStart,"0"):"".concat(null!=o.overrideRowNum?o.overrideRowNum:p)),v=null,w=!0),g&&Number.isInteger(g.start)&&g.start<i&&!w&&(s=r[i],/[A-Za-z]/.test(s))&&("n"!==r[i]||"\\"!==r[i-1])){if("\\"===r[i-1]&&"u"===r[i]&&"0"===r[i+1]&&"0"===r[i+2]&&"1"===r[i+3]&&("b"===r[i+4]||"B"===r[i+5])&&"["===r[i+5]){var b=void 0;n(r[i+6])?b=i+6:"$"===r[i+6]&&"{"===r[i+7]&&n(r[i+8])&&(b=i+8);var T=void 0;if(b)for(var O=b;O<l;O++)if(!n(r[O])){T=O;break}var R=void 0;if("m"===r[T]?R=T:"}"===r[T]&&"m"===r[T+1]&&(R=T+1),!R){w=!0;continue}if("$"===r[R+1]&&"{"===r[R+2]&&"`"===r[R+3]){i=R+3;continue}}w=!0}if(!y&&r[i].trim()&&f&&f<=i&&("("===r[i]?y=i:(f=null,v=null)),a(o)&&o.triggerKeywords&&Array.isArray(o.triggerKeywords)){for(var A=void 0,I=0,N=o.triggerKeywords.length;I<N;I++)if(r.startsWith(o.triggerKeywords[I],i)){A=o.triggerKeywords[I];break}if(A){f=i+A.length,i=i+A.length-1;continue}}}return g=null,f=null,y=null,p=1,w=void 0,v=null,p=1,o.returnRangesOnly?u.current():u.current()?function(r,t,n){var a,o=0,i=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if(!d(r))throw new TypeError("ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ".concat(e(r),", equal to: ").concat(JSON.stringify(r,null,4)));if(t&&!Array.isArray(t))throw new TypeError("ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ".concat(e(t),", equal to: ").concat(JSON.stringify(t,null,4)));if(n&&"function"!=typeof n)throw new TypeError("ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ".concat(e(n),", equal to: ").concat(JSON.stringify(n,null,4)));if(!t||!t.filter((function(e){return e})).length)return r;var s=(a=Array.isArray(t)&&(Number.isInteger(t[0])&&t[0]>=0||/^\d*$/.test(t[0]))&&(Number.isInteger(t[1])&&t[1]>=0||/^\d*$/.test(t[1]))?[Array.from(t)]:Array.from(t)).length,u=0;a.filter((function(e){return e})).forEach((function(r,t){if(n&&(o=Math.floor(u/s*10))!==i&&(i=o,n(o)),!Array.isArray(r))throw new TypeError("ranges-apply: [THROW_ID_05] ranges array, second input arg., has ".concat(t,"th element not an array: ").concat(JSON.stringify(r,null,4),", which is ").concat(e(r)));if(!Number.isInteger(r[0])||r[0]<0){if(!/^\d*$/.test(r[0]))throw new TypeError("ranges-apply: [THROW_ID_06] ranges array, second input arg. has ".concat(t,"th element, array [").concat(r[0],",").concat(r[1],"]. That array has first element not an integer, but ").concat(e(r[0]),", equal to: ").concat(JSON.stringify(r[0],null,4),". Computer doesn't like this."));a[t][0]=Number.parseInt(a[t][0],10)}if(!Number.isInteger(r[1])){if(!/^\d*$/.test(r[1]))throw new TypeError("ranges-apply: [THROW_ID_07] ranges array, second input arg. has ".concat(t,"th element, array [").concat(r[0],",").concat(r[1],"]. That array has second element not an integer, but ").concat(e(r[1]),", equal to: ").concat(JSON.stringify(r[1],null,4),". Computer doesn't like this."));a[t][1]=Number.parseInt(a[t][1],10)}u+=1}));var l=c(a,{progressFn:function(e){n&&(o=10+Math.floor(e/10))!==i&&(i=o,n(o))}});if(!l)return r;var g=l.length;if(g>0){var f=r.slice(l[g-1][1]);r=l.reduce((function(e,t,a,s){n&&(o=20+Math.floor(a/g*80))!==i&&(i=o,n(o));var u=0===a?0:s[a-1][1],l=s[a][0];return e+r.slice(u,l)+(m(s[a][2])?s[a][2]:"")}),""),r+=f}return r}(r,u.current()):r}return{configs:{recommended:{plugins:["row-num"],rules:{"no-console":"off","row-num/correct-row-num":"error"}}},rules:{"correct-row-num":{create:function(r){return{CallExpression:function(t){t.callee&&"MemberExpression"===t.callee.type&&t.callee.object&&"Identifier"===t.callee.object.type&&"console"===t.callee.object.name&&t.callee.property&&"Identifier"===t.callee.property.type&&"log"===t.callee.property.name&&t.arguments&&Array.isArray(t.arguments)&&t.arguments.length&&t.arguments.forEach((function(n){"Literal"===n.type&&"string"==typeof n.raw&&n.raw!==w(n.raw,{overrideRowNum:n.loc.start.line,returnRangesOnly:!1,extractedLogContentsWereGiven:!0})?r.report({node:t,messageId:"correctRowNum",fix:function(e){var r=w(n.raw,{overrideRowNum:n.loc.start.line,returnRangesOnly:!0,extractedLogContentsWereGiven:!0}),t=[n.start+r[0][0],n.start+r[0][1]];return e.replaceTextRange(t,r[0][2])}}):"TemplateLiteral"===n.type&&Array.isArray(n.quasis)&&n.quasis.length&&"object"===e(n.quasis[0])&&n.quasis[0].value&&n.quasis[0].value.raw&&n.quasis[0].value.raw!==w(n.quasis[0].value.raw,{overrideRowNum:n.loc.start.line,returnRangesOnly:!1,extractedLogContentsWereGiven:!0})&&r.report({node:t,messageId:"correctRowNum",fix:function(e){var r=w(n.quasis[0].value.raw,{overrideRowNum:n.loc.start.line,returnRangesOnly:!0,extractedLogContentsWereGiven:!0}),t=[n.start+1+r[0][0],n.start+1+r[0][1]];return e.replaceTextRange(t,r[0][2])}})}))}}},meta:{type:"suggestion",messages:{correctRowNum:"Update the row number."},fixable:"code"}}}}}));
