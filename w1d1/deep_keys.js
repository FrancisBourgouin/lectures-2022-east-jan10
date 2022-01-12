const marianaTrench = {
  someKey: "some Value",
  depth: {
    luminosity: 0.7,
    colors: {
      blue: 0.8,
      red: 0.2,
    },
  },
};

marianaTrench.someKey;

marianaTrench.depth.luminosity;

marianaTrench.depth.colors.red;

const depth = marianaTrench.depth;
const colors = depth.colors;
const red = colors.red;

marianaTrench.depth.colors.red;
