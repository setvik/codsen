// rule: attribute-validate-name
// -----------------------------------------------------------------------------

import checkForWhitespace from "../../util/checkForWhitespace";

function attributeValidateName(context, ...opts) {
  return {
    attribute(node) {
      console.log(
        `███████████████████████████████████████ attributeValidateName() ███████████████████████████████████████`
      );
      console.log(
        `013 ${`\u001b[${33}m${`opts`}\u001b[${39}m`} = ${JSON.stringify(
          opts,
          null,
          4
        )}`
      );
      console.log(
        `020 attributeValidateName(): node = ${JSON.stringify(node, null, 4)}`
      );

      if (node.attribName === "name") {
        // validate the parent
        if (
          ![
            "button",
            "textarea",
            "applet",
            "select",
            "form",
            "frame",
            "iframe",
            "img",
            "a",
            "input",
            "object",
            "map",
            "param",
            "meta",
          ].includes(node.parent.tagName)
        ) {
          context.report({
            ruleId: "attribute-validate-name",
            idxFrom: node.attribStarts,
            idxTo: node.attribEnds,
            message: `Tag "${node.parent.tagName}" can't have attribute "${node.attribName}".`,
            fix: null,
          });
        }

        // if value is empty or otherwise does not exist
        if (!node.attribValueStartsAt || !node.attribValueEndsAt) {
          context.report({
            ruleId: `attribute-validate-${node.attribName.toLowerCase()}`,
            idxFrom: node.attribStarts,
            idxTo: node.attribEnds,
            message: `Missing value.`,
            fix: null,
          });
        } else {
          // only check for rogue whitespace because value can be any CDATA
          const { errorArr } = checkForWhitespace(
            node.attribValueRaw,
            node.attribValueStartsAt
          );
          console.log(
            `068 ${`\u001b[${33}m${`errorArr`}\u001b[${39}m`} = ${JSON.stringify(
              errorArr,
              null,
              4
            )}`
          );
          errorArr.forEach((errorObj) => {
            console.log(`075 RAISE ERROR`);
            context.report({ ...errorObj, ruleId: "attribute-validate-name" });
          });
        }
      }
    },
  };
}

export default attributeValidateName;
