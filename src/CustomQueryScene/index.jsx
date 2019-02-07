import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import InputQueryForm from "./InputQueryForm/InputQueryConnected";
import ResultsTableWrapper from "./QueryResultsTable/ResultsTableWrapped";
import QueryErrorPrompt from "./QueryErrorPrompt";

import LoadingSpinner from "../components/LoadingSpinner";
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
    const b = "Input your query above. Review the EBNF for query construction";
    return (
      <Prompt header="Query UBC datasets" body={b}>
        <p>
          Or paste this example query into the field above:{" "}
          <span style={{ fontStyle: "italic" }}>
            In courses dataset courses, find entries whose Average is greater
            than 97; show Department and Average; sort in ascending order by
            Average.
          </span>
        </p>
      </Prompt>
    );
  }

  render() {
    const { isLoadingQuery: isLoading } = this.props;
    return (
      <div data-testid="custom-query-scene">
        <InputQueryForm />
        {isLoading ? <LoadingSpinner /> : this.getQueryFeedback()}
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
