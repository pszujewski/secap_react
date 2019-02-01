import React from "react";
import PropTypes from "prop-types";

export default class Prompt extends React.Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.element,
    header: PropTypes.string,
    body: PropTypes.string,
  };

  rootStyle = () => ({
    padding: "2rem 0",
    textAlign: "center",
  });

  getStyle() {
    const { style } = this.props;
    if (!style) return this.rootStyle();
    return { ...style, ...this.rootStyle() };
  }

  render() {
    const { header, body, children } = this.props;
    return (
      <div className="Prompt" style={this.getStyle()}>
        <h2>{header}</h2>
        <p>{body}</p>
        {children}
      </div>
    );
  }
}
