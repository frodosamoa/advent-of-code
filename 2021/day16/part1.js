const path = require("path");
const fs = require("fs");
const data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const input = data.trim().split(/\n/);

const message = input[0];

console.log(message);
