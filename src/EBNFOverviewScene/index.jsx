import React from "react";
import EBNF from "./EBNF";
import ExampleQueries from "./ExampleQueries";
import "./ebnf-overview.css";

export default class EBNFOverviewScene extends React.Component {
  render() {
    return (
      <div data-testid="ebnf-scene">
        <ExampleQueries />
        <EBNF />
      </div>
    );
  }
}
