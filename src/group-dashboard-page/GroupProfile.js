import React from "react";
import { Button, Modal, Card, Container, Row, Col } from "reactstrap";

import UserStatus from './UserStatus.js';

class GroupProfile extends React.Component {
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
                        className="rounded-circle"
                        src={require("../assets/img/theme/bootstrap.jpg")}
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
                      حذف گروه
                    </Button>
                    <Modal
              className="modal-dialog-centered modal-danger"
              contentClassName="bg-gradient-danger"
              isOpen={this.state.notificationModal}
              toggle={() => this.toggleModal("notificationModal")}
            >
              <div className="modal-header">
                <h6 className="modal-title" id="modal-title-notification">
                  Your attention is required
                </h6>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("notificationModal")}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="py-3 text-center">
                  <i className="ni ni-bell-55 ni-3x" />
                  <h4 className="heading mt-4">You should read this!</h4>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
              <div className="modal-footer">
                <Button className="btn-white" color="default" type="button">
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
              <div className="modal-header">
                <h6 className="modal-title" id="modal-title-default">
                  Type your modal title
                </h6>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("defaultModal")}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <div className="modal-body">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
              </div>
              <div className="modal-footer">
                <Button color="primary" type="button">
                  تغییر رمز عبور
                </Button>
                <Button
                  className="ml-auto"
                  color="link"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("defaultModal")}
                >
                  بیخیال
                </Button>
              </div>
            </Modal>

                  </div>
                </Col>
                <Col className="order-lg-1" lg="4">
                  <div className="card-profile-stats d-flex justify-content-center">
                    <div>
                      <span className="heading">22</span>
                      <span className="description">تومان خرج شده</span>
                    </div>
                    <div>
                      <span className="heading">10</span>
                      <span className="description">کاربر</span>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="text-center mt-5 pb-5">
                <h3>name of group</h3>
              </div>
              <Row className="d-flex justify-content-center">
                <UserStatus />
                <UserStatus />
                <UserStatus />
                <UserStatus />
                <UserStatus />
                <UserStatus />
                <UserStatus />
              </Row>
            </div>
          </Card>
        </Container>
      </section>
    );
  }
}

export default GroupProfile;
