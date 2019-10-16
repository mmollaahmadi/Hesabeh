import React from "react";
import {
  Button,
  Modal,
  Card,
  Container,
  Row,
  Col,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup
} from "reactstrap";
import "./profile.css";
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
          <Card className="card-profile shadow mt-0">
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
                  className="order-lg-3 text-lg-right d-flex justify-content-center p-0"
                  lg="4"
                >
                  <div className="card-profile-actions py-4 px-0 mt-lg-0">
                    <Modal
                      className="modal-dialog-centered"
                      isOpen={this.state.exitModal}
                      toggle={() => this.toggleModal("exitModal")}
                    >
                      <div className="modal-body p-0">
                        <Card className="bg-secondary shadow border-0">
                          <CardBody className="px-3 d-flex justify-content-center">
                            <p className="profile-modal-text">
                              میخواهید از حساب کاربری خارج شوید؟
                            </p>
                            <Button
                              className="profile-modal-btn"
                              color="primary"
                              to="/dashboard"
                              tag={Link}
                            >
                              بله
                            </Button>
                            <Button
                              className="profile-modal-btn"
                              color="default"
                              to="/dashboard"
                              tag={Link}
                            >
                              خیر
                            </Button>
                          </CardBody>
                        </Card>
                      </div>
                    </Modal>
                    <Modal
                      className="modal-dialog-centered modal-danger"
                      contentClassName="bg-gradient-danger"
                      isOpen={this.state.deleteAccountModal}
                      toggle={() => this.toggleModal("deleteAccountModal")}
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
                            در صورت حذف حساب کاربری اطلاعات شما حذف و غیرقابل
                            بازیابی می‌شوند.
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
                        >
                          بیخیال
                        </Button>
                      </div>
                    </Modal>
                    <Button
                      className="profile-btn"
                      color="default"
                      href="#pablo"
                      onClick={() => this.toggleModal("exitModal")}
                    >
                      خروج
                    </Button>
                    <Button
                      className="profile-btn"
                      href="#pablo"
                      onClick={() => this.toggleModal("deleteAccountModal")}
                      color="warning"
                    >
                      حذف حساب کاربری
                    </Button>
                  </div>
                </Col>

                <Col
                  className="order-lg-1 text-lg-right d-flex justify-content-center p-0"
                  lg="4"
                >
                  <div className="card-profile-actions py-4 px-0 mt-lg-0">
                    <Modal
                      className="modal-dialog-centered"
                      isOpen={this.state.changePasswordModal}
                      toggle={() => this.toggleModal("changePasswordModal")}
                    >
                      <div className="modal-body p-0">
                        <Card className="bg-secondary shadow border-0">
                          <CardHeader className="bg-transparent p-1">
                            {/* <Row className="justify-content-center"> */}
                            <div className="text-muted  mt-3 mb-2">
                              <h5 className="my-modal-header">
                                تغییر رمز عبور
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

                                  <Input
                                    className="my-input"
                                    placeholder="رمز عبور فعلی"
                                    type="password"
                                    value=""
                                  />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup className="mb-2">
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-lock-circle-open" />
                                    </InputGroupText>
                                  </InputGroupAddon>

                                  <Input
                                    className="my-input"
                                    placeholder="رمز عبور جدید"
                                    type="password"
                                    value=""
                                  />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup className="mb-2">
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-lock-circle-open" />
                                    </InputGroupText>
                                  </InputGroupAddon>

                                  <Input
                                    placeholder="تایید رمز عبور جدید"
                                    type="password"
                                    className="my-input"
                                  />
                                </InputGroup>
                              </FormGroup>
                              <div className="text-muted font-italic justify-content-center d-flex mt-0">
                                <small>
                                  کیفیت رمز عبور جدید:{" "}
                                  <span className="text-success font-weight-700 mr-2">
                                    قوی
                                  </span>
                                </small>
                              </div>
                              <Row className="text-center my-4">
                                <Col>
                                  <Button
                                    className="profile-modal-btn"
                                    color="primary"
                                    to="/dashboard"
                                    tag={Link}
                                  >
                                    تغییر رمز عبور
                                  </Button>
                                  <Button
                                    className="profile-modal-btn"
                                    color="default"
                                    to="/dashboard"
                                    tag={Link}
                                  >
                                    بیخیال
                                  </Button>
                                </Col>
                              </Row>
                            </Form>
                          </CardBody>
                        </Card>
                      </div>
                    </Modal>
                    <Modal
                      className="modal-dialog-centered modal-danger"
                      contentClassName="bg-gradient-danger"
                      isOpen={this.state.editProfileModal}
                      toggle={() => this.toggleModal("editProfileModal")}
                    >
                      <div className="modal-body p-0">
                        <Card className="bg-secondary shadow border-0">
                          <CardHeader className="bg-transparent p-1">
                            <div className="text-muted  mt-3 mb-2">
                              <h5 className="my-modal-header">
                                ویرایش اطلاعات کاربری
                              </h5>
                            </div>
                          </CardHeader>
                          <CardBody className=" py-lg-3">
                            <Form role="form" className="profile-form">
                              <Row className="text-center justify-content-center">
                                <Col lg="10">
                                  <FormGroup className="mb-3">
                                    <InputGroup className="input-group-alternative">
                                      <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                          <i className="ni ni-email-83" />
                                        </InputGroupText>
                                      </InputGroupAddon>

                                      <Input
                                        className="profile-input"
                                        value="mollaahmadimohammad@gmail.com"
                                        type="email"
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
                                        className="profile-input"
                                        value="محمد ملااحمدی"
                                        type="email"
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
                                        className="profile-input"
                                        value="۰۹۱۸۳۶۹۴۸۵۸"
                                      />
                                    </InputGroup>
                                  </FormGroup>

                                  <FormGroup>
                                    <Row className="justify-item-center d-flex">
                                      <Col>
                                        <Button
                                          className="profile-modal-btn"
                                          color="primary"
                                          to="/dashboard"
                                          tag={Link}
                                        >
                                          ثبت تغییرات
                                        </Button>
                                        <Button
                                          className="profile-modal-btn"
                                          color="default"
                                          to="/dashboard"
                                          tag={Link}
                                        >
                                          بیخیال
                                        </Button>
                                      </Col>
                                    </Row>
                                  </FormGroup>
                                </Col>
                              </Row>
                            </Form>
                          </CardBody>
                        </Card>
                      </div>
                    </Modal>
                    <Button
                      className="profile-btn"
                      color="info"
                      href="#pablo"
                      onClick={() => this.toggleModal("editProfileModal")}
                    >
                      ویرایش اطلاعات
                    </Button>
                    <Button
                      className="profile-btn"
                      href="#pablo"
                      onClick={() => this.toggleModal("changePasswordModal")}
                      color="primary"
                    >
                      تغییر رمز عبور
                    </Button>
                  </div>
                </Col>
              </Row>
              <div className="text-center mt-5 pt-5 pb-5">
                <Row>
                  <Col lg="6" className="pr-5">
                    <p className="profile-data-title">نام و نام خانوادگی</p>
                    <h3 className="profile-data-value">محمد ملااحمدی</h3>
                  </Col>
                  <Col lg="6" className="pr-5">
                    <p className="profile-data-title">نام کاربری</p>
                    <h3 className="profile-data-value">mollaahmadi@</h3>
                  </Col>
                  <Col lg="6" className="pr-5">
                    <p className="profile-data-title">پست الکترونیکی</p>
                    <h3 className="profile-data-value">
                      mollaahmadimohammad@gmail.com
                    </h3>
                  </Col>
                  <Col lg="6" className="pr-5">
                    <p className="profile-data-title">شماره همراه</p>
                    <h3 className="profile-data-value">۰۹۱۸۳۶۹۴۸۵۸</h3>
                  </Col>
                </Row>

                <Row className="hr"/>

                <Row className="d-flex justify-connect-center">
                  <Col lg="6" className="pr-5">
                    <Row>
                      <div>
                        <p className="profile-data-title">میزان اعتبار</p>
                        <h3 className="profile-data-value">۳۰۰۰۰ تومان</h3>
                      </div>
                      <Button className="profile-btn m-auto" color="primary">
                        افزایش اعتبار
                      </Button>
                    </Row>
                  </Col>
                  <Col lg="6" className="pr-5">
                    <Row>
                      <div>
                        <p className="profile-data-title">وضعیت کلی</p>
                        <h3 className="profile-data-value">۳۰۰۰۰ تومان بدهکار</h3>
                      </div>
                      <Button className="profile-btn m-auto" color="primary">
                        پرداخت بدهی
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </div>
            </div>
          </Card>
        </Container>
      </section>
    );
  }
}

export default Profile;
