import React, { Component } from "react";
import { Grid, Thumbnail, Col, Row } from "react-bootstrap";

export default class TestCard extends Component {
  render() {
    return (
      <Grid className="rightSide1">
        <Row>
          <Col xs={6} md={4}>
            <Thumbnail src="/flash.PNG" alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Description</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
    );
  }
}
