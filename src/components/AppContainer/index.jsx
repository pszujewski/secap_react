import React from "react";
import PropTypes from "prop-types";
import Navigation from "./Navigation";

export default class AppContainer extends React.Component {
  static propTypes = {
    render: PropTypes.func, // render props pattern
  };

  state = {
    activeNavKey: "custom",
  };

  // String -> setState
  // Produces new state of the navigation given the nextKey that
  // should be active; next key is one of "custom", "build" or "ebnf"
  updateNavKey = nextKey => {
    this.setState({ activeNavKey: nextKey });
  };

  render() {
    const { activeNavKey } = this.state;
    return (
      <Navigation activeNavKey={activeNavKey} updateNavKey={this.updateNavKey}>
        {this.props.render(this.state)}
      </Navigation>
    );
  }
}
