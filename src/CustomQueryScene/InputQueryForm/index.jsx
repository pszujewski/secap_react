import React from "react";
import { Form, Icon, Input, Button } from "antd";

export default class InputQueryForm extends React.Component {
  state = {
    inputValue: "",
  };

  updateInput = evt => {
    const nextVal = evt.currentTarget.value;
    this.setState({ inputValue: nextVal });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <Form style={{ display: "flex" }} onSubmit={this.handleSubmit}>
        <Input
          value={this.state.inputValue}
          onChange={this.updateInput}
          prefix={<Icon type="edit" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="UBC query goes here"
        />
        <Button type="primary" htmlType="submit" style={{ marginLeft: "2rem" }}>
          Submit query
        </Button>
      </Form>
    );
  }
}
