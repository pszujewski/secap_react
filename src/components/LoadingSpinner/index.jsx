import React from "react";
import PropTypes from "prop-types";
import { Spin } from "antd";

export default class LoadingSpinner extends React.Component {
  static propTypes = {
    rootStyle: PropTypes.object, // not required
  };

  getStyle() {
    const { rootStyle } = this.props;
    const style = { margin: "2rem 10rem" };
    if (!rootStyle) return style;
    return Object.assign({}, style, rootStyle);
  }

  getSpinContainerStyles = () => ({
    textAlign: "center",
    background: "rgba(0,0,0,0.05)",
    borderRadius: "4px",
    marginBottom: "20px",
    padding: "30px 50px",
    margin: "20px 0",
  });

  render() {
    return (
      <div
        data-testid="spinner"
        className="loading-spinner"
        style={this.getStyle()}>
        <div
          className="spinner-container"
          style={this.getSpinContainerStyles()}>
          <Spin size="large" />
        </div>
      </div>
    );
  }
}
