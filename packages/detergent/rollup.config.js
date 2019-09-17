import builtins from "rollup-plugin-node-builtins";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import cleanup from "rollup-plugin-cleanup";
import banner from "rollup-plugin-banner";
import strip from "rollup-plugin-strip";
import babel from "rollup-plugin-babel";
import json from "rollup-plugin-json";
import pkg from "./package.json";

const licensePiece = `${pkg.name}
${pkg.description}
Version: ${pkg.version}
Author: Roy Revelt, Codsen Ltd
License: ${pkg.license}
Homepage: ${pkg.homepage}`;

export default commandLineArgs => {
  const finalConfig = [
    // browser-friendly UMD build
    {
      input: "src/main.js",
      output: {
        file: pkg.browser,
        format: "umd",
        name: "detergent"
      },
      plugins: [
        strip({
          sourceMap: false
        }),
        builtins(),
        resolve(),
        json(),
        commonjs(),
        babel(),
        terser(),
        banner(licensePiece)
      ]
    },

    // CommonJS build (for Node)
    {
      input: "src/main.js",
      output: [{ file: pkg.main, format: "cjs" }],
      external: [
        "all-named-html-entities",
        "ansi-regex",
        "arrayiffy-if-string",
        "he",
        "html-entities-not-email-friendly",
        "lodash.clonedeep",
        "lodash.isplainobject",
        "object-merge-advanced",
        "ranges-apply",
        "ranges-process-outside",
        "ranges-push",
        "string-apostrophes",
        "string-collapse-white-space",
        "string-fix-broken-named-entities",
        "string-left-right",
        "string-range-expander",
        "string-remove-widows",
        "string-strip-html",
        "string-trim-spaces-only"
      ],
      plugins: [
        strip({
          sourceMap: false
        }),
        builtins(),
        json(),
        babel(),
        cleanup(),
        banner(licensePiece)
      ]
    },

    // ES module build (for bundlers)
    {
      input: "src/main.js",
      output: [{ file: pkg.module, format: "es" }],
      external: [
        "all-named-html-entities",
        "ansi-regex",
        "arrayiffy-if-string",
        "he",
        "html-entities-not-email-friendly",
        "lodash.clonedeep",
        "lodash.isplainobject",
        "object-merge-advanced",
        "ranges-apply",
        "ranges-process-outside",
        "ranges-push",
        "string-apostrophes",
        "string-collapse-white-space",
        "string-fix-broken-named-entities",
        "string-left-right",
        "string-range-expander",
        "string-remove-widows",
        "string-strip-html",
        "string-trim-spaces-only"
      ],
      plugins: [
        strip({
          sourceMap: false
        }),
        builtins(),
        json(),
        cleanup(),
        banner(licensePiece)
      ]
    },

    // util.js build:
    {
      input: "src/util.js",
      output: [{ file: "dist/util.esm.js", format: "es" }],
      external: ["he"],
      plugins: [
        strip({
          sourceMap: false
        }),
        builtins(),
        resolve(),
        json(),
        cleanup()
      ]
    }
  ];

  if (commandLineArgs.dev) {
    // if rollup was called without a --dev flag,
    // dispose of a comment removal, strip():
    finalConfig.forEach((singleConfigVal, i) => {
      finalConfig[i].plugins.shift();
    });
    // https://github.com/rollup/rollup/issues/2694#issuecomment-463915954
    delete commandLineArgs.dev;
  }
  return finalConfig;
};