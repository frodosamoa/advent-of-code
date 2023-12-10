const path = require("path");
const fs = require("fs");
const data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const input = data.trim();

let [polymerTemplate, pairInsertionRules] = input.split(/\n\n/);

pairInsertionRules = pairInsertionRules
  .split(/\n/)
  .map((rule) => rule.split(" -> "))
  .reduce((map, rule) => ({ ...map, [rule[0]]: rule[1] }), {});

let steps = 0;

do {
  polymerTemplate = polymerTemplate
    .split("")
    .reduce((template, char, index) => {
      const rule = pairInsertionRules[`${char}${polymerTemplate[index + 1]}`];

      if (rule) {
        return `${template}${char}${rule}`;
      }

      return `${template}${char}`;
    }, "");

  steps++;
} while (steps < 40);

const characterCounts = polymerTemplate.split("").reduce(
  (counts, char) => ({
    ...counts,
    [char]: counts[char] ? counts[char] + 1 : 1,
  }),
  {}
);

console.log(
  Math.max(...Object.values(characterCounts)) -
    Math.min(...Object.values(characterCounts))
);
