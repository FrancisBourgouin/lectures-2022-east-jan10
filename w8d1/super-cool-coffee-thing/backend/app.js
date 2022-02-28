const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { drinksObj } = require("./data/coffeeData");
const generateCoffeeHelpers = require("./helpers/coffeeHelpers");

const { addCoffeeDrink } = generateCoffeeHelpers(drinksObj);
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/coffee-drinks", (req, res) => {
  res.json(drinksObj);
});

app.post("/api/coffee-drinks", (req, res) => {
  const newDrink = req.body;
  drinksObj[newDrink.id] = newDrink;

  res.json(newDrink);
});

app.delete("/api/coffee-drinks", (req, res) => {
  const { id } = req.body;

  delete drinksObj[id];

  res.json(drinksObj);
});

app.put("/api/coffee-drinks", (req, res) => {
  const newDrink = req.body;
  drinksObj[newDrink.id] = newDrink;

  res.json(newDrink);
});

module.exports = app;
