const cupOfCoffee = {
  color: "transparent",
  material: "glass",
  amountOfCoffee: 400,
  hasHandle: false,
  outputHowMuchCoffeeLeft: function () {
    const volume = this.amountOfCoffee;
    console.log(`There is ${volume}ml in the ☕`);
  },
};
const anotherCupOfCoffee = {
  color: "transparent",
  material: "glass",
  amountOfCoffee: 100,
  hasHandle: false,
  outputHowMuchCoffeeLeft: function () {
    const volume = this.amountOfCoffee;
    console.log(`There is ${volume}ml in the ☕`);
  },
};

const someObject = {
  someKey: "Wiggle wiggle",
  showTheObject: function () {
    console.log(this);
  },
};

// someObject.showTheObject();

// cupOfCoffee.outputHowMuchCoffeeLeft();
// anotherCupOfCoffee.outputHowMuchCoffeeLeft();
// console.log(this);

// const someFunction = function () {
//   console.log(this);
// };

// someFunction();

const objectOne = { a: 1 };
const objectTwo = { a: 2 };
const objectThree = { a: 3 };

const showA = function () {
  console.log(this.a);
};

objectOne.showA = showA;
objectTwo.showA = showA;
objectThree.showA = showA;
