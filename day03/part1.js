const path = require("path");
const fs = require("fs");
const data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const input = data.split(/\n/);

const bitLength = input[0].length;

const sums = input.reduce(
  (acc, cur) => acc.map((s, index) => s + Number(cur.charAt(index))),
  new Array(bitLength).fill(0)
);

const gamma = parseInt(
  sums.map((s) => (s > input.length / 2 ? "1" : "0")).join(""),
  2
);
const epsilon = parseInt(
  sums.map((s) => (s > input.length / 2 ? "0" : "1")).join(""),
  2
);

console.log(gamma * epsilon);
