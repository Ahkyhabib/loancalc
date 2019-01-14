import React, { Component } from "react";
import { Row, Col, FormGroup, FormControl } from "react-bootstrap";
import ReactToolTip from "react-tooltip";
import RightSide from "./RightSide";

class FormDebt extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: true
    };
  }
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }
  render() {
    return (
      <FormGroup className="fadeIn animate" id="durFade durHide">
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
                <p className="info" data-tip="information">
                  i
                </p>
                <ReactToolTip />
              </div>
            </Row>
          </Col>

          <Col sm={12}>
            <FormGroup
              controlId="formControlsSelect"
              onClick={this.toggleHidden.bind(this)}
            >
              <FormControl
                className="border-color"
                componentClass="select"
                placeholder="select"
              >
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
const Child = () => <div className="mortHide">{<RightSide />}</div>;

export default FormDebt;
