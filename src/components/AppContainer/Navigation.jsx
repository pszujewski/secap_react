import React from "react";
import PropTypes from "prop-types";
import { Layout, Menu } from "antd";
import SceneWrapper from "./SceneWrapper";
import AppLogo from "./AppLogo";

const { Header } = Layout;

export default class Navigation extends React.Component {
  static propTypes = {
    activeNavKey: PropTypes.string, // "custom," "build" or "ebnf"
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
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <AppLogo />
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[key]}
            style={{ lineHeight: "64px" }}>
            {this.getNavAnchor("custom", "Custom query")}
            {this.getNavAnchor("ebnf", "Review the EBNF")}
          </Menu>
        </Header>
        <SceneWrapper activeNavKey={key}>{this.props.children}</SceneWrapper>
      </Layout>
    );
  }
}
