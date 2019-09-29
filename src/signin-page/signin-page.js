import React from "react";

import "./signin.css";
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
  InputGroup,
  NavLink,
  Collapse,
  Alert
} from "reactstrap";
import "../assets/css/custom.css";
import Header from "../common/header.js";

class SigninPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailCollapse: false,
      passwordCollapse: false
    };
  }
  toggle = (which) => {
    this.setState({
      [which]: !this.state[which]
    });
  };
  render() {
    return (
      <div className="section-lg">
        <Container className="pt-10 pb-30  h-100">
          <Row className="text-center justify-content-center">
            <Col lg="5">
              <Header title="ورود به حساب کاربری" />

              <Form role="form" className="audit-form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>

                    <Input
                      className="audit-input"
                      placeholder="ایمیل / نام کاربری"
                      type="email"
                    />
                  </InputGroup>
                  <Collapse isOpen={this.state.emailCollapse}>
                    <Alert
                      color="danger"
                      className="audit-alert"
                    >
                      کاربری با این مشخصات وجود ندارد
                    </Alert>
                  </Collapse>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>

                    <Input
                      className="audit-input"
                      placeholder="رمز عبور"
                      type="password"
                    />
                  </InputGroup>
                  <Row className="d-flex justify-content-end mb-2">
                    <NavLink
                      to="/forgot-password"
                      tag={Link}
                      className="forgot-password-link"
                      color="primary"
                    >
                      رمز عبور را فراموش کردم!
                    </NavLink>
                  </Row>
                  <Collapse isOpen={this.state.passwordCollapse}>
                    <Alert
                      color="danger"
                      className="audit-alert"
                    >
                      کاربری با این مشخصات وجود ندارد
                    </Alert>
                  </Collapse>
                </FormGroup>
                <FormGroup>
                  <Row className="justify-item-center d-flex">
                    <Col className="lg-9 m-0 text-center">
                      <Button
                        className="audit-button"
                        color="primary"
                        to="/my-account"
                        tag={Link}
                      >
                        ورود
                      </Button>
                    </Col>
                  </Row>
                </FormGroup>

                <Button
                  className="btn-icon audit-button"
                  color="default"
                  href="#pablo"
                  name="google-account"
                  onClick={() => this.toggle("passwordCollapse")}                    
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={require("../assets/img/icons/common/google.svg")}
                    />
                  </span>
                  <span className="btn-inner--text pr-2 pt-1 m-0">
                    ورود با حساب کاربری گوگل
                  </span>
                </Button>
              </Form>
              <Row className="text-center justify-content-center">
                <Col lg="12">
                  <hr className="mt-5 mb-1" />
                  <Row className="text-center justify-content-between px-4">
                    <NavLink
                      to="/"
                      tag={Link}
                      activeClassName="link-active"
                      className="forgot-password-footer-nav-link"
                      color="primary"
                    >
                      حسابه
                    </NavLink>
                    <NavLink
                      to="/register"
                      tag={Link}
                      activeClassName="link-active"
                      className="forgot-password-footer-nav-link"
                      color="primary"
                    >
                      ثبت نام
                    </NavLink>
                    <NavLink
                      to="/support"
                      tag={Link}
                      activeClassName="link-active"
                      className="forgot-password-footer-nav-link"
                      color="primary"
                    >
                      پشتیبانی
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

export default SigninPage;
