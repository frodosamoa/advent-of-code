const path = require("path");
const fs = require("fs");
const data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const input = data.split(/\n/);

const filterBits = (bitArray, condition) => {
  const bitLength = bitArray[0].length;
  let remainingBits = bitArray;
  let i = 0;
  let prevLength = 0;

  do {
    prevLength = remainingBits.length;

    const sum = remainingBits.reduce(
      (acc, cur) => acc + Number(cur.charAt(i)),
      0
    );

    remainingBits = remainingBits.filter((a) =>
      condition(sum, prevLength) ? a.charAt(i) === "1" : a.charAt(i) === "0"
    );

    i++;
  } while (i < bitLength && remainingBits.length !== 1);

  return remainingBits[0];
};

const oxygen = parseInt(
  filterBits(input, (sum, prevLength) => sum >= prevLength / 2),
  2
);
const co2 = parseInt(
  filterBits(input, (sum, prevLength) => sum < prevLength / 2),
  2
);

console.log(oxygen * co2);
