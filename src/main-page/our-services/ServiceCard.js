import React from "react";
import { Col, Card, CardBody, CardImg, CardText, Row } from "reactstrap";
class ServiceCard extends React.Component {
  render() {
    let content = null;
    if (this.props._direction === "rtl") {
      content = (
        <Row>
          <Col lg="6" xs="12">
            <img
              className="floating"
              alt="..."
              src={require("../../assets/img/theme/1.png")}
              top
              width="80%"
            />
          </Col>
          <Col className="pt-7" lg="6" xs="12">
            <p>استفاده از اون آسون و البته رایگانه</p>
          </Col>
        </Row>
      );
    } else {
      content = (
        <Row>
          <Col className="order-lg-2" lg="6" xs="12">
            <img
              className="floating"
              alt="..."
              src={require("../../assets/img/theme/1.png")}
              top
              width="80%"
            />
          </Col>
          <Col className="order-lg-1 pt-7" lg="6" xs="12">
            <p>استفاده از اون آسون و البته رایگانه</p>
          </Col>
        </Row>
      );
    }
    return (
      <Col className="m-0 p-2" lg="12">
      {content}
      </Col>
    );
  }
}

export default ServiceCard;
