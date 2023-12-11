const path = require("path");
const fs = require("fs");
const data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const input = data.split(/\n/);

const result = input.reduce((acc, cur) => {
  const digits = cur.match(/\d/g);
  const firstDigit = digits[0];
  const lastDigit = digits[digits.length - 1];

  return acc + Number(firstDigit) * 10 + Number(lastDigit);
}, 0);

console.log(result);
