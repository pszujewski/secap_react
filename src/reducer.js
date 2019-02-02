import { combineReducers } from "redux";
import query from "./CustomQueryScene/data/reducer";
import listDatasets from "./ListDatasetsScene/data/reducer";

export default combineReducers({
  query,
  listDatasets,
});
