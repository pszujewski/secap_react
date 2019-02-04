import reducer from "../reducer";
import * as Actions from "../actions";

const result = [
  { id: "courses", kind: "courses", numRows: 64612 },
  { id: "rooms", kind: "rooms", numRows: 42 },
];

const payload = {
  code: 200,
  body: { result },
};

describe("list datasets reducer", () => {
  it("Should set datasets state with payload on LIST_DATASETS_SUCESS", () => {
    const initialState = {
      datasets: null,
      error: null,
    };

    const action = Actions.listDatasetsSuccess(payload);
    const state = reducer(initialState, action);
    expect(state.datasets).toEqual(payload);
  });

  it("Should reset datasets field to null on LIST_DATASETS_REQUEST", () => {
    const initialState = {
      datasets: payload,
      error: null,
    };

    const action = Actions.listDatasetsRequest();
    const state = reducer(initialState, action);

    expect(state.datasets).toBeNull();
  });
});
