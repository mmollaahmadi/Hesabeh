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
      email:{
        placeholder:'رایانامه',
        value:'',
        collapse: false,
        validation: false
      },
      password: {
        placeholder:'گذرواژه',
        value: '',
        collapse: false,
        uppercaseValidation: false,
        lowercaseValidation: false,
        numberValidation: false,
        signValidation: false,
      },
      confirmPassword: {
        placeholder:'تایید گذرواژه',
        value: '',
        collapse: false,
        validation: false,
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.checkEmail = this.checkEmail.bind(this);
  }
  checkEmail(email){
    return email === 'm@g.com';
  }
  handleInputChange(event){
    let name = event.target.name;
    let _value = event.target.value;


    switch(name) {
      case 'email':
        if(this.checkEmail(_value)){
          this.setState({
            email:{
              ...this.state.email,
              value: _value,
              validation: true
            }
          });
        }else{
          this.setState({
            email:{
              ...this.state.email,
              value: _value,
              validation: false
            }
          });
        }
        break;
      case 'password':
        let _uppercaseValidation = false;
        let _lowercaseValidation = false;
        let _numberValidation = false;
        let _signValidation = false;

        let lowerCaseRegexp = /[a-z]/;
        let upperCaseRegexp = /[A-Z]/;
        let numberRegExp = /\d/;
        let signRegExp = /[!@#\$%\^&~.]/;

        if(lowerCaseRegexp.test(_value)){
          _uppercaseValidation = true;
        }
        if(upperCaseRegexp.test(_value)){
          _lowercaseValidation = true;
        }
        // eslint-disable-next-line no-useless-escape
        if(numberRegExp.test(_value)){
          _numberValidation = true;
        }
        if(signRegExp.test(_value)){
          _signValidation = true;
        }
        this.setState({
          password: {
            ...this.state.password,
            value: _value,
            uppercaseValidation: _uppercaseValidation,
            lowercaseValidation: _lowercaseValidation,
            numberValidation: _numberValidation,
            signValidation: _signValidation,
          }
        });
        break;
      case 'confirm-password':
        if(_value === this.state.password.value){
          this.setState({
            confirmPassword:{
              ...this.state.confirmPassword,
              value: _value,
              validation: true
            }
          });
        }else{
          this.setState({
            confirmPassword:{
              ...this.state.confirmPassword,
              value: _value,
              validation: false
            }
          });
        }
        break;
      default:
        return null;
    }

  }

  render() {

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
                      placeholder={this.state.email.placeholder}
                      value={this.state.email.value}
                      onChange={this.handleInputChange}
                      name='email'
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
                      placeholder={this.state.password.placeholder}
                      value={this.state.password.value}
                      onChange={this.handleInputChange}
                      name='password'
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
                      placeholder={this.state.confirmPassword.placeholder}
                      value={this.state.confirmPassword.value}
                      onChange={this.handleInputChange}
                      name='confirm-password'
                      type="password"
                    />
                  </InputGroup>
                </FormGroup>
                <Collapse isOpen="true">
                <Row className="d-flex justify-content-center text-center px-9 pb-4">
                  <Col lg="2"
                  className = {this.state.password.lowercaseValidation ? "condition-satisfied" : "condition-unsatisfied"}>
                  <p className="password-condition-fake-icon">
                  a-z
                  </p>
                    <p className="password-condition-text">
                    حروف کوچک
                    </p>
                  </Col>
                  <Col lg="2"
                  className={this.state.password.uppercaseValidation ? "condition-satisfied" : "condition-unsatisfied"}>
                  <p className="password-condition-fake-icon">
                  A-Z
                  </p>
                    <p className="password-condition-text">
                  حروف بزرگ
                    </p>
                  </Col>
                  <Col lg="2"
                  className={this.state.password.numberValidation ? "condition-satisfied" : "condition-unsatisfied"}
                  >
                  <p className="password-condition-fake-icon">
                  123
                  </p>
                    <p className="password-condition-text">
                    عدد
                    </p>
                  </Col>
                  <Col lg="2"
                  className={this.state.password.signValidation ? "condition-satisfied" : "condition-unsatisfied"}
                  >
                    <i className=" fa fa-hashtag password-condition-icon" />
                    <p className="password-condition-text">
                    نشانه خاص
                    </p>
                  </Col>
                  <Col lg="2"
                  className={this.state.confirmPassword.validation ? "condition-satisfied" : "condition-unsatisfied"}
                  >
                    <i className=" fa fa-check password-condition-icon" />
                    <p className="password-condition-text">
                    تایید رمز عبور
                    </p>
                  </Col>
                  <Col lg="2"
                  className={this.state.email.validation ? "condition-satisfied" : "condition-unsatisfied"}
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
