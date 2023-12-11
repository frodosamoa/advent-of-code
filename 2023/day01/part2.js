const path = require("path");
const fs = require("fs");
const data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const input = data.split(/\n/);

const letterMap = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const result = input.reduce((acc, cur) => {
  const digits = cur.match(
    /(\d|one|two|three|four|five|six|seven|eight|nine)/g
  );
  const firstDigit = digits[0];
  const lastDigit = digits[digits.length - 1];

  const convertedFirstDigit = letterMap[firstDigit] || firstDigit;
  const convertedLastDigit = letterMap[lastDigit] || lastDigit;

  return acc + Number(convertedFirstDigit) * 10 + Number(convertedLastDigit);
}, 0);

console.log(result);
