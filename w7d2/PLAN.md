# Watering Plant App

Show a list of plants, with their name, type, last watered and a warning if they are dangerously dry.

# Data

## Plant

```jsx
const plant = {
  id: "",
  type: "",
  lastWatered: "",
  wateringInterval: "",
  name: "",
};
```

## Plants

```jsx
const plants = [plant, plant];
```

# Seed

```jsx
const plant1 = {
  id: "1",
  type: "Fruit!",
  lastWatered: "2022-01-01",
  wateringInterval: "5",
  name: "Tomato",
};
const plant2 = {
  id: "2",
  type: "Eternal Tree",
  lastWatered: "00-01-01",
  wateringInterval: "50000000",
  name: "Yggdrasil",
};
const plant3 = {
  id: "3",
  type: "Cactus",
  lastWatered: "2022-02-01",
  wateringInterval: "30",
  name: "Stepmother's bottom",
};
const plant4 = {
  id: "4",
  type: "Potato",
  lastWatered: "2022-02-10",
  wateringInterval: "5",
  name: "Yukon Gold",
};

const plants = [plant1, plant2, plant3, plant4];
```

# Structure

## HTML

- body
  - header
    - h1 title
  - main
    - h1 title of section
    - ul all the plants
      - li singular plant

## Components

- App
  - Header ? (optional)
  - PlantList
    - PlantListItem

## Component Data

- App (plants array)
  - Header (amount of plants)
  - PlantList (plants array)
    - PlantListItem (name, type, lastWatered, wateringInterval)

OR

- App
  - Header
  - PlantList (plants array)
    - PlantListItem (name, type, lastWatered, wateringInterval)
