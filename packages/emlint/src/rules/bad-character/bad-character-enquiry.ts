import { Linter, RuleObjType } from "../../linter";
import { badChars } from "../../util/bad-character-all";

// rule: bad-character-enquiry
// -----------------------------------------------------------------------------

// Catches raw character "ENQUIRY":
// https://www.fileformat.info/info/unicode/char/0005/index.htm

function badCharacterEnquiry(context: Linter): RuleObjType {
  const charCode = 5;
  return {
    character({ chr, i }) {
      if (chr.charCodeAt(0) === charCode) {
        context.report({
          ruleId: badChars.get(charCode) as string,
          message: "Bad character - ENQUIRY.",
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

export default badCharacterEnquiry;
