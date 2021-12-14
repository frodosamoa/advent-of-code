const path = require("path");
const fs = require("fs");
const data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const input = data.split(/\n\n/);

const numbers = input[0].split(",");
let cards = input.slice(1).map((card) => card.trim().split(/\s+/));

const cardSuze = 5;

let numberIndex = 0;
let winner = null;
let numbersPlayed;

do {
  numbersPlayed = numbers.slice(0, numberIndex);

  cards = cards.filter((card) => {
    if (
      Array.from(Array(5)).some(
        (_, j) =>
          card
            .slice(j * cardSuze, j * cardSuze + cardSuze)
            .every((number) => numbersPlayed.includes(number)) ||
          card
            .filter((_, index) => index % cardSuze === j)
            .every((number) => numbersPlayed.includes(number))
      )
    ) {
      if (cards.length === 1) {
        winner = card;
      }
      return false;
    }

    return true;
  });

  numberIndex++;
} while (cards.length !== 0);

console.log(
  winner
    .filter((c) => !numbersPlayed.includes(c))
    .reduce((acc, cur) => acc + Number(cur), 0) *
    Number(numbersPlayed[numbersPlayed.length - 1])
);
