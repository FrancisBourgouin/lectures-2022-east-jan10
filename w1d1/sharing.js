const cupOfCoffee = {
  color: "transparent",
  material: "glass",
  amountOfCoffee: 400,
  hasHandle: false,
  outputHowMuchCoffeeLeft: function () {
    const volume = cupOfCoffee.amountOfCoffee;
    console.log(`There is ${volume}ml in the ☕`);
  },
};

const anotherCupOfCoffee = cupOfCoffee;

cupOfCoffee.isNew = false;

console.log(cupOfCoffee);
console.log(anotherCupOfCoffee);
