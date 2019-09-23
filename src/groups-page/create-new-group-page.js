import React from "react";

import "./my-groups.css";
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
  InputGroup  
} from "reactstrap";
import "../assets/css/custom.css";
class CreateNewGroupPage extends React.Component {
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

              <p className="title-text"> ورود به حساب کاربری</p>

              <Form role="form" className="signin-form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>

                    <Input
                      className="signin-input"
                      placeholder="نام گروه"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>

                    <Input
                      className="signin-input"
                      placeholder="نام کاربری گروه"
                    />
                  </InputGroup>
                </FormGroup>

                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>

                    <Input
                      className="signin-input"
                      placeholder="ایمیل/ نام کاربری / شماره همراه اعضا"
                      type="email"
                    />
                  </InputGroup>
                </FormGroup>


                <FormGroup>

                  <Row className="justify-item-center d-flex">
                    <Col className="lg-9 m-0 text-center">
                      <Button
                        className="signin-button"
                        color="primary"
                        to="/payments"
                        tag={Link}
                      >
              ایجاد گروه
                      </Button>
                    </Col>
                  </Row>
                </FormGroup>

                <Button
                  className="btn-icon signin-button"
                  color="default"
                  href="#pablo"
                  onClick={() => this.toggle("password")}
                  name="email"
                >
                  بازگشت
                </Button>
              </Form>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CreateNewGroupPage;
