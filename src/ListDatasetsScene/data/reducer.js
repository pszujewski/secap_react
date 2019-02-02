import { combineReducers } from "redux";
import * as types from "./types";

const datasets = (state = null, action) => {
  switch (action.type) {
    case types.LIST_DATASETS_REQUEST:
      return null;
    case types.LIST_DATASETS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const error = (state = null, action) => {
  switch (action.type) {
    case types.LIST_DATASETS_ERROR:
      return action.payload;
    case types.LIST_DATASETS_REQUEST:
    case types.LIST_DATASETS_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default combineReducers({
  datasets,
  error,
});
