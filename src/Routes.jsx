import React, { Component } from "react";
import PropTypes from "prop-types";
import CustomQueryScene from "./CustomQueryScene";
import EBNFOverviewScene from "./EBNFOverviewScene";

export default class Routes extends Component {
  static propTypes = {
    activeNavKey: PropTypes.string,
  };

  // String -> JSX
  // Produces the scene or service desired based on the given key
  renderSceneByNavKey = activeNavKey => {
    switch (activeNavKey) {
      case "ebnf":
        return <EBNFOverviewScene />;
      case "custom":
      default:
        return <CustomQueryScene />;
    }
  };

  render() {
    return (
      <div className="Routes">
        {this.renderSceneByNavKey(this.props.activeNavKey)}
      </div>
    );
  }
}
