import React from "react";
import { Button, Modal, Card, Container, Row, Col } from "reactstrap";
import {
  CardBody,
} from "reactstrap";
import { Link } from "react-router-dom";
import AOS from 'aos';
class GroupProfile extends React.Component {
  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };
  componentDidMount() {
    AOS.refresh();
  }
  componentWillMount() {
    AOS.init();
  }
  render() {
    return (
      <section className="section">
        <Container>
          <Card data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="50"
                className="card-profile shadow mt-0">
            <div className="px-4">
              <Row className="justify-content-center">

                <Col className="order-lg-2 " lg="4">
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
                  <div className="d-flex justify-content-center py-4 px-0 mt-lg-0">
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
                      className="group-profile-btn my-auto mx-2"
                      color="default"
                      href="#pablo"
                      onClick={() => this.toggleModal("exitModal")}
                    >
                      خروج
                    </Button>
                    <Button
                      className="group-profile-btn m-auto"
                      href="#pablo"
                      onClick={() => this.toggleModal("deleteAccountModal")}
                      color="warning"
                    >
                      حذف حساب کاربری
                    </Button>
                  </div>
                </Col>
                <Col
                  className="order-lg-1 "
                  lg="4">
                  <div className="card-profile-stats d-flex justify-content-center">
                    <div>
                      <span className="heading">1398/09/21</span>
                      <span className="description">آغاز فعالیت</span>
                    </div>
                    <div>
                      <span className="heading">10</span>
                      <span className="description">کاربر</span>
                    </div>
                  </div>
                </Col>

              </Row>
              <div className="text-center mt-5 pt-5 pb-5">
                <Row className='m-0'>
                  <Col xs='12' md="6" className="pr-5">
                    <p className="profile-data-title">نام گروه</p>
                    <h3 className="profile-data-value">اتاق 406 خوابگاه کشاورز</h3>
                  </Col>
                  <Col xs='12' md="6" className="pr-5">
                    <p className="profile-data-title">شناسه گروه</p>
                    <h3 className="profile-data-value">keshavarz406@</h3>
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

export default GroupProfile;
