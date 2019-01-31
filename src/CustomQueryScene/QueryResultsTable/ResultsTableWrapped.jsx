import QueryResultsTable from "./index";
import { connect } from "react-redux";
import { getQueryState } from "../data/mapStateToProps";

const mapStateToProps = state => {
  const query = getQueryState(state);
  return {
    queryResults: query.results.body.result,
  };
};

export default connect(mapStateToProps)(QueryResultsTable);
