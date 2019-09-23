import React from "react";
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup
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
              <div className="text-center mt-5 pb-5">
                <Form role="form" className="profile-form">
                  <Row className="text-center justify-content-center">
                    <Col lg="5">
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            className="profile-input"
                            value="30000 تومان"
                          />
                          <InputGroupAddon addonType="append">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                        </InputGroup>
                      </FormGroup>

                      <FormGroup>
                        <Row className="justify-item-center d-flex">
                          <Col className="lg-9 m-0 text-center">
                            <Button
                              className="signin-button"
                              color="success"
                              to="/payments"
                              tag={Link}
                            >
                              36000 تومان طلبکار
                            </Button>
                          </Col>
                        </Row>
                      </FormGroup>

                      <FormGroup>
                        <Row className="justify-item-center d-flex">
                          <Col className="lg-9 m-0 text-center">
                            <Button
                              className="signin-button"
                              color="danger"
                              to="/payments"
                              tag={Link}
                            >
                              26000 تومان بدهکار
                            </Button>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </Card>
        </Container>
      </section>
    );
  }
}

export default Profile;
