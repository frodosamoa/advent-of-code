const path = require("path");
const fs = require("fs");
const data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const input = data.trim();
const rows = input.split(/\n/);

console.log(
  rows
    .map((r) => r.split(" | "))
    .map(([_, output]) => output.split(" "))
    .reduce((acc, cur) => [...acc, ...cur], [])
    .reduce(
      (acc, cur) =>
        cur.length === 2 ||
        cur.length === 3 ||
        cur.length === 4 ||
        cur.length === 7
          ? acc + 1
          : acc,
      0
    )
);
