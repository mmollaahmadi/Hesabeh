import React from "react";

import Navbar from "../common/navbar/navbar";
import Footer from "../common/footer/footer";
import Profile from "./profile.js";
import Cover from "../common/cover/cover.js";
import Accordion from "../common/accordion/accordion.js";
import { GithubPicker } from "react-color";
import "./user-dashboard.css";

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
                <section className="section pt-0 pb-200">
                  <Accordion open={1}>
                    <Accordion.Item>
                      <Accordion.Header>
                        ترتیب پیش‌فرض نمایش‌ها
                      </Accordion.Header>
                      <Accordion.Body>
                        <Form>
                          <Row className="px-2">
                            <Col lg="4" className="px-4">
                              <FormGroup>
                                <Row className=" d-flex justify-content-center">

                                    <Label for="exampleSelect">
                                      ترتیب نمایش گروه‌ها
                                    </Label>

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

                                </Row>
                              </FormGroup>
                            </Col>
                          <Col lg="4" className="px-4">
                              <FormGroup>
                                <Row className="justify-content-center">

                                    <Label for="exampleSelect">
                                      ترتیب نمایش خرج‌ها
                                    </Label>

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

                                </Row>
                              </FormGroup>
                            </Col>
                            <Col lg="4" className="px-4">
                              <FormGroup>
                                <Row className="justify-content-center">

                                    <Label for="exampleSelect">
                                      ترتیب نمایش اعلام‌ها
                                    </Label>

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

                                </Row>
                              </FormGroup>
                            </Col>
                          </Row>
                        </Form>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Header>مدیریت برچسب‌ها</Accordion.Header>
                      <Accordion.Body>
                        <Form role="form" className="signup-form">
                          <Row className="justify-content-center mb-3">
                            <Col lg="auto">
                              <FormGroup className="m-0">
                                <InputGroup className="input-group-alternative">
                                  <Input
                                    className="signup-input"
                                    placeholder="نام برچسب"
                                  />
                                </InputGroup>
                              </FormGroup>
                            </Col>

                            <Col
                              lg="auto"
                              className="d-flex align-items-center"
                            >
                              <UncontrolledDropdown nav>
                                <DropdownToggle className="p-0 btn-circle m-0">
                                  <i className="fa fa-paint-brush"></i>
                                </DropdownToggle>
                                <DropdownMenu className="p-0">
                                  <DropdownItem className="p-0">
                                    <GithubPicker className="color-picker"/>
                                  </DropdownItem>
                                </DropdownMenu>
                              </UncontrolledDropdown>
                            </Col>

                            <Col lg="auto" className="">
                              <FormGroup className="m-0">
                                <Button color="primary" type="button">
                                  ایجاد برچسب
                                </Button>
                              </FormGroup>
                            </Col>
                          </Row>
                        </Form>

                        <Row className="justify-content-start">
                        <h6 className="m-0"> برچسبها:</h6>
                          <Badge color="primary" className="profile-label align-self-center">
                            برچسب 1
                            <i className="fa fa-close mr-2"></i>
                          </Badge>
                          <Badge color="primary" className="profile-label align-self-center">
                            برچسب 1<i className="fa fa-close mr-2"></i>
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
