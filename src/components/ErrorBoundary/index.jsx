import React from "react";
import PropTypes from "prop-types";

export default class ErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    FallbackComponent: PropTypes.element, // not required
  };

  state = { hasError: false };

  // Update state so the next render will show the fallback UI.
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  // You can also log the error to an error reporting service
  componentDidCatch(error, info) {
    console.error(error, info);
  }

  defaultFallback() {
    return (
      <div style={{ paddingTop: "3rem" }}>
        <h1>Something went wrong.</h1>
      </div>
    );
  }

  render() {
    const { FallbackComponent: Fallback } = this.props;
    if (this.state.hasError) {
      // Render any custom fallback UI
      return Fallback ? <Fallback /> : this.defaultFallback();
    }

    return this.props.children;
  }
}
