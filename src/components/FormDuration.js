import React, { Component } from "react";
import { Row, Col, FormGroup, ControlLabel, FormControl } from "react-bootstrap";

class FormDebt extends Component {
  render() {
    return (
      <FormGroup>
        <Row>
          <Col className="" sm={12}>
            <Row>
              <Col className="labelSlider" xs={12} sm={4}>
                Loan Duration
              </Col>
              <Col className="descSlider" xs={12} sm={6}>
                How much time would you like to pay?
              </Col>
            </Row>
          </Col>

          <Col sm={12}>
          <FormGroup controlId="formControlsSelect">
      <FormControl componentClass="select" placeholder="select">
        <option value="select">Select</option>
        <option value="other">Option1</option>
        <option value="other">Option2</option>
        <option value="other">Option3</option>
        <option value="other">Option4</option>
      </FormControl>
    </FormGroup>
          </Col>
        </Row>
      </FormGroup>
    );
  }
}

export default FormDebt;
