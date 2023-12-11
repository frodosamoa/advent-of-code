const path = require("path");
const fs = require("fs");
const data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const input = data.trimEnd().split(/\n/);

const result = input.reduce((acc, cur) => {
  const game = cur.split(":");
  const gameId = game[0].split(" ")[1];
  const games = game[1].split(";").map((s) =>
    s
      .trim()
      .split(", ")
      .map((s) => s.split(" "))
  );

  if (
    games.some((game) =>
      game.some(
        ([score, color]) =>
          (color === "red" && Number(score) > 12) ||
          (color === "green" && Number(score) > 13) ||
          (color === "blue" && Number(score) > 14)
      )
    )
  ) {
    return acc;
  }

  return acc + Number(gameId);
}, 0);

console.log(result);
