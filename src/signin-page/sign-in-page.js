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

class SignInPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailOrUsername:{
        placeholder:'رایانامه / نام کاربری',
        value:'',
        errorText:'',
        errorCollapse:false
      },
      password:{
        placeholder:'گذرواژه',
        value:'',
        errorText:'',
        errorCollapse:false
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.signInHandle = this.signInHandle.bind(this);
  }
  signInHandle(){
    let emailOrUsername = this.state.emailOrUsername.value;
    let password = this.state.password.value;

    if(emailOrUsername !== ''){
      if(password !== ''){
        if(emailOrUsername === 'admin'){
          if(password === 'admin'){
            this.props.history.push('/my-account');
          }
          else {
            this.setState({
              password:{
                ...this.state.password,
                errorCollapse: true,
                errorText:'گذرواژه اشتباه است.'
              }
            });
          }
        }else{
          this.setState({
            emailOrUsername:{
              ...this.state.emailOrUsername,
              errorCollapse: true,
              errorText:'کاربری با این مشخصات وجود ندارد.'
            }
          });
        }
      }else{
        this.setState({
          password:{
            ...this.state.password,
            errorCollapse: true,
            errorText:'گذرواژه را وارد کنید.'
          }
        });
      }

    }
    else{
      this.setState({
        emailOrUsername:{
          ...this.state.emailOrUsername,
          errorCollapse: true,
          errorText:'رایانامه یا نام کاربری را وارد کنید.'
        }
      });
    }
  }
  handleInputChange(event){
    if (event.target.name === 'password'){
      this.setState({
        password:{
          ...this.state.password,
          value: event.target.value,
          errorCollapse:false
        }
      });
    }
    else {
      this.setState({
        emailOrUsername:{
          ...this.state.emailOrUsername,
          value: event.target.value,
          errorCollapse:false
        },
        password:{
          ...this.state.password,
          errorCollapse:false
        }
      });
    }
  }

  render() {
    return (
      <div className="section-lg">
        <Container className="pt-1 pb-30  h-100">
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
                      name="emailOrUsername"
                      placeholder={this.state.emailOrUsername.placeholder}
                      value={this.state.emailOrUsername.value}
                      onChange={this.handleInputChange}
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
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>

                    <Input
                      className="audit-input"
                      type="password"
                      name='password'
                      placeholder={this.state.password.placeholder}
                      value={this.state.password.value}
                      onChange={this.handleInputChange}
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

                <Button
                  className="btn-icon audit-button"
                  color="secondary"
                  href="#pablo"
                  name='password'
                  onClick={this.toggle}
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

export default SignInPage;
