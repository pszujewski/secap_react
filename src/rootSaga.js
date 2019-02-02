import { fork } from "redux-saga/effects";
import querysaga from "./CustomQueryScene/data/sagas";
import listDatasetsSaga from "./ListDatasetsScene/data/sagas";

export default function* rootSaga() {
  yield fork(querysaga);
  yield fork(listDatasetsSaga);
}
