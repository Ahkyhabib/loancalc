import React, { Component } from "react";
import "../css/App.css";
import { Grid, Row, Col, Form } from "react-bootstrap";
import RightSide from "./Form/RightSide";
import Mortgage from "./Form/Mortgage";
import Debt from "./Form/Debt";
import Payment from "./Form/Payment";
import Borrow from "./Form/Borrow";
import Status from "./Form/Status";
import Duration from "./Form/Duration";
import HValue from "./Form/HValue";
import Toggle from "./Buttons/Toggle";
import Header from "./Form/Header";
import TestCard from "./Cards/TestCard";

class LoanCalculator extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     isHidden: true
  //   };
  // }
  // toggleHidden() {
  //   this.setState({
  //     isHidden: !this.state.isHidden
  //   });
  // }
  render() {
    return (
      <Grid className="show-grid mainContainer">
        <Header />
        <Row>
          <Col className="leftSide" xs={12} md={6}>
            {/* <Toggle /> */}
            <Form horizontal>
              <HValue className="valFade" />

              {/* <Mortgage className="mortFade" id="mortHide" /> */}
              {/* <Debt className="debtFade" /> */}
              {/* <Payment /> */}
              {/* <Borrow /> */}
              {/* <Status /> */}
              {/* <Duration /> */}
            </Form>
          </Col>
          {/* <TestCard /> */}
          <RightSide />
        </Row>
      </Grid>
    );
  }
}

// Assign deafault values to props

LoanCalculator.defaultProps = {
  ARM5YR: 5.052,
  FIX30YR: 4.835,
  FIXVA30YR: 4.674,
  FIX15YR: 4.478,

  creditScoreE: 3.3,
  creditScoreG: 9.6,
  creditScoreF: 17.4,

  // VaY:
  // VaN:

  currancy: "$"
};

export default LoanCalculator;
