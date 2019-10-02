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
  Card,
  CardHeader,
  CardBody
} from "reactstrap";
import RequirementsListRequest from "./requirements-list-request.js";
const GROUPS = [
  {
    id: "1",
    username: "ahmaghha",
    users: [
      {
        id: "1",
        username: "mollaahmadi"
      },
      {
        id: "2",
        username: "fatemi"
      }
    ]
  },
  {
    id: "2",
    username: "khabgah",
    users: [
      {
        id: "1",
        username: "hossein"
      }
    ]
  }
];
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
              <Row>
                <Col lg="12">
                  <RequirementsListRequest groups={GROUPS}/>
                </Col>
                <Col lg="12">
              <Card className="card-profile shadow mt-5">
                    <CardHeader>دعوت به گروه</CardHeader>
                    <CardBody>
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
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="12">
              <Card className="card-profile shadow mt-5">
                    <CardHeader>پیوستن به گروه</CardHeader>
                    <CardBody>
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
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="12">
              <Card className="card-profile shadow mt-5">
                    <CardHeader>تسویه و خروج از گروه</CardHeader>
                    <CardBody>
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
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

export default CreateNewRequestPage;
