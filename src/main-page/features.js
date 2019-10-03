import React from "react";
import { Container, Row, Col, Button } from "reactstrap";


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
    var featureSelectedimg = null;
    if (featureSelectedNumber === 1) {
      featureSelectedimg = require("../assets/img/theme/team-4-800x800.jpg");
    } else if (featureSelectedNumber === 2) {
      featureSelectedimg = require("../assets/img/theme/team-2-800x800.jpg");
    } else if (featureSelectedNumber === 3) {
      featureSelectedimg = require("../assets/img/theme/team-3-800x800.jpg");
    } else {
      featureSelectedimg = require("../assets/img/theme/team-4-800x800.jpg");
    }

    return (
      <section className=" dark-section section section-lg mt-1 pt-6 pb-6">
        <Container>
          <Row className="text-center justify-content-center">
            <p className="section-title">امکانات</p>
          </Row>
          <Row className="text-center justify-content-center px-2">
            <Col lg="3" className="align-self-center">
            <Row className="d-flex justify-content-center">
              <Button
                className={
                  featureSelectedNumber === 1
                    ? "features-btn-active"
                    : "features-btn"
                }
                color="primary"
                onClick={() => this.toggleFeatureSelection(1)}
              >
                01 سریع و آسان
              </Button>
              <Button
                className={
                  featureSelectedNumber === 2
                    ? "features-btn-active"
                    : "features-btn"
                }
                color="primary"
                onClick={() => this.toggleFeatureSelection(2)}
              >
                01 سریع و آسان
              </Button>
              <Button
                className={
                  featureSelectedNumber === 3
                    ? "features-btn-active"
                    : "features-btn"
                }
                color="primary"
                onClick={() => this.toggleFeatureSelection(3)}
              >
                01 سریع و آسان
              </Button>
              </Row>
            </Col>

            <Col lg="6">
              <img
              className="features-img rounded-circle"
              alt="..."
              src={featureSelectedimg} />
            </Col>

            <Col lg="3" className="align-self-center">
            <Row className="d-flex justify-content-center">
              <Button
                className={
                  featureSelectedNumber === 4
                    ? "features-btn-active"
                    : "features-btn"
                }
                color="primary"
                onClick={() => this.toggleFeatureSelection(4)}
              >
                01 سریع و آسان
              </Button>
              <Button
                className={
                  featureSelectedNumber === 5
                    ? "features-btn-active"
                    : "features-btn"
                }
                color="primary"
                onClick={() => this.toggleFeatureSelection(5)}
              >
                01 سریع و آسان
              </Button>
              <Button
                className={
                  featureSelectedNumber === 6
                    ? "features-btn-active"
                    : "features-btn"
                }
                color="primary"
                onClick={() => this.toggleFeatureSelection(6)}
              >
                01 سریع و آسان
              </Button>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Features;
