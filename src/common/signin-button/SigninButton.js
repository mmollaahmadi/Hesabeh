import React from "react";
import { Link } from "react-router-dom";
import {
  NavLink,
  Modal,
  Card,
  CardHeader,
  CardBody,
  Button,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

class SigninButton extends React.Component {
  state = {
    loginFormModal: false
  };
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  render() {
    return (
      <div>
        <div>
          <NavLink
            className="navbar-link pl-3 pr-3"
            color="primary"
            id="navbar-signin"
            onClick={() => this.toggleModal("loginFormModal")}
          >
            ورود
          </NavLink>
        </div>
        <Modal
          className="modal-dialog-centered signin-modal"
          size="sm"
          isOpen={this.state.loginFormModal}
          toggle={() => this.toggleModal("loginFormModal")}
        >
          <div className="modal-body p-0">
            <Card className="bg-transparent shadow border-0">
              <CardHeader className="bg-transparent p-1 signin-modal-header">
                {/* <Row className="justify-content-center"> */}
                <div className="text-muted  mt-3 mb-2">
                  <h5> ورود </h5>
                </div>
                {/* </Row> */}
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-3">
                <div className="btn-wrapper text-center">
                  <Button
                    className="btn-neutral btn-icon"
                    color="default"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <span className="btn-inner--icon">
                      <img
                        alt="..."
                        src={require("../../assets/img/icons/common/google.svg")}
                      />
                    </span>
                    <span className="btn-inner--text pr-2 pt-1 m-0">
                      حساب گوگل
                    </span>
                  </Button>
                </div>
                <div className="text-center signin-modal-text mt-4 mb-3">
                  <small> یا ورود با حساب کاربری </small>
                </div>
                <Form role="form" className="signin-form">
                  <FormGroup className="mb-3">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>

                      <Input
                        className="signin-modal-input"
                        placeholder="ایمیل / نام کاربری"
                        type="email"
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                      </InputGroupAddon>

                      <Input
                        className="signin-modal-input"
                        placeholder="رمز عبور"
                        type="password"
                      />
                    </InputGroup>
                  </FormGroup>
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
                        مرا به خاطر بسپار
                      </span>
                    </label>
                  </div>
                  <Row className="justify-item-center d-flex">
                    <Col className="lg-9 m-0 text-center">
                      <Button
                        className="ml-1 my-4"
                        color="secondary"
                        to="/forgot-password"
                        tag={Link}
                      >
                        <small>رمز عبور را فراموش کردم</small>
                      </Button>
                      <Button
                        className="mr-1 my-4"
                        color="primary"
                        type="button"
                      >
                        ورود
                      </Button>
                    </Col>
                  </Row>
                  <Row />
                </Form>
              </CardBody>
            </Card>
          </div>
        </Modal>
      </div>
    );
  }
}

export default SigninButton;
