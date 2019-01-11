import React, { Component } from "react";
import { Row, Col, FormGroup } from "react-bootstrap";
import ReactToolTip from 'react-tooltip';


class FormPayment extends Component {
  render() {
    return (
      <FormGroup>
        <Row>
          <Col className="form-padding" sm={12}>
            <Row>
              <Col className="labelSlider" xs={12} sm={4}>
                Monthly Payments
              </Col>
              <Col className="descSlider" xs={12} sm={6}>
                Overall amount paid every month?
              </Col>
              <div>
              <p className="info" data-tip="information">i</p> 
              <ReactToolTip />
              </div>
            </Row>
          </Col>

          <Col sm={12}>
            <input
            onChange={this.props.onChange}
              className="border-color"
              id="formAmount"
              type="text"
              placeholder="2,500"
            />
          </Col>
        </Row>
      </FormGroup>
    );
  }
}

export default FormPayment;
