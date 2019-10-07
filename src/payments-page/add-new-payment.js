import React from "react";
import "../assets/css/custom.css";
import {Link} from "react-router-dom";
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
  InputGroup, Card, CardHeader, CardBody, Collapse, Label
} from "reactstrap";
import NavBar from "../common/navbar/navbar.js";
import Footer from "../common/footer/footer.js";
import Chip from "../common/chip/chip";
import './payments.css';
import TableCardHeader from "../common/table-card-header/table-card-header";

class AddPaymentPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      consumersCollapse: false
    };
  }
    render() {
        return (
            <div>
              <NavBar isLogin="true"/>


              <div className="my-body">
            <section className="section pt-0">
              <Container>
                <Card className="card-profile shadow mt-5">
                  <CardHeader>
                    افزودن هزینه جدید
                  </CardHeader>
                  <CardBody>
                    <Row className="justify-content-center py-5">
                      <Col sm="12" className="notifications-table">
                        <Form role="form" className="audit-form">


                          <Row className="mb-3 d-flex justify-content-right">


                          </Row>


                          <Row className=" m-0 text-center justify-content-center">
                            <Col lg="4" className="m-0">
                              <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-email-83"/>
                                    </InputGroupText>
                                  </InputGroupAddon>

                                  <Input
                                      className="audit-input"
                                      placeholder="نام هزینه"
                                  />
                                </InputGroup>
                              </FormGroup>
                            </Col>
                            <Col lg="4" className="m-0">
                              <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-email-83"/>
                                    </InputGroupText>
                                  </InputGroupAddon>

                                  <Input
                                      className="audit-input"
                                      placeholder="میزان هزینه به تومان"
                                  />
                                </InputGroup>
                              </FormGroup>
                            </Col>
                            <Col lg="4" className="m-0">
                              <FormGroup className="mb-2 p-0">
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-email-83"/>
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

                            <Col lg="6" className="m-0">
                              <Button className="btn btn-icon payments-btn-lv2" type="button"
                                      color="dark-green">
                                <span className="btn-inner--icon">
                                  <i className="fa fa-calendar"/>
                                </span>
                                <span className="btn-inner--text">تاریخ انجام</span>
                              </Button>
                              <Button className="btn btn-icon payments-btn-lv2" type="button"
                                      color="dark-green">
                                <span className="btn-inner--icon">
                                  <i className="fa fa-group"/>
                                </span>
                                <span className="btn-inner--text">مصرف کنندگان</span>
                              </Button>
                              <Button className="btn btn-icon payments-btn-lv2"
                                      type="button"
                              color="dark-green">

                                <span className="btn-inner--icon">
                                  <i className="fa fa-camera"/>
                                </span>

                                <span className="btn-inner--text">افزودن عکس</span>



                              </Button>
                            </Col>

                            <Col lg="12" className="m-0">
                              <Collapse isOpen={this.state.consumersCollapse}>
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
                              </Collapse>
                            </Col>

                            <Row className="m-0 d-flex justify-content-center w-100">
                              <Col lg="auto" className="d-flex align-items-center justify-content-center">
                                <div className="custom-control custom-control-alternative custom-checkbox">
                                  <input
                                      className="custom-control-input"
                                      id=" customCheckLogin"
                                      type="checkbox"
                                  />
                                  <label
                                      className="custom-control-label pr-1"
                                      htmlFor=" customCheckLogin"
                                  >
                      <span className="signin-modal-text mr-4">
                     ذخیره مقادیر ورودی
                      </span>
                                  </label>
                                </div>
                              </Col>
                              <Col lg="auto" className="d-flex align-items-center justify-content-center">
                                <Button
                                    className="payments-btn-lv2"
                                    color="primary"
                                    href="#pablo"
                                    onClick={() => this.toggle("password")}
                                    name="email"
                                >
                                  افزودن هزینه
                                </Button>
                              </Col>
                            </Row>

                          </Row>
                        </Form>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                <Card>
                  <CardHeader>
هزینه ها
                  </CardHeader>
                  <CardBody>

                        <FormGroup>
                          <Row className="p-0 d-flex mt-3 d-flex justify-content-center">
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

هیچ هزینه ای اضافه نشده است.
                  </CardBody>
                </Card>
              </Container>
            </section>
              </div>

                <Footer/>
            </div>
        );
    }
}

export default AddPaymentPage;
