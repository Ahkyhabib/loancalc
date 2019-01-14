import React, { Component } from "react";
import { Row, Col, FormGroup } from "react-bootstrap";
import ReactToolTip from "react-tooltip";
import Status from "./Status";

class Borrow extends Component {
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
      <FormGroup className="fadeIn animate" id="borrowFade">
        <Row>
          <Col className="form-padding" sm={12}>
            <Row>
              <Col className="labelSlider" xs={12} sm={4}>
                Borrow Amount
              </Col>
              <Col className="descSlider" xs={12} sm={6}>
                How much would you like to borrow?
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
              placeholder="25,500"
            />
            {!this.state.isHidden && <Child />}
          </Col>
        </Row>
      </FormGroup>
    );
  }
}

const Child = () => <div className="mortHide">{<Status />}</div>;

export default Borrow;
