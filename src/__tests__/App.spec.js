import App from "../App";
import { renderWithReduxStore } from "../setupTestComponent";

const setup = renderWithReduxStore(App);

describe("<App />", () => {
  it("renders without crashing", () => {
    const { getByText } = setup();
    expect(getByText(/Software development capstone/i)).toBeInTheDocument();
  });
});
