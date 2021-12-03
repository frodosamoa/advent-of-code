const path = require("path");
const fs = require("fs");
const data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const input = data.split(/\n/);

const result = input
  .map(Number)
  .reduce((acc, cur, idx, arr) => (cur > arr[idx - 1] ? acc + 1 : acc), 0);

console.log(result);
