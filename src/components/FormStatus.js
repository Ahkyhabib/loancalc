import React, { Component } from "react";
import { Button, Col, Row, FormGroup, ButtonGroup } from "react-bootstrap";

class FormStatus extends Component {
  render() {
    return (
      <FormGroup>
      <Row> 
           
      <Col className="rightSide" xs={12} md={6}>
      <h5 className="title">Your Credit History</h5>
        <ButtonGroup justified>
          <Button
            bsStyle="default"
            id="Excellent"
            onClick={this.props.btnOnClick}
          >
            Excellent
          </Button>
          <Button bsStyle="default" id="Good" onClick={this.props.btnOnClick}>
            Good
          </Button>
          <Button bsStyle="default" id="Fair" onClick={this.props.btnOnClick}>
            Fair
          </Button>
        </ButtonGroup>
      </Col>
      
          <Col className="rightSide" xs={12} md={6}>
          <h5 className="title" id="vet">Veteran Staus</h5>
             <ButtonGroup justified>
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
      </Row>
      </FormGroup>
    );
  }
}

export default FormStatus;