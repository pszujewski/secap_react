import React from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";
import DisplayNavigationPath from "./DisplayNavigationPath";

const { Content, Footer } = Layout;

export default class SceneWrapper extends React.Component {
  static propTypes = {
    activeNavKey: PropTypes.string,
    children: PropTypes.element,
  };

  render() {
    const { activeNavKey: key } = this.props;
    return (
      <React.Fragment>
        <Content style={{ padding: "0 50px", marginTop: 64 }}>
          <DisplayNavigationPath activeNavKey={key} />
          <div
            style={{
              background: "#fff",
              padding: 24,
              minHeight: 820,
            }}>
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Software development capstone by Peter Szujewski
        </Footer>
      </React.Fragment>
    );
  }
}
