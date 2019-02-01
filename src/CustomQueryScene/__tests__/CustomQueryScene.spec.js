import { renderWithReduxStore } from "../../setupTestComponent";
import CustomQueryScene from "../index";
import { queryError, querySuccess } from "../data/actions";

describe("<CustomQueryScene />", () => {
  // No results
  it("Renders the default prompt if there are no query results to display", () => {
    const render = renderWithReduxStore(CustomQueryScene);
    const { getByText } = render();
    expect(getByText(/Query UBC datasets/i)).toBeInTheDocument();
  });

  // Error received
  it("Renders the error message if the user submits an invalid query", () => {
    const caughtError = {
      code: 400,
      body: { error: "Failed to parse query" },
    };

    const action = queryError(caughtError);
    const render = renderWithReduxStore(CustomQueryScene, action);

    const { getByText } = render();
    expect(getByText(caughtError.body.error)).toBeInTheDocument();
  });

  // Valid results received
  it("Renders the API query results if valid query results are in store", () => {
    const mockResults = [
      { courses_uuid: "000", courses_title: "A UBC course" },
      { courses_uuid: "001", courses_title: "Another course" },
    ];

    const queryResults = {
      code: 200,
      body: { result: mockResults },
    };

    const action = querySuccess(queryResults);
    const render = renderWithReduxStore(CustomQueryScene, action);

    const { getByText } = render();
    expect(getByText(mockResults[0].courses_title)).toBeInTheDocument();
    expect(getByText(mockResults[1].courses_uuid)).toBeInTheDocument();
  });
});
