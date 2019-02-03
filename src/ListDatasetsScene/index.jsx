import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import DatasetsTable from "./DatasetsTable";
import LoadingSpinner from "../components/LoadingSpinner";
import { listDatasetsRequest } from "./data/actions";
import { getListDatasetsState } from "./data/mapStateToProps";

export class ListDatasetsScene extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    hasDatasetsList: PropTypes.bool,
  };

  componentDidMount() {
    if (!this.props.hasDatasetsList) {
      this.props.dispatch(listDatasetsRequest());
    }
  }

  getDatasetsTable() {
    const { hasDatasetsList } = this.props;
    if (hasDatasetsList) {
      return <DatasetsTable />;
    }
    return <LoadingSpinner />;
  }

  render() {
    return <div data-testid="datasets-scene">{this.getDatasetsTable()}</div>;
  }
}

const mapStateToProps = state => {
  const listState = getListDatasetsState(state);
  return {
    hasDatasetsList: listState.datasets !== null,
  };
};

export default connect(mapStateToProps)(ListDatasetsScene);
