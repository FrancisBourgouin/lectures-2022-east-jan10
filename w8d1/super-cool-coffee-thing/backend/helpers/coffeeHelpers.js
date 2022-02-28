const generateCoffeeHelpers = (drinksObj) => {
  const addCoffeeDrink = (newDrink) => {
    drinksObj[newDrink.id] = newDrink;

    return newDrink;
  };

  const modifyCoffeeDrink = (newDrink) => {
    drinksObj[newDrink.id] = newDrink;

    return newDrink;
  };

  const removeCoffeeDrink = (id) => {
    delete drinksObj[id];

    return drinksObj;
  };

  return { addCoffeeDrink, modifyCoffeeDrink, removeCoffeeDrink };
};

module.exports = generateCoffeeHelpers;
