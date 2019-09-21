import React from "react";

import Navbar from "../common/navbar/Navbar";
import Footer from "../common/footer/Footer";

import Profile from "./Profile.js";
// import RequestsAndReposts from "./RequestsAndReposts.js";
import Cover from "../common/cover/Cover.js";
import Accordion from "../common/accordion/accordion.js";
import {
  Container,
  Form,
  FormGroup,
  InputGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from "reactstrap";
import { Link } from "react-router-dom";
import { GithubPicker } from "react-color";
import './UserDashboard.css'
class UserDashboardPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar isLogin="true" />

        <div className="">
          <main className="profile-page pb-5" ref="main">
            <Cover />

            <Profile />

            <Container>
              <div className="landing-position-relative">
                <section className="section section-lg pb-200">
                  <Accordion open={1}>
                    <Accordion.Item>
                      <Accordion.Header>
                        ترتیب پیش‌فرض نمایش‌ها
                      </Accordion.Header>
                      <Accordion.Body>
                        <Form>
                          <FormGroup>
                            <Row className="justify-content-center">
                              <Col lg="2" className="mt-auto mb-auto">
                                <Label for="exampleSelect">
                                  ترتیب نمایش گروه‌ها
                                </Label>
                              </Col>
                              <Col lg="5">
                                <Input
                                  type="select"
                                  name="select"
                                  id="exampleSelect"
                                >
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </Input>
                              </Col>
                            </Row>
                          </FormGroup>
                          <FormGroup>
                            <Row className="justify-content-center">
                              <Col lg="2" className="mt-auto mb-auto">
                                <Label for="exampleSelect">
                                  ترتیب نمایش خرج‌ها
                                </Label>
                              </Col>
                              <Col lg="5">
                                <Input
                                  type="select"
                                  name="select"
                                  id="exampleSelect"
                                >
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </Input>
                              </Col>
                            </Row>
                          </FormGroup>
                          <FormGroup>
                            <Row className="justify-content-center">
                              <Col lg="2" className="mt-auto mb-auto">
                                <Label for="exampleSelect">
                                  ترتیب نمایش اعلام‌ها
                                </Label>
                              </Col>
                              <Col lg="5">
                                <Input
                                  type="select"
                                  name="select"
                                  id="exampleSelect"
                                >
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </Input>
                              </Col>
                            </Row>
                          </FormGroup>
                        </Form>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Header>برچسب‌ها</Accordion.Header>
                      <Accordion.Body>
                        <Form role="form" className="signup-form">
                          <Row className="justify-content-center d-flex">






                            <Col lg="4">
                              <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                  <Input
                                    className="signup-input"
                                    placeholder="نام برچسب"
                                  />
                                </InputGroup>
                              </FormGroup>
                            </Col>

                            <Col lg="1">
                            <UncontrolledDropdown nav>
                              <DropdownToggle  className="p-0">

                                  <span className="nav-link color-picker-btn "> </span>


                              </DropdownToggle>
                              <DropdownMenu className="p-0">
                                <DropdownItem className="p-0">
                                  <GithubPicker/>
                                </DropdownItem>

                              </DropdownMenu>
                            </UncontrolledDropdown>
                            </Col>


                            <Col className="lg-2 m-0">
                              <FormGroup>
                                <Button

                                  color="primary"
                                  type="button"
                                >
                                  ایجاد برچسب
                                </Button>
                              </FormGroup>
                            </Col>

                          </Row>
                        </Form>

                        <Row className="justify-content-end">
                          <Badge href="#" color="primary">
                            Primary
                          </Badge>
                          <Badge href="#" color="secondary">
                            Secondary
                          </Badge>
                          <Badge href="#" color="success">
                            Success
                          </Badge>
                          <Badge href="#" color="danger">
                            Danger
                          </Badge>
                          <Badge href="#" color="warning">
                            Warning
                          </Badge>
                          <Badge href="#" color="info">
                            Info
                          </Badge>
                          <Badge href="#" color="light">
                            Light
                          </Badge>
                          <Badge href="#" color="dark">
                            Dark
                          </Badge>
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Header>سابقه پرداخت‌ها</Accordion.Header>
                      <Accordion.Body>some body</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </section>
              </div>
            </Container>
          </main>
        </div>

        <Footer />
      </div>
    );
  }
}

export default UserDashboardPage;
