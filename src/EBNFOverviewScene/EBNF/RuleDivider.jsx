import React from "react";

export default class RuleDivider extends React.Component {
  render() {
    return (
      <div className="rule-divider" style={{ marginBottom: "1rem" }}>
        {this.props.children}
      </div>
    );
  }
}