// Test data 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// Test data 2
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;
const markHeigherBMI = bmiMark > bmiJohn;

let message;
if (bmiMark > bmiJohn) {
  message = `Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`;
} else {
  message = `John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`;
}

console.log(message);
