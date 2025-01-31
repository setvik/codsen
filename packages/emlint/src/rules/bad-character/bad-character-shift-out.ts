import { Linter, RuleObjType } from "../../linter";
import { badChars } from "../../util/bad-character-all";

// rule: bad-character-shift-out
// -----------------------------------------------------------------------------

// Catches raw character "SHIFT OUT":
// https://www.fileformat.info/info/unicode/char/000e/index.htm

function badCharacterShiftOut(context: Linter): RuleObjType {
  const charCode = 14;
  return {
    character({ chr, i }) {
      if (chr.charCodeAt(0) === charCode) {
        context.report({
          ruleId: badChars.get(charCode) as string,
          message: "Bad character - SHIFT OUT.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]], // just delete it
          },
        });
      }
    },
  };
}

export default badCharacterShiftOut;
