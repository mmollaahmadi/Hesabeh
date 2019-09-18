import React from "react";

import "./register.css";
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
  NavLink
} from "reactstrap";
import "../assets/css/custom.css";
class RegisterPage extends React.Component {
  render() {
    return (
      <div className="forgot-password-section section section-lg section-shaped">
        <Container className="pt-10 pb-30  h-100">
          <Row className="text-center justify-content-center">
            <Col lg="5">
              <img
                alt="..."
                className="rounded-circle logo"
                src={require("../assets/img/users/user01.jpg")}
              />
              <p className="brand-title">حسابِه</p>

              <p className="title-text"> ایجاد حساب کاربری</p>

              <Form role="form" className="signin-form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>

                    <Input
                      className="signin-input"
                      placeholder="ایمیل"
                      type="email"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>

                    <Input
                      className="signin-input"
                      placeholder="رمز عبور"
                      type="password"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>

                    <Input
                      className="signin-input"
                      placeholder="تایید رمز عبور"
                      type="password"
                    />
                  </InputGroup>
                </FormGroup>
                <Row className="d-flex justify-content-center text-center px-9 pb-4">
                  <Col lg="2" className="p-0">
                    <i className=" fa fa-twitter password-condition-icon" />
                    <p className="password-condition-text">
                    حروف کوچک
                    </p>
                  </Col>
                  <Col lg="2" className="p-0">
                    <i className=" fa fa-twitter password-condition-icon" />
                    <p className="password-condition-text">
                  حروف بزرگ
                    </p>
                  </Col>
                  <Col lg="2" className="p-0">
                    <i className=" fa fa-twitter password-condition-icon" />
                    <p className="password-condition-text">
                    عدد
                    </p>
                  </Col>
                  <Col lg="2" className="p-0">
                    <i className=" fa fa-twitter password-condition-icon" />
                    <p className="password-condition-text">
                    نشانه خاص
                    </p>
                  </Col>
                  <Col lg="2" className="p-0">
                    <i className=" fa fa-twitter password-condition-icon" />
                    <p className="password-condition-text">
                    تطابق دو رمز عبور
                    </p>
                  </Col>
                </Row>
                <FormGroup>
                  <Row className="justify-item-center d-flex">
                    <Col className="lg-9 m-0 text-center">
                      <Button
                        className="signin-button"
                        color="primary"
                        type="button"
                      >
                        ثبت نام
                      </Button>
                    </Col>
                  </Row>
                </FormGroup>

                <Button
                  className="btn-icon signin-button"
                  color="default"
                  href="#pablo"
                  onClick={() => this.toggle("password")}
                  name="email"
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={require("../assets/img/icons/common/google.svg")}
                    />
                  </span>
                  <span className="btn-inner--text pr-2 pt-1 m-0">
                    ثبت نام با حساب کاربری گوگل
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
                      to="/signin"
                      tag={Link}
                      activeClassName="link-active"
                      className="forgot-password-footer-nav-link"
                      color="primary"
                    >
                      ورود
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

export default RegisterPage;
