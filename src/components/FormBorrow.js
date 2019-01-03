import React, { Component } from "react";
import { Row, Col, FormGroup } from "react-bootstrap";

class Borrow extends Component {
  render() {
    return (
      <FormGroup>
        <Row>
          <Col className="form-padding" sm={12}>
            <Row>
              <Col className="labelSlider" xs={12} sm={4}>
                Borrow Amount
              </Col>
              <Col className="descSlider" xs={12} sm={6}>
                How much would you like to borrow?
              </Col>
            </Row>
          </Col>

          <Col sm={12}>
            <input
            onChange={this.props.onChange}
              className="border-color"
              id="formAmount"
              type="text"
              placeholder="25,500"
            />
            
          </Col>
        </Row>
      </FormGroup>
    );
  }
}

export default Borrow;
