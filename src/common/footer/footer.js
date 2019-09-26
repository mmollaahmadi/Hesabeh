import React from "react";
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

import ContactUs from "../contact-us/contact-us.js";

import "./footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Row className="footer-logo">
            <container>
              <img
                alt="..."
                className="rounded-circle  logo"
                src={require("../../assets/img/theme/logo01.png")}
              />
            </container>
          </Row>
        </div>
        <footer className="footer">
          <Container className="pt-6 pt-lg-4">
            {/*<Row className=" row-grid align-items-center mb-3 justify-content-center">
            <Col className="text-center p-0" lg="5">
              <hr className="hr" />
            </Col>
            <Col className="text-center pt-3 pb-0" lg="2">
              <h1 className="m-0" style={{ color: "#141312" }}>
                حسابِه
              </h1>
              <p
                className=" font-weight-light m--2"
                style={{ fontSize: "13px" }}
              >
                سامانه جامع حساب و کتاب
              </p>
            </Col>
            <Col className="text-center p-0" lg="5">
              <hr className="hr" />
            </Col>
          </Row>
*/}
            <Row className=" row-grid align-items-center mb-1 mt-1 ">
              {/* CONTACT US */}
              <Col
                className="justify-content-right btn-wrapper mt-2 pr-0"
                lg="5"
              >
                <ContactUs />
              </Col>

              {/* LINKS */}
              <Col className=" text-center btn-wrapper mt-2" lg="5"></Col>

              {/* LOGO */}
              <Col className=" text-center btn-wrapper mt-2" lg="2">
                <img
                  style={{ width: "50px" }}
                  alt="..."
                  src={require("../../assets/img/brand/hesabeh-black.png")}
                />
                <h4>حسابِه</h4>
                <div>
                  <Button
                    className=" ml-1 p-0 mr-0 social-network-link"
                    color="link"
                    href="https://twitter.com/creativetim"
                    id="tooltip126536702"
                    size="sm"
                    target="_blank"
                  >
                    <i className=" fa fa-twitter social-network-icon" />
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
                    <i className=" fa fa-facebook-square social-network-icon" />
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
                    <i className=" fa fa-dribbble social-network-icon" />
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
                    <i className=" fa fa-github social-network-icon" />
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
                    <i className=" fa fa-instagram social-network-icon" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip13">
                    Follow Us
                  </UncontrolledTooltip>
                </div>
              </Col>
            </Row>

            <Row>
              <Col className=" text-center btn-wrapper mt-2">
                <Button
                  className=" ml-1 p-0 social-network-link"
                  color="link"
                  href="https://twitter.com/creativetim"
                  id="tooltip126536702"
                  size="lg"
                  target="_blank"
                >
                  <i className=" fa fa-twitter social-network-icon" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip126536702">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className=" ml-1 p-0 social-network-link"
                  color="link"
                  href="https://www.facebook.com/creativetim"
                  id="tooltip383967593"
                  size="lg"
                  target="_blank"
                >
                  <i className=" fa fa-facebook-square social-network-icon" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip383967593">
                  Like us
                </UncontrolledTooltip>
                <Button
                  className=" ml-1 p-0 social-network-link"
                  color="link"
                  href="https://dribbble.com/creativetim"
                  id="tooltip568564532"
                  size="lg"
                  target="_blank"
                >
                  <i className=" fa fa-dribbble social-network-icon" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip568564532">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className=" ml-1 mr-2 p-0 social-network-link"
                  color="link"
                  href="https://github.com/creativetimofficial"
                  id="tooltip626177562"
                  size="lg"
                  target="_blank"
                >
                  <i className=" fa fa-github social-network-icon" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip626177562">
                  Star on Github
                </UncontrolledTooltip>
                <Button
                  className=" ml-1 mr-2 p-0 social-network-link"
                  color="link"
                  href="https://instagram.com/creativetimofficial"
                  id="tooltip13"
                  size="lg"
                  target="_blank"
                >
                  <i className=" fa fa-instagram social-network-icon" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip13">
                  Follow Us
                </UncontrolledTooltip>
                <div className=" copyright">
                  <small>
                    .Design & Developed by
                    <a
                      href="https://www.m-mollaahmadi.ir"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-1"
                      style={{ fontWeight: "Bold", color: "#141312" }}
                    >
                      M-Mollaahmadi
                    </a>
                  </small>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    );
  }
}

export default Footer;
