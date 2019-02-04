import { call, put } from "redux-saga/effects";
import { listDatasetsWorker } from "../sagas";
import * as Api from "../../../Api";
import * as Actions from "../actions";

describe("list datasets sagas", () => {
  it("Should produce a call effect on LIST_DATASETS_REQUEST", () => {
    const gen = listDatasetsWorker(Actions.listDatasetsRequest());
    expect(gen.next().value).toEqual(call(Api.get, "/datasets"));
  });

  it("Should produce a 'put' effect after receiving API results", () => {
    const result = [
      { id: "courses", kind: "courses", numRows: 64612 },
      { id: "rooms", kind: "rooms", numRows: 42 },
    ];

    const mockApiResponse = {
      code: 200,
      body: { result },
    };

    const gen = listDatasetsWorker(Actions.listDatasetsRequest());
    gen.next();

    // Pass in the expected result of 'call' to Api.get
    // this makes redux-saga async effects very easy to test. You can always follow this pattern
    const expected = put(Actions.listDatasetsSuccess(mockApiResponse));
    expect(gen.next(mockApiResponse).value).toEqual(expected);
  });
});
