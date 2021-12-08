const path = require("path");
const fs = require("fs");
const data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const input = data.trim().split(/\n/);

const lines = input.map((r) =>
  r.split(" -> ").map((point) => point.split(",").map(Number))
);

let max = 0;

const nonDiagonalLines = lines.filter((line) => {
  const [point1, point2] = line;
  const [x1, y1] = point1;
  const [x2, y2] = point2;

  max = Math.max(max, x1, y1, x2, y2);

  return x1 === x2 || y1 === y2;
});

const map = Array.from(Array(max)).map(() =>
  Array.from(Array(max)).map(() => 0)
);

nonDiagonalLines.map((line) => {
  const [point1, point2] = line;
  const [x1, y1] = point1;
  const [x2, y2] = point2;

  if (x1 === x2) {
    for (let i = Math.min(y1, y2); i <= Math.max(y1, y2); i++) {
      map[i][x2] = map[i][x2] + 1;
    }
  }

  if (y1 === y2) {
    for (let i = Math.min(x1, x2); i <= Math.max(x1, x2); i++) {
      map[y1][i] = map[y1][i] + 1;
    }
  }
});

console.log(
  map.reduce(
    (acc, cur) =>
      acc +
      cur.reduce((curAcc, curCur) => (curCur >= 2 ? curAcc + 1 : curAcc), 0),
    0
  )
);
