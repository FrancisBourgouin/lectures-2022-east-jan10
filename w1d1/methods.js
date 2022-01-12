// Methods

// console.log("I WAS A METHOD ALL ALONG");
// Math.floor("1.1")[(1, 2, 3)].push(4)[(1, 2, 3)].pop()[(1, 2, 3)].filter();

const cupOfCoffee = {
  color: "transparent",
  material: "glass",
  amountOfCoffee: 400,
  hasHandle: false,
  outputHowMuchCoffeeLeft: function () {
    const volume = cupOfCoffee.amountOfCoffee;
    console.log(`There is ${volume}ml in the ☕`);
    console.log(`There is ` + volume + `ml in the ☕`);
  },
};

cupOfCoffee.outputHowMuchCoffeeLeft();

const anotherCupOfCoffee = {
  color: "black",
  material: "ceramic",
  amountOfCoffee: 100,
  hasHandle: true,
  outputHowMuchCoffeeLeft: function () {
    const volume = anotherCupOfCoffee.amountOfCoffee;
    console.log(`There is ${volume}ml in the ☕`);
  },
};

anotherCupOfCoffee.outputHowMuchCoffeeLeft();
// const outputHowMuchCoffeeLeft = function (cupOfCoffee) {
//   const volume = cupOfCoffee.amountOfCoffee;
//   console.log(`There is ${volume}ml in the 🍵`);
// };

// outputHowMuchCoffeeLeft(cupOfCoffee);
// outputHowMuchCoffeeLeft(anotherCupOfCoffee);
