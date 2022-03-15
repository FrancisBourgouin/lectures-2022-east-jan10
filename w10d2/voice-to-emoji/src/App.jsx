import "./App.css";
import useVoiceToEmoji from "./hooks/useVoiceToEmoji";

function App() {
  const [currentIndex, init] = useVoiceToEmoji();
  const labels = ["💤💤💤", "☕☕☕", "😆😆😆", "🥔🥔🥔", "🤖🤖🤖", "🧟🧟🧟", "🔥🍞🔥"];

  return (
    <div className="App">
      <header className="App-header">
        <h1>SUPER VOICE TO EMOJI YEAH 🧙‍♂️</h1>
      </header>
      <h1>{labels[currentIndex]}</h1>
      <button onClick={init}>LISTEN</button>
    </div>
  );
}

export default App;
