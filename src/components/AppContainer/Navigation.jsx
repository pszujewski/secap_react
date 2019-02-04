import React from "react";
import PropTypes from "prop-types";
import { Layout, Menu } from "antd";

const { Header } = Layout;

export default class Navigation extends React.Component {
  static propTypes = {
    activeNavKey: PropTypes.string, // "custom," "datasets" or "ebnf"
    updateNavKey: PropTypes.func,
    children: PropTypes.element,
  };

  updateKey = key => () => {
    this.props.updateNavKey(key);
  };

  getNavAnchor(key, label) {
    const tId = `${key}-anchor`;
    return (
      <Menu.Item data-testid={tId} key={key} onClick={this.updateKey(key)}>
        {label}
      </Menu.Item>
    );
  }

  render() {
    const { activeNavKey: key } = this.props;
    return (
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        {this.props.children}
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[key]}
          style={{ lineHeight: "64px" }}>
          {this.getNavAnchor("custom", "Custom query")}
          {this.getNavAnchor("ebnf", "Review the EBNF")}
          {this.getNavAnchor("datasets", "Summary of datasets")}
        </Menu>
      </Header>
    );
  }
}
