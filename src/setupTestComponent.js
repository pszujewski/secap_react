import React from "react";
import { Provider } from "react-redux";
import { render } from "react-testing-library";
import rootReducer from "./reducer";
import { createStore } from "redux";

const getProps = (defaultProps, propsOverride) => {
  let props = defaultProps;
  if (!defaultProps) {
    return null;
  }
  if (propsOverride) {
    props = { ...props, ...propsOverride };
  }
  return props;
};

/**
 * @param {Jsx} Component
 * @param {Object} defaultProps
 * Produces setup function for unit tests of components; passes
 * component through rtl render()
 * Renders the given component with given defaultProps unless a propsOverride
 * is given
 */
export const renderForTest = (Component, defaultProps) => propsOverride => {
  if (!defaultProps) {
    return render(<Component />);
  }
  return render(<Component {...getProps(defaultProps, propsOverride)} />);
};

/**
 * @param {Jsx} UI // the component to render
 * @param {Object} redux // contains reducer and initialState fields
 * @param {Object} defaultProps // props for UI component if needed
 */
export const renderWithRedux = (UI, redux, defaultProps) => propsOverride => {
  const { reducer, initialState } = redux;

  const store = createStore(reducer, initialState);
  const props = getProps(defaultProps, propsOverride);

  return {
    store, // store is added to exports for ref in tests
    ...render(
      <Provider store={store}>{props ? <UI {...props} /> : <UI />}</Provider>
    ),
  };
};

/**
 * @param {Jsx} UI // the component to render
 * @param {Object} defaultProps // props for UI component if needed
 */
export const renderWithReduxStore = (UI, defaultProps) => propsOverride => {
  const reduxDefault = {
    reducer: rootReducer,
    initialState: rootReducer({}, { type: "INIT_REDUX" }),
  };
  return renderWithRedux(UI, reduxDefault, defaultProps)(propsOverride);
};

// Identifies a right click
export const rightClick = { button: 2 };
