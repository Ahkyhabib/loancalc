import React, { Component } from "react";
import { Row, Col, FormGroup } from "react-bootstrap";

class FormDebt extends Component {
  render() {
    return (
      <FormGroup>
        <Row>
          <Col className="form-padding" sm={12}>
            <Row>
              <Col className="labelSlider" xs={12} sm={4}>
                Credit Debt 
              </Col>
              <Col className="descSlider" xs={12} sm={6}>
                How much do you owe?
              </Col>
            </Row>
          </Col>

          <Col sm={12}>
            <input
              className="border-color"
              id="formAmount"
              type="text"
              placeholder="10,000"
            />
          </Col>
        </Row>
      </FormGroup>
    );
  }
}

export default FormDebt;
