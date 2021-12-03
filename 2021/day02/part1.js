const path = require("path");
const fs = require("fs");
const data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const input = data.split(/\n/);

const result = input.reduce(
  (acc, cur) => {
    const [direction, val] = cur.split(" ");
    const value = Number(val);

    if (direction === "forward") {
      return { ...acc, x: acc.x + value };
    } else if (direction === "down") {
      return { ...acc, y: acc.y + value };
    } else if (direction === "up") {
      return { ...acc, y: acc.y - value };
    }

    return acc;
  },
  { x: 0, y: 0 }
);

console.log(result.x * result.y);
