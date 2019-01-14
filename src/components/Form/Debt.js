import React, { Component } from "react";
import { Row, Col, FormGroup, Glyphicon } from "react-bootstrap";
import Payment from "./Payment";

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
      <FormGroup className="fadeIn animate" id="debtFade debtHide">
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
                <p className="info" data-tip="information">
                  i
                </p>
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
              placeholder="10,000"
            />
            {!this.state.isHidden && <Child />}
          </Col>
        </Row>
      </FormGroup>
    );
  }
}

const Child = () => <div className="mortHide">{<Payment />}</div>;

export default FormDebt;
