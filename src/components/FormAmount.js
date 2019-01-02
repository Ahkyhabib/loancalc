import React, { Component } from "react";
import { Row, Col, FormGroup } from "react-bootstrap";

class SliderValue extends Component {
  render() {
    return (
      <FormGroup>
        <Row>
          <Col sm={12}>
            <Row>
              <Col className="labelSlider" xs={12} sm={4}>
                Home Value
              </Col>
              <Col className="descSlider" xs={12} sm={6}>
                How much is your home value?
              </Col>
            </Row>
          </Col>

          <Col sm={12}>
            <input
              id="sliderValue"
              type="text"
              value={this.props.value}
              min={this.props.min}
              max={this.props.max}
              onChange={this.props.onChange}
              step={this.props.step}
            />
            <div id="amountValueDisplay">
              {this.props.currancy}
              {this.props.value}
            </div>
          </Col>
        </Row>
      </FormGroup>
    );
  }
}

export default SliderValue;
