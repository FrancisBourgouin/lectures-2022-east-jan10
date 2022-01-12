// const someArray = []
// const someArray = new Array()

const listOfPotatoes = ["Yukon Gold", "Russet", "Idaho", "Fingerling", "Yellow"];
const weirdListOfPotatoes = {
  0: "Yukon Gold",
};
console.log(listOfPotatoes[3]);

const listOfProperties = ["green", 500, "Polycarbonate", "Stickers"];

const aBetterListOfProperties = {
  color: "green",
  capacity: 500,
  material: "polycarbonate",
  decoration: "stickers",
};

const objectOfDestiny = {
  yes: "no",
  yes: "yes",
  yes: "no",
  yes: "yes",
  yes: "no",
  yes: "yes",
  yes: "no",
  yes: "yes",
  yes: "no",
  yes: "yes",
  yes: "no",
  yes: "yes",
  yes: "no",
  yes: "yes",
};

objectOfDestiny.yes;
const key = "capacity";

const result1 = aBetterListOfProperties.key;
const result2 = aBetterListOfProperties[key];

console.log(result1, result2);
