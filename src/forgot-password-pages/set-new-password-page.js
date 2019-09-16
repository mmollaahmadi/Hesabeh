import React from "react";

import Navbar from "../common/navbar/Navbar";
import Footer from "../common/footer/Footer";
import { Container, Row, Col } from "reactstrap";
import "./forgot-password.css";
import { Link } from "react-router-dom";
import {
  NavLink,
  Modal,
  Card,
  CardHeader,
  CardBody,
  Button,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Collapse,
  Alert
} from "reactstrap";
class SetNewPasswordPage extends React.Component {
  render() {
    return (
      <div className="new-password-request-section">
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
                <Row className="text-center">
                  <Col>
                    <Button
                      className="new-password-button my-1"
                      color="primary"
                    >
                      ارسال لینک تغییر رمز عبور
                    </Button>
                  </Col>
                </Row>
                <Row className="text-center justify-content-center mt-4">
                  <Col>
                    <Button
                      className="new-password-button my-1"
                      color="secondary"
                      to="/"
                      tag={Link}
                    >
                      بازگشت
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>

          <Row className="text-center justify-content-center mt-4">
            <Col lg="5">
              <Alert className="p-2 alert" color="success" fade={true}>
                <span className="alert-inner--text">
                  <strong>لینک تغییر رمز عبور به ایمیل شما ارسال شد </strong>
                </span>
              </Alert>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SetNewPasswordPage;
