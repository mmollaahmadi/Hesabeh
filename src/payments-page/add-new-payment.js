import React from "react";

// import "./my-groups.css";
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
  Badge
} from "reactstrap";
import "../assets/css/custom.css";
class AddPaymentPage extends React.Component {
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
                      placeholder="نام هزینه"
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
                      placeholder="میزان هزینه"
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
                      placeholder="1398/07/01 دوشنبه"
                      type="email"
                    />
                  </InputGroup>
                </FormGroup>
                <Row className="justify-content-start">
                  <Badge href="#" color="primary">
                    برچسب 1<i className="fa fa-close mr-2"></i>
                  </Badge>
                </Row>
                <FormGroup className="mb-2 p-0">
                  <Input
                    className="form-control-alternative cuntactus-input"
                    cols="80"
                    name="name"
                    placeholder="توضیحات"
                    rows="2"
                    size="md"
                    type="textarea"
                  />
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
              ثبت و ذخیره
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

export default AddPaymentPage;
