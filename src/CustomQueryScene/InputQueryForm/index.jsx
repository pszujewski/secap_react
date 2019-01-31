import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Form, Icon, Input, Button } from "antd";
import { queryRequest } from "../data/actions";

export class InputQueryForm extends React.Component {
  static propTypes = {
    sendQuery: PropTypes.func,
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

const mapDispatchToProps = dispatch => ({
  sendQuery: query => dispatch(queryRequest(query)),
});

export default connect(
  null,
  mapDispatchToProps
)(InputQueryForm);
