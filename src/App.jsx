import React, { Component } from "react";
import AppContainer from "./components/AppContainer";
import Routes from "./Routes";

export default class App extends Component {
  // String -> JSX
  // Produces the scene or service desired based on the given key
  getAppBody = ({ activeNavKey }) => {
    return <Routes activeNavKey={activeNavKey} />;
  };

  render() {
    return <AppContainer render={this.getAppBody} />;
  }
}
