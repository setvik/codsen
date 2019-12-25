// rule: attribute-validate-cellspacing
// -----------------------------------------------------------------------------

import { validateDigitOnly } from "../../util/util";

function attributeValidateCellspacing(context, ...opts) {
  return {
    attribute: function(node) {
      console.log(
        `███████████████████████████████████████ attributeValidateCellspacing() ███████████████████████████████████████`
      );
      console.log(
        `013 ${`\u001b[${33}m${`opts`}\u001b[${39}m`} = ${JSON.stringify(
          opts,
          null,
          4
        )}`
      );
      // console.log(
      //   `015 attributeValidateCellspacing(): node = ${JSON.stringify(node, null, 4)}`
      // );

      if (node.attribName === "cellspacing") {
        // validate the parent
        if (node.parent.tagName !== "table") {
          context.report({
            ruleId: "attribute-validate-cellspacing",
            idxFrom: node.attribStart,
            idxTo: node.attribEnd,
            message: `Tag "${node.parent.tagName}" can't have this attribute.`,
            fix: null
          });
        }

        const errorArr = validateDigitOnly(
          node.attribValue,
          node.attribValueStartAt,
          {
            type: "integer",
            percOK: true
          }
        );
        console.log(
          `044 received errorArr = ${JSON.stringify(errorArr, null, 4)}`
        );

        errorArr.forEach(errorObj => {
          console.log(`048 RAISE ERROR`);
          context.report(
            Object.assign({}, errorObj, {
              ruleId: "attribute-validate-cellspacing"
            })
          );
        });
      }
    }
  };
}

export default attributeValidateCellspacing;