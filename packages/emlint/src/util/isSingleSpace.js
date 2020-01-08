function isSingleSpace(str, originalOpts, errorArr) {
  const defaults = {
    from: 0,
    to: str.length,
    offset: 0
  };
  const opts = Object.assign({}, defaults, originalOpts);

  // whitespace starts at "from" and ends at "to"
  console.log(`010 opts.from = ${opts.from}; opts.to = ${opts.to}`);
  if (str.slice(opts.from, opts.to) !== " ") {
    console.log(
      `013 isSingleSpace(): problems with whitespace, carved out ${JSON.stringify(
        str.slice(opts.from, opts.to),
        null,
        4
      )}`
    );
    // remove the minimal amount of content - if spaces are there
    // already, leave them
    let ranges;
    if (str[opts.from] === " ") {
      ranges = [[opts.offset + opts.from + 1, opts.offset + opts.to]];
      console.log(
        `025 isSingleSpace(): ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`ranges`}\u001b[${39}m`} = ${JSON.stringify(
          ranges,
          null,
          4
        )}`
      );
    } else if (str[opts.to - 1] === " ") {
      ranges = [[opts.offset + opts.from, opts.offset + opts.to - 1]];
      console.log(
        `034 isSingleSpace(): ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`ranges`}\u001b[${39}m`} = ${JSON.stringify(
          ranges,
          null,
          4
        )}`
      );
    } else {
      console.log(
        `042 isSingleSpace(): worst case scenario, replace the whole whitespace`
      );
      ranges = [[opts.offset + opts.from, opts.offset + opts.to, " "]];
      console.log(
        `046 isSingleSpace(): ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`ranges`}\u001b[${39}m`} = ${JSON.stringify(
          ranges,
          null,
          4
        )}`
      );
    }

    // raise an error about this excessive/wrong whitespace
    console.log(
      `056 isSingleSpace(): [[${opts.offset + opts.from}, ${opts.offset +
        opts.to}]]`
    );
    errorArr.push({
      idxFrom: opts.offset + opts.from,
      idxTo: opts.offset + opts.to,
      message: `Should be a single space.`,
      fix: {
        ranges
      }
    });
  }
}

export default isSingleSpace;
