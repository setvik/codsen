const t = require("tap");
const { Linter } = require("../../../dist/emlint.cjs");
const { applyFixes } = require("../../../t-util/util");

// 01. validation
// -----------------------------------------------------------------------------

t.test(
  `01.01 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - no id, error level 0`,
  t => {
    const str = `<table>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-id": 0
      }
    });
    t.equal(applyFixes(str, messages), str);
    t.same(messages, []);
    t.end();
  }
);

t.test(
  `01.02 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - no id, error level 1`,
  t => {
    const str = `<table>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-id": 1
      }
    });
    t.equal(applyFixes(str, messages), str);
    t.same(messages, []);
    t.end();
  }
);

t.test(
  `01.03 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - no id, error level 2`,
  t => {
    const str = `<table>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-id": 2
      }
    });
    t.equal(applyFixes(str, messages), str);
    t.same(messages, []);
    t.end();
  }
);

t.test(
  `01.04 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - healthy id`,
  t => {
    const str = `<table id='abc def'>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-id": 2
      }
    });
    t.equal(applyFixes(str, messages), str);
    t.same(messages, []);
    t.end();
  }
);

// 02. rogue whitespace
// -----------------------------------------------------------------------------

t.test(
  `02.01 - ${`\u001b[${36}m${`whitespace`}\u001b[${39}m`} - space in front`,
  t => {
    const str = `<table id=" w100p">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-id": 2
      }
    });
    t.equal(applyFixes(str, messages), `<table id="w100p">`);
    t.match(messages, [
      {
        ruleId: "attribute-validate-id",
        idxFrom: 11,
        idxTo: 12,
        message: `Remove whitespace.`,
        fix: {
          ranges: [[11, 12]]
        }
      }
    ]);
    t.end();
  }
);

t.test(
  `02.02 - ${`\u001b[${36}m${`whitespace`}\u001b[${39}m`} - space after`,
  t => {
    const str = `<table id="w100p ">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-id": 2
      }
    });
    t.equal(applyFixes(str, messages), `<table id="w100p">`);
    t.match(messages, [
      {
        ruleId: "attribute-validate-id",
        idxFrom: 16,
        idxTo: 17,
        message: `Remove whitespace.`,
        fix: {
          ranges: [[16, 17]]
        }
      }
    ]);
    t.end();
  }
);

t.test(
  `02.03 - ${`\u001b[${36}m${`whitespace`}\u001b[${39}m`} - one id, copious whitespace around`,
  t => {
    const str = `<table id="  w100p  ">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-id": 2
      }
    });
    t.equal(applyFixes(str, messages), `<table id="w100p">`);
    t.match(messages, [
      {
        ruleId: "attribute-validate-id",
        idxFrom: 11,
        idxTo: 20,
        message: `Remove whitespace.`,
        fix: {
          ranges: [
            [11, 13],
            [18, 20]
          ]
        }
      }
    ]);
    t.end();
  }
);

t.test(
  `02.04 - ${`\u001b[${36}m${`whitespace`}\u001b[${39}m`} - many ides, copious whitespace around`,
  t => {
    const str = `<table id="  w100p  ha \t fl  \n  ">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-id": 2
      }
    });
    t.equal(applyFixes(str, messages), `<table id="w100p ha fl">`);
    t.match(messages, [
      {
        ruleId: "attribute-validate-id",
        idxFrom: 11,
        idxTo: 32,
        message: `Remove whitespace.`,
        fix: {
          ranges: [
            [11, 13],
            [27, 32]
          ]
        }
      },
      {
        ruleId: "attribute-validate-id",
        idxFrom: 18, // report whole whitespace gap
        idxTo: 20,
        message: `Should be a single space.`,
        fix: {
          ranges: [[19, 20]] // delete only minimal amount, without insertion if possible
        }
      },
      {
        ruleId: "attribute-validate-id",
        idxFrom: 22,
        idxTo: 25,
        message: `Should be a single space.`,
        fix: {
          ranges: [[23, 25]] // delete only minimal amount, without insertion if possible
        }
      }
    ]);
    t.end();
  }
);

t.test(
  `02.05 - ${`\u001b[${36}m${`whitespace`}\u001b[${39}m`} - only trimmable whitespace as a value`,
  t => {
    const str = `<table id="  \t">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-id": 2
      }
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str);
    t.match(messages, [
      {
        ruleId: "attribute-validate-id",
        idxFrom: 11,
        idxTo: 14,
        message: `Missing value.`,
        fix: null
      }
    ]);
    t.end();
  }
);

t.test(
  `02.06 - ${`\u001b[${36}m${`whitespace`}\u001b[${39}m`} - empty value`,
  t => {
    const str = `<table id="">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-id": 2
      }
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str);
    t.match(messages, [
      {
        ruleId: "attribute-validate-id",
        idxFrom: 11,
        idxTo: 11,
        message: `Missing value.`,
        fix: null
      }
    ]);
    t.end();
  }
);

// 03. id name checks
// -----------------------------------------------------------------------------

