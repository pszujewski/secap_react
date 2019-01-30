import { takeEvery } from "redux-saga/effects";

// Worker
function* queryWorker() {
  console.log("hello worker");
}

// Watcher
function* querySaga() {
  yield takeEvery("HELLO_ACTION", queryWorker);
}

// watcher saga -> watches for actions -> passes to worker saga

export default querySaga;
