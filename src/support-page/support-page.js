import React from "react";

import "./support-page.css";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  InputGroupAddon,
  InputGroupText,
  Button,
  FormGroup,
  Form,
  Input,
  UncontrolledTooltip,
  InputGroup,
  NavLink,
  Collapse
} from "reactstrap";
import "../assets/css/custom.css";
class SupportPage extends React.Component {

  render() {
    return (
      <div className="register-section section-lg">
        <Container className="pt-10 pb-30  h-100">
          <Row className="text-center justify-content-center">
            <Col lg="5">
              <img
                alt="..."
                className="rounded-circle logo"
                src={require("../assets/img/users/user01.jpg")}
              />
              <p className="brand-title">حسابِه</p>

              <p className="title-text">
مشکلات، نظرات و پیشنهادات خود را با ما در میان بگذارید
              </p>

              <Form role="form" className="signup-form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>

                    <Input
                      className="signup-input"
                      placeholder="ایمیل"
                      type="email"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup className="mb-3 p-0">
                  <Input
                    className="form-control-alternative cuntactus-input"
                    cols="80"
                    name="name"
                    placeholder="متن پیام"
                    rows="2"
                    size="md"
                    type="textarea"
                  />
                </FormGroup>


                <FormGroup>
                  <Row className="justify-item-center d-flex">
                    <Col className="lg-9 m-0 text-center">
                      <Button
                        className="signin-button"
                        color="primary"
                        type="button"
                      >
                        ارسال
                      </Button>
                    </Col>
                  </Row>
                </FormGroup>
              </Form>

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

              <Row className="text-center justify-content-center">
                <Col lg="12">
                  <hr className="mt-5 mb-1" />
                  <Row className="text-center justify-content-center px-4">
                    <NavLink
                      to="/"
                      tag={Link}
                      className="forgot-password-footer-nav-link"
                      color="primary"
                    >
                      حسابه
                    </NavLink>

                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SupportPage;
