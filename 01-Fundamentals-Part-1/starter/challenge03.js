// Test data 1
const dolphinsScore01 = 98;
const dolphinsScore02 = 108;
const dolphinsScore03 = 89;
const koalasScore01 = 88;
const koalasScore02 = 91;
const koalasScore03 = 110;

// Test data 2
// const dolphinsScore01 = 97;
// const dolphinsScore02 = 112;
// const dolphinsScore03 = 101;
// const koalasScore01 = 109;
// const koalasScore02 = 95;
// const koalasScore03 = 123;

// Test data 3
// const dolphinsScore01 = 97;
// const dolphinsScore02 = 112;
// const dolphinsScore03 = 101;
// const koalasScore01 = 109;
// const koalasScore02 = 95;
// const koalasScore03 = 106;

const averageDolphinsScore =
  (dolphinsScore01 + dolphinsScore02 + dolphinsScore03) / 3;
const averageKoalaScore = (koalasScore01 + koalasScore02 + koalasScore03) / 3;

console.log(averageDolphinsScore);
console.log(averageKoalaScore);

const minScore = 100;
let message;
if (
  averageDolphinsScore > averageKoalaScore &&
  averageDolphinsScore >= minScore
) {
  message = `Dolphins are the winnners with an average of ${averageDolphinsScore} over Koalas ${averageKoalaScore}`;
} else if (
  averageKoalaScore > averageDolphinsScore &&
  averageKoalaScore >= minScore
) {
  message = `Koalas are the winnners with an average of ${averageKoalaScore} over Dolphins ${averageDolphinsScore}`;
} else if (
  averageDolphinsScore === averageKoalaScore &&
  averageDolphinsScore >= minScore &&
  averageKoalaScore >= minScore
) {
  message = `Draw - Dolphins got an average of ${averageDolphinsScore} and Koalas ${averageKoalaScore}`;
} else {
  message = `Not clear winner - Dolphins got an average of ${averageDolphinsScore} and Koalas ${averageKoalaScore}`;
}

console.log(message);
