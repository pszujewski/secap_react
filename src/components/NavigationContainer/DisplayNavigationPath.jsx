import React from "react";
import PropTypes from "prop-types";
import { Breadcrumb } from "antd";

export default class Navigation extends React.Component {
  static propTypes = {
    activeNavKey: PropTypes.string, // "custom," "build" or "ebnf"
  };

  getCurrentLocationByKey() {
    const { activeNavKey } = this.props;
    switch (activeNavKey) {
      case "ebnf":
        return "EBNF";
      case "custom":
      default:
        return "Custom";
    }
  }

  render() {
    return (
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>App</Breadcrumb.Item>
        <Breadcrumb.Item>Navigation</Breadcrumb.Item>
        <Breadcrumb.Item>{this.getCurrentLocationByKey()}</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}
