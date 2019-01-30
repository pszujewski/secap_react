import { fork } from "redux-saga/effects";
import querysaga from "./data/sagas";

export default function* rootSaga() {
  yield fork(querysaga);
}
