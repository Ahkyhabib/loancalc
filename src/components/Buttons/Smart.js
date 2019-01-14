import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Smart extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <Button
        classNale="next"
        bsSize="large"
        bsStyle="success"
        onClick={this.handleClick}
      >
        {this.state.isToggleOn ? "Get Your Savings Here" : "Recalculate"}
      </Button>
    );
  }
}

export default Smart;
