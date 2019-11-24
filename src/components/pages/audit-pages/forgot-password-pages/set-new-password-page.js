import React from "react";

// import "./forgot-password.css";
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
class SetNewPasswordPage extends React.Component {
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
      }
    };
  }
  toggle = state => {
    this.setState({
      [state]: { collapse: !this.state[state].collapse }
    });
  };
  render() {
    return (
      <div className="section-lg">
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
              تعیین رمز عبور جدید
               </p>

              <Form role="form" className="audit-form">
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
                <FormGroup>
              <Collapse isOpen={this.state.password.collapse}>
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
              </Collapse>

                  <Row className="justify-item-center d-flex">
                    <Col className="lg-9 m-0 text-center">
                      <Button
                        className="signin-button"
                        color="primary"
                        to="/payments"
                        tag={Link}
                      >
                        تایید
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

export default SetNewPasswordPage;
