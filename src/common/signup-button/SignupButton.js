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
import '../modal.css';

class SignupButton extends React.Component {
  state = {
    signupFormModal: false
  };
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  render() {
    let _buttonOrLink;
    if (this.props.buttonOrLink === "button") {
      _buttonOrLink = (
        <Button
          className="btn-neutral btn signup-button"
          color="primary"
          type="button"
          onClick={() => this.toggleModal("signupFormModal")}
        >
          {this.props.title}
        </Button>
      );
    } else {
      _buttonOrLink = (
        <NavLink
          className="nav-link pl-3 pr-3 "
          color="default"
          onClick={() => this.toggleModal("signupFormModal")}
        >
          {this.props.title}
        </NavLink>
      );
    }
    return (
      <div>
        <div>{_buttonOrLink}</div>
        <Modal
          className="modal-dialog-centered signup-modal"
          size="sm"
          isOpen={this.state.signupFormModal}
          toggle={() => this.toggleModal("signupFormModal")}
        >
          <div className="modal-body p-0">
            <Card className="bg-transparent shadow border-0">
              <CardHeader className="bg-transparent p-1 signup-modal-header">
                {/* <Row className="justify-content-center"> */}
                <div className="text-muted  mt-3 mb-2">
                  <h5>ایجاد حساب کاربری</h5>
                </div>
                {/* </Row> */}
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-3">
                <div className="btn-wrapper text-center">
                  <Button
                    className="btn-secondary btn-icon"
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
                <div className="text-center signup-modal-text mt-4 mb-3">
                  <small>یا ثبت نام کنید:</small>
                </div>
                <Form role="form" className="signup-form">
                  <FormGroup>
                    <InputGroup className="input-group-alternative ">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>

                      <Input
                        className="signup-modal-input"
                        placeholder="ایمیل"
                        type="email"
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
                      className="signup-modal-input"
                      placeholder="رمز عبور"
                      type="password" />
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
                      placeholder="تایید رمز عبور"
                      type="password"
                      className="signup-modal-input"/>
                    </InputGroup>
                  </FormGroup>
                  <div class="text-muted font-italic justify-content-center d-flex mt-0">
                    <small className="signup-modal-text">
                      کیفیت رمز عبور:
                      <span class="text-success font-weight-700 mr-2">قوی</span>
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
                        ایجاد
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </div>
        </Modal>
      </div>
    );
  }
}

export default SignupButton;
