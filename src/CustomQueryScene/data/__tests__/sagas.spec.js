import * as Api from "../../../Api";
import * as types from "../types";
import { call } from "redux-saga/effects";
import { queryWorker } from "../sagas";
import { queryRequest } from "../actions";

const query =
  "In courses dataset courses, find entries whose Average is 95; show Average.";

describe("querySaga worker", () => {
  it("Should yield a call to Api.post when you send a QUERY_REQUEST", () => {
    const gen = queryWorker(queryRequest(query));
    expect(gen.next().value).toEqual(call(Api.post, "/query", query));
  });

  it("Should yield a PUT with QUERY_SUCCESS action after QUERY_REQUEST", () => {
    const gen = queryWorker(queryRequest(query));
    gen.next();
    const effect = gen.next();
    expect(effect.value.type).toBe("PUT");
    expect(effect.value.payload.action.type).toBe(types.QUERY_SUCCESS);
  });
});
