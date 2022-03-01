import { chooseWinner } from "./gameHelpers";

describe("chooseWinner error path", () => {
  it("should return null if playerChoice is invalid", () => {
    const result = chooseWinner("🌳", "🥔");

    expect(result).toBeNull();
  });
  it("should return null if computerChoice is invalid", () => {
    const result = chooseWinner("🍝", "🪓");

    expect(result).toBeNull();
  });
});

describe("chooseWinner happy path", () => {
  it("should show win for all combinations", () => {
    const winningCombinations = [
      ["🗿", "🪓"],
      ["🌳", "🗿"],
      ["🪓", "🌳"],
    ];

    for (const combination of winningCombinations) {
      const result = chooseWinner(combination[1], combination[0]);

      expect(result).toBe("win");
    }
  });
});
