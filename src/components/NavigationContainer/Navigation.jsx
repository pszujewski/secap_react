import React from "react";
import PropTypes from "prop-types";
import { Layout, Menu } from "antd";
import AppLogo from "./AppLogo";
import DisplayNavigationPath from "./DisplayNavigationPath";

const { Header, Content, Footer } = Layout;

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
    return (
      <Menu.Item key={key} onClick={this.updateKey(key)}>
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
            {this.getNavAnchor("build", "Build a query")}
            {this.getNavAnchor("ebnf", "Review the EBNF")}
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px", marginTop: 64 }}>
          <DisplayNavigationPath activeNavKey={key} />
          <div
            style={{
              background: "#fff",
              padding: 24,
              minHeight: 920,
            }}>
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Software development capstone by Peter Szujewski - thanks Ant Design
        </Footer>
      </Layout>
    );
  }
}
