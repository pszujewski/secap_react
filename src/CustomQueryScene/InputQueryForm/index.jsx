import React from "react";
import PropTypes from "prop-types";
import { Form, Icon, Input, Button } from "antd";

export default class InputQueryForm extends React.Component {
  static propTypes = {
    sendQuery: PropTypes.func,
    isLoadingQuery: PropTypes.bool,
  };

  state = {
    inputValue: "",
  };

  updateInput = evt => {
    const nextVal = evt.currentTarget.value;
    this.setState({ inputValue: nextVal });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.sendQuery(this.state.inputValue.trim());
  };

  getSubmitButton() {
    const { isLoadingQuery: loading } = this.props;
    const s = { marginLeft: "2rem" };
    return (
      <Button disabled={loading} type="primary" htmlType="submit" style={s}>
        {loading ? "...Loading" : "Submit query"}
      </Button>
    );
  }

  render() {
    return (
      <Form style={{ display: "flex" }} onSubmit={this.handleSubmit}>
        <Input
          id="query-input"
          value={this.state.inputValue}
          onChange={this.updateInput}
          prefix={<Icon type="edit" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="UBC query goes here"
        />
        {this.getSubmitButton()}
      </Form>
    );
  }
}
