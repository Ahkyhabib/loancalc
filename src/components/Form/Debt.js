import React, { Component } from "react";
import { Row, Col, FormGroup, Glyphicon, } from "react-bootstrap";
import ReactToolTip from 'react-tooltip';


class FormDebt extends Component {
  render() {
    return (
      <FormGroup>
        <Row>
          <Col className="form-padding" sm={12}>
            <Row>
              <Col className="labelSlider" xs={12} sm={4}>
                Total Debts
              </Col>
              <Col className="descSlider" xs={12} sm={6}>
                How much do you owe?
              </Col>
              <div>
              <p className="info" data-tip="information">i</p> 
              <ReactToolTip />
              </div>
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
