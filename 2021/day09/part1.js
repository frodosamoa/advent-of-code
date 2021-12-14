const path = require("path");
const fs = require("fs");
const data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const input = data.trim();

const heightmap = input.split(/\n/).map((r) => r.split("").map(Number));

let riskLevel = 0;

for (let i = 0; i < heightmap.length - 0; i++) {
  for (let j = 0; j < heightmap.length - 0; j++) {
    const neighbors = [
      heightmap[i - 1] && heightmap[i - 1][j],
      heightmap[i] && heightmap[i][j - 1],
      heightmap[i] && heightmap[i][j + 1],
      heightmap[i + 1] && heightmap[i + 1][j],
    ].filter((n) => typeof n === "number");

    if (neighbors.every((neighbor) => neighbor > heightmap[i][j])) {
      riskLevel += 1 + heightmap[i][j];
    }
  }
}

console.log(riskLevel);
