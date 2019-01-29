import React from "react";
import InputQueryForm from "./InputQueryForm";

export default class CustomQueryScene extends React.Component {
  render() {
    return (
      <div data-testid="custom-query-scene">
        <InputQueryForm />
      </div>
    );
  }
}
