import React from "react";
import { Col, Row} from "reactstrap";

class OnboardingUnit extends React.Component {
  render() {
    return (
      <Col lg="3" sm="6" xs="12" className="m-0 d-flex justify-content-center">
        <Row className="justify-content-center learning-card">
          <Col xs='12'>
          <img
          className="rounded-circle statistic-circle-image"
            top
            src={this.props.imageUri}
            alt=""
          />
          </Col>
          <Col xs='12' className='mt-4'>
          <span className="p-0 mx-2 mt-4">
            {this.props._text}
          </span>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default OnboardingUnit;
