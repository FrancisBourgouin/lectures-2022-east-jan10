export default function Computer(props) {
  const { toggleCheat, cheating } = props;
  return (
    <section className="computer">
      <span
        role="img"
        className={`${cheating ? "cheating" : ""}`}
        aria-label="robot"
        onClick={toggleCheat}
      >
        🤖
      </span>
      <div>
        <h1>EXTERRMINATE !</h1>
        <div className="choices">
          <button>
            <span role="img" aria-label="moai">
              ❔
            </span>
          </button>
          <button>
            <span role="img" aria-label="axe">
              ❔
            </span>
          </button>
          <button>
            <span role="img" aria-label="tree">
              ❔
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