t.test(
  `03.01 - ${`\u001b[${35}m${`id name checks`}\u001b[${39}m`} - healthy`,
  t => {
    const str = `<table id='ab cd ef' id='yy aa'>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-id": 2
      }
    });
    t.equal(applyFixes(str, messages), str);
    t.same(messages, []);
    t.end();
  }
);

t.test(
  `03.02 - ${`\u001b[${35}m${`id name checks`}\u001b[${39}m`} - mix 1`,
  t => {
    const str = `<a id="b c\td\ne\t f \tg\t\th">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-id": 2
      }
    });
    // can fix:
    t.equal(applyFixes(str, messages), `<a id="b c d e f g h">`);
    t.match(messages, [
      {
        ruleId: "attribute-validate-id",
        idxFrom: 10, // whole whitespace gap is reported but deletion is mininal
        idxTo: 11,
        message: `Should be a single space.`,
        fix: {
          ranges: [[10, 11, " "]] // replacement with space - notice 3rd arg
        }
      },
      {
        ruleId: "attribute-validate-id",
        idxFrom: 12,
        idxTo: 13,
        message: `Should be a single space.`,
        fix: {
          ranges: [[12, 13, " "]] // replacement with space - notice 3rd arg
        }
      },
      {
        ruleId: "attribute-validate-id",
        idxFrom: 14,
        idxTo: 16,
        message: `Should be a single space.`,
        fix: {
          ranges: [[14, 15]]
        }
      },
      {
        ruleId: "attribute-validate-id",
        idxFrom: 17,
        idxTo: 19,
        message: `Should be a single space.`,
        fix: {
          ranges: [[18, 19]]
        }
      },
      {
        ruleId: "attribute-validate-id",
        idxFrom: 20,
        idxTo: 22,
        message: `Should be a single space.`,
        fix: {
          ranges: [[20, 22, " "]]
        }
      }
    ]);
    t.end();
  }
);

t.test(
  `03.03 - ${`\u001b[${35}m${`id name checks`}\u001b[${39}m`} - mix 1`,
  t => {
    const str = `<table id='ab \t3a e.f' id='yy aa'>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-id": 2
      }
    });
    // can fix:
    t.equal(applyFixes(str, messages), `<table id='ab 3a e.f' id='yy aa'>`);
    t.match(messages, [
      {
        ruleId: "attribute-validate-id",
        idxFrom: 13,
        idxTo: 15,
        message: `Should be a single space.`,
        fix: {
          ranges: [[14, 15]]
        }
      },
      {
        ruleId: "attribute-validate-id",
        idxFrom: 15,
        idxTo: 17,
        message: `Wrong id name.`,
        fix: null
      },
      {
        ruleId: "attribute-validate-id",
        idxFrom: 18,
        idxTo: 21,
        message: `Wrong id name.`,
        fix: null
      }
    ]);
    t.end();
  }
);

t.test(
  `03.04 - ${`\u001b[${35}m${`id name checks`}\u001b[${39}m`} - starts with dot`,
  t => {
    const str = `<table id=".abc">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-id": 2
      }
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str);
    t.match(messages, [
      {
        ruleId: "attribute-validate-id",
        idxFrom: 11,
        idxTo: 15,
        message: `Wrong id name.`,
        fix: null
      }
    ]);
    t.end();
  }
);

t.test(
  `03.05 - ${`\u001b[${35}m${`id name checks`}\u001b[${39}m`} - only dot`,
  t => {
    const str = `<table id=".">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-id": 2
      }
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str);
    t.match(messages, [
      {
        ruleId: "attribute-validate-id",
        idxFrom: 11,
        idxTo: 12,
        message: `Wrong id name.`,
        fix: null
      }
    ]);
    t.end();
  }
);

t.test(
  `03.06 - ${`\u001b[${35}m${`id name checks`}\u001b[${39}m`} - only dot`,
  t => {
    const str = `
<table id="aa bb cc dd">
<table id="aa bb aa bb cc aa dd \taa">
<table id="aa bb cc dd">
`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-id": 2
      }
    });
    // can fix:
    t.equal(
      applyFixes(str, messages),
      `
<table id="aa bb cc dd">
<table id="aa bb cc dd">
<table id="aa bb cc dd">
`
    );
    t.match(messages, [
      {
        ruleId: "attribute-validate-id",
        idxFrom: 43,
        idxTo: 45,
        message: `Duplicate id "aa".`,
        fix: {
          ranges: [[43, 46]]
        }
      },
      {
        ruleId: "attribute-validate-id",
        idxFrom: 46,
        idxTo: 48,
        message: `Duplicate id "bb".`,
        fix: {
          ranges: [[46, 49]]
        }
      },
      {
        ruleId: "attribute-validate-id",
        idxFrom: 52,
        idxTo: 54,
        message: `Duplicate id "aa".`,
        fix: {
          ranges: [[52, 55]]
        }
      },
      {
        ruleId: "attribute-validate-id",
        idxFrom: 57,
        idxTo: 59,
        message: `Should be a single space.`,
        fix: {
          ranges: [[58, 59]]
        }
      },
      {
        ruleId: "attribute-validate-id",
        idxFrom: 59,
        idxTo: 61,
        message: `Duplicate id "aa".`,
        fix: {
          ranges: [[57, 61]]
        }
      }
    ]);
    t.end();
  }
);
