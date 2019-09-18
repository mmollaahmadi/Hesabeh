import React from "react";

import "../forgot-password-pages/forgot-password.css";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Collapse,
  NavLink,
  UncontrolledTooltip,
  Alert
} from "reactstrap";
import "../assets/css/custom.css";
import ContactUs from "../common/contact-us/ContactUs.js";

class SupportPage extends React.Component {
  render() {
    return (
      <div className="support-section section section-lg section-shaped">
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
        <Container className="pt-20 pb-30  h-100">
          <Row className="text-center justify-content-center">
            <Col lg="7">
              <img
                alt="..."
                className="rounded-circle logo"
                src={require("../assets/img/users/user01.jpg")}
              />
              <h1 className="brand-title">حسابه</h1>

              <h4 className="mb-3">مشکلات، نظرات و انتقادات خود را با ما در میان بگذارید.</h4>

              <ContactUs />

              <Row className="justify-content-center mt-5">
              <p>021-66843101</p>
              <i className=" fa fa-phone support-social-network-icon mr-1" />
              </Row>

              <div className="mt-1">
              <Button
                className=" ml-1 p-0 mr-0 social-network-link"
                color="link"
                href="https://twitter.com/creativetim"
                id="tooltip126536702"
                size="sm"
                target="_blank"
              >
                <i className=" fa fa-twitter support-social-network-icon" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip126536702">
                Follow us
              </UncontrolledTooltip>
              <Button
                className=" ml-1 p-0 mr-0 social-network-link"
                color="link"
                href="https://www.facebook.com/creativetim"
                id="tooltip383967593"
                size="lg"
                target="_blank"
              >
                <i className=" fa fa-facebook-square support-social-network-icon" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip383967593">
                Like us
              </UncontrolledTooltip>
              <Button
                className=" ml-1 p-0 mr-0 social-network-link"
                color="link"
                href="https://dribbble.com/creativetim"
                id="tooltip568564532"
                size="lg"
                target="_blank"
              >
                <i className=" fa fa-dribbble support-social-network-icon" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip568564532">
                Follow us
              </UncontrolledTooltip>
              <Button
                className=" ml-1  p-0 mr-0 social-network-link"
                color="link"
                href="https://github.com/creativetimofficial"
                id="tooltip626177562"
                size="lg"
                target="_blank"
              >
                <i className=" fa fa-github support-social-network-icon" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip626177562">
                Star on Github
              </UncontrolledTooltip>
              <Button
                className=" ml-1 mr-0 p-0 social-network-link"
                color="link"
                href="https://instagram.com/creativetimofficial"
                id="tooltip13"
                size="lg"
                target="_blank"
              >
                <i className=" fa fa-instagram support-social-network-icon" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip13">
                Follow Us
              </UncontrolledTooltip>
              </div>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SupportPage;
