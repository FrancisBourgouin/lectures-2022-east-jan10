const cde1 = {
  id: "1",
  time: "2/26/2022, 11:05:46 AM",
  amount: 200,
  beans: "Haiti",
  technique: "Pourover",
};
const cde2 = {
  id: "2",
  time: "2/27/2022, 10:05:46 AM",
  amount: 500,
  beans: "Yemen",
  technique: "Aeropress",
};
const cde3 = {
  id: "3",
  time: "2/28/2022, 11:05:46 AM",
  amount: 1000,
  beans: "Ethiopia",
  technique: "Espresso",
};

const drinksObj = {
  1: cde1,
  2: cde2,
  3: cde3,
};

const drinksArr = [cde1, cde2, cde3];

module.exports = { drinksObj, drinksArr };
