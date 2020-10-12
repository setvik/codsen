// rule: attribute-validate-id
// -----------------------------------------------------------------------------

import checkClassOrIdValue from "../../util/checkClassOrIdValue";
import checkForWhitespace from "../../util/checkForWhitespace";

function attributeValidateId(context, ...opts) {
  return {
    attribute(node) {
      console.log(
        `███████████████████████████████████████ attributeValidateId() ███████████████████████████████████████`
      );
      console.log(
        `014 ${`\u001b[${33}m${`opts`}\u001b[${39}m`} = ${JSON.stringify(
          opts,
          null,
          4
        )}`
      );
      console.log(
        `021 attributeValidateId(): node = ${JSON.stringify(node, null, 4)}`
      );

      if (node.attribName === "id") {
        // validate the parent
        if (
          ["base", "head", "html", "meta", "script", "style", "title"].includes(
            node.parent.tagName
          )
        ) {
          context.report({
            ruleId: "attribute-validate-id",
            idxFrom: node.attribStarts,
            idxTo: node.attribEnds,
            message: `Tag "${node.parent.tagName}" can't have attribute "${node.attribName}".`,
            fix: null,
          });
        }
        // if value is empty or otherwise does not exist
        else if (!node.attribValueStartsAt || !node.attribValueEndsAt) {
          context.report({
            ruleId: `attribute-validate-${node.attribName.toLowerCase()}`,
            idxFrom: node.attribStarts,
            idxTo: node.attribEnds,
            message: `Missing value.`,
            fix: null,
          });
        } else {
          const { charStart, charEnd, errorArr } = checkForWhitespace(
            node.attribValueRaw,
            node.attribValueStartsAt
          );
          console.log(
            `054 \n${`\u001b[${33}m${`node.attribValueStartsAt + charStart`}\u001b[${39}m`} = ${JSON.stringify(
              node.attribValueStartsAt + charStart,
              null,
              4
            )}; \n${`\u001b[${33}m${`node.attribValueStartsAt + charEnd`}\u001b[${39}m`} = ${JSON.stringify(
              node.attribValueStartsAt + charEnd,
              null,
              4
            )}; \n${`\u001b[${33}m${`errorArr`}\u001b[${39}m`} = ${JSON.stringify(
              errorArr,
              null,
              4
            )}`
          );

          console.log(
            `070 ${`\u001b[${36}m${`traverse and extract id's`}\u001b[${39}m`}`
          );

          checkClassOrIdValue(
            context.str,
            {
              typeName: node.attribName, // class|id|for
              from: node.attribValueStartsAt + charStart,
              to: node.attribValueStartsAt + charEnd,
              offset: 0,
            },
            errorArr // might be mutated, more errors pushed into
          );

          console.log(
            `085 ███████████████████████████████████████\nFINALLY,\n${`\u001b[${33}m${`errorArr`}\u001b[${39}m`}:\n${JSON.stringify(
              errorArr,
              null,
              4
            )}`
          );

          errorArr.forEach((errorObj) => {
            console.log(`093 RAISE ERROR`);
            context.report({ ...errorObj, ruleId: "attribute-validate-id" });
          });
        }
      }
    },
  };
}

export default attributeValidateId;
