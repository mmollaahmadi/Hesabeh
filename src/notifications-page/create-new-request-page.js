import React from "react";

import Navbar from "../common/navbar/Navbar";
import Footer from "../common/footer/Footer";
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
  DropdownMenu,
  Table
} from "reactstrap";
import BuyListTableRow from './buy-list-table-row.js';

class CreateNewRequestPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar isLogin="true" />

        <div className="">
          <main className="profile-page pb-5" ref="main">
            <Cover />

            <Container>
              <div className="landing-position-relative">
                <section className="section pt-0 pb-200">
                  <Accordion open={0}>
                    <Accordion.Item>
                      <Accordion.Header>
              دعوت برای پیوستن به گروه من
                      </Accordion.Header>
                      <Accordion.Body>
                      <Form role="form" className="signup-form">
                        <Row className="justify-content-center mb-3">
                          <Col lg="auto">
                            <FormGroup className="m-0">
                              <InputGroup className="input-group-alternative">
                                <Input
                                  className="signup-input"
                                  placeholder="ایمیل / نام کاربری / شماره همراه"
                                />
                              </InputGroup>
                            </FormGroup>
                          </Col>
                          <Col lg="auto" className="">
                            <FormGroup className="m-0">
                              <Button color="primary" type="button">
                                ارسال دعوت نامه
                              </Button>
                            </FormGroup>
                          </Col>
                        </Row>
                      </Form>

                      <Row className="justify-content-start">
                        <Badge href="#" color="primary">
                          برچسب 1<i className="fa fa-close mr-2"></i>
                        </Badge>
                      </Row>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Header>
                      درخواست پیوستن به گروه
                      </Accordion.Header>
                      <Accordion.Body>
                        <Form role="form" className="signup-form">
                          <Row className="justify-content-center mb-3">
                            <Col lg="auto">
                              <FormGroup className="m-0">
                                <InputGroup className="input-group-alternative">
                                  <Input
                                    className="signup-input"
                                    placeholder="نام گروه"
                                  />
                                </InputGroup>
                              </FormGroup>
                            </Col>
                            <Col lg="auto" className="">
                              <FormGroup className="m-0">
                                <Button color="primary" type="button">
                                  ارسال درخواست
                                </Button>
                              </FormGroup>
                            </Col>
                          </Row>
                        </Form>

                        <Row className="justify-content-start">
                          <Badge href="#" color="primary">
                            برچسب 1<i className="fa fa-close mr-2"></i>
                          </Badge>
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Header>
                      خروج از گروه
                      </Accordion.Header>
                      <Accordion.Body>
                      <Form role="form" className="signup-form">
                        <Row className="justify-content-center mb-3">
                          <Col lg="auto">
                            <FormGroup className="m-0">
                              <InputGroup className="input-group-alternative">
                                <Input
                                  className="signup-input"
                                  placeholder="نام گروه"
                                />
                              </InputGroup>
                            </FormGroup>
                          </Col>
                          <Col lg="auto" className="">
                            <FormGroup className="m-0">
                              <Button color="primary" type="button">
                                ارسال درخواست
                              </Button>
                            </FormGroup>
                          </Col>
                        </Row>
                      </Form>

                      <Row className="justify-content-start">
                        <Badge href="#" color="primary">
                          برچسب 1<i className="fa fa-close mr-2"></i>
                        </Badge>
                      </Row>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item>
                      <Accordion.Header>
                      ساخت لیست خرید
                      </Accordion.Header>
                      <Accordion.Body>
                      <Form role="form" className="signup-form">
                        <Row className="justify-content-center mb-3">
                          <Col lg="auto">
                            <FormGroup className="m-0">
                              <InputGroup className="input-group-alternative">
                                <Input
                                  className="signup-input"
                                  placeholder="نام گروه"
                                />
                              </InputGroup>
                            </FormGroup>
                          </Col>
                          <Col lg="2">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              className="p-1 text-light"
                              href="#pablo"
                              role="button"

                              color=""
                              onClick={e => e.preventDefault()}
                            >
                            <p className="m-0">
                              مخاطب
                              </p>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                              پرداخت بدهی
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                ارسال درخواست
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                          </Col>
                          <Col lg="auto" className="">
                            <FormGroup className="m-0">
                              <Button color="primary" type="button">
                                ارسال لیست
                              </Button>
                            </FormGroup>
                          </Col>
                        </Row>
                      </Form>

                      <Row className="justify-content-center">
                      <Table className="align-items-center" responsive>
                        <thead className="thead-light">
                          <tr>
                            <th scope="col">ردیف</th>
                            <th scope="col">کالا</th>
                            <th scope="col">توضیحات</th>
                          </tr>
                        </thead>
                        <tbody>
                          <BuyListTableRow />
                        </tbody>
                      </Table>
                      </Row>
                      </Accordion.Body>
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

export default CreateNewRequestPage;
