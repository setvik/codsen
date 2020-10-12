// rule: attribute-duplicate
// -----------------------------------------------------------------------------

import merge from "ranges-merge";
import { right } from "string-left-right";
import splitByWhitespace from "../../util/splitByWhitespace";

// it flags up duplicate HTML attributes

function attributeDuplicate(context, ...opts) {
  const attributesWhichCanBeMerged = new Set(["id", "class"]);

  // imagine string:
  // `<a class="" class=""  >`
  // this rule will remove both classes, ending with:
  // [[2, 20]]
  // now these ranges don't include the trailing two spaces
  // when applied, yielding:
  // `<a  >` instead of `<a>`.
  // We need to extend the ending of the last range if it's on a
  // whitespace, leading up to / or >.

  function prepLast(ranges) {
    if (!Array.isArray(ranges) || !ranges.length) {
      return ranges;
    }
    if (!context.str[ranges[ranges.length - 1][1]].trim()) {
      console.log(
        `029 attributeDuplicate(): ${`\u001b[${32}m${`EXTEND`}\u001b[${39}m`} the last range ${JSON.stringify(
          ranges[ranges.length - 1],
          null,
          4
        )}`
      );

      const charOnTheRightIdx = right(
        context.str,
        ranges[ranges.length - 1][1]
      );
      console.log(
        `041 SET ${`\u001b[${33}m${`charOnTheRightIdx`}\u001b[${39}m`} = ${JSON.stringify(
          charOnTheRightIdx,
          null,
          4
        )}`
      );

      if (`/>`.includes(context.str[charOnTheRightIdx])) {
        console.log(`049 tag end reached - extend`);
        ranges[ranges.length - 1][1] = charOnTheRightIdx;
      }
    }
    return ranges;
  }

  return {
    tag(node) {
      console.log(
        `███████████████████████████████████████ attributeDuplicate() ███████████████████████████████████████`
      );
      console.log(
        `062 attributeDuplicate(): ${`\u001b[${33}m${`opts`}\u001b[${39}m`} = ${JSON.stringify(
          opts,
          null,
          4
        )}`
      );
      console.log(
        `069 attributeDuplicate(): node = ${JSON.stringify(node, null, 4)}`
      );

      // if there is more than 1 attribute
      if (Array.isArray(node.attribs) && node.attribs.length > 1) {
        const attrsGatheredSoFar = new Set(); // record unique names
        const mergeableAttrsCaught = new Set(); // also unique

        for (let i = 0, len = node.attribs.length; i < len; i++) {
          console.log(
            `079 attributeDuplicate(): ${`\u001b[${33}m${`node.attribs[${i}]`}\u001b[${39}m`} = ${JSON.stringify(
              node.attribs[i],
              null,
              4
            )}`
          );
          if (!attrsGatheredSoFar.has(node.attribs[i].attribName)) {
            attrsGatheredSoFar.add(node.attribs[i].attribName);
            console.log(
              `088 attributeDuplicate(): attrsGatheredSoFar = ${JSON.stringify(
                attrsGatheredSoFar,
                null,
                4
              )}`
            );
          } else if (
            !attributesWhichCanBeMerged.has(node.attribs[i].attribName) ||
            (Array.isArray(node.attribs[i].attribValue) &&
              node.attribs[i].attribValue.length &&
              node.attribs[i].attribValue.some(
                (obj) =>
                  obj.value &&
                  (obj.value.includes(`'`) || obj.value.includes(`"`))
              ))
          ) {
            console.log(
              `105 attributeDuplicate(): RAISE ERROR FOR "${node.attribs[i].attribName}"`
            );
            context.report({
              ruleId: "attribute-duplicate",
              message: `Duplicate attribute "${node.attribs[i].attribName}".`,
              idxFrom: node.attribs[i].attribStarts,
              idxTo: node.attribs[i].attribEnds,
              fix: null,
            });
          } else {
            mergeableAttrsCaught.add(node.attribs[i].attribName);
            console.log(
              `117 attributeDuplicate(): ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} ${`\u001b[${33}m${`mergeableAttrsCaught`}\u001b[${39}m`} now = ${JSON.stringify(
                mergeableAttrsCaught,
                null,
                4
              )}`
            );
          }
        }

        // process all recorded attributes which can be merged:
        if (mergeableAttrsCaught && mergeableAttrsCaught.size) {
          console.log(` `);
          console.log(` `);
          console.log(` `);
          console.log(`131      PROCESS EACH MERGEABLE ATTRIBUTE SEPARATELY`);
          console.log(` `);
          console.log(` `);
          console.log(` `);
          [...mergeableAttrsCaught].forEach((attrNameBeingMerged) => {
            console.log(` `);
            console.log(` ====== `);
            console.log(` `);
            console.log(
              `140 attributeDuplicate(): ${`\u001b[${32}m${`PROCESS`}\u001b[${39}m`} ${`\u001b[${33}m${`attrNameBeingMerged`}\u001b[${39}m`} = ${JSON.stringify(
                attrNameBeingMerged,
                null,
                4
              )}`
            );

            // the first attribute with its value will also be replaced,
            // in whole, except, its value will be merged string of all
            // extracted values of all same-name attributes
            const theFirstRange = [];

            const extractedValues = [];
            const allOtherRanges = [];

            // can't use functional way with filter+reduce
            // instead we'll loop through all attributes

            for (let i = 0, len = node.attribs.length; i < len; i++) {
              if (node.attribs[i].attribName === attrNameBeingMerged) {
                console.log(
                  `161 attributeDuplicate(): ███ node.attribs[${i}] = ${JSON.stringify(
                    node.attribs[i],
                    null,
                    4
                  )}`
                );
                // make a note of the index ranges, separating the first
                // attribute occurence from the rest:
                if (!theFirstRange.length) {
                  // whole attributes goes too, including whitespace
                  // on the left - it's because we automaticaly tackle
                  // all dirty code cases, imagine a tab as whitespace
                  // character in front of class="..." or equal missing
                  // or similar issues with the first attribute
                  theFirstRange.push(
                    node.attribs[i].attribLeft + 1,
                    node.attribs[i].attribEnds
                  );
                } else {
                  // notice we push an array into an array

                  // include whitespace to the left, unless it's the first
                  // attribute of a tag (i === 0, or falsey)
                  allOtherRanges.push([
                    i
                      ? node.attribs[i].attribLeft + 1
                      : node.attribs[i].attribStarts,
                    node.attribs[i].attribEnds,
                  ]);
                }

                console.log(`192 attributeDuplicate(): check value`);
                if (node.attribs[i].attribValueStartsAt) {
                  console.log(`194 attributeDuplicate(): split by whitespace`);
                  // either way, extract the values, split by whitespace
                  splitByWhitespace(
                    node.attribs[i].attribValueRaw,
                    ([from, to]) => {
                      console.log(
                        `200 attributeDuplicate(): * incoming: ${`\u001b[${33}m${`[${from}, ${to}]`}\u001b[${39}m`} ("${node.attribs[
                          i
                        ].attribValueRaw.slice(from, to)}")`
                      );
                      extractedValues.push(
                        node.attribs[i].attribValueRaw.slice(from, to)
                      );
                    }
                  );
                }
              }
            }

            console.log(
              `214 attributeDuplicate(): ${`\u001b[${35}m${`theFirstRange`}\u001b[${39}m`} = ${JSON.stringify(
                theFirstRange,
                null,
                4
              )}`
            );
            console.log(
              `221 attributeDuplicate(): ${`\u001b[${35}m${`extractedValues`}\u001b[${39}m`} = ${JSON.stringify(
                extractedValues,
                null,
                4
              )}`
            );
            console.log(
              `228 attributeDuplicate(): ${`\u001b[${35}m${`allOtherRanges`}\u001b[${39}m`} = ${JSON.stringify(
                allOtherRanges,
                null,
                4
              )}`
            );

            const mergedValue = extractedValues.sort().join(" ");

            console.log(
              `238 attributeDuplicate(): ${`\u001b[${33}m${`mergedValue`}\u001b[${39}m`} = ${JSON.stringify(
                mergedValue,
                null,
                4
              )}`
            );
            console.log(
              `245 attributeDuplicate(): ${`\u001b[${33}m${`theFirstRange`}\u001b[${39}m`} = ${JSON.stringify(
                theFirstRange,
                null,
                4
              )}`
            );
            console.log(
              `252 attributeDuplicate(): ${`\u001b[${33}m${`allOtherRanges`}\u001b[${39}m`} = ${JSON.stringify(
                allOtherRanges,
                null,
                4
              )}`
            );

            // finally, raise the error:
            console.log(
              `261 attributeDuplicate(): RAISE ERROR FOR "${attrNameBeingMerged}"`
            );
            console.log(
              `264 attributeDuplicate(): REPORT RANGES: ${JSON.stringify(
                [[...theFirstRange, mergedValue], ...allOtherRanges],
                null,
                4
              )}`
            );
            if (mergedValue && mergedValue.length) {
              console.log(
                `272 attributeDuplicate(): merged value will be used`
              );

              const ranges = prepLast(
                merge([
                  [
                    ...theFirstRange,
                    ` ${attrNameBeingMerged}="${mergedValue}"`,
                  ],
                  ...allOtherRanges,
                ])
              );
              console.log(
                `285 attributeDuplicate(): ${`\u001b[${33}m${`ranges`}\u001b[${39}m`} = ${JSON.stringify(
                  ranges,
                  null,
                  4
                )}`
              );

              context.report({
                ruleId: "attribute-duplicate",
                message: `Duplicate attribute "${attrNameBeingMerged}".`,
                idxFrom: node.start,
                idxTo: node.end,
                fix: {
                  ranges,
                },
              });
            } else {
              console.log(`302 attributeDuplicate(): no value to use!`);
              // remove all attributes of this kind

              const ranges = prepLast(
                merge([[...theFirstRange], ...allOtherRanges])
              );
              console.log(
                `309 attributeDuplicate(): ${`\u001b[${33}m${`ranges`}\u001b[${39}m`} = ${JSON.stringify(
                  ranges,
                  null,
                  4
                )}`
              );

              context.report({
                ruleId: "attribute-duplicate",
                message: `Duplicate attribute "${attrNameBeingMerged}".`,
                idxFrom: node.start,
                idxTo: node.end,
                fix: {
                  ranges,
                },
              });
            }
          });

          console.log(` `);
          console.log(` ====== `);
          console.log(` `);
        }
      }
    },
  };
}

export default attributeDuplicate;
