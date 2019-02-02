import * as types from "./types";

export const listDatasetsRequest = () => ({
  type: types.LIST_DATASETS_REQUEST,
});

export const listDatasetsSuccess = datasets => ({
  type: types.LIST_DATASETS_SUCCESS,
  payload: datasets,
});

export const listDatasetsError = error => ({
  type: types.LIST_DATASETS_ERROR,
  payload: error,
});
