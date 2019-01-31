import App from "../App";
import { renderWithReduxDefault } from "../setupTestComponent";

const setup = renderWithReduxDefault(App);

describe("<App />", () => {
  it("renders without crashing", () => {
    const { getByText } = setup();
    expect(getByText(/Software development capstone/i)).toBeInTheDocument();
  });
});
