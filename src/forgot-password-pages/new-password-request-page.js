import React from "react";

import "./forgot-password.css";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  Form,
  Input,
  InputGroup,  
  NavLink
} from "reactstrap";
import "../assets/css/custom.css";
class NewPasswordRequestPage extends React.Component {
  render() {
    return (
      <div className="forgot-password-section section section-lg section-shaped">
        <div className="shape shape-style-1 shape-default">
          <span />
          <span />
          <span className="span-50" />
          <span className="span-170" />
          <span />
          <span />
          <span className="span-200" />
          <span />
          <span className="span-150" />
          <span />
        </div>
        <Container className="pt-30 pb-30  h-100">
          <Row className="text-center justify-content-center">
            <Col lg="5">
              <img
                alt="..."
                className="rounded-circle logo"
                src={require("../assets/img/users/user01.jpg")}
              />
              <h1 className="brand-title">حسابه</h1>

              <Form role="form" className="new-password-forms">
                <FormGroup>
                  <InputGroup className="input-group-alternative ">
                    <Input
                      className="new-password-input"
                      placeholder="ایمیل / نام کاربری / شماره همراه"
                    />
                  </InputGroup>
                </FormGroup>

                <FormGroup className="text-center">
                  <Col className="p-0">
                    <Button
                      className="new-password-button my-1"
                      color="primary"
                    >
                      ارسال
                    </Button>
                  </Col>
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
