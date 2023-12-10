const path = require("path");
const fs = require("fs");
const data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const input = data.trim();

const lanternfishInput = input.split(",").map(Number);

let day = 0;

let lanternfish = lanternfishInput;

do {
  lanternfish = lanternfish.reduce((acc, cur, idx) => {
    if (acc[idx] === 0) {
      acc[idx] = 6;
      acc.push(8);
      return acc;
    }

    acc[idx] = acc[idx] - 1;

    return acc;
  }, lanternfish);

  day++;
} while (day < 256);

console.log(lanternfish.length);
