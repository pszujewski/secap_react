import * as types from "./types";

const initialState = {
  loading: false,
  results: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.QUERY_REQUEST:
      return Object.assign({}, initialState, { loading: true });
    case types.QUERY_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        results: action.payload,
      });
    case types.QUERY_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.payload,
      });
    case types.QUERY_CLEAR:
      return initialState;
    default:
      return state;
  }
};
