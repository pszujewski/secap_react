import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Table } from "antd";
import { getListDatasetsState } from "../data/mapStateToProps";

export class DatasetsTable extends React.Component {
  static propTypes = {
    datasets: PropTypes.arrayOf(PropTypes.object),
  };

  getColumnsConfig() {
    return [
      { title: "Dataset ID", dataIndex: "id", key: "id" },
      { title: "Dataset Kind", dataIndex: "kind", key: "kind" },
      { title: "Total records", dataIndex: "numRows", key: "numRows" },
    ];
  }

  getRecords() {
    const { datasets: sets } = this.props;
    return sets.map(set => ({ ...set, key: set.id }));
  }

  render() {
    return (
      <Table columns={this.getColumnsConfig()} dataSource={this.getRecords()} />
    );
  }
}

const mapStateToProps = state => {
  const listState = getListDatasetsState(state);
  return {
    datasets: listState.datasets.body.result,
  };
};

export default connect(mapStateToProps)(DatasetsTable);
