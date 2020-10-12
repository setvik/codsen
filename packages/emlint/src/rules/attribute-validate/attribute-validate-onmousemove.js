// rule: attribute-validate-onmousemove
// -----------------------------------------------------------------------------

import validateScript from "../../util/validateScript";

function attributeValidateOnmousemove(context, ...originalOpts) {
  return {
    attribute(node) {
      console.log(
        `███████████████████████████████████████ attributeValidateOnmousemove() ███████████████████████████████████████`
      );
      console.log(
        `013 ${`\u001b[${33}m${`originalOpts`}\u001b[${39}m`} = ${JSON.stringify(
          originalOpts,
          null,
          4
        )}`
      );
      console.log(
        `020 attributeValidateOnmousemove(): node = ${JSON.stringify(
          node,
          null,
          4
        )}`
      );

      // preparing for the future:
      // const opts = { ...originalOpts };

      if (node.attribName === "onmousemove") {
        // validate the parent
        if (
          [
            "applet",
            "base",
            "basefont",
            "bdo",
            "br",
            "font",
            "frame",
            "frameset",
            "head",
            "html",
            "iframe",
            "isindex",
            "meta",
            "param",
            "script",
            "style",
            "title",
          ].includes(node.parent.tagName)
        ) {
          context.report({
            ruleId: "attribute-validate-onmousemove",
            idxFrom: node.attribStarts,
            idxTo: node.attribEnds,
            message: `Tag "${node.parent.tagName}" can't have attribute "${node.attribName}".`,
            fix: null,
          });
        } // if value is empty or otherwise does not exist
        else if (!node.attribValueStartsAt || !node.attribValueEndsAt) {
          context.report({
            ruleId: `attribute-validate-${node.attribName.toLowerCase()}`,
            idxFrom: node.attribStarts,
            idxTo: node.attribEnds,
            message: `Missing value.`,
            fix: null,
          });
        } else {
          // validate the script value
          const errorArr = validateScript(
            node.attribValueRaw,
            node.attribValueStartsAt
          );
          console.log(
            `076 attributeValidateOnmousemove(): received errorArr = ${JSON.stringify(
              errorArr,
              null,
              4
            )}`
          );

          errorArr.forEach((errorObj) => {
            console.log(`084 attributeValidateOnmousemove(): RAISE ERROR`);
            context.report({
              ...errorObj,
              ruleId: "attribute-validate-onmousemove",
            });
          });
        }
      }
    },
  };
}

export default attributeValidateOnmousemove;
