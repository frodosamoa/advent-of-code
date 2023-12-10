const path = require("path");
const fs = require("fs");
const data = fs.readFileSync(path.join(__dirname, "input-1b.txt"), "utf8");
const input = data.trim();

const rows = input.split(/\n/).map(JSON.parse);

let sum = rows[0];

const explodeOrSplit = (row, depth = 0) => {
  console.log("depth", depth);

  return row.map((item) => {
    if (Array.isArray(item)) {
      return explodeOrSplit(item, depth + 1);
    }

    if (depth === 4) {
    }

    return item;
  });
};

const processRow = (row) => {
  sum = [sum, row];

  console.log(explodeOrSplit(sum));
};

rows.slice(1).forEach((row) => {
  processRow(row);
  console.log("row processed");
  console.log();
});

console.log(sum);
