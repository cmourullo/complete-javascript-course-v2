const country = "Ireland";
const continent = "Europe";
let population = 4.9;

// console.log(country);
// console.log(continent);
// console.log(population);

const isIsland = true;
const language = "english";
console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);

console.log(population / 2);
population++;
console.log(population);

let findlandPopulation = 6;
console.log(population > findlandPopulation);

let averagePopulation = 33;
console.log(population < averagePopulation);

// let description =
//   country +
//   " is in " +
//   continent +
//   ", and its " +
//   population +
//   " million people speak " +
//   language;

let description = `${country} is in ${continent}, and its ${population} million people speal ${language}`;

console.log(description);

let message;
if (population > averagePopulation) {
  message = `${country}'s population is above average`;
} else {
  let millionsBelow = averagePopulation - population;
  message = `${country}'s population is ${millionsBelow} millions below average`;
}

// console.log(message);

// console.log("9" - "5"); // 4
// console.log("19" - "13" + "17"); // 617
// console.log("19" - "13" + 17); // 23
// console.log("123" < 57); // false
// console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143

// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );

// if (numNeighbours === 1) {
//   console.log(`Only ${numNeighbours} border`);
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

if (language === "english" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)'`);
} else {
  console.log(`${country} does not meet your criteria :('`);
}
