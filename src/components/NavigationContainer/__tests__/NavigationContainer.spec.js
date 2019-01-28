import React from "react";
import { renderForTest, rightClick } from "../../../setupTestComponent";
import NavigationContainer from "../index";
import { fireEvent } from "react-testing-library";

const render = state => {
  return <div>{state.activeNavKey}</div>;
};

const setup = renderForTest(NavigationContainer, { render });

describe("<NavigationContainer />", () => {
  it("Should render 'custom' by default and onMount", () => {
    const { getByText } = setup();
    expect(getByText("custom")).toBeInTheDocument();
  });

  it("Should accept click events to update the activeNavKey", () => {
    const { getByTestId, getByText } = setup();
    const didFire = fireEvent.click(getByTestId("build-anchor"), rightClick);
    expect(getByText("custom")).toBeInTheDocument();
    expect(didFire).toBe(true);
  });
});
