import { takeEvery, call, put } from "redux-saga/effects";
import * as types from "./types";
import { querySuccess, queryError } from "./actions";
import * as Api from "../../Api";

// watcher saga -> watches for actions -> passes to worker saga

// Worker
export function* queryWorker(action) {
  try {
    const body = action.payload;
    const queryResults = yield call(Api.post, "/query", body);
    yield put(querySuccess(queryResults));
  } catch (error) {
    yield put(queryError(error));
  }
}

// Watcher
export default function* querySaga() {
  yield takeEvery(types.QUERY_REQUEST, queryWorker);
}
