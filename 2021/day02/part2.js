const path = require("path");
const fs = require("fs");
const data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const input = data.split(/\n/);

const result = input.reduce(
  (acc, cur) => {
    const [direction, val] = cur.split(" ");
    const value = Number(val);

    if (direction === "forward") {
      return { ...acc, x: acc.x + value, y: acc.y + acc.aim * value };
    } else if (direction === "down") {
      return { ...acc, aim: acc.aim + value };
    } else if (direction === "up") {
      return { ...acc, aim: acc.aim - value };
    }

    return acc;
  },
  { x: 0, y: 0, aim: 0 }
);

console.log(result.x * result.y);
