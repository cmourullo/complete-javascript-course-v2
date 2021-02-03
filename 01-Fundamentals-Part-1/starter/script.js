/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
let PI = 3.1416;
let myFirstJob = 'Coder';

console.log(myFirstJob);
*/

/*
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "text");

javaScriptIsFun = "YES";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof text);

year = 1985;
console.log(year);
console.log(typeof text);

console.log(typeof null);
*/

/*
let age = 30;
age = 31;

const birthYear = 1991;

var job = "programmer";
job = "coder";

lastName = "Flores";
console.log(lastName);
*/

/*
// Math operators
let thisYear = 2021;
const ageJonas = thisYear - 1989;
const ageSarah = thisYear - 1990;
console.log(ageJonas, ageSarah);

// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Jonas";
const lastName = "Flores";
console.log(firstName + " " + lastName);

// Asignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(thisYear - 1989 > thisYear - 1990);
*/

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

/*
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string`);
console.log("String with \n\
multiple \n\
lines");

console.log(`Another string
multiple
lines`);
*/

/*
const age = 15;

if (age >= 18) {
  console.log("Sarah can start her driving licence");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too joung. Wait another ${yearsLeft} year(s)`);
}

const birthYear = 1991;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

/*
// Type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(String(1991));

// Type coercion
console.log("I am " + 35 + " years old");
console.log("I am " + String(35) + " years old");
console.log("23" - "10" - 3);
console.log("23" + "10" + 3);
console.log("23" / 2);
console.log("23" > "18");

let n = "1" + 1;
n = n - 1;
console.log(n);
*/

/*
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));

const money = 100;

if (money) {
  console.log("Don't spend it all!");
} else {
  console.log("You should get a job!");
}

let hight;
if (hight) {
  console.log("Yes, Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
*/

/*
const age = "18";
if (age === 18) {
  console.log("You just became an adult! (strict)");
}

if (age == 18) {
  console.log("You just became an adult! (loose)");
}

const favourite = Number(prompt("What's your favorite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log(`Cool! ${favourite} is an amazing number!`);
} else if (favourite === 7) {
  console.log(`Cool! ${favourite} is an amazing number too!`);
} else {
  console.log(`${favourite} is not 23 or 7`);
}

if (favourite !== 23) {
  console.log("Why not use 23?");
}
*/
