import React, { Component } from "react";
import { Row, Col, FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import ReactToolTip from 'react-tooltip';

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
              <div>
              <p className="info" data-tip="information">i</p> 
              <ReactToolTip />
              </div>
            </Row>
          </Col>

          <Col sm={12}>
          <FormGroup controlId="formControlsSelect">
      <FormControl className="border-color" componentClass="select" placeholder="select">
        <option value="select">Options</option>
        <option value="other">30-Year Fix</option>
        <option value="other">30-Year VA Fix</option>
        <option value="other">15-Year Fix</option>
        <option value="other">5-year ARM</option>
      </FormControl>
    </FormGroup>
          </Col>
        </Row>
      </FormGroup>
    );
  }
}

export default FormDebt;
