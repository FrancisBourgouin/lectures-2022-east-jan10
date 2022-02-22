import React from "react";
import { storiesOf } from "@storybook/react";

import Header from "../components/Header";

storiesOf("Header", module)
  .add("With a plant count", () => <Header plantAmount={2} />)
  .add("Without a plant count", () => <Header />);
