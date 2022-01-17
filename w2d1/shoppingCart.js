// 10^0 => 1
// 10^1 => 10
// 10^2 => 100

const round = (value, roundness) => {
  const divider = Math.pow(10, roundness);
  const roundedValue = Math.round(value * divider) / divider;

  return roundedValue;
};

const calculateShoppingCart = (cart, tax) => {
  if (!Array.isArray(cart) || cart.length === 0 || typeof tax !== "number") {
    return {};
  }
  const output = {
    amountOfItems: 0,
    subtotal: 0,
    taxes: 0,
    total: 0,
  };

  cart.forEach((product) => {
    if (typeof product !== "object" || !product.price) {
      return;
    }

    output.amountOfItems++;
    output.subtotal += product.price;
  });

  output.taxes = round(output.subtotal * tax, 2);
  output.total = round(output.subtotal + output.taxes, 2);

  return output;
};

const addToShoppingCart = () => {};
module.exports = { calculateShoppingCart, addToShoppingCart };
