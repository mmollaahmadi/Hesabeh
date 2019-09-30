import React from "react";
import "../assets/css/custom.css";
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
  Badge
} from "reactstrap";
import Navbar from "../common/navbar/navbar.js";
import Footer from "../common/footer/footer.js";

class AddPaymentPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar isLogin="true" />

        <main className="profile-page pb-5" ref="main">
          <div className="my-body">
          <Container>
            <Row className="text-center justify-content-center">


                <Form role="form" className="signin-form">
                <Row>
                <Col lg="4">
                  <FormGroup className="mb-3">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>

                      <Input className="signin-input" placeholder="نام هزینه" />
                    </InputGroup>
                  </FormGroup>
                  </Col>
                    <Col lg="4">
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
                  </Col>
                    <Col lg="4">
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
                  </Col>
                    <Col lg="4">
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
                  </Col>
                    <Col lg="4">
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
                  </Col>
                  
                  </Row>
                </Form>

            </Row>
            </Container>
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

export default AddPaymentPage;
