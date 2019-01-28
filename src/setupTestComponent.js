import React from "react";
import { render } from "react-testing-library";

/**
 * @param {Jsx} Component
 * @param {Object} defaultProps
 * Produces setup function for unit tests of components; passes
 * component through rtl render()
 * Renders the given component with given defaultProps unless a propsOverride
 * is given
 */
export const renderForTest = (Component, defaultProps) => propsOverride => {
  let props = defaultProps;

  if (!defaultProps) {
    return render(<Component />);
  }

  if (propsOverride) {
    props = { ...props, ...propsOverride };
  }

  return render(<Component {...props} />);
};
