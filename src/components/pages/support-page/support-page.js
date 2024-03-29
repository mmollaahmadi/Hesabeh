import React from "react";
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
  UncontrolledTooltip,
  InputGroup,
} from "reactstrap";

import "../../../assets/css/custom.css";

import AuditColumnHeader from "../audit-pages/audit-column-header.js";
import AuditColumnFooter from "../audit-pages/audit-column-footer";

import AOS from 'aos'
import ScrollableAnchor from 'react-scrollable-anchor'


class SupportPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
    AOS.init();
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  componentDidMount() {
    if(this.props.currentUser){
      this.setState({
        email: this.props.currentUser.email,
      });
    }
  }

  handleChangeInput(event) {
    this.setState({
      email: event.target.value,
    });
  }

  render() {
    return (
      <ScrollableAnchor id={'support'}>
        <div className="my-section">
          <Container className="pt-10 pb-30  h-100">
            <Row className="text-center justify-content-center">
              <Col lg="5"
                   data-aos="fade-up"
                   data-aos-duration="1000"
                   data-aos-delay="50"
              >
                <AuditColumnHeader
                  needBrand={false}
                  title="مشکلات، نظرات و پیشنهادات خود را با ما در میان بگذارید"
                />
                <Form role="form" className="audit-form">
                  <FormGroup className="mb-3">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-envelope"/>
                        </InputGroupText>
                      </InputGroupAddon>

                      <Input
                        id={'support-email'}
                        className="audit-input email"
                        placeholder="رایانامه"
                        type="email"
                        onChange={this.handleChangeInput}
                        value={this.state.email}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup className="mb-3 p-0">
                    <Input
                      className="form-control-alternative cuntactus-input"
                      cols="80"
                      name="name"
                      placeholder="متن پیام"
                      rows="2"
                      size="md"
                      type="textarea"
                    />
                  </FormGroup>


                  <FormGroup>
                    <Row className="justify-item-center d-flex">
                      <Col className="lg-9 m-0 text-center">
                        <Button
                          className="audit-button"
                          color="primary"
                        >
                          ارسال پیام
                        </Button>
                      </Col>
                    </Row>
                  </FormGroup>
                </Form>

                <Row className="justify-content-center mt-5">
                  <p>021-66843101</p>
                  <i className=" fa fa-phone support-social-network-icon mr-1"/>
                </Row>

                <div className="mt-1">
                  <Button
                    className=" ml-1 p-0 mr-0 social-network-link"
                    color="link"
                    href="https://twitter.com/creativetim"
                    id="tooltip126536702"
                    size="sm"
                    target="_blank"
                  >
                    <i className=" fa fa-twitter social-network-icon"/>
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip126536702">
                    Follow us
                  </UncontrolledTooltip>
                  <Button
                    className=" ml-1 p-0 mr-0 social-network-link"
                    color="link"
                    href="https://www.facebook.com/creativetim"
                    id="tooltip383967593"
                    size="lg"
                    target="_blank"
                  >
                    <i className=" fa fa-facebook-square social-network-icon"/>
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip383967593">
                    Like us
                  </UncontrolledTooltip>
                  <Button
                    className=" ml-1 p-0 mr-0 social-network-link"
                    color="link"
                    href="https://dribbble.com/creativetim"
                    id="tooltip568564532"
                    size="lg"
                    target="_blank"
                  >
                    <i className=" fa fa-dribbble social-network-icon"/>
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip568564532">
                    Follow us
                  </UncontrolledTooltip>
                  <Button
                    className=" ml-1  p-0 mr-0 social-network-link"
                    color="link"
                    href="https://github.com/creativetimofficial"
                    id="tooltip626177562"
                    size="lg"
                    target="_blank"
                  >
                    <i className=" fa fa-github social-network-icon"/>
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip626177562">
                    Star on Github
                  </UncontrolledTooltip>
                  <Button
                    className=" ml-1 mr-0 p-0 social-network-link"
                    color="link"
                    href="https://instagram.com/creativetimofficial"
                    id="tooltip13"
                    size="lg"
                    target="_blank"
                  >
                    <i className=" fa fa-instagram social-network-icon"/>
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip13">
                    Follow Us
                  </UncontrolledTooltip>
                </div>
                <AuditColumnFooter
                  isSupportPage={true}
                  isLogin={this.props.isLogin}
                  handleChangePage={this.props.onChangePage}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default SupportPage;
