import React, { Component } from "react";
import { Row, Col, FormGroup, Tooltip } from "react-bootstrap";
import Debt from "./Debt";

class FormMortgage extends Component {
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
      <FormGroup className="fadeIn animate mortHide" id="mortFade mortHide">
        <Row className="fpadding" style={{ paddingBottom: 0 }}>
          <Col className="form-padding" sm={12}>
            <Row>
              <Col className="labelSlider" xs={12} sm={4}>
                Mortgage Balance
              </Col>
              <Col className="descSlider" xs={12} sm={6}>
                How much do you owe?
              </Col>
              <div>
                <p className="info" data-tip="information">
                  i
                </p>
                {/* <ReactToolTip /> */}
              </div>
            </Row>
          </Col>

          <Col sm={12}>
            <input
              onClick={this.toggleHidden.bind(this)}
              className="border-color"
              id="formAmount"
              type="text"
              placeholder="50,000"
            />
            {!this.state.isHidden && <Child />}
          </Col>
        </Row>
      </FormGroup>
    );
  }
}

const Child = () => <div className="mortHide">{<Debt />}</div>;

export default FormMortgage;
