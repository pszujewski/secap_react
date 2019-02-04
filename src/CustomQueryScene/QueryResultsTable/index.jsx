import React from "react";
import PropTypes from "prop-types";
import NoQueryResultsPrompt from "./NoQueryResultsPrompt";
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

  getOneColumnConfig = colKey => {
    return { title: colKey, dataIndex: colKey, key: colKey };
  };

  getRecordsWithUniqueKeys() {
    const { queryResults: records } = this.props;
    return records.map((r, idx) => ({ ...r, key: idx }));
  }

  render() {
    if (this.props.queryResults.length === 0) {
      return <NoQueryResultsPrompt />;
    }

    return (
      <div style={{ paddingTop: "2rem" }}>
        <Table
          columns={this.getTableColumnsConfig()}
          dataSource={this.getRecordsWithUniqueKeys()}
        />
      </div>
    );
  }
}
