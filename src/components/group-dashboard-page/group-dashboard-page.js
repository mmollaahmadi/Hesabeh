import React from "react";
import GroupProfile from "./group-profile.js";
import GroupUser from './group-users'
import {
  Card,
  CardBody,
  CardHeader,
  Container, Row
} from "reactstrap";
import GroupUsers from './group-users'

class GroupDashboardPage extends React.Component {
  render() {
    return (

        <div className="my-body profile-page">
          <Container>
            <GroupProfile/>
            <GroupUsers />
            <div className="landing-position-relative">
              <section className="section pt-0 pb-200">

              </section>
            </div>
          </Container>
        </div>
    );
  }
}

export default GroupDashboardPage;
