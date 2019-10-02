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
import Chip from '../common/chip/chip'
class AddPaymentPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar isLogin="true" />

        <main className="profile-page pb-5" ref="main">
          <div className="my-body">
            <Container>
              <Row className="text-center justify-content-center">
                <Col lg="5">
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
                          placeholder="میزان هزینه به تومان"
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
                          placeholder="تاریخ انجام"
                          type="email"
                        />
                      </InputGroup>
                    </FormGroup>

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

                    <FormGroup>

                      <Row className="p-0 justify-item-center d-flex">
                        <Col className="lg-9 m-0 text-center">
                        <Button
                          className="mr-0 audit-button"
                          color="default"
                          href="#pablo"
                          onClick={() => this.toggle("password")}
                          name="email"
                        >
                          ذخیره ورودی ها
                        </Button>
                        <Button
                          className="mr-0 audit-button"
                          color="default"
                          href="#pablo"
                          onClick={() => this.toggle("password")}
                          name="email"
                        >
                          افزودن
                        </Button>
                          <Button
                            className="mr-0 audit-button"
                            color="primary"
                            to="/payments"
                            tag={Link}
                          >
                            ثبت و ذخیره نهایی
                          </Button>
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


                  </Form>
                </Col>
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
