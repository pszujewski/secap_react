import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import InputQueryForm from "./InputQueryForm";
import ResultsTableWrapper from "./QueryResultsTable/ResultsTableWrapped";
import QueryErrorPrompt from "./QueryErrorPrompt";
import { getQueryState } from "./data/mapStateToProps";

export class CustomQueryScene extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    isLoadingQuery: PropTypes.bool,
    hasQueryResults: PropTypes.bool,
    hasQueryError: PropTypes.bool,
  };

  render() {
    const { hasQueryResults, hasQueryError } = this.props;
    return (
      <div data-testid="custom-query-scene">
        <InputQueryForm />
        {hasQueryResults && <ResultsTableWrapper />}
        {hasQueryError && <QueryErrorPrompt />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const query = getQueryState(state);
  return {
    isLoadingQuery: query.isLoading,
    hasQueryResults: query.results !== null,
    hasQueryError: query.error !== null,
  };
};

export default connect(mapStateToProps)(CustomQueryScene);
