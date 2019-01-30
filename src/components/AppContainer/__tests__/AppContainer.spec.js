import React from "react";
import { renderForTest, rightClick } from "../../../setupTestComponent";
import AppContainer from "../index";
import { fireEvent } from "react-testing-library";

const render = state => {
  return <div>{state.activeNavKey}</div>;
};

const setup = renderForTest(AppContainer, { render });

describe("<AppContainer />", () => {
  it("Should render 'custom' by default and onMount", () => {
    const { getByText } = setup();
    expect(getByText("custom")).toBeInTheDocument();
  });

  it("Should accept click events to update the activeNavKey", () => {
    const { getByTestId, getByText } = setup();
    const didFire = fireEvent.click(getByTestId("ebnf-anchor"), rightClick);
    expect(getByText("custom")).toBeInTheDocument();
    expect(didFire).toBe(true);
  });
});
