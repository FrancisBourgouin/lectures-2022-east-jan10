import Computer from "../Computer";
import { fireEvent, render } from "@testing-library/react";

describe("Computer Component behavior", () => {
  it("should have the class cheating by default", () => {
    const { queryByText, debug } = render(<Computer cheating={true} />);

    const span = queryByText("🤖");
    // debug();
    expect(span).toBeInTheDocument();
    expect(span).toHaveClass("cheating");
  });
  it("should not have the class cheating when proper props", () => {
    const { queryByText, debug } = render(<Computer cheating={false} />);

    const span = queryByText("🤖");
    // debug();
    expect(span).toBeInTheDocument();
    expect(span).not.toHaveClass("cheating");
  });
  it("should call the toggleCheat function when clicked", () => {
    const toggleCheat = jest.fn();

    const { queryByText, debug } = render(
      <Computer cheating={false} toggleCheat={toggleCheat} />
    );

    const span = queryByText("🤖");
    expect(span).toBeInTheDocument();

    fireEvent.click(span);

    expect(toggleCheat).toHaveBeenCalled();
  });
});
