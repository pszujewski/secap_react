import { connect } from "react-redux";
import InputQueryForm from "./index";
import { getQueryState } from "../data/mapStateToProps";
import { queryRequest } from "../data/actions";

const mapStateToProps = state => {
  const query = getQueryState(state);
  return {
    isLoadingQuery: query.isLoading,
  };
};

const mapDispatchToProps = dispatch => ({
  sendQuery: query => dispatch(queryRequest(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputQueryForm);
