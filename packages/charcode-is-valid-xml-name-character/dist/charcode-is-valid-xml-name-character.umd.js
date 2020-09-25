/**
 * charcode-is-valid-xml-name-character
 * Does a given character belong to XML spec's "Production 4 OR 4a" type (is acceptable for XML element's name)
 * Version: 1.10.63
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/charcode-is-valid-xml-name-character/
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).charcodeIsValidXmlNameCharacter={})}(this,(function(e){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,n,r){var i=o(o({},{inclusiveRangeEnds:!1,returnMatchedRangeInsteadOfTrue:!1}),r);if(!Number.isInteger(e))throw new Error("ranges-is-index-within: [THROW_ID_01] the first input argument should be string index, a natural number (or zero). It was given as ".concat(e," (type ").concat(t(e),")"));return!!Array.isArray(n)&&(i.returnMatchedRangeInsteadOfTrue?n.find((function(t){return i.inclusiveRangeEnds?e>=t[0]&&e<=t[1]:e>t[0]&&e<t[1]}))||!1:n.some((function(t){return i.inclusiveRangeEnds?e>=t[0]&&e<=t[1]:e>t[0]&&e<t[1]})))}var c=[[58,58],[65,90],[95,95],[192,214],[216,246],[248,767],[880,893],[895,8191],[8204,8205],[8304,8591],[11264,12271],[12289,55295],[63744,64975],[65008,65533],[65536,983039]],u=[[45,45],[46,46],[48,57],[58,58],[65,90],[95,95],[183,183],[192,214],[216,246],[248,767],[768,879],[880,893],[895,8191],[8204,8205],[8255,8256],[8304,8591],[11264,12271],[12289,55295],[63744,64975],[65008,65533],[65536,983039]],a=[[97,122]],s={inclusiveRangeEnds:!0,skipIncomingRangeSorting:!0};function f(e){return i(e.codePointAt(0),a,s)||i(e.codePointAt(0),c,s)}function d(e){return i(e.codePointAt(0),a,s)||i(e.codePointAt(0),u,s)}e.isProduction4=f,e.isProduction4a=d,e.validFirstChar=f,e.validSecondCharOnwards=d,Object.defineProperty(e,"__esModule",{value:!0})}));
