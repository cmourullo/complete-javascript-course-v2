// const calcBMI = (mass, height) => {
//   return mass / (height * 2);
// };

const mark = {
  fullName: "Mark Miller",
  mass: "78",
  height: 1.69,
  // bmi: function () {
  //   return calcBMI(this.mass, this.height);
  // },

  // getSummary: function () {
  //   return `${this.fullName}'s BMI (${this.bmi()})`;
  // },

  calcBMI: function () {
    this.bmi = this.mass / (this.height * 2);
    return this.bmi;
  },

  getSummary: function () {
    return `${this.fullName}'s BMI (${this.calcBMI()})`;
  },
};

const john = {
  fullName: "John Smith",
  mass: "92",
  height: 1.95,
  // bmi: function () {
  //   return calcBMI(this.mass, this.height);
  // },

  // getSummary: function () {
  //   return `${this.fullName}'s BMI (${this.bmi()})`;
  // },

  calcBMI: function () {
    this.bmi = this.mass / (this.height * 2);
    return this.bmi;
  },

  getSummary: function () {
    return `${this.fullName}'s BMI (${this.calcBMI()})`;
  },
};

console.log(mark.calcBMI(), john.calcBMI());

if (mark.bmi > john.bmi) {
  console.log(`${mark.getSummary()} is higher than ${john.getSummary()}!`);
} else if (john.bmi > mark.bmi) {
  console.log(`${john.getSummary()} is higher than ${mark.getSummary()}!`);
} else {
  console.log(`${mark.getSummary()} is equal than ${john.getSummary()}!`);
}
