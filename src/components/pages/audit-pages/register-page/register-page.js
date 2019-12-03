import React from "react";

import "../audit-pages.css";
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
  Collapse,
  Alert
} from "reactstrap";
import "../../../../assets/css/custom.css";
import AuditColumnHeader from "../audit-column-header.js";
import googleIcon from "../../../../assets/img/icons/common/google.svg"
import AOS from 'aos'
import ScrollableAnchor from 'react-scrollable-anchor'
import {animateCSS} from '../../../../utils/animationUtils'
import AuditColumnFooter from "../audit-column-footer";
import {
  register,
  checkUsernameAvailability,
  checkEmailAvailability
} from "../../../../utils/auditUtils";
import {
  NAME_MIN_LENGTH,
  NAME_MAX_LENGTH,
  USERNAME_MIN_LENGTH,
  USERNAME_MAX_LENGTH,
  EMAIL_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
  PASSWORD_MAX_LENGTH
} from "../../../../constants/constants";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        placeholder: 'رایانامه',
        value: '',
        collapse: false,
        validation: false
      },
      password: {
        placeholder: 'گذرواژه',
        value: '',
        collapse: false,
        validation: false,
        uppercaseValidation: false,
        lowercaseValidation: false,
        numberValidation: false,
        signValidation: false,
        lengthValidation: false
      },
      confirmPassword: {
        placeholder: 'تایید گذرواژه',
        value: '',
        collapse: false,
        validation: false,
      },
      success: {
        message: '',
        collapse: false
      },
      validationsCollapse: false
    };

    AOS.init();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
    this.register = this.register.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.register();
    }
  }

  register() {
    // if (this.state.email.validation &&
    //   this.state.password.validation &&
    //   this.state.confirmPassword.validation) {

      const registerRequest = {
        "email": this.state.email.value,
        "password": this.state.password.value
      };
      register(registerRequest)
        .then(response => {
          this.setState({
            validationsCollapse: false,
            success: {
              message: `لینک تایید به آدرس ${this.state.email.value} ارسال شد.`,
              collapse: true
            }
          });
          this.props.history.push("/login");
        })
        .catch(error => {
          // alert.error({
          //   message: "Polling App",
          //   description:
          //     error.message || "Sorry! Something went wrong. Please try again!"
          // });
          this.setState({
            validationsCollapse: false,
            success: {
              message:error.message,
              collapse: true
            }
          });
        });

    // }

    // let animationName = 'swing';
    //
    // if (!this.state.email.validation)
    //   animateCSS('.email-validation', animationName);
    //
    // if (!this.state.password.lengthValidation)
    //   animateCSS('.password-length-validation', animationName);
    // if (!this.state.password.signValidation)
    //   animateCSS('.password-sign-validation', animationName);
    // if (!this.state.password.numberValidation)
    //   animateCSS('.password-number-validation', animationName);
    // if (!this.state.password.uppercaseValidation)
    //   animateCSS('.password-uppercase-validation', animationName);
    // if (!this.state.password.lowercaseValidation)
    //   animateCSS('.password-lowercase-validation', animationName);
    //
    // if (!this.state.confirmPassword.validation)
    //   animateCSS('.confirm-password-validation', animationName)

  }

  handleInputBlur() {
    if (this.state.email.value === '' &&
      this.state.password.value === '' &&
      this.state.confirmPassword.value === '')
      this.setState({
        validationsCollapse: false
      });
  }

  handleInputFocus() {
    this.setState({
      validationsCollapse: true
    });
  }

  handleInputChange(event) {
    let name = event.target.name;
    let _value = event.target.value;

    switch (name) {
      case 'email':
        let emailRegExp = /(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)/;
        if (emailRegExp.test(_value)) {
          this.setState({
            email: {
              ...this.state.email,
              value: _value,
              validation: true
            }
          });
        } else {
          this.setState({
            email: {
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
        let signRegExp = /[!@#$%^&~.]/;

        if (lowerCaseRegexp.test(_value)) {
          _uppercaseValidation = true;
        }
        if (upperCaseRegexp.test(_value)) {
          _lowercaseValidation = true;
        }
        // eslint-disable-next-line no-useless-escape
        if (numberRegExp.test(_value)) {
          _numberValidation = true;
        }
        if (signRegExp.test(_value)) {
          _signValidation = true;
        }
        if (_value.length > 7 && _value.length < 20)
          _lengthValidation = true;
        if (_uppercaseValidation &&
          _lowercaseValidation &&
          _numberValidation &&
          _signValidation &&
          _lengthValidation) {
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
          confirmPassword: {
            ...this.state.confirmPassword,
            validation: false
          }
        });
        break;
      case 'confirm-password':
        if (_value === this.state.password.value) {
          this.setState({
            confirmPassword: {
              ...this.state.confirmPassword,
              value: _value,
              validation: true
            }
          });
        } else {
          this.setState({
            confirmPassword: {
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
      <ScrollableAnchor id={'register'}>
        <div className="my-section">
          <Container className="pt-10 pb-30  h-100">
            <Row className="text-center justify-content-center">
              <Col lg="5"
                   data-aos="fade-up"
                   data-aos-duration="1000"
                   data-aos-delay="50">
                <AuditColumnHeader needBrand={true}
                                   title=" ایجاد حساب کاربری"/>
                <Form role="form" className="audit-form">
                  <FormGroup className="mb-3">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83"/>
                        </InputGroupText>
                      </InputGroupAddon>

                      <Input
                        className="audit-input"
                        placeholder={this.state.email.placeholder}
                        value={this.state.email.value}
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                        onBlur={this.handleInputBlur}
                        onKeyPress={this.handleKeyPress}
                        name='email'
                        type="email"
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open"/>
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
                        onKeyPress={this.handleKeyPress}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open"/>
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
                        onKeyPress={this.handleKeyPress}
                      />
                    </InputGroup>
                  </FormGroup>
                  <Collapse isOpen={this.state.validationsCollapse}>
                    <Row className="d-flex justify-content-center pb-1">
                      <Col lg="2"
                           className={`password-lowercase-validation ${this.state.password.lowercaseValidation ? "condition-satisfied" : "condition-unsatisfied"}`}
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
                           className={`password-uppercase-validation ${this.state.password.uppercaseValidation ? "condition-satisfied" : "condition-unsatisfied"}`}
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
                           className={`password-number-validation ${this.state.password.numberValidation ? "condition-satisfied" : "condition-unsatisfied"}`}
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
                           className={`password-sign-validation ${this.state.password.signValidation ? "condition-satisfied" : "condition-unsatisfied"}`}
                        // className={this.state.password.signValidation ? "condition-satisfied" : "condition-unsatisfied"}
                      >
                        <i className=" fa fa-hashtag password-condition-icon"/>
                        <p className="password-condition-text">
                          نشانه خاص
                        </p>
                      </Col>
                      <Col lg="2"
                           className={`password-length-validation ${this.state.password.lengthValidation ? "condition-satisfied" : "condition-unsatisfied"}`}
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
                           className={`confirm-password-validation ${this.state.confirmPassword.validation ? "condition-satisfied" : "condition-unsatisfied"}`}
                        // className={this.state.confirmPassword.validation ? "condition-satisfied" : "condition-unsatisfied"}
                      >
                        <i className=" fa fa-check password-condition-icon"/>
                        <p className="password-condition-text">
                          تایید رمز عبور
                        </p>
                      </Col>
                      <Col lg="2"
                           className={`email-validation ${this.state.email.validation ? "condition-satisfied" : "condition-unsatisfied"}`}
                        // className={"email-validation" + (this.state.email.validation ? "condition-satisfied" : "condition-unsatisfied")}
                      >
                        <i className=" fa fa-at password-condition-icon"/>
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
                  <FormGroup>
                    <Row className="justify-item-center d-flex">
                      <Col className="lg-9 m-0 text-center">
                        <Button
                          className="btn-icon audit-button"
                          color="secondary"
                          href="#pablo"
                          onClick={() => this.toggle("password")}
                          name="email"
                        >
                  <span className="btn-inner--icon ml-2">
                    <img
                      alt="..."
                      src={googleIcon}
                    />
                  </span>
                          {/*<span className="btn-inner--text pr-2 pt-1 m-0">*/}
                          ثبت نام با حساب کاربری گوگل

                        </Button>
                      </Col>
                    </Row>
                  </FormGroup>
                </Form>
                <AuditColumnFooter isRegisterPage={true} handleChangePage={this.props.onChangePage}/>
              </Col>
            </Row>
          </Container>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default RegisterPage;
