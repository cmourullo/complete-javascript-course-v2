"use strict";

/*
let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;
*/

/*
function logger() {
  console.log("My name is Carlos");
}

// calling, running or invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/*
// function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);

//function expression
const calcAge2 = function calcAge1(birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);

console.log(age1, age2, age3);

const yearsUntilRetirement = (birthYear, firstname) => {
  const age = 2037 - birthYear;
  const retirament = 65 - age;
  return `${firstname} retires in ${retirament}`;
};

console.log(yearsUntilRetirement(1991, "Carlos"));
*/

/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;

  return juice;
}

console.log(fruitProcessor(2, 3));
*/

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstname) {
//   const age = calcAge(birthYear);
//   const retirament = 65 - age;
//   let message = "";

//   if (retirament > 0) {
//     message = `${firstname} retires in ${retirament}`;
//   } else {
//     message = `${firstname} is already retired`;
//   }

//   return message;
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1970, "Mike"));

/*
const friends = ["Michale", "Steven", "Peter"];
console.log(friends);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

// We can change a value within a "const" array
friends[2] = "Jay";
friends[3] = "Mark";
console.log(friends);

// But we can not assign a new array
// friends = ['Bob', 'Alice'];

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, friends];
console.log(jonas);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

const ages = [age1, age2, age3];
console.log(ages);
*/

const friends = ["Michale", "Steven", "Peter"];

// Add elements
const newLenght = friends.push("Jay");
console.log(friends);
console.log(newLenght);

friends.unshift("John");
console.log(friends);

// Remove elements
const popped = friends.pop(); // last

console.log(popped);
console.log(friends);

const shifted = friends.shift("John");
console.log(shifted);
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}
