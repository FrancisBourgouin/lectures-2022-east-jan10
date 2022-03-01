import Computer from "./Computer";
import Player from "./Player";
import Result from "./Result";
import { useEffect, useState } from "react";
import { pickComputerChoice } from "../helpers/robotHelpers";
import { chooseWinner } from "../helpers/gameHelpers";

export default function Game(props) {
  const [cheating, isCheating] = useState(true);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (playerChoice) {
      const computerChoice = pickComputerChoice(cheating, playerChoice);
      const result = chooseWinner(computerChoice, playerChoice);

      if (result === "win") {
        return setResult("Human cognition still better than AI");
      }
      if (result === "tie") {
        return setResult("Are you more of a tie fighter, or tied shoe");
      }
      if (result === "lose") {
        return setResult("Skynet has risen, beware.");
      }
    }
  }, [playerChoice]);

  return (
    <div>
      <main className="game">
        <Computer cheating={cheating} toggleCheat={() => isCheating(!cheating)} />
        <Player setPlayerChoice={setPlayerChoice} />
      </main>
      <Result message={result} />
    </div>
  );
}
