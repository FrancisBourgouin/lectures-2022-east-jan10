# Shopping Cart !

# Requirements

calculateShoppingCart => subtotal, taxes, total, amount of items

# Data structures

## Product

```jsx
const product = {
  name: "Potato",
  description: "Potatoes are great.",
  price: 0.5,
};
```

## Cart

```jsx
const cart = [product, product];
```

## calculateShoppingCart()

```jsx
const result = {
  subtotal: 0,
  taxes: 0,
  total: 0,
  amountOfItems: 0,
};
```

# Tests for calculateShoppingCart

## tax is not a number

return an empty object and warn

## cart not being an array

return an empty object and warn

## product not being an object

## incomplete objects (missing a key)

skip product and warn

## cart is an empty array

return empty and warn

## cart is valid

return obj

## cart is populated with two items

return obj, key amountOfItems should have 2 as a value

## cart is populated with two items at 2$ each

return obj, key subtotal should have 4.00 as a value

## cart is populated with one item at 1$ and tax is .14975

return obj, key total 1.15, taxes should be 0.15
