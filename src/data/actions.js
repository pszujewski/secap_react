import * as types from "./types";

export const queryRequest = query => ({
  type: types.QUERY_REQUEST,
  payload: query,
});

export const querySuccess = queryResults => ({
  type: types.QUERY_SUCCESS,
  payload: queryResults,
});

export const queryError = error => ({
  type: types.QUERY_ERROR,
  payload: error,
});

export const queryClearAll = () => ({
  type: types.QUERY_CLEAR,
});
