import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import InputQueryForm from "./InputQueryForm";
import ResultsTableWrapper from "./QueryResultsTable/ResultsTableWrapped";
import QueryErrorPrompt from "./QueryErrorPrompt";
import Prompt from "../components/Prompt";
import { getQueryState } from "./data/mapStateToProps";

export class CustomQueryScene extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    isLoadingQuery: PropTypes.bool,
    hasQueryResults: PropTypes.bool,
    hasQueryError: PropTypes.bool,
  };

  getQueryFeedback() {
    if (this.props.hasQueryError) {
      return <QueryErrorPrompt />;
    }
    if (this.props.hasQueryResults) {
      return <ResultsTableWrapper />;
    }
    return this.getDefaultPrompt();
  }

  getDefaultPrompt() {
    const b = "Input your query above. Review the EBNF for query construction.";
    return <Prompt header="Query UBC datasets" body={b} />;
  }

  render() {
    return (
      <div data-testid="custom-query-scene">
        <InputQueryForm />
        {this.getQueryFeedback()}
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
