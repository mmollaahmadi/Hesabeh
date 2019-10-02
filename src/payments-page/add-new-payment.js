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
  InputGroup
} from "reactstrap";
import Navbar from "../common/navbar/navbar.js";
import Footer from "../common/footer/footer.js";
import Chip from "../common/chip/chip";
class AddPaymentPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar isLogin="true" />

        <main className="profile-page pb-5" ref="main">
          <div className="my-body">
            <Container>
              <Row className="m-0 d-flex justify-content-center">
                <Col lg="3">
                  <Button
                    className="mr-0 mb-3 ml-3 py-2 audit-button"
                    color="default"
                    href="#pablo"
                    onClick={() => this.toggle("password")}
                    name="email"
                  >
                    انتخاب مصرفکنندگان
                  </Button>
                  </Col>
                  <Col lg="3">

                  <Button
                    className="mr-0 mb-3 ml-3 py-2 audit-button"
                    color="default"
                  >
                    ذخیره ورودی ها
                  </Button>
                  </Col>
                  <Col lg="3">

                  <Button
                    className="mr-0 mb-3 py-2 audit-button"
                    color="default"
                    href="#pablo"
                    onClick={() => this.toggle("password")}
                    name="email"
                  >
                    افزودن
                  </Button>
                </Col>
              </Row>
              <Form role="form" className="audit-form">
                <Row className=" m-0 text-center justify-content-center">
                  <Col lg="6" className="m-0">
                    <FormGroup className="mb-3">
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>

                        <Input
                          className="audit-input"
                          placeholder="نام هزینه"
                        />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col lg="6" className="m-0">
                    <FormGroup className="mb-3">
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>

                        <Input
                          className="audit-input"
                          placeholder="میزان هزینه به تومان"
                        />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col lg="6" className="m-0">
                    <FormGroup className="mb-3">
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>

                        <Input
                          className="audit-input"
                          placeholder="تاریخ انجام"
                          type="email"
                        />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col lg="6" className="m-0">
                    <FormGroup className="mb-2 p-0">
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>

                        <Input
                          className="signin-input"
                          placeholder="توضیحات"
                          type="email"
                        />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col lg="12" className="m-0">
                    <Row className="m-0 d-flex justify-content-center">
                      <Chip
                        class="mb-2 ml-2"
                        haveCloseButton="true"
                        avatarSrc={require("../assets/img/users/user01.jpg")}
                        label="محمد ملااحمدی"
                        // onDelete={() => this.deleteUser()}
                      />
                      <Chip
                        class="mb-2 ml-2"
                        haveCloseButton="true"
                        avatarSrc={require("../assets/img/users/user01.jpg")}
                        label="محمد ملااحمدی"
                        // onDelete={() => this.deleteUser()}
                      />
                      <Chip
                        class="mb-2 ml-2"
                        haveCloseButton="true"
                        avatarSrc={require("../assets/img/users/user01.jpg")}
                        label="محمد ملااحمدی"
                        // onDelete={() => this.deleteUser()}
                      />
                    </Row>
                  </Col>
                  <Col lg="6" className="m-0">
                    <FormGroup>
                      <Row className="p-0 d-flex mt-3">
                        <Col className="lg-6 m-0">
                          <Button
                            className="mr-0 mb-2 audit-button"
                            color="primary"
                            to="/payments"
                            tag={Link}
                          >
                            ثبت و ذخیره نهایی
                          </Button>
                          </Col>
                          <Col className="lg-6 m-0">
                          <Button
                            className="audit-button"
                            color="default"
                            href="#pablo"
                            onClick={() => this.toggle("password")}
                            name="email"
                          >
                            بازگشت
                          </Button>
                        </Col>
                      </Row>
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </Container>
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

export default AddPaymentPage;
