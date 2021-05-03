const bills = [125, 555, 44];

const calcTip = (billValue) => {
  return billValue >= 50 && billValue <= 300
    ? billValue * 0.15
    : billValue * 0.2;
};

const totalBill = (billValue) => {
  return billValue + calcTip(billValue);
};

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [totalBill(bills[0]), totalBill(bills[1]), totalBill(bills[2])];

console.log(bills);
console.log(tips);
console.log(totals);
