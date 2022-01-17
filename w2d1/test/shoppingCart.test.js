const shoppingCart = require("../shoppingCart");
const calculateShoppingCart = shoppingCart.calculateShoppingCart;
const chai = require("chai");
const expect = chai.expect;

// const { calculateShoppingCart } = require("../shoppingCart");
// const { expect } = require("chai");

describe("calculateShoppingCart", () => {
  it("should return an empty object if tax is not a number", () => {
    const cart = [
      {
        name: "Potato",
        description: "Potatoes are great.",
        price: 0.5,
      },
    ];
    const QCTAX = undefined;
    const result = calculateShoppingCart(cart, QCTAX);
    const expectedResult = {};

    expect(result).to.deep.equal(expectedResult);
  });
  it("should return an empty object if cart is not an array", () => {
    const cart = undefined;
    const QCTAX = 0.14975;
    const result = calculateShoppingCart(cart, QCTAX);
    const expectedResult = {};

    expect(result).to.deep.equal(expectedResult);
  });
  it("should return an empty object if cart is an empty array", () => {
    const cart = [];
    const QCTAX = 0.14975;
    const result = calculateShoppingCart(cart, QCTAX);
    const expectedResult = {};

    expect(result).to.deep.equal(expectedResult);
  });
  it("should return the result object with the bad product skipped if incomplete product", () => {
    const cart = [
      {
        name: "Potato",
        description: "Potatoes are great.",
        price: 0.5,
      },
      {
        name: "Notato",
        description: "Potatoes are great.",
      },
    ];
    const QCTAX = 0.14975;
    const result = calculateShoppingCart(cart, QCTAX);
    const expectedResult = { amountOfItems: 1, subtotal: 0.5, taxes: 0.07, total: 0.57 };

    expect(result).to.deep.equal(expectedResult);
  });
  it("should return the result object with the bad product skipped if product not an object", () => {
    const cart = [
      {
        name: "Potato",
        description: "Potatoes are great.",
        price: 0.5,
      },
      "WIGGLE WIGGLE",
    ];
    const QCTAX = 0.14975;
    const result = calculateShoppingCart(cart, QCTAX);
    const expectedResult = { amountOfItems: 1, subtotal: 0.5, taxes: 0.07, total: 0.57 };

    expect(result).to.deep.equal(expectedResult);
  });
  it("should return the result object if cart and tax are valid", () => {
    const cart = [
      {
        name: "Potato",
        description: "Potatoes are great.",
        price: 0.5,
      },
    ];
    const QCTAX = 0.14975;
    const result = calculateShoppingCart(cart, QCTAX);
    const expectedResult = "object";

    expect(result).to.be.an(expectedResult);
  });
  it("should return the result object with 2 as the amountOfItems if there is two items in the cart", () => {
    const cart = [
      {
        name: "Potato",
        description: "Potatoes are great.",
        price: 0.5,
      },
      {
        name: "Yestato",
        description: "Potatoes are great.",
        price: 1.5,
      },
    ];
    const QCTAX = 0.14975;
    const result = calculateShoppingCart(cart, QCTAX);
    const expectedResult = 2;

    expect(result.amountOfItems).to.equal(expectedResult);
  });
  it("should return the result object with 4.00 as the subtotal if there is two items in the cart that are priced a 2.00 each", () => {
    const cart = [
      {
        name: "Potato",
        description: "Potatoes are great.",
        price: 2,
      },
      {
        name: "Yestato",
        description: "Potatoes are great.",
        price: 2,
      },
    ];
    const QCTAX = 0.14975;
    const result = calculateShoppingCart(cart, QCTAX);
    const expectedResult = 4;

    expect(result.subtotal).to.equal(expectedResult);
  });
  it("should return the result object with 0.15 as the taxes if there is one item in the cart that is priced a 1.00 and tax is 0.14975", () => {
    const cart = [
      {
        name: "Potato",
        description: "Potatoes are great.",
        price: 1,
      },
    ];
    const QCTAX = 0.14975;
    const result = calculateShoppingCart(cart, QCTAX);
    const expectedResult = 0.15;

    expect(result.taxes).to.equal(expectedResult);
  });
  it("should return the result object with 1.15 as the total if there is one item in the cart that is priced a 1.00 and tax is 0.14975", () => {
    const cart = [
      {
        name: "Potato",
        description: "Potatoes are great.",
        price: 1,
      },
    ];
    const QCTAX = 0.14975;
    const result = calculateShoppingCart(cart, QCTAX);
    const expectedResult = 1.15;

    expect(result.total).to.equal(expectedResult);
  });
});
