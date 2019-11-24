import React from "react";

import "../audit-pages.css";
import {Link} from "react-router-dom";
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
import "../../../../assets/css/custom.css";
import AuditColumnHeader from "../audit-column-header.js";
import googleIcon from "../../../../assets/img/icons/common/google.svg"
import {doesExistUser, isCorrectUser} from '../../../../utils/auditUtils'
import AOS from 'aos'
import ScrollableAnchor from 'react-scrollable-anchor'
import AuditColumnFooter from "../audit-column-footer";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailOrUsername: {
        placeholder: 'رایانامه / نام کاربری',
        value: '',
        errorText: '',
        errorCollapse: false
      },
      password: {
        placeholder: 'گذرواژه',
        value: '',
        errorText: '',
        errorCollapse: false
      }
    };
    AOS.init();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.signInHandle = this.signInHandle.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.signInHandle();
    }
  }

  signInHandle() {
    let emailOrUsername = this.state.emailOrUsername.value;
    let password = this.state.password.value;

    if (emailOrUsername !== '') {
      if (password !== '') {
        if (doesExistUser(emailOrUsername)) {
          if (isCorrectUser(emailOrUsername, password)) {
            // this.props.history.push('/my-account');
            this.props.onLogin(emailOrUsername, password);
          } else {
            this.setState({
              password: {
                ...this.state.password,
                errorCollapse: true,
                errorText: 'گذرواژه اشتباه است.'
              }
            });
          }
        } else {
          this.setState({
            emailOrUsername: {
              ...this.state.emailOrUsername,
              errorCollapse: true,
              errorText: 'کاربری با این مشخصات وجود ندارد.'
            }
          });
        }
      } else {
        this.setState({
          password: {
            ...this.state.password,
            errorCollapse: true,
            errorText: 'گذرواژه را وارد کنید.'
          }
        });
      }

    } else {
      this.setState({
        emailOrUsername: {
          ...this.state.emailOrUsername,
          errorCollapse: true,
          errorText: 'رایانامه یا نام کاربری را وارد کنید.'
        }
      });
    }
  }

  handleInputChange(event) {
    if (event.target.name === 'password') {
      this.setState({
        password: {
          ...this.state.password,
          value: event.target.value,
          errorCollapse: false
        }
      });
    } else {
      this.setState({
        emailOrUsername: {
          ...this.state.emailOrUsername,
          value: event.target.value,
          errorCollapse: false
        },
        password: {
          ...this.state.password,
          errorCollapse: false
        }
      });
    }
  }

  render() {
    return (
      <ScrollableAnchor id={'sign-in'}>
        <div className="my-section">
          <Container className="pt-1 pb-30  h-100">
            <Row className="text-center justify-content-center">
              <Col lg="5"
                   data-aos="fade-up"
                   data-aos-duration="1000"
                   data-aos-delay="50">
                <AuditColumnHeader needBrand={true}
                                   title="ورود به حساب کاربری"/>

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
                        name="emailOrUsername"
                        placeholder={this.state.emailOrUsername.placeholder}
                        value={this.state.emailOrUsername.value}
                        onChange={this.handleInputChange}
                        onKeyPress={this.handleKeyPress}
                      />
                    </InputGroup>
                    <Collapse isOpen={this.state.emailOrUsername.errorCollapse}>
                      <Alert
                        color="danger"
                        className="audit-alert"
                      >
                        {this.state.emailOrUsername.errorText}
                      </Alert>
                    </Collapse>
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
                        type="password"
                        name='password'
                        placeholder={this.state.password.placeholder}
                        value={this.state.password.value}
                        onChange={this.handleInputChange}
                        onKeyPress={this.handleKeyPress}
                      />
                    </InputGroup>
                    <Row className="d-flex justify-content-end mb-2 mx-0">
                      <NavLink
                        to="/forgot-password"
                        tag={Link}
                        className="forgot-password-link"
                        color="primary"
                      >
                        رمز عبور را فراموش کردم!
                      </NavLink>
                    </Row>
                    <Collapse isOpen={this.state.password.errorCollapse}>
                      <Alert
                        color="danger"
                        className="audit-alert"
                      >
                        {this.state.password.errorText}
                      </Alert>
                    </Collapse>
                  </FormGroup>
                  <FormGroup>
                    <Row className="justify-item-center d-flex">
                      <Col className="lg-9 m-0 text-center">
                        <Button
                          className="audit-button"
                          color="primary"
                          onClick={this.signInHandle}
                        >
                          ورود
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
                          ثبت نام با حساب کاربری گوگل
                        </Button>
                      </Col>
                    </Row>
                  </FormGroup>
                </Form>
                <AuditColumnFooter isLoginPage={true} handleChangePage={this.props.onChangePage}/>

              </Col>
            </Row>
          </Container>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default LoginPage;
