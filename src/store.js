import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer";
import rootSaga from "./rootSaga";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const syncWithReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__;

  const store = createStore(
    reducer,
    compose(
      applyMiddleware(sagaMiddleware),
      syncWithReduxDevTools && syncWithReduxDevTools()
    )
  );

  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
