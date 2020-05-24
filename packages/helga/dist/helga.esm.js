/**
 * helga
 * Your next best friend when editing complex nested code
 * Version: 1.1.33
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/helga
 */

import unescapeJs from 'unescape-js';

var version = "1.1.33";

const defaults = {
  targetJSON: false,
};
function helga(str, originalOpts) {
  const opts = { ...defaults, ...originalOpts };
  const beautified = unescapeJs(str);
  let minified = unescapeJs(str);
  if (opts.targetJSON) {
    minified = JSON.stringify(minified.replace(/\t/g, "  "), null, 0);
    minified = minified.slice(1, minified.length - 1);
  }
  return {
    minified,
    beautified,
  };
}

export { defaults, helga, version };
