const path = require("path");
const fs = require("fs");
const data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const input = data.trim();

let octopi = input.split(/\n/).map((r) => r.split("").map(Number));
console.log(octopi);

let steps = 0;
let flashes = 0;

const flashOctopi = (rowIndex, oIndex) => {
  if (!octopi[rowIndex]) return;
  if (!octopi[rowIndex][oIndex]) return;

  octopi[rowIndex][oIndex] = (octopi[rowIndex][oIndex] + 1) % 10;

  if (octopi[rowIndex][oIndex] === 0) {
    flashes++;

    flashOctopi(rowIndex - 1, oIndex - 1);
    flashOctopi(rowIndex - 1, oIndex);
    flashOctopi(rowIndex - 1, oIndex + 1);

    flashOctopi(rowIndex, oIndex - 1);
    flashOctopi(rowIndex, oIndex + 1);

    flashOctopi(rowIndex + 1, oIndex - 1);
    flashOctopi(rowIndex + 1, oIndex);
    flashOctopi(rowIndex + 1, oIndex + 1);
  }
};

do {
  octopi.forEach((row, rowIndex) => {
    row.forEach((o, oIndex) => {
      flashOctopi(rowIndex, oIndex);
    });
  });

  console.log(octopi);
  steps++;
} while (steps < 100);

console.log(octopi);
console.log(flashes);
