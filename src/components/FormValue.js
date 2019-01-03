import React, { Component } from "react";
import { Row, Col, FormGroup } from "react-bootstrap";

class FormValue extends Component {
  render() {
    return (
      <FormGroup>
        <Row>
          <Col className="form-padding" sm={12}>
            <Row>
              <Col className="labelSlider" xs={12} sm={4}>
                Total Debt
              </Col>
              <Col className="descSlider" xs={12} sm={6}>
                How much is your overall debt?
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
            {/* <div id="amountValueDisplay">
              {this.props.currancy}
              {this.props.value}
            </div> */}
          </Col>
        </Row>
      </FormGroup>
    );
  }
}

export default FormValue;
