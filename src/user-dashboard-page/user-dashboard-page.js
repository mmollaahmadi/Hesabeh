import React from "react";

import Navbar from "../common/navbar/navbar";
import Footer from "../common/footer/footer";
import Profile from "./profile.js";

import "./user-dashboard.css";

import {
  Row,
  Col
} from "reactstrap";
import DefaultOrderValue from './default-order-value.js';
import LabelManagement from './label-management.js';
import ShargeHistory from './sharge-history.js';

class UserDashboardPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar isLogin="true" />


          <main className="profile-page pb-5" ref="main">
            <div className="my-body">

            <Profile />

            <Row>
              <Col lg="6">
                <DefaultOrderValue />
              </Col>
              <Col lg="6">
                <LabelManagement />
              </Col>
              <Col lg="12">
                <ShargeHistory />
              </Col>
            </Row>
</div>
          </main>


        <Footer />
      </div>
    );
  }
}

export default UserDashboardPage;
