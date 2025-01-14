import { Linter, RuleObjType } from "../../linter";
import { badChars } from "../../util/bad-character-all";

// rule: bad-character-control-sequence-introducer
// -----------------------------------------------------------------------------

// Catches raw character "CONTROL SEQUENCE INTRODUCER":
// https://www.fileformat.info/info/unicode/char/009b/index.htm

function badCharacterControlSequenceIntroducer(context: Linter): RuleObjType {
  const charCode = 155;
  return {
    character({ chr, i }) {
      if (chr.charCodeAt(0) === charCode) {
        context.report({
          ruleId: badChars.get(charCode) as string,
          message: "Bad character - CONTROL SEQUENCE INTRODUCER.",
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

export default badCharacterControlSequenceIntroducer;
