import React, { Component } from "react";
import { Button, ButtonGroup, Col, ButtonToolbar } from "react-bootstrap";
import Smart from "../Buttons/Smart";

class RightSide extends Component {
  render() {
    return (
      <Col className="rightSide" id="rightHide RightFade" xs={12} md={6}>
        <h4>Overall debt amount</h4>
        <span className="totalAmountDisplay">
          {this.props.currancy}
          {this.props.amount}
        </span>

        <h4>New monthly payments</h4>
        <span className="monthlyInstDisplay">
          {this.props.currancy}
          {this.props.monthly}
        </span>

        <h4>Money saved</h4>
        <span className="monthlyInstDisplay">
          {this.props.currancy}
          {this.props.monthly}
        </span>

        <ButtonToolbar className="next">
          {/* <Button
            bsSize="large"
            bsStyle="success"
            onClick={this.props.btnOnClick}
            href=""
          >
            Get Your Savings Here
          </Button> */}
        </ButtonToolbar>
        <Smart id="smartFade smartHide" />
      </Col>
    );
  }
}

export default RightSide;
