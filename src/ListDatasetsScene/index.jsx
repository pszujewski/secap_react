import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
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

  render() {
    return <div data-testid="datasets-scene">DATASETS SCENE LIST</div>;
  }
}

const mapStateToProps = state => {
  const listState = getListDatasetsState(state);
  return {
    hasDatasetsList: listState.datasets !== null,
  };
};

export default connect(mapStateToProps)(ListDatasetsScene);
