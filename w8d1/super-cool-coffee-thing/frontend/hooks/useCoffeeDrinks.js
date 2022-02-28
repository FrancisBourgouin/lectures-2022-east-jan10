import { useState, useEffect } from "react";
import axios from "axios";

export default function useCoffeeDrinks() {
  const [coffeeDrinks, setCoffeeDrinks] = useState({});

  useEffect(() => {
    axios.get("/api/coffee-drinks").then((res) => setCoffeeDrinks(res.data));
  }, []);

  const coffeeDrinkListData = Object.values(coffeeDrinks);

  const modifyCoffeeDrink = (coffeeData) => {
    const newCoffeeDrinks = { ...coffeeDrinks };
    newCoffeeDrinks[coffeeData.id] = coffeeData;

    const coffeeDrinksArr = [];
    const newCoffeeDrinksArr = [...coffeeDrinksArr];
    const indexOfTheDrinkToChange = newCoffeeDrinksArr.find(
      (drink) => drink.id === coffeeData.id
    );
    newCoffeeDrinksArr[indexOfTheDrinkToChange] = coffeeData;
  };

  const addCoffeeDrink = (coffeeData) => {
    // setCoffeeDrinks({...coffeeDrinks, [coffeeData.id]:coffeeData})

    axios
      .post("/api/coffee-drinks", { coffeeData })
      .then((res) => {
        console.log(res.data);
        const newCoffeeDrinks = { ...coffeeDrinks };
        newCoffeeDrinks[coffeeData.id] = coffeeData;

        setCoffeeDrinks(newCoffeeDrinks);
      })
      .catch((error) => console.log(error));
  };

  return { coffeeDrinkListData, addCoffeeDrink };
}
