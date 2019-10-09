import React from "react";
import { Col, Row} from "reactstrap";

class Onboarding extends React.Component {
  render() {
    return (
      <Col lg="3" sm="6" xs="12" className="m-0 d-flex justify-content-center">
        <Row className="m-0 justify-content-center learning-card">
          <img
          className="rounded-circle statistic-circle-image"
            top
            src={this.props.imageUri}
            alt=""
          />
          <span className="p-0 mx-2 mt-4">
            {this.props._text}
          </span>
        </Row>
      </Col>
    );
  }
}

export default Onboarding;
