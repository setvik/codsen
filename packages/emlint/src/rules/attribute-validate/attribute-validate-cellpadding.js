// rule: attribute-validate-cellspacing
// -----------------------------------------------------------------------------

import validateDigitAndUnit from "../../util/validateDigitAndUnit";

function attributeValidateCellpadding(context, ...opts) {
  return {
    attribute(node) {
      console.log(
        `███████████████████████████████████████ attributeValidateCellpadding() ███████████████████████████████████████`
      );
      console.log(
        `013 ${`\u001b[${33}m${`opts`}\u001b[${39}m`} = ${JSON.stringify(
          opts,
          null,
          4
        )}`
      );
      // console.log(
      //   `015 attributeValidateCellpadding(): node = ${JSON.stringify(node, null, 4)}`
      // );

      if (node.attribName === "cellpadding") {
        // validate the parent
        if (node.parent.tagName !== "table") {
          context.report({
            ruleId: "attribute-validate-cellpadding",
            idxFrom: node.attribStarts,
            idxTo: node.attribEnds,
            message: `Tag "${node.parent.tagName}" can't have attribute "${node.attribName}".`,
            fix: null,
          });
        }

        const errorArr = validateDigitAndUnit(
          node.attribValueRaw,
          node.attribValueStartsAt,
          {
            type: "integer",
            negativeOK: false,
            theOnlyGoodUnits: ["%"],
            badUnits: ["px"],
            customGenericValueError:
              "Should be integer, either no units or percentage.",
          }
        );
        console.log(
          `048 received errorArr = ${JSON.stringify(errorArr, null, 4)}`
        );

        errorArr.forEach((errorObj) => {
          console.log(`052 RAISE ERROR`);
          context.report({
            ...errorObj,
            ruleId: "attribute-validate-cellpadding",
          });
        });
      }
    },
  };
}

export default attributeValidateCellpadding;
