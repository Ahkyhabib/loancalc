import React, { Component } from "react";
import { Row, Col, FormGroup } from "react-bootstrap";

class FormHValue extends Component {
  render() {
    return (
      <FormGroup>
        <Row  className="fpadding" style={{ paddingBottom: 0}}>
          <Col className="form-padding" sm={12}>
            <Row>
              <Col className="labelSlider" xs={12} sm={4}>
                Home Value
              </Col>
              <Col className="descSlider" xs={12} sm={6}>
                How much is your home worth?
              </Col>
            </Row>
          </Col>

          <Col sm={12}>
            <input
              onChange={this.props.onChange}
              className="border-color"
              id="formAmount"
              type="text"
              placeholder="75,000"
            />
          </Col>
        </Row>
      </FormGroup>
    );
  }
}

export default FormHValue;
