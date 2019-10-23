import React from "react";

import Navbar from "../common/navbar/navbar";
import Footer from "../common/footer/footer";
import Profile from "./profile.js";

import "./user-dashboard.css";

import { Row, Col, Container } from "reactstrap";
import DefaultOrderValue from "./default-order-value.js";
import LabelManagement from "./label-management.js";
import ShargeHistory from "./sharge-history.js";

class UserDashboardPage extends React.Component {
  render() {
    return (
      <div>
        <main className="profile-page pb-5" ref="main">
          <div className="my-body">
            <Profile />
            <Container>
              <Row>
                <DefaultOrderValue />

                <LabelManagement />

                <Col lg="12">
                  <ShargeHistory />
                </Col>
              </Row>
            </Container>
          </div>
        </main>
      </div>
    );
  }
}

export default UserDashboardPage;
