import React, { Component } from "react";
import "../css/App.css";
import { Grid, Row, Col, Form } from "react-bootstrap";
import RightSide from "./RightSide";
import FormMortgage from "./FormMortgage";
import FormDebt from "./FormDebt";
import FormPayment from "./FormPayment";
import FormBorrow from './FormBorrow';
import FormStatus from './FormStatus';
import FormDuration from './FormDuration';

class LoanCalculator extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.getNewDate = this.getNewDate.bind(this);
    this.calculate = this.calculate.bind(this);

    // SET STARTER CALCULATUION

    let MPR = this.props.APR1 / 100 / 12;
    let amount = this.props.valueA;
    let duration = this.props.valueD;
    let totalAmountToRepay = amount + amount * MPR * duration;
    let monthly = totalAmountToRepay / duration;

    // save props values in to the state
    this.state = {
      testProperty: '',
      APR: this.props.APR1,
      amountToRepay: Math.round(totalAmountToRepay).toFixed(),
      monthlyInst: Math.round(monthly).toFixed()
    };
  }

  update(e) {
    // Assign to let changedID ID of slider which has been changed
    let changedID = e.target.id;
    let value = e.target.value;
    //Changes the duration of time to pay loan back (sliderAmont)
    if (changedID === "sliderAmount") {
      this.setState({ valueAmount: e.target.value });
      console.log("EVENT TIME: " + this.getNewDate());
      console.log(
        "NEW ACTION DETECTED: ID - " +
          e.target.id +
          ": has been changed. New value: " +
          this.props.currancy +
          e.target.value
      );
    }
    if (changedID === "formAmount") {
      this.setState({ valueValue: e.target.value });
      console.log("EVENT TIME: " + this.getNewDate());
      console.log(
        "NEW ACTION DETECTED: ID - " +
          e.target.id +
          ": has been changed. New value: " +
          this.props.currancy +
          e.target.value
      );
    }
    if (changedID === "sliderDuration") {
      this.setState({ valueDuration: e.target.value });
      console.log("EVENT TIME: " + this.getNewDate());
      console.log(
        "NEW ACTION DETECTED: ID - " +
          e.target.id +
          ": has been changed. New value: " +
          e.target.value +
          " months"
      );
    }

    // if button credit history clicked set APR to choosen value
    switch (changedID) {
      case "Excellent":
        this.setState({ APR: this.props.APR1 });
        console.log("EVENT TIME: " + this.getNewDate());
        console.log(
          "NEW ACTION DETECTED: ID - " +
            e.target.id +
            ": has been clicked. New APR value is: " +
            this.props.APR1 +
            "%"
        );
        break;

      case "Good":
        this.setState({ APR: this.props.APR2 });
        console.log("EVENT TIME: " + this.getNewDate());
        console.log(
          "NEW ACTION DETECTED: ID - " +
            e.target.id +
            ": has been clicked. New APR value is: " +
            this.props.APR2 +
            "%"
        );
        break;

      case "Fair":
        this.setState({ APR: this.props.APR3 });
        console.log("EVENT TIME: " + this.getNewDate());
        console.log(
          "NEW ACTION DETECTED: ID - " +
            e.target.id +
            ": has been clicked. New APR value is: " +
            this.props.APR3 +
            "%"
        );
        break;

      default:
        break;
    }

    this.calculate(changedID, value);
  }

  getNewDate() {
    let newDate = new Date();
    let h, m, s;
    h = newDate.getHours();
    m = "0" + newDate.getMinutes();
    s = "0" + newDate.getSeconds();
    m = m.slice(-2);
    s = s.slice(-2);

    let event_date = h + ":" + m + ":" + s;
    return event_date;
  }

  handleChange(event) {
    this.setState({ testProperty: event.target.value })
  }

  calculate(id, value) {
    let amount, duration;
    let MPR = this.state.APR / 100 / 12; // MPR monthly APR for calculation
    let aprNew;
    // if calculate is after Duration is changed take value of duration from slider, but value of amount from state
    if (id === "sliderDuration") {
      duration = parseFloat(value);
      amount = parseFloat(this.state.valueAmount);
    }
    // if calculate is after Amount is changed take value of Amount from slider, but value of duration from state
    else if (id === "sliderAmount") {
      amount = parseFloat(value);
      duration = parseFloat(this.state.valueDuration);
    } else if (id === "formAmont") {
      value = parseFloat(value);
      duration = parseFloat(this.state.valueValue);
    }
    // if calculate is after button credit history clicked  take values from state
    else {
      amount = parseFloat(this.state.valueAmount);
      duration = parseFloat(this.state.valueDuration);
      switch (id) {
        case "Excellent":
          aprNew = this.props.APR1;
          MPR = aprNew / 100 / 12; // MPR monthly APR for calculation
          break;

        case "Good":
          aprNew = this.props.APR2;
          MPR = aprNew / 100 / 12; // MPR monthly APR for calculation
          break;

        case "Fair":
          aprNew = this.props.APR3;
          MPR = aprNew / 100 / 12; // MPR monthly APR for calculation
          break;

        default:
          break;
      }
    }
    // calculate total and monthly inst
    let totalAmountToRepay = amount + amount * MPR * duration;
    let monthly = totalAmountToRepay / duration;

    // fixing numbers
    totalAmountToRepay = Math.round(totalAmountToRepay).toFixed();
    monthly = Math.round(monthly).toFixed();

    //save results into state
    this.setState({ amountToRepay: totalAmountToRepay });
    this.setState({ monthlyInst: monthly });
  }

  
  render() {
    return (
      <Grid className="show-grid mainContainer">
        <Row>
          <Col className="leftSide" xs={12} md={6}>
            <Form horizontal>
              <FormMortgage/>
              <FormDebt />
              <FormPayment />
              <FormBorrow />
              <FormStatus />
              <FormDuration />
            </Form>
          </Col>

          <RightSide
            currancy={this.props.currancy}
            // amount={this.state.testProperty}
            // monthly={this.state.monthlyInst}
            // APR={this.state.APR}
            // btnOnClick={this.update.bind(this)}
          />
        </Row>
      </Grid>
    );
  }
}


// Assign deafault values to props

LoanCalculator.defaultProps = {
  

  currancy: "$"
};

export default LoanCalculator;
