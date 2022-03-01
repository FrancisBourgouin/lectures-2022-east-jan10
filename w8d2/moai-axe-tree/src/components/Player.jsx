export default function Player(props) {
  const { setPlayerChoice } = props;
  return (
    <section className="player">
      <span role="img" aria-label="player">
        👩‍💻
      </span>
      <div>
        <h1>Choose your destiny !</h1>
        <div className="choices">
          <button
            data-testid="moai"
            type="button"
            value="Moai"
            onClick={() => setPlayerChoice("🗿")}
          >
            <span role="img" aria-label="moai">
              🗿
            </span>
          </button>
          <button
            data-testid="axe"
            type="button"
            value="Axe"
            onClick={() => setPlayerChoice("🪓")}
          >
            <span role="img" aria-label="axe">
              🪓
            </span>
          </button>
          <button
            data-testid="tree"
            type="button"
            value="Tree"
            onClick={() => setPlayerChoice("🌳")}
          >
            <span role="img" aria-label="tree">
              🌳
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
