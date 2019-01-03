import React, { Component } from "react";
import { Button, ButtonGroup, Col, ButtonToolbar } from "react-bootstrap";

class RightSide extends Component {
  render() {
    return (
      <Col className="rightSide" xs={12} md={6}>
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

        {/* <h4>APR</h4>
                <span className="aprDisplay">{this.props.APR}%</span> */}

        <h4>Your Credit History</h4>

        <ButtonGroup justified>
          <Button
            bsStyle="primary"
            id="Excellent"
            onClick={this.props.btnOnClick}
          >
            Excellent
          </Button>
          <Button bsStyle="primary" id="Good" onClick={this.props.btnOnClick}>
            Good
          </Button>
          <Button bsStyle="primary" id="Fair" onClick={this.props.btnOnClick}>
            Fair
          </Button>
        </ButtonGroup>
        <ButtonToolbar className="next">
          <Button
            bsSize="large"
            bsStyle="success"
            onClick={this.props.btnOnClick}
            href="https://www.rocketmortgage.com/?gclid=Cj0KCQiAmafhBRDUARIsACOKEROp6oOPmUaJVuOtYH0Jgi2YtluSt1MVAsZv4i4KIo5I5ql8_sVOJCoaAsJxEALw_wcB&qls=RBA_rocketme.0000000013&ef_id=Cj0KCQiAmafhBRDUARIsACOKEROp6oOPmUaJVuOtYH0Jgi2YtluSt1MVAsZv4i4KIo5I5ql8_sVOJCoaAsJxEALw_wcB:G:s&s_kwcid=AL!1083!3!320194990266!e!!g!!rocket%20mortgage&gclsrc=aw.ds"
          >
            Click Next
          </Button>
        </ButtonToolbar>
      </Col>
    );
  }
}

export default RightSide;
