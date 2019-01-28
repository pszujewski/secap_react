import React, { Component } from "react";
import PropTypes from "prop-types";
import BuildQueryScene from "./scenes/BuildQueryScene";
import CustomQueryScene from "./scenes/CustomQueryScene";
import EBNFOverviewScene from "./scenes/EBNFOverviewScene";

export default class Routes extends Component {
  static propTypes = {
    activeNavKey: PropTypes.string,
  };

  // String -> JSX
  // Produces the scene or service desired based on the given key
  renderSceneByNavKey = activeNavKey => {
    switch (activeNavKey) {
      case "build":
        return <BuildQueryScene />;
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
