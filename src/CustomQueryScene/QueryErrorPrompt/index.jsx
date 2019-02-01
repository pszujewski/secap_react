import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Prompt from "../../components/Prompt";
import { getQueryState } from "../data/mapStateToProps";

export class QueryErrorPrompt extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    queryError: PropTypes.object,
  };

  // Object -> String
  // Produces the error message string
  getErrorMessage() {
    const { queryError } = this.props;
    return queryError.body.error;
  }

  render() {
    const msg = this.getErrorMessage();
    return <Prompt header="Error" body={msg} />;
  }
}

const mapStateToProps = state => {
  const query = getQueryState(state);
  return {
    queryError: query.error,
  };
};

export default connect(mapStateToProps)(QueryErrorPrompt);
