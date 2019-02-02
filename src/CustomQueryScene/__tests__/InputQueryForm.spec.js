import { renderWithReduxStore, rightClick } from "../../setupTestComponent";
import { fireEvent } from "react-testing-library";
import InputQueryForm from "../InputQueryForm";

describe("<InputQueryForm />", () => {
  it("Should accept an onChange event in the input field", () => {
    const expected = "In courses";
    const render = renderWithReduxStore(InputQueryForm);
    const { getByPlaceholderText } = render();

    const input = getByPlaceholderText(/UBC query goes here/i);
    fireEvent.change(input, { target: { value: expected } });
    expect(input.value).toBe(expected);
  });

  it("Should fire a click event onClick of the submit button", () => {
    const nextValue = "Peter";
    const render = renderWithReduxStore(InputQueryForm);

    const { getByPlaceholderText, getByText } = render();
    const input = getByPlaceholderText(/UBC query goes here/i);

    fireEvent.change(input, { target: { value: nextValue } });
    const didFire = fireEvent.click(getByText("Submit query"), rightClick);

    expect(didFire).toBe(true);
  });
});
