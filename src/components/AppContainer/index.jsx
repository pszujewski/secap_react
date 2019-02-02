import React from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";

import AppLogo from "./AppLogo";
import Navigation from "./Navigation";
import SceneWrapper from "./SceneWrapper";

export default class AppContainer extends React.Component {
  static propTypes = {
    render: PropTypes.func, // render props pattern
  };

  state = {
    activeNavKey: "custom",
  };

  // String -> setState
  // Produces new state of the navigation given the nextKey that
  // should be active; next key is one of "custom", "datasets" or "ebnf"
  updateNavKey = nextKey => {
    this.setState({ activeNavKey: nextKey });
  };

  render() {
    const { activeNavKey: key } = this.state;
    return (
      <Layout>
        <Navigation activeNavKey={key} updateNavKey={this.updateNavKey}>
          <AppLogo />
        </Navigation>
        <SceneWrapper activeNavKey={key}>
          {this.props.render(this.state)}
        </SceneWrapper>
      </Layout>
    );
  }
}
