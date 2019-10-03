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
  NavLink,
  Collapse
} from "reactstrap";
import "../assets/css/custom.css";
import Header from "../common/header.js";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signupFormModal: false,
      email: {
        value: "",
        valid: false,
        collapse: false
      },
      password: {
        value: "",
        valid: false,
        collapse: false
      },
      confirmPassword: {
        value: "",
        valid: false,
        collapse: false
      },
      uppercaseCondition: false,
      lowercaseCondition: true,
      numberCondition: false,
      signCondition: false,
      confirmPasswordCondition: false,
    };
  }
  toggle = state => {
    this.setState({
      [state]: { collapse: !this.state[state].collapse }
    });
  };
  render() {
    const {uppercaseCondition, lowercaseCondition, numberCondition, signCondition, confirmPasswordCondition} = this.state;
    return (
      <div className="register-section section-lg">
        <Container className="pt-10 pb-30  h-100">
          <Row className="text-center justify-content-center">
            <Col lg="5">
              <Header title=" ایجاد حساب کاربری" />
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
                      className="audit-input"
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
                      className="audit-input"
                      placeholder="تایید رمز عبور"
                      type="password"
                    />
                  </InputGroup>
                </FormGroup>
                <Collapse isOpen={this.state.password.collapse}>
                <Row className="d-flex justify-content-center text-center px-9 pb-4">
                  <Col lg="2"
                  className = {lowercaseCondition ? "condition-satisfied" : "condition-unsatisfied"}>
                  <p className="password-condition-fake-icon">
                  a-z
                  </p>
                    <p className="password-condition-text">
                    حروف کوچک
                    </p>
                  </Col>
                  <Col lg="2"
                  className={uppercaseCondition ? "condition-satisfied" : "condition-unsatisfied"}>
                  <p className="password-condition-fake-icon">
                  A-Z
                  </p>
                    <p className="password-condition-text">
                  حروف بزرگ
                    </p>
                  </Col>
                  <Col lg="2"
                  className={numberCondition ? "condition-satisfied" : "condition-unsatisfied"}
                  >
                  <p className="password-condition-fake-icon">
                  123
                  </p>
                    <p className="password-condition-text">
                    عدد
                    </p>
                  </Col>
                  <Col lg="2"
                  className={signCondition ? "condition-satisfied" : "condition-unsatisfied"}
                  >
                    <i className=" fa fa-hashtag password-condition-icon" />
                    <p className="password-condition-text">
                    نشانه خاص
                    </p>
                  </Col>
                  <Col lg="2"
                  className={confirmPasswordCondition ? "condition-satisfied" : "condition-unsatisfied"}
                  >
                    <i className=" fa fa-check password-condition-icon" />
                    <p className="password-condition-text">
                    تایید رمز عبور
                    </p>
                  </Col>
                  <Col lg="2"
                  className={confirmPasswordCondition ? "condition-satisfied" : "condition-unsatisfied"}
                  >
                    <i className=" fa fa-at password-condition-icon" />
                    <p className="password-condition-text">
                    ایمیل صحیح
                    </p>
                  </Col>
                </Row>
                </Collapse>
                <FormGroup>
                  <Row className="justify-item-center d-flex">
                    <Col className="lg-9 m-0 text-center">
                      <Button
                        className="audit-button"
                        color="primary"
                        type="button"
                      >
                        ثبت نام
                      </Button>
                    </Col>
                  </Row>
                </FormGroup>

                <Button
                  className="btn-icon audit-button"
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
