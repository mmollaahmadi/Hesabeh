import React from "react";
import {
  Container,
  Row
} from "reactstrap";
import ServiceCard from './ServiceCard.js';

class OurServices extends React.Component {
  render() {
    return (
      <section className="section section-lg mt-1 pt-6 pb-1">
      {/* shape Hero */}
      <section className="section section-lg section-shaped pb-20 pt-1">
        <div className="shape shape-style-1 shape-default">
          <span />
          <span />
          <span className="span-50" />
          <span className="span-170" />
          <span />
          <span />
          <span className="span-200" />
          <span />
          <span className="span-150" />
          <span />
        </div>

        <Container>
          <Row className="text-center justify-content-center">
            <h2 className="pb-3 ">چرا حسابه؟ </h2>
          </Row>
          <Row className="text-center justify-content-center">
            <ServiceCard _direction="rtl"/>
            <ServiceCard _direction="ltr"/>
            <ServiceCard _direction="rtl"/>
            <ServiceCard _direction="ltr"/>

          </Row>
        </Container>
        </section>
      </section>
    );
  }
}

export default OurServices;
