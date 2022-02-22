import React from "react";
import { storiesOf } from "@storybook/react";

import PlantListItem from "../components/PlantListItem";

const wellWateredPlant = {
  id: "1",
  type: "Fruit!",
  lastWatered: "2022-02-22",
  wateringInterval: "5",
  name: "Tomato",
};

const badlyWateredPlant = {
  id: "1",
  type: "Fruit!",
  lastWatered: "2022-01-01",
  wateringInterval: "5",
  name: "Tomato",
};

storiesOf("PlantListItem Component", module)
  .add("Well watered", () => <PlantListItem {...wellWateredPlant} />)
  .add("Not well watered", () => <PlantListItem {...badlyWateredPlant} />);
