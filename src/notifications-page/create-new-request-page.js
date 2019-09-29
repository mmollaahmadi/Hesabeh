import React from "react";

import Navbar from "../common/navbar/navbar.js";
import Footer from "../common/footer/footer.js";

import {
  Container,
  Form,
  FormGroup,
  InputGroup,
  Input,
  Button,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Table,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";
import BuyListTableRow from "./buy-list-table-row.js";
import classnames from "classnames";
class CreateNewRequestPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Navbar isLogin="true" />

        <main className="profile-page pb-5" ref="main">
          <div className="my-body">
            <Container>
              <div className="landing-position-relative">
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.activeTab === "1"
                      })}
                      onClick={() => {
                        this.toggle("1");
                      }}
                    >
                      ایجاد لیست نیازمندی
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.activeTab === "2"
                      })}
                      onClick={() => {
                        this.toggle("2");
                      }}
                    >
                      دعوت به گروه
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.activeTab === "3"
                      })}
                      onClick={() => {
                        this.toggle("3");
                      }}
                    >
                      پیوستن به گروه
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.activeTab === "4"
                      })}
                      onClick={() => {
                        this.toggle("4");
                      }}
                    >
                      تسویه و خروج از گروه
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <Row className="pt-5 d-flex justify-content-center">
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
                                <p className="m-0">مخاطب</p>
                              </DropdownToggle>
                              <DropdownMenu
                                className="dropdown-menu-arrow"
                                right
                              >
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
                    </Row>
                  </TabPane>

                  <TabPane tabId="2">

                      <Form role="form" className="pt-5 pb-4 w-100">
                        <Row className="justify-content-center mb-3 mr-0 ml-0">
                          <Col lg="5">
                            <FormGroup className="m-0">
                              <InputGroup className="input-group-alternative">
                                <Input
                                  className="signup-input"
                                  placeholder="ایمیل / نام کاربری / شماره همراه"
                                />
                              </InputGroup>
                            </FormGroup>
                          </Col>
                          <Col lg="2">
                            <FormGroup className="m-0">
                              <Button color="primary" type="button">
                                ارسال دعوت نامه
                              </Button>
                            </FormGroup>
                          </Col>
                        </Row>
                      </Form>



                  </TabPane>

                  <TabPane tabId="3">
                      <Form role="form" className="w-100 pt-5 pb-4">
                        <Row className="justify-content-center mb-3 ml-0 mr-0">
                          <Col lg="5">
                            <FormGroup className="m-0">
                              <InputGroup className="input-group-alternative">
                                <Input
                                  className="signup-input"
                                  placeholder="نام گروه"
                                />
                              </InputGroup>
                            </FormGroup>
                          </Col>
                          <Col lg="2" className="">
                            <FormGroup className="m-0">
                              <Button color="primary" type="button">
                                ارسال درخواست
                              </Button>
                            </FormGroup>
                          </Col>
                        </Row>
                      </Form>

                  </TabPane>

                  <TabPane tabId="4">
                    <Form role="form" className="pb-4 pt-5 w-100">
                      <Row className="justify-content-center mb-3 ml-0 mr-0">
                        <Col lg="5">
                          <FormGroup className="m-0">
                            <InputGroup className="input-group-alternative">
                              <Input
                                className="signup-input"
                                placeholder="نام گروه"
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                        <Col lg="2" className="">
                          <FormGroup className="m-0">
                            <Button color="primary" type="button">
                              ارسال درخواست
                            </Button>
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  </TabPane>

                </TabContent>

              </div>
            </Container>
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

export default CreateNewRequestPage;
