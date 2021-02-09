const bill = 275;
// const bill = 40;
// const bill = 430;

const tipPercentage = bill >= 50 && bill <= 300 ? 15 : 20;

const tip = bill * (tipPercentage / 100);
const total = bill + tip;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${total}`
);
