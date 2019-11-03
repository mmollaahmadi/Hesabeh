import React from "react";
import { Button, Modal, Card, Container, Row, Col } from "reactstrap";
import {
  CardBody,
} from "reactstrap";
import { Link } from "react-router-dom";
import AOS from 'aos';
import "./profile.css";
class GroupProfile extends React.Component {
  constructor(props){
    super(props);
    this.state={
      exitModal: false,
    };
    this.fileInputRef = React.createRef();
    this.openFileDialog = this.openFileDialog.bind(this);
     this.onFilesAdded = this.onFilesAdded.bind(this);
  }

  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };




  openFileDialog() {
    if (this.props.disabled) return;
    this.fileInputRef.current.click();
  }
  onFilesAdded(evt) {
  if (this.props.disabled) return;
  const files = evt.target.files;
  if (this.props.onFilesAdded) {
    const array = this.fileListToArray(files);
    this.props.onFilesAdded(array);
  }
}
  componentDidMount() {
    AOS.refresh();
  }
  componentWillMount() {
    AOS.init();
  }
  render() {
    return (

          <Card data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="50"
                className="card-profile my-card-profile shadow mb-5">
            <div className="px-4">
              <Row className="justify-content-center">

                <Col className="order-lg-2 " lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={this.openFileDialog}>
                      <img
                        alt="..."
                        className="rounded-circle profile-image"
                        src={require("../../assets/img/users/user01.jpg")}
                      />
                      <input
                      ref={this.fileInputRef}
                      className="FileInput"
                      type="file"
                      // multiple
                      onChange={this.onFilesAdded}
                    />
                    </a>

                  </div>
                </Col>

                <Col
                  className="order-lg-3 text-lg-right d-flex justify-content-center p-0"
                  lg="4"
                >
                <div className="card-profile-actions py-4 px-0 mt-lg-0 px-md-5 px-lg-0 w-100 d-flex justify-content-between">

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
                      className="profile-btn my-auto"
                      color="default"
                      href="#pablo"
                      onClick={() => this.toggleModal("exitModal")}
                    >
                      خروج
                    </Button>
                    <Button
                      className="profile-btn my-auto"
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

    );
  }
}

export default GroupProfile;
