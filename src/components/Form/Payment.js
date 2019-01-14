import React, { Component } from "react";
import { Row, Col, FormGroup } from "react-bootstrap";
import ReactToolTip from "react-tooltip";
import Borrow from "./Borrow";

class FormPayment extends Component {
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
      <FormGroup className="fadeIn animate" id="payFade payHide">
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
                <p className="info" data-tip="information">
                  i
                </p>
                <ReactToolTip />
              </div>
            </Row>
          </Col>

          <Col sm={12}>
            <input
              onClick={this.toggleHidden.bind(this)}
              onChange={this.props.onChange}
              className="border-color"
              id="formAmount"
              type="text"
              placeholder="2,500"
            />
            {!this.state.isHidden && <Child />}
          </Col>
        </Row>
      </FormGroup>
    );
  }
}

const Child = () => <div className="mortHide">{<Borrow />}</div>;

export default FormPayment;
