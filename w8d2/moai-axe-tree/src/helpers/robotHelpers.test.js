import { pickComputerChoice } from "./robotHelpers";

describe("pickComputerChoice error path", () => {
  it("returns null when missing the cheating value of the computer", () => {
    const result = pickComputerChoice(undefined, "🪓");

    expect(result).toBeNull();
  });
  it("returns null when missing the player choice", () => {
    const result = pickComputerChoice(false, undefined);

    expect(result).toBeNull();
  });
  it("returns null when player uses a value not predetermined", () => {
    const result = pickComputerChoice(true, "🥔");

    expect(result).toBeNull();
  });
});

describe("pickComputerChoice happy path", () => {
  it("returns the proper result if the computer is cheating", () => {
    const result = pickComputerChoice(true, "🗿");
    expect(result).toBe("🌳");

    const result1 = pickComputerChoice(true, "🌳");
    expect(result1).toBe("🪓");

    const result2 = pickComputerChoice(true, "🪓");
    expect(result2).toBe("🗿");
  });
  it("returns a proper value if the computer is not cheating", () => {
    const result = pickComputerChoice(false, "🗿");
    const options = ["🗿", "🪓", "🌳"];

    expect(options).toContain(result);
  });
});
