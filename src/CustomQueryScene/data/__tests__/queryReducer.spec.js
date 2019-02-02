import queryReducer from "../reducer";
import * as Actions from "../actions";

const initialState = {
  isLoading: false,
  results: null,
  error: null,
};

describe("queryReducer", () => {
  it("isLoading should be true following QUERY_REQUEST", () => {
    const state = queryReducer(initialState, Actions.queryRequest("In"));
    expect(state.isLoading).toBe(true);
  });

  it("The store should contain API query results following QUERY_SUCCESS", () => {
    const mockResults = [
      { courses_uuid: "000", courses_title: "A UBC course" },
      { courses_uuid: "001", courses_title: "Another course" },
    ];

    const results = {
      code: 200,
      body: { result: mockResults },
    };

    const state = queryReducer(initialState, Actions.querySuccess(results));
    expect(state.results).toEqual(results);
  });

  it("Should save API errors on QUERY_ERROR", () => {
    const err = {
      code: 400,
      body: { error: "Failed to parse query" },
    };

    const state = queryReducer(initialState, Actions.queryError(err));
    expect(state.error).toEqual(err);
  });
});
