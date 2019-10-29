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
    Collapse, Alert
} from "reactstrap";
import "../../assets/css/custom.css";
import Header from "../common/header.js";
import googleIcon from "../../assets/img/icons/common/google.svg"
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
          validation:false,
        uppercaseValidation: false,
        lowercaseValidation: false,
        numberValidation: false,
        signValidation: false,
        lengthValidation: false
      },
      confirmPassword: {
        placeholder:'تایید گذرواژه',
        value: '',
        collapse: false,
        validation: false,
      },
        success:{
            message:'',
            collapse: false
        },
        validationsCollapse: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.checkEmail = this.checkEmail.bind(this);
    this.handleInputFocus = this.handleInputFocus.bind(this);
      this.handleInputBlur = this.handleInputBlur.bind(this);
      this.register = this.register.bind(this);
      this.animateCSS = this.animateCSS.bind(this);
  }
  checkEmail(email){
    return email === 'm@g.com';
  }
  animateCSS(element, animationName, callback) {
    const node = document.querySelector(element);
    node.classList.add('animated', animationName);

    function handleAnimationEnd() {
      node.classList.remove('animated', animationName);
      node.removeEventListener('animationend', handleAnimationEnd);

      if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
  }
  register(){
      if(this.state.email.validation &&
      this.state.password.validation &&
      this.state.confirmPassword.validation){
          this.setState({
              validationsCollapse: false,
             success:{
                 message:`لینک تایید به آدرس ${this.state.email.value} ارسال شد.`,
                 collapse: true
             }
          });
      }

      let animationName = 'swing';

      if (!this.state.email.validation)
        this.animateCSS('.email-validation', animationName);

    if (!this.state.password.lengthValidation)
      this.animateCSS('.password-length-validation', animationName);
      if (!this.state.password.signValidation)
        this.animateCSS('.password-sign-validation',animationName);
    if (!this.state.password.numberValidation)
      this.animateCSS('.password-number-validation',animationName);
    if (!this.state.password.uppercaseValidation)
      this.animateCSS('.password-uppercase-validation',animationName);
    if (!this.state.password.lowercaseValidation)
      this.animateCSS('.password-lowercase-validation',animationName);

    if (!this.state.confirmPassword.validation)
      this.animateCSS('.confirm-password-validation',animationName)

  }
    handleInputBlur(){
      if(this.state.email.value === '' &&
          this.state.password.value === '' &&
          this.state.confirmPassword.value === '')
        this.setState({
            validationsCollapse: false
        });
  }
  handleInputFocus(){
      this.setState({
         validationsCollapse: true
      });
  }
  handleInputChange(event){
    let name = event.target.name;
    let _value = event.target.value;

    switch(name) {
      case 'email':
          let emailRegExp = /(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)/;
        if(emailRegExp.test(_value)){
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
          let _validation = false;
        let _uppercaseValidation = false;
        let _lowercaseValidation = false;
        let _numberValidation = false;
        let _signValidation = false;
        let _lengthValidation = false;

        let lowerCaseRegexp = /[a-z]/;
        let upperCaseRegexp = /[A-Z]/;
        let numberRegExp = /\d/;
          // eslint-disable-next-line
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
        if(_value.length > 7 && _value.length < 20)
            _lengthValidation = true;
        if(_uppercaseValidation &&
            _lowercaseValidation &&
            _numberValidation &&
            _signValidation &&
            _lengthValidation){
            _validation = true;
        }

        this.setState({
          password: {
            ...this.state.password,
            value: _value,
              validation: _validation,
            uppercaseValidation: _uppercaseValidation,
            lowercaseValidation: _lowercaseValidation,
            numberValidation: _numberValidation,
            signValidation: _signValidation,
              lengthValidation: _lengthValidation
          },
            confirmPassword:{
                ...this.state.confirmPassword,
                validation: false
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
                      onFocus={this.handleInputFocus}
                      onBlur={this.handleInputBlur}
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
                      onFocus={this.handleInputFocus}
                      onBlur={this.handleInputBlur}
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
                      onFocus={this.handleInputFocus}
                      onBlur={this.handleInputBlur}
                      name='confirm-password'
                      type="password"
                    />
                  </InputGroup>
                </FormGroup>
                <Collapse isOpen={this.state.validationsCollapse}>
                <Row className="d-flex justify-content-center pb-1">
                  <Col lg="2"
                       className = {`password-lowercase-validation ${this.state.password.lowercaseValidation ? "condition-satisfied" : "condition-unsatisfied"}`}
                  // className = {this.state.password.lowercaseValidation ? "condition-satisfied" : "condition-unsatisfied"}
                      >
                  <p className="password-condition-fake-icon">
                  a-z
                  </p>
                    <p className="password-condition-text">
                    حروف کوچک
                    </p>
                  </Col>
                  <Col lg="2"
                       className = {`password-uppercase-validation ${this.state.password.uppercaseValidation ? "condition-satisfied" : "condition-unsatisfied"}`}
                  // className={this.state.password.uppercaseValidation ? "condition-satisfied" : "condition-unsatisfied"}
                      >
                  <p className="password-condition-fake-icon">
                  A-Z
                  </p>
                    <p className="password-condition-text">
                  حروف بزرگ
                    </p>
                  </Col>
                  <Col lg="2"
                       className = {`password-number-validation ${this.state.password.numberValidation ? "condition-satisfied" : "condition-unsatisfied"}`}
                  // className={this.state.password.numberValidation ? "condition-satisfied" : "condition-unsatisfied"}
                  >
                  <p className="password-condition-fake-icon">
                  123
                  </p>
                    <p className="password-condition-text">
                    عدد
                    </p>
                  </Col>
                  <Col lg="2"
                       className = {`password-sign-validation ${this.state.password.signValidation ? "condition-satisfied" : "condition-unsatisfied"}`}
                  // className={this.state.password.signValidation ? "condition-satisfied" : "condition-unsatisfied"}
                  >
                    <i className=" fa fa-hashtag password-condition-icon" />
                    <p className="password-condition-text">
                    نشانه خاص
                    </p>
                  </Col>
                    <Col lg="2"
                         className = {`password-length-validation ${this.state.password.lengthValidation ? "condition-satisfied" : "condition-unsatisfied"}`}
                         // className={this.state.password.lengthValidation ? "condition-satisfied" : "condition-unsatisfied"}
                    >
                        <p className="password-condition-fake-icon">
                            8-20
                        </p>
                        <p className="password-condition-text">
                            8 تا 20 کاراکتر
                        </p>
                    </Col>
                </Row>
                    <Row className="d-flex justify-content-center pb-4">
                  <Col lg="2"
                       className = {`confirm-password-validation ${this.state.confirmPassword.validation ? "condition-satisfied" : "condition-unsatisfied"}`}
                  // className={this.state.confirmPassword.validation ? "condition-satisfied" : "condition-unsatisfied"}
                  >
                    <i className=" fa fa-check password-condition-icon" />
                    <p className="password-condition-text">
                    تایید رمز عبور
                    </p>
                  </Col>
                  <Col lg="2"
                       className = {`email-validation ${this.state.email.validation ? "condition-satisfied" : "condition-unsatisfied"}`}
                  // className={"email-validation" + (this.state.email.validation ? "condition-satisfied" : "condition-unsatisfied")}
                  >
                    <i className=" fa fa-at password-condition-icon" />
                    <p className="password-condition-text">
                    ایمیل صحیح
                    </p>
                  </Col>
                </Row>
                </Collapse>
                  <Collapse isOpen={this.state.success.collapse}>
                      <Alert
                          color="success"
                          className="audit-success-alert"
                      >
                          {this.state.success.message}
                      </Alert>
                  </Collapse>
                <FormGroup>
                  <Row className="justify-item-center d-flex">
                    <Col className="lg-9 m-0 text-center">
                      <Button
                        className="audit-button"
                        color="primary"
                        type="button"
                        onClick={this.register}
                      >
                        ثبت نام
                      </Button>
                    </Col>
                  </Row>
                </FormGroup>

                <Button
                  className="btn-icon audit-button"
                  color="secondary"
                  href="#pablo"
                  onClick={() => this.toggle("password")}
                  name="email"
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={googleIcon}
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