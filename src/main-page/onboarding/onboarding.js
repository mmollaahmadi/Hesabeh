import React from "react";
import { Col, Card, CardImg, CardBody, CardTitle } from "reactstrap";

class Onboarding extends React.Component {
  render() {
    return (
      <Col lg="4" sm="6" xs="12" className="m-0 d-flex justify-content-center">
        <Card>
          <CardImg
            top
            width="100%"
            src={this.props.imageUri}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{this.props._text}</CardTitle>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default Onboarding;
