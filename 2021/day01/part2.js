const path = require("path");
const fs = require("fs");
const data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const input = data.split(/\n/);

const result = input.map(Number).reduce((acc, cur, idx, arr) => {
  return idx < arr.length - 4 &&
    arr.slice(idx, idx + 3).reduce((a, b) => a + b, 0) <
      arr.slice(idx + 1, idx + 4).reduce((a, b) => a + b, 0)
    ? acc + 1
    : acc;
}, 0);

console.log(result);
