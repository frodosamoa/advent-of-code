const path = require("path");
const fs = require("fs");
const data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const input = data.trim();

const rows = input.split(/\n/).map((r) => r.split(" | "));

const entries = rows.map(([signals, outputs]) => [
  signals.split(" "),
  outputs.split(" "),
]);

[entries[0]].forEach(([signals, outputs]) => {
  console.log("signals :>> ", signals);
  console.log("outputs :>> ", outputs);

  const segments = [null, null, null, null, null, null, null];

  let one;
  let four;
  let seven;
  let eight;

  const restSignals = signals.filter((signal) => {
    if (signal.length === 2) {
      one = signal;
      return false;
    }

    if (signal.length === 4) {
      four = signal;
      return false;
    }

    if (signal.length === 3) {
      seven = signal;
      return false;
    }

    if (signal.length === 7) {
      eight = signal;
      return false;
    }

    return true;
  });

  let zero;
  let two;
  let three;
  let five;
  let six;
  let nine;

  signals.forEach((signal) => {
    if (
      signal.length === 5 &&
      one.split("").every((char) => signal.includes(char))
    ) {
      three = signal;
    }

    if (
      signal.length === 6 &&
      one.split("").some((char) => !signal.includes(char))
    ) {
      six = signal;
    }
  });

  console.log(three, six);
});

// a 8
// b 6
// c 8
// d 7
// e 4
// f 9
// g 7
