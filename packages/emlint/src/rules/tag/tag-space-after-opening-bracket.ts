import { Linter, RuleObjType } from "../../linter";
import { Ranges } from "../../../../../scripts/common";
import { left, right } from "string-left-right";

// rule: tag-space-after-opening-bracket
// -----------------------------------------------------------------------------

function tagSpaceAfterOpeningBracket(context: Linter): RuleObjType {
  return {
    tag(node) {
      console.log(
        `███████████████████████████████████████ tagSpaceAfterOpeningBracket() ███████████████████████████████████████`
      );
      console.log(`node = ${JSON.stringify(node, null, 4)}`);
      const ranges: Ranges = [];
      // const wholeGap = context.str.slice(node.start + 1, node.tagNameStartsAt);

      // 1. if there's whitespace after opening bracket
      if (
        // it starts on a bracket
        context.str[node.start] === "<" &&
        // and next character exists
        context.str[node.start + 1] &&
        // and it's a whitespace character
        !context.str[node.start + 1].trim()
      ) {
        console.log(`027 whitespace after opening bracket confirmed`);
        ranges.push([
          node.start + 1,
          right(context.str, node.start + 1) || context.str.length,
        ]);
      }

      // 2. if there's whitespace before tag name
      if (
        // it starts on a bracket
        context.str[node.start] === "<" &&
        // character in front of the tag's name is whitespace
        !context.str[node.tagNameStartsAt - 1].trim()
      ) {
        console.log(`041 whitespace before tag name confirmed`);
        const charToTheLeftOfTagNameIdx =
          left(context.str, node.tagNameStartsAt) || 0;
        if (charToTheLeftOfTagNameIdx !== node.start) {
          // we don't want duplication
          ranges.push([charToTheLeftOfTagNameIdx + 1, node.tagNameStartsAt]);
        }
      }

      if (ranges.length) {
        context.report({
          ruleId: "tag-space-after-opening-bracket",
          message: "Bad whitespace.",
          idxFrom: ranges[0][0],
          idxTo: ranges[ranges.length - 1][1], // second elem. from last range
          fix: { ranges },
        });
      }
    },
  };
}

export default tagSpaceAfterOpeningBracket;
