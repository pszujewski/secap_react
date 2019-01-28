import React, { Component } from "react";
import NavigationContainer from "./components/NavigationContainer";
import Routes from "./Routes";

export default class App extends Component {
  // String -> JSX
  // Produces the scene or service desired based on the given key
  getAppBody = ({ activeNavKey }) => {
    return <Routes activeNavKey={activeNavKey} />;
  };

  render() {
    return <NavigationContainer render={this.getAppBody} />;
  }
}
