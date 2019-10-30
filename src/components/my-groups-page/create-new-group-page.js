import React from "react";

import "./my-groups.css";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  InputGroupAddon,
  InputGroupText,
  Button,
  FormGroup,
  Form,
  Input,
  InputGroup
} from "reactstrap";
import "../../assets/css/custom.css";
import Chip from '../common/chip/chip.js';
import AOS from 'aos'
class CreateNewGroupPage extends React.Component {
  constructor(){
    super();
    AOS.init();
  }
  render() {
    return (

        <div className="my-section">
          <Container className="pt-10 pb-30  h-100">
            <Row className="text-center justify-content-center">
              <Col lg="5"
                   data-aos="fade-up"
                   data-aos-duration="1000"
                   data-aos-delay="50"
              >

                <img
                  alt="..."
                  className="rounded-circle empty-group"
                  src={require("../../assets/img/users/empty-group.png")}
                />
                <Form role="form" className="audit-form">
                  <FormGroup className="mb-3">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-users" />
                        </InputGroupText>
                      </InputGroupAddon>

                      <Input className="audit-input" placeholder="نام گروه" />
                    </InputGroup>
                  </FormGroup>

                  <FormGroup className="mb-3">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-user-plus" />
                        </InputGroupText>
                      </InputGroupAddon>

                      <Input
                        className="audit-input"
                        placeholder="ایمیل/ نام کاربری / شماره همراه اعضا"
                        type="email"
                      />
                    </InputGroup>
                  </FormGroup>
                  <Row className="m-0 d-flex justify-content-center">
                    <Chip
                    class="mb-2 ml-2"
                    haveCloseButton="true"
                      avatarSrc={require("../../assets/img/users/user01.jpg")}
                      label="محمد ملااحمدی"
                      // onDelete={() => this.deleteUser()}
                    />
                    <Chip
                    class="mb-2 ml-2"
                    haveCloseButton="true"
                      avatarSrc={require("../../assets/img/users/user01.jpg")}
                      label="محمد ملااحمدی"
                      // onDelete={() => this.deleteUser()}
                    />
                    <Chip
                    class="mb-2 ml-2"
                    haveCloseButton="true"
                      avatarSrc={require("../../assets/img/users/user01.jpg")}
                      label="محمد ملااحمدی"
                      // onDelete={() => this.deleteUser()}
                    />
                  </Row>

                  <FormGroup>
                    <Row className="justify-item-center d-flex">
                      <Col className="lg-9 m-0 text-center">
                        <Button
                          className="audit-button"
                          color="primary"
                          to="/payments"
                          tag={Link}
                        >
                          ایجاد گروه
                        </Button>
                      </Col>
                    </Row>
                  </FormGroup>

                  <Button
                    className="audit-button"
                    color="default"
                    href="#pablo"
                    onClick={() => this.toggle("password")}
                    name="email"
                  >
                    بازگشت
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
        
    );
  }
}

export default CreateNewGroupPage;
