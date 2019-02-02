import * as Api from "../../Api";
import * as Actions from "./actions";
import * as types from "./types";
import { takeEvery, call, put } from "redux-saga/effects";

export function* listDatasetsWorker() {
  try {
    const datasets = yield call(Api.get, "/datasets");
    yield put(Actions.listDatasetsSuccess(datasets));
  } catch (error) {
    yield put(Actions.listDatasetsError(error));
  }
}

export default function* listDatasetsSaga() {
  yield takeEvery(types.LIST_DATASETS_REQUEST, listDatasetsWorker);
}
