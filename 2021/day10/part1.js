const path = require("path");
const fs = require("fs");
const data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const input = data.trim();

const rows = input.split(/\n/);

const CHARACTER_MAP = {
  "[": "]",
  "{": "}",
  "<": ">",
  "[": "]",
};

rows.forEach((row) => {
  row.split("").forEach((char) => {
    console.log(char);
  });
});
