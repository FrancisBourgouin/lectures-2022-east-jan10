import React from "react";
import { storiesOf } from "@storybook/react";

import PlantList from "../components/PlantList";
import plants from "../data/plantData";

storiesOf("PlantList Component", module)
  .add("With a plant array", () => <PlantList plants={plants} />)
  .add("Without a plant array", () => <PlantList />);
