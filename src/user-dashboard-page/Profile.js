import React from "react";
import { Button, Modal, Card, Container, Row, Col } from "reactstrap";
import {
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  //UncontrolledAlert
} from "reactstrap";
import { Link } from "react-router-dom";
class Profile extends React.Component {
  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  render() {
    return (
      <section className="section">
        <Container>
          <Card className="card-profile shadow mt--300">
            <div className="px-4">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle profile-image"
                        src={require("../assets/img/users/user01.jpg")}
                      />
                    </a>
                  </div>
                </Col>
                <Col
                  className="order-lg-3 text-lg-right align-self-lg-center"
                  lg="4"
                >
                  <div className="card-profile-actions py-4 mt-lg-0">
                    <Button
                      className="mr-4"
                      color="danger"
                      href="#pablo"
                      onClick={() => this.toggleModal("notificationModal")}
                      size="sm"
                    >
                      حذف حساب کاربری
                    </Button>
                    <Modal
                      className="modal-dialog-centered modal-danger"
                      contentClassName="bg-gradient-danger"
                      isOpen={this.state.notificationModal}
                      toggle={() => this.toggleModal("notificationModal")}
                    >
                      <div className="modal-header d-flex justify-content-center">
                        <h6
                          className="modal-title"
                          id="modal-title-notification"
                        >
                          توجه کنید
                        </h6>
                        {/*<button
                          aria-label="Close"
                          className="close d-flex justify-left"
                          data-dismiss="modal"
                          type="button"
                          onClick={() => this.toggleModal("notificationModal")}
                        >
                          <span aria-hidden={true}>×</span>
                        </button>*/}
                      </div>
                      <div className="modal-body">
                        <div className="py-3 text-center">
                          <i className="ni ni-bell-55 ni-3x" />
                          <p>
                    در صورت حذف حساب کاربری اطلاعات شما حذف و غیرقابل بازیابی می‌شوند.
                          </p>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <Button
                          className="btn-white"
                          color="default"
                          type="button"
                        >
                          انجامش بده
                        </Button>
                        <Button
                          className="text-white ml-auto"
                          color="link"
                          data-dismiss="modal"
                          type="button"
                          onClick={() => this.toggleModal("notificationModal")}
                        >
                          بیخیال
                        </Button>
                      </div>
                    </Modal>

                    <Button
                      className="float-right"
                      color="info"
                      href="#pablo"
                      onClick={() => this.toggleModal("defaultModal")}
                      size="sm"
                    >
                      تغییر رمز عبور
                    </Button>
                    <Modal
                      className="modal-dialog-centered"
                      isOpen={this.state.defaultModal}
                      toggle={() => this.toggleModal("defaultModal")}
                    >
                    <div className="modal-body p-0">
                      <Card className="bg-secondary shadow border-0">
                        <CardHeader className="bg-transparent p-1">
                          {/* <Row className="justify-content-center"> */}
                          <div className="text-muted  mt-3 mb-2">
                            <h5 className="my-modal-header">تغییر رمز عبور
                            </h5>
                          </div>
                          {/* </Row> */}
                        </CardHeader>
                        <CardBody className="px-lg-5 py-lg-3">

                          <Form role="form">
                          <FormGroup className="mb-2">
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-lock-circle-open" />
                                </InputGroupText>
                              </InputGroupAddon>

                              <Input className="my-input" placeholder="رمز عبور فعلی" type="password" value="" />
                            </InputGroup>
                          </FormGroup>
                            <FormGroup className="mb-2">
                              <InputGroup className="input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="ni ni-lock-circle-open" />
                                  </InputGroupText>
                                </InputGroupAddon>

                                <Input className="my-input" placeholder="رمز عبور جدید" type="password" value="" />
                              </InputGroup>
                            </FormGroup>
                            <FormGroup className="mb-2">
                              <InputGroup className="input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="ni ni-lock-circle-open" />
                                  </InputGroupText>
                                </InputGroupAddon>

                                <Input placeholder="تایید رمز عبور جدید" type="password" className="my-input"/>
                              </InputGroup>
                            </FormGroup>
                            <div class="text-muted font-italic justify-content-center d-flex mt-0">
                              <small>
کیفیت رمز عبور جدید:                                <span class="text-success font-weight-700 mr-2">قوی</span>
                              </small>
                            </div>
                            <Row className="text-center">
                              <Col>
                                <Button
                                  className="my-4"
                                  color="primary"
                                  to="/dashboard"
                                  tag={Link}
                                >
                                  تغییر رمز عبور
                                </Button>
                              </Col>
                            </Row>
                          </Form>
                        </CardBody>
                      </Card>
                    </div>
                    </Modal>
                  </div>
                </Col>
                <Col className="order-lg-1" lg="4">
                  <div className="card-profile-stats d-flex justify-content-center">
                    <div>
                      <span className="heading">22</span>
                      <span className="description">گروه ایجاد شده</span>
                    </div>
                    <div>
                      <span className="heading">10</span>
                      <span className="description">گروه فعال</span>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="text-center mt-5 pb-5">
                <h3>Mollaahmadi</h3>
                <div className="h6 font-weight-300">
                  <i className="ni location_pin mr-2" />
                  mollaahmadimohammad@gmail.com
                </div>
                <div className="h6 font-weight-300">
                  <i className="ni location_pin mr-2" />
                  محمد ملااحمدی
                </div>
                <div className="h6 font-weight-300">
                  <i className="ni location_pin mr-2" />
                  09183694858
                </div>
                <div className="h6 mt-4">
                  <i className="ni business_briefcase-24 mr-2" />
                  Solution Manager - Creative Tim Officer
                </div>
                <div>
                  <i className="ni education_hat mr-2" />
                  University of Computer Science
                </div>
              </div>
            </div>
          </Card>
        </Container>
      </section>
    );
  }
}

export default Profile;
