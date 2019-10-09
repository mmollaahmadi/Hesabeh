import React from "react";

import "./forgot-password.css";
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
  NavLink, Alert, Collapse
} from "reactstrap";
import "../assets/css/custom.css";
import Header from "../common/header.js";
class NewPasswordRequestPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      emailOrUsernameOrPhoneNumber: {
        placeholder: 'رایانامه / نام کاربری / شماره تلفن همراه',
        value: '',
        errorText: '',
        errorCollapse: false
      },
      success:{
        message:'لینک تغییر گذرواژه به رایانامه شما ارسال شد.',
        collapse: false
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.sendEmailHandle = this.sendEmailHandle.bind(this);
  }

  sendEmailHandle(){
    let emailOrUsernameOrPhoneNumber = this.state.emailOrUsernameOrPhoneNumber.value;

    if(emailOrUsernameOrPhoneNumber !== ''){
        if(emailOrUsernameOrPhoneNumber === 'admin'){
          this.setState({
            success:{
              ...this.state.success,
              collapse: true
            }
          });
        }else{
          this.setState({
            emailOrUsernameOrPhoneNumber:{
              ...this.state.emailOrUsernameOrPhoneNumber,
              errorCollapse: true,
              errorText:'کاربری با این مشخصات وجود ندارد.'
            }
          });
        }
    }
    else{
      this.setState({
        emailOrUsernameOrPhoneNumber:{
          ...this.state.emailOrUsernameOrPhoneNumber,
          errorCollapse: true,
          errorText:'رایانامه یا نام کاربری با شماره تلفن همراه را وارد کنید.'
        }
      });
    }
  }
  handleInputChange(event){
      this.setState({
        emailOrUsernameOrPhoneNumber:{
          ...this.state.emailOrUsernameOrPhoneNumber,
          value: event.target.value,
          errorCollapse:false
        },
        success:{
          ...this.state.success,
          collapse: false
        }
      });
  }

  render() {
    return (
      <div className="section-lg">
        <Container className="pt-10 pb-30  h-100">
          <Row className="text-center justify-content-center">
            <Col lg="5">
            <Header title="درخواست تغییر رمز عبور" />


              <Form role="form" className="audit-form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-user" />
                      </InputGroupText>
                    </InputGroupAddon>

                    <Input
                      className="audit-input"
                      placeholder={this.state.emailOrUsernameOrPhoneNumber.placeholder}
                      onChange={this.handleInputChange}
                      type="email"
                    />
                  </InputGroup>
                  <Collapse isOpen={this.state.emailOrUsernameOrPhoneNumber.errorCollapse}>
                    <Alert
                        color="danger"
                        className="audit-alert"
                    >
                      {this.state.emailOrUsernameOrPhoneNumber.errorText}
                    </Alert>
                  </Collapse>

                </FormGroup>

                <FormGroup>
                  <Collapse isOpen={this.state.success.collapse}>
                    <Alert
                        color="success"
                        className="audit-success-alert"
                    >
                      {this.state.success.message}
                    </Alert>
                  </Collapse>
                  <Row className="justify-item-center d-flex">
                    <Col className="lg-9 m-0 text-center">
                      <Button
                        className="audit-button"
                        color="primary"
                        onClick={this.sendEmailHandle}
                      >
                        ارسال
                      </Button>
                    </Col>
                  </Row>
                </FormGroup>


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
                      to="/signin"
                      tag={Link}
                      activeClassName="link-active"
                      className="forgot-password-footer-nav-link"
                      color="primary"
                    >
                      ورود                 </NavLink>
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

export default NewPasswordRequestPage;
