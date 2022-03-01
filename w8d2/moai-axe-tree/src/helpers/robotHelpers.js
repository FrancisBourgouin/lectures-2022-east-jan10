// ## pickComputerChoice

// - if the robot is cheating should pick the opposite of the player
// - if the robot is not cheating, should pick a random value between 🗿 🪓 🌳

export const pickComputerChoice = (isCheating, playerChoice) => {
  if (typeof isCheating !== "boolean") {
    return null;
  }

  const options = ["🗿", "🪓", "🌳"];

  if (!options.includes(playerChoice)) {
    return null;
  }

  if (isCheating) {
    // if (playerChoice === "🗿") {
    //   return "🌳";
    // }
    // if (playerChoice === "🪓") {
    //   return "🗿";
    // }
    // if (playerChoice === "🌳") {
    //   return "🪓";
    // }

    const playerIndex = options.indexOf(playerChoice);
    const computerIndex = (playerIndex + 2) % options.length;

    return options[computerIndex];
  }

  const chosenIndex = Math.floor(Math.random() * 3);
  return options[chosenIndex];
};

// console.log(pickComputerChoice(true, "🗿"));
// console.log(pickComputerChoice(true, "🌳"));
// console.log(pickComputerChoice(true, "🪓"));

// ## toggleRobot

// - If robot is off, toggling it will turn it on
// - If robot is on, toggling it will turn it off
