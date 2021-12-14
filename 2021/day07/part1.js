const path = require("path");
const fs = require("fs");
const data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const input = data.trim();

const numbers = input.split(",").map(Number);

let min = Infinity;
let max = -Infinity;

numbers.forEach((number) => {
  min = Math.min(min, number);
  max = Math.max(max, number);
});

let fuel = [];

for (let i = min; i <= max; i++) {
  let currentFuel = 0;
  numbers.forEach((number) => {
    currentFuel += Math.abs(number - i);
  });
  fuel.push(currentFuel);
}

console.log(Math.min(...fuel));
