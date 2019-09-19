import React from "react";
import { Container, Row } from "reactstrap";
import ServiceCard from "./ServiceCard.js";

class OurServices extends React.Component {
  render() {
    return (
      <section className="section section-lg mt-1 pt-6 pb-6">
        <Container>
          <Row className="text-center justify-content-center">
            <p className="section-title">امکانات</p>
          </Row>
          <Row className="text-center justify-content-center">
            <ServiceCard _direction="rtl" />
            <ServiceCard _direction="ltr" />
            <ServiceCard _direction="rtl" />
            <ServiceCard _direction="ltr" />
          </Row>
        </Container>
      </section>
    );
  }
}

export default OurServices;
