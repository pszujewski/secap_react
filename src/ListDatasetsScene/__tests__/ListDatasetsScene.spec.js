import { renderWithReduxStore } from "../../setupTestComponent";
import ListDatasetsScene from "../index";

describe("<ListDatasetsScene />", () => {
  it("Should display the loading spinner on initial mount while fetching the data", () => {
    const render = renderWithReduxStore(ListDatasetsScene);
    const { getByTestId } = render();
    expect(getByTestId("spinner")).toBeInTheDocument();
  });
});
