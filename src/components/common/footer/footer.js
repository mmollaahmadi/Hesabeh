import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";
import ContactUs from "../contact-us/contact-us.js";
import { goToAnchor } from 'react-scrollable-anchor'
import "./footer.css";

class Footer extends React.Component {
  constructor(){
    super();
    this.onChangePage = this.onChangePage.bind(this);
    // this.goto = this.goto.bind(this);
  }
  onChangePage(page){
    this.props.onChangePage(page);
  }

  render() {
    return (
      <div>
        <div>
          <Row className="footer-logo-row">
            <container>
              <img
                alt="..."
                className="rounded-circle  footer-logo-1"
                src={require("../../../assets/img/theme/logo01.png")}
              />
            </container>
          </Row>
        </div>
        <footer className="footer">
          <Container className="pt-6 pt-lg-4">
            <Row className=" row-grid align-items-center mb-1 mt-1 mt-lg-4 mx-0">
              {/* CONTACT US */}
              <Col
                className="justify-content-right btn-wrapper mt-2 px-3 order-5 order-lg-1"
                lg="6"
              >
                <ContactUs />
              </Col>



              {/* LINKS */}
              <Col className="px-3 text-center mt-2 order-3" lg="4">
                <Row className="">
                  <Col className="lg-auto">
                    <NavLink
                      onClick={() => this.onChangePage("support")}
                      to="/support"
                      tag={Link}
                      className="footer-links">
                      پشتیبانی
                    </NavLink>
                    <NavLink to="/help" tag={Link}
                    className="footer-links"
                    onClick={() => this.onChangePage("help")}>
                      راهنما
                    </NavLink>
                  </Col>
                  <Col className="lg-auto">
                    <NavLink to="/register" tag={Link} className="footer-links">
                      ثبت نام
                    </NavLink>
                    <NavLink to="/signin" tag={Link} className="footer-links">
                      ورود
                    </NavLink>
                  </Col>
                  <Col className="lg-auto">
                    <NavLink
                      // to="/#features"
                      // tag={Link}
                      className="footer-links"
                      onClick={() => this.props.goto('/','features')}
                      >
                      امکانات
                    </NavLink>
                    <NavLink
                    // to="/#about-us"
                    // tag={Link}
                    className="footer-links"
                    onClick={() => this.props.goto('/','about-us')}
                    >
                      درباره ما
                    </NavLink>
                  </Col>
                </Row>
              </Col>
              <Col xs='12' className='d-lg-none footer-divider order-4 '/>

              {/* LOGO */}
              <Col className=" footer-company  order-1 order-lg-3" lg="2">
                <p className="footer-hesabeh">حسابِه</p>
                <p className="footer-heabeh-latin">HesabeH</p>
                <div>
                  <Button
                    className=" ml-1 p-0 mr-0 social-network-link"
                    color="link"
                    href="https://twitter.com/creativetim"
                    id="tooltip126536702"
                    size="sm"
                    target="_blank"
                  >
                    <i className=" fa fa-twitter social-network-icon" />
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
                    <i className=" fa fa-facebook-square social-network-icon" />
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
                    <i className=" fa fa-dribbble social-network-icon" />
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
                    <i className=" fa fa-github social-network-icon" />
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
                    <i className=" fa fa-instagram social-network-icon" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip13">
                    Follow Us
                  </UncontrolledTooltip>
                </div>
              </Col>
              <Col xs='12' className='d-lg-none footer-divider order-2 '/>

            </Row>

            <Row className='mt-3'>
              <Col className=" text-center btn-wrapper mt-2">
                <Button
                  className=" ml-1 p-0 social-network-link"
                  color="link"
                  href="https://twitter.com/creativetim"
                  id="tooltip126536702"
                  size="lg"
                  target="_blank"
                >
                  <i className=" fa fa-twitter social-network-icon" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip126536702">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className=" ml-1 p-0 social-network-link"
                  color="link"
                  href="https://www.facebook.com/creativetim"
                  id="tooltip383967593"
                  size="lg"
                  target="_blank"
                >
                  <i className=" fa fa-facebook-square social-network-icon" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip383967593">
                  Like us
                </UncontrolledTooltip>
                <Button
                  className=" ml-1 p-0 social-network-link"
                  color="link"
                  href="https://dribbble.com/creativetim"
                  id="tooltip568564532"
                  size="lg"
                  target="_blank"
                >
                  <i className=" fa fa-dribbble social-network-icon" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip568564532">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className=" ml-1 mr-2 p-0 social-network-link"
                  color="link"
                  href="https://github.com/creativetimofficial"
                  id="tooltip626177562"
                  size="lg"
                  target="_blank"
                >
                  <i className=" fa fa-github social-network-icon" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip626177562">
                  Star on Github
                </UncontrolledTooltip>
                <Button
                  className=" ml-1 mr-2 p-0 social-network-link"
                  color="link"
                  href="https://instagram.com/creativetimofficial"
                  id="tooltip13"
                  size="lg"
                  target="_blank"
                >
                  <i className=" fa fa-instagram social-network-icon" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip13">
                  Follow Us
                </UncontrolledTooltip>
                <div className=" copyright">
                  <small>
                    .Design & Developed by
                    <a
                      href="https://www.m-mollaahmadi.ir"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-1"
                      style={{ fontWeight: "Bold", color: "#141312" }}
                    >
                      M-Mollaahmadi
                    </a>
                  </small>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    );
  }
}

export default Footer;
