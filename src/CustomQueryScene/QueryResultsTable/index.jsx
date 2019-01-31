import React from "react";
import PropTypes from "prop-types";
import ColumnTitle from "./ColumnTitle";
import { Table } from "antd";

export default class QueryResultsTable extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    queryResults: PropTypes.arrayOf(PropTypes.object),
  };

  getTableColumnsConfig() {
    const { queryResults: results } = this.props;
    const firstRecord = results[0];
    return Object.keys(firstRecord).map(this.getOneColumnConfig);
  }

  getColumnTitle = colKey => {
    const columnTitle = new ColumnTitle(colKey);
    return columnTitle.getTitle();
  };

  getOneColumnConfig = colKey => {
    const title = this.getColumnTitle(colKey);
    return { title, dataIndex: colKey, key: colKey };
  };

  getRecordsWithUniqueKeys() {
    const { queryResults: records } = this.props;
    return records.map((r, idx) => ({ ...r, key: idx }));
  }

  render() {
    const columns = this.getTableColumnsConfig();
    return (
      <div style={{ paddingTop: "2rem" }}>
        <Table columns={columns} dataSource={this.getRecordsWithUniqueKeys()} />
      </div>
    );
  }
}
