import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import InputQueryForm from "./InputQueryForm";
import ResultsTableWrapper from "./QueryResultsTable/ResultsTableWrapped";
import { getQueryState } from "./data/mapStateToProps";

export class CustomQueryScene extends React.Component {
  static propTypes = {
    isLoadingQuery: PropTypes.bool,
    hasQueryResults: PropTypes.bool,
  };

  render() {
    const { hasQueryResults } = this.props;
    return (
      <div data-testid="custom-query-scene">
        <InputQueryForm />
        {hasQueryResults && <ResultsTableWrapper />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const query = getQueryState(state);
  return {
    isLoadingQuery: query.isLoading,
    hasQueryResults: query.results !== null,
  };
};

export default connect(mapStateToProps)(CustomQueryScene);
