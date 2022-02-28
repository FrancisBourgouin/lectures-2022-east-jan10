# Project Description

## Coffee Tracker

Gather information about coffee drinking during the day / weeks

# User Stories

- User should be able to add a coffee drinking event with specific information about it
- User should be able to remove an event of coffee drinking
- User should be able to modify a coffee drinking event (stretch)
- User should be able to access the information even if they reload or come back another day

# Packages

## Frontend

- CRA
- Axios
- Sass

## Backend

- Express
- PG (PostgresQL)

# Data structure

## coffee drinking event

```jsx
const coffeeDrinkingEvent = {
  id: "",
  time: "",
  amount: 0,
  beans: "",
  technique: "",
};
```

## coffee drinking event list

```jsx
const coffeeDrinkingEventList = [event, event, event];

const coffeeDrinkingEventList = {
  [id]: event,
  [id]: event,
  [id]: event,
  [id]: event,
};
```

# HTML Structure

- body
  - header
    - h1 title
  - main
    - form
      - input
      - input
      - input
      - button
    - ul
      - li
        - h1 tech / amount / beans
        - h2 time

# Component Structure

- App
  - Header ?
  - CoffeeDrinkForm
  - CoffeeDrinkList
    - CoffeeDrinkListItem

# Steps

# APIs
