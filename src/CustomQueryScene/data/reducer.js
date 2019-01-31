import { combineReducers } from "redux";
import * as types from "./types";

const isLoading = (state = false, action) => {
  switch (action.type) {
    case types.QUERY_REQUEST:
      return true;
    case types.QUERY_SUCCESS:
    case types.QUERY_ERROR:
    case types.QUERY_CLEAR:
      return false;
    default:
      return state;
  }
};

const queryResults = (state = null, action) => {
  switch (action.type) {
    case types.QUERY_REQUEST:
    case types.QUERY_ERROR:
    case types.QUERY_CLEAR:
      return null;
    case types.QUERY_SUCCESS:
      return action.payload
    default:
      return state;
  }
};

const queryError = (state = null, action) => {
  switch (action.type) {
    case types.QUERY_REQUEST:
    case types.QUERY_SUCCESS:
    case types.QUERY_CLEAR:
      return null
    case types.QUERY_ERROR:
      return action.payload
    default:
      return state;
  }
};

export default combineReducers({
  isLoading,
  results: queryResults,
  error: queryError,
});

