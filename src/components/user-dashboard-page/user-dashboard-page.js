import React from "react";
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
        <div className="my-body profile-page">
          <Container>
            <Profile currentUser={this.props.currentUser} />
            <Row>
              <DefaultOrderValue />

              <LabelManagement />

              <Col lg="12">
                <ShargeHistory />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default UserDashboardPage;
