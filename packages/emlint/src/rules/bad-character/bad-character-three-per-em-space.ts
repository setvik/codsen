import { Linter, RuleObjType } from "../../linter";
import { badChars } from "../../util/bad-character-all";

// rule: bad-character-three-per-em-space
// -----------------------------------------------------------------------------

// Catches raw character "THREE-PER-EM SPACE":
// https://www.fileformat.info/info/unicode/char/2004/index.htm

function badCharacterThreePerEmSpace(context: Linter): RuleObjType {
  const charCode = 8196;
  return {
    character({ chr, i }) {
      if (chr.charCodeAt(0) === charCode) {
        context.report({
          ruleId: badChars.get(charCode) as string,
          message: "Bad character - THREE-PER-EM SPACE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1, " "]], // replace with a normal space
          },
        });
      }
    },
  };
}

export default badCharacterThreePerEmSpace;
