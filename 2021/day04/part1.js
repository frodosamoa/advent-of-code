const path = require("path");
const fs = require("fs");
const data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const input = data.split(/\n\n/);

const numbers = input[0].split(",");
const cards = input.slice(1).map((card) => card.split(/\s+/));

const cardSize = 5;

let numberIndex = 0;
let winner = null;
let numbersPlayed;

do {
  numbersPlayed = numbers.slice(0, numberIndex);

  cards.forEach((card) => {
    for (let j = 0; j < cardSize; j++) {
      if (
        card
          .slice(j * cardSize, j * cardSize + cardSize)
          .every((number) => numbersPlayed.includes(number)) ||
        card
          .filter((_, index) => index % cardSize === j)
          .every((number) => numbersPlayed.includes(number))
      ) {
        winner = card;
      }
    }
  });

  numberIndex++;
} while (!winner && numberIndex < cards.length);

console.log(
  winner
    .filter((c) => !numbersPlayed.includes(c))
    .reduce((acc, cur) => acc + Number(cur), 0) *
    Number(numbersPlayed[numbersPlayed.length - 1])
);
