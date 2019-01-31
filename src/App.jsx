import React, { Component } from "react";
import AppContainer from "./components/AppContainer";
import ErrorBoundary from "./components/ErrorBoundary";
import SceneRouter from "./SceneRouter";

export default class App extends Component {
  // String -> JSX
  // Produces the scene or service desired based on the given key
  getSceneByNavKey = ({ activeNavKey }) => {
    return (
      <ErrorBoundary>
        <SceneRouter activeNavKey={activeNavKey} />
      </ErrorBoundary>
    );
  };

  render() {
    return <AppContainer render={this.getSceneByNavKey} />;
  }
}
