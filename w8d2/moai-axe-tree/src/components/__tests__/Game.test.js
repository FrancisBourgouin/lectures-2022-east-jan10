import Game from "../Game";
import { fireEvent, render } from "@testing-library/react";

describe("Computer Component behavior", () => {
  it("should remove the class cheating when clicked on the robot", () => {
    const { debug, queryByText } = render(<Game />);

    // debug();

    const robot = queryByText("🤖");

    fireEvent.click(robot);

    expect(robot).not.toHaveClass("cheating");
  });
});

describe("Player Mechanic when Computer cheating", () => {
  it("should let the computer win when we don't click on the robot face", () => {
    const { debug, queryByText, queryByTestId } = render(<Game />);

    const treeButton = queryByTestId("tree");

    expect(treeButton).toBeInTheDocument();

    fireEvent.click(treeButton);

    const losingMessage = "Skynet has risen, beware.";

    const result = queryByText(losingMessage);

    expect(result).toBeInTheDocument();
  });
});
