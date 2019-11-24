import React from "react";
import { Row, Col, Card, Badge, Button, UncontrolledTooltip } from "reactstrap";
import "./group-dashboard.css";

class GroupUserUnit extends React.Component {
  render() {
    return (
      <Col lg="6" className="mt-3">
        <Card
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="1000"
          className="user-status w-auto"
        >
          <Row className="mx-0 mt-1">
            <Col xs="3"></Col>
            <Col xs="9" className="pr-0 justify-content-start">
            <p className="card-profile-name">محمد ملااحمدی</p>
            <Button
              className="p-0 plus-btn-circle m-0 mr-3 mt-1"
              color="primary"
            >
              <i className="fa fa-dollar" />
            </Button>
            <Button
              className="p-0 plus-btn-circle m-0 mr-2 mt-1"
              color="primary"
            >
              <i className="fa fa-plus" />
            </Button>
            </Col>
          </Row>
          <Row className="mx-0">
            <Col xs="3">
              <div className="card-profile-image">
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img
                    alt="..."
                    className="rounded-circle card-profile-image"
                    src={require("../../../assets/img/users/user01.jpg")}
                  />
                </a>
              </div>
            </Col>
            <Col xs="7" className="pr-0 justify-content-start">
              <div>
                <Badge className="status-text" href="#" color="info">
                  mollaahmadi@
                </Badge>
              </div>
              <div>
                <Badge className="status-text" color="success">
                  پرداخت: 30000 تومان
                </Badge>

                <Badge className="status-text mr-2" color="danger">
                  مصرف: 40000 تومان
                </Badge>
              </div>
              <div>
                <Badge className="status-text" color="warning">
                  وضعیت: 10000 تومان بدهکار
                </Badge>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Button
              className="social-network-link"
              color="link"
              href="https://twitter.com/creativetim"
              id="tooltip126536702"
              target="_blank"
            >
              <i className=" fa fa-twitter social-network-icon" />
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip126536702">
              Follow us
            </UncontrolledTooltip>
            <Button
              className="social-network-link"
              color="link"
              href="https://www.facebook.com/creativetim"
              id="tooltip383967593"
              target="_blank"
            >
              <i className=" fa fa-facebook-square social-network-icon" />
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip383967593">
              Like us
            </UncontrolledTooltip>
            <Button
              className="social-network-link"
              color="link"
              href="https://dribbble.com/creativetim"
              id="tooltip568564532"
              target="_blank"
            >
              <i className=" fa fa-dribbble social-network-icon" />
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip568564532">
              Follow us
            </UncontrolledTooltip>
            <Button
              className="social-network-link"
              color="link"
              href="https://github.com/creativetimofficial"
              id="tooltip626177562"
              target="_blank"
            >
              <i className=" fa fa-github social-network-icon" />
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip626177562">
              Star on Github
            </UncontrolledTooltip>
            <Button
              className="social-network-link"
              color="link"
              href="https://instagram.com/creativetimofficial"
              id="tooltip13"
              target="_blank"
            >
              <i className=" fa fa-instagram social-network-icon" />
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip13">
              Follow Us
            </UncontrolledTooltip>
          </Row>
        </Card>
      </Col>
    );
  }
}

export default GroupUserUnit;
