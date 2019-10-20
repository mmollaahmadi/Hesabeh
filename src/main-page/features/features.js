import React from "react";
import { Container, Row, Col } from "reactstrap";
import FeaturesButton from "./features-btn";

class Features extends React.Component {
  constructor(prop) {
    super(prop);

    this.state = {
      featureSelectedNumber: 1
    };
  }


  toggleFeatureSelection = numberOfFeature => {
    this.setState({
      featureSelectedNumber: numberOfFeature
    });
  };


  render() {
    const featureSelectedNumber = this.state.featureSelectedNumber;
    let featureSelectedImage = null;
    if (featureSelectedNumber === 1) {
      featureSelectedImage = require("../../assets/img/theme/team-4-800x800.jpg");
    } else if (featureSelectedNumber === 2) {
      featureSelectedImage = require("../../assets/img/theme/team-2-800x800.jpg");
    } else if (featureSelectedNumber === 3) {
      featureSelectedImage = require("../../assets/img/theme/team-3-800x800.jpg");
    } else {
      featureSelectedImage = require("../../assets/img/theme/team-4-800x800.jpg");
    }

    return (
      <section className=" dark-section section section-lg mt-1 pt-6 pb-6">
        <Container>
          <Row className="text-center justify-content-center">
            <p data-aos="fade-up"
               data-aos-duration="1000"
               data-aos-delay="50"
               className="section-title">امکانات</p>
          </Row>
          <Row className="text-center justify-content-center px-2">
            <Col lg="3" className="align-self-center order-2 order-lg-1">
            <Row className="d-flex justify-content-center">
              <FeaturesButton
                number = {1}
                featureSelectedNumber = {featureSelectedNumber}
                onClick={() => this.toggleFeatureSelection(1)}
                text='01 سریع و آسان'
              />
              <FeaturesButton
                number = {2}
                featureSelectedNumber = {featureSelectedNumber}
                onClick={() => this.toggleFeatureSelection(2)}
                text='01 سریع و آسان'
              />
              <FeaturesButton
                number = {3}
                featureSelectedNumber = {featureSelectedNumber}
                onClick={() => this.toggleFeatureSelection(3)}
                text='01 سریع و آسان'
              />

              </Row>
            </Col>

            <Col lg="6" className='order-1 order-lg-2'>
              <img data-aos="fade-up"
                   data-aos-duration="1000"
                   data-aos-delay="50"
              className="features-img rounded-circle"
              alt="..."
              src={featureSelectedImage} />
            </Col>

            <Col lg="3" className="align-self-center order-3 order-lg-3">
            <Row className="d-flex justify-content-center">
              <FeaturesButton
                number = {4}
                featureSelectedNumber = {featureSelectedNumber}
                onClick={() => this.toggleFeatureSelection(4)}
                text='01 سریع و آسان'
              />

              <FeaturesButton
                number = {5}
                featureSelectedNumber = {featureSelectedNumber}
                onClick={() => this.toggleFeatureSelection(5)}
                text='01 سریع و آسان'
              />

              <FeaturesButton
                number = {6}
                featureSelectedNumber = {featureSelectedNumber}
                onClick={() => this.toggleFeatureSelection(6)}
                text='01 سریع و آسان'
              />
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Features;
