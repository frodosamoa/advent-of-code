const path = require("path");
const fs = require("fs");
const data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const input = data.split(/\n\n/);

const numbers = input[0].split(",");

const cards = input.slice(1).map((card) => card.split(/\s+/));

let cardIndex = 0;
let winner = null;
let numbersPlayed;

const size = 5;

do {
  numbersPlayed = numbers.slice(0, cardIndex);
  cards.forEach((card) => {
    for (let j = 0; j < size; j++) {
      if (
        card
          .slice(j * size, j * size + size)
          .every((number) => numbersPlayed.includes(number)) ||
        card
          .filter((_, index) => index % size === j)
          .every((number) => numbersPlayed.includes(number))
      ) {
        winner = card;
      }
    }
  });

  cardIndex++;
} while (!winner && cardIndex < cards.length);

console.log(
  winner
    .filter((c) => !numbersPlayed.includes(c))
    .reduce((acc, cur) => acc + Number(cur), 0) *
    Number(numbersPlayed[numbersPlayed.length - 1])
);
