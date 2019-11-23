import React from "react";
import Profile from "./profile.js";

import "./user-dashboard.css";

import {Row, Col, Container} from "reactstrap";
import DefaultOrderValue from "./default-order-value.js";
import LabelManagement from "./label-management.js";
import ShargeHistory from "./sharge-history.js";
import NavBar from "../common/nav-bar/nav-bar";

class UserDashboardPage extends React.Component {
  render() {
    return (
      <div>
        <div className="my-body profile-page">
          <Container>
            <Profile
              currentUser={this.props.currentUser}
              onLogout={this.props.onLogout}
              onChangePage={this.props.onChangePage}
            />
            <Row>
              <DefaultOrderValue currentUser={this.props.currentUser}/>
              <LabelManagement currentUser={this.props.currentUser}/>
              <Col lg="12">
                <ShargeHistory/>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default UserDashboardPage;
