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

console.log(message);
