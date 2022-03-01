// ## chooseWinner

// - if player picks 🗿, wins if 🪓
// - if player picks 🗿, tie if same
// - if player picks 🗿, lose if 🌳

// - if player picks 🪓, wins if 🌳
// - if player picks 🪓, tie if same
// - if player picks 🪓, lose if 🗿

// - if player picks 🌳, wins if 🗿
// - if player picks 🌳, tie if same
// - if player picks 🌳, lose if 🪓

export const chooseWinner = (computerChoice, playerChoice) => {
  const options = ["🗿", "🪓", "🌳"];
  if (!options.includes(computerChoice) || !options.includes(playerChoice)) {
    return null;
  }

  const possibilities = {
    "🗿": {
      "🗿": "tie",
      "🪓": "win",
      "🌳": "lose",
    },
    "🪓": {
      "🗿": "lose",
      "🪓": "tie",
      "🌳": "win",
    },
    "🌳": {
      "🗿": "win",
      "🪓": "lose",
      "🌳": "tie",
    },
  };

  return possibilities[playerChoice][computerChoice];
};
