import App from "./App";
import { renderForTest } from "./setupTestComponent";

const setup = renderForTest(App);

describe("<App />", () => {
  it("renders without crashing", () => {
    const { getByText } = setup();
    expect(getByText(/Software development capstone/i)).toBeInTheDocument();
  });
});
