const path = require("path");
const fs = require("fs");
const data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const input = data.trimEnd().split(/\n/);

const result = input.reduce((acc, cur) => {
  const game = cur.split(":");
  const games = game[1].split(";").map((s) =>
    s
      .trim()
      .split(", ")
      .map((s) => s.split(" "))
  );

  const min = games.reduce(
    (gameColorValues, cur) => {
      const minValues = cur.reduce((colorValues, game) => {
        const [score, color] = game;

        return {
          ...colorValues,
          [color]: acc[color]
            ? Math.max(acc[color], Number(score))
            : Number(score),
        };
      }, gameColorValues);

      return {
        red: Math.max(minValues.red, gameColorValues.red),
        green: Math.max(minValues.green, gameColorValues.green),
        blue: Math.max(minValues.blue, gameColorValues.blue),
      };
    },
    {
      red: 0,
      green: 0,
      blue: 0,
    }
  );

  return acc + Object.values(min).reduce((acc, cur) => acc * cur, 1);
}, 0);

console.log(result);
