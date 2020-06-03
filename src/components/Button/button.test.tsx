import React from "react";
import { render } from "@testing-library/react";
import Button from "./button";

const defaultProps = {
  onClick: () => {},
};

describe("test Button Component", () => {
  it("should render the correct default button", function () {
    const wrapper = render(<Button>Nice</Button>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn btn-default");
  });
  it("should render to correct component on different props", function () {});
  it("should  render a link when btnType equals link ang href is provided", function () {});
  it("should render disabled button when disabled set to true", function () {});
});
