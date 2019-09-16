import React from "react";
import {Row, Col,
Alert,
Button,
Container} from 'reactstrap';
import { Link } from 'react-router-dom';

import Navbar from "../common/navbar/Navbar.js";
import ContactUs from '../common/footer/ContactUs.js';

class SupportPage extends React.Component {
  render() {
    return (
      <div className="new-password-request-section">
        <Container className="pt-30 pb-30  h-100">

          <Row className="text-center justify-content-center">
            <Col lg="5">
              <img
                alt="..."
                className="rounded-circle logo"
                src={require("../assets/img/users/user01.jpg")}
              />
              <h1 className="brand-title">حسابه</h1>
            </Col>
          </Row>

          <Row className="text-center justify-content-center mt-4">
          <Col
            className="justify-content-right btn-wrapper mt-2 pr-0"
            lg="6"
          >
            <ContactUs />
          </Col>
            <Col lg="6">
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SupportPage;
