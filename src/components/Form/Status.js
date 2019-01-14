import React, { Component } from "react";
import { Button, Col, Row, FormGroup, ButtonGroup } from "react-bootstrap";
import Duration from "./Duration";

class FormStatus extends Component {
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
      <FormGroup className="fadeIn animate" id="statFade statHide">
        <Row>
          <Col className="" xs={12} md={6}>
            <h5 className="labelSlider">Your Credit History</h5>
            <ButtonGroup justified>
              <Button
                bsStyle="default"
                id="Excellent"
                onClick={this.props.btnOnClick}
              >
                Excellent
              </Button>
              <Button
                bsStyle="default"
                id="Good"
                onClick={this.props.btnOnClick}
              >
                Good
              </Button>
              <Button
                bsStyle="default"
                id="Fair"
                onClick={this.props.btnOnClick}
              >
                Fair
              </Button>
            </ButtonGroup>
          </Col>

          <Col className="" xs={12} md={6}>
            <h5 className="labelSlider" id="vet">
              Veteran Staus
            </h5>
            <ButtonGroup justified onClick={this.toggleHidden.bind(this)}>
              <Button
                bsStyle="default"
                id="vetStat"
                onClick={this.props.btnOnClick}
              >
                I'm a vet
              </Button>
              <Button
                bsStyle="default"
                id="vetStat"
                onClick={this.props.btnOnClick}
              >
                I'm not a vet
              </Button>
            </ButtonGroup>
          </Col>
          {!this.state.isHidden && <Child />}
        </Row>
      </FormGroup>
    );
  }
}

const Child = () => <div className="mortHide">{<Duration />}</div>;

export default FormStatus;
