// Test data 01
// dolphinsScore01 = 44;
// dolphinsScore02 = 23;
// dolphinsScore03 = 71;
// koalasScore01 = 65;
// koalasScore02 = 54;
// koalasScore03 = 49;

// Test data 02
dolphinsScore01 = 85;
dolphinsScore02 = 54;
dolphinsScore03 = 41;
koalasScore01 = 23;
koalasScore02 = 34;
koalasScore03 = 27;

const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphings = calcAverage(
  dolphinsScore01,
  dolphinsScore01,
  dolphinsScore03
);
const scoreKoalas = calcAverage(koalasScore01, koalasScore02, koalasScore03);

const checkWinner = function (scoreDolphings, scoreKoalas) {
  if (scoreDolphings >= scoreKoalas * 2) {
    return `Dolphins win (${scoreDolphings} vs. ${scoreKoalas})`;
  }
  if (scoreKoalas >= scoreDolphings * 2) {
    return `Koalas win (${scoreKoalas} vs. ${scoreDolphings})`;
  }

  return `No team wings. Dolphins ${scoreDolphings} vs. Koalas ${scoreKoalas}`;
};

console.log(checkWinner(scoreDolphings, scoreKoalas));
