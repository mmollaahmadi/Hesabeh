import React from "react";

import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
class ContactUs extends React.Component {
  state = {};
  render() {
    return (
      <section className="section section-lg pt-lg-0 section-contact-us">
        <Container>
          <Row className="justify-content-center ">
            <Col lg="8">
              <Card className="bg-gradient-secondary shadow">
                <CardBody className="p-lg-5">
                  <h2 className="mb-1">ارتباط با ما</h2>
                  <p className="mt-0">منتظر نظرات و پیشنهادات شما هستیم</p>
                  <FormGroup
                    className={classnames("mt-5", {
                      focused: this.state.nameFocused
                    })}
                  >
                    <InputGroup className="input-group-alternative">

                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-user-run" />
                      </InputGroupText>
                    </InputGroupAddon>
                      <Input
                        placeholder="نام و نام خانوادگی"
                        type="text"
                        onFocus={e => this.setState({ nameFocused: true })}
                        onBlur={e => this.setState({ nameFocused: false })}
                      />

                    </InputGroup>
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: this.state.emailFocused
                    })}
                  >
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="ایمیل"
                        type="email"
                        onFocus={e => this.setState({ emailFocused: true })}
                        onBlur={e => this.setState({ emailFocused: false })}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup className="mb-4">
                    <Input
                      className="form-control-alternative"
                      cols="80"
                      name="name"
                      placeholder="متن پیام"
                      rows="4"
                      type="textarea"
                    />
                  </FormGroup>
                  <div>
                    <Button
                      block
                      className="btn-round"
                      color="default"
                      size="lg"
                      type="button"
                    >
                      ارسال پیام
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default ContactUs;
