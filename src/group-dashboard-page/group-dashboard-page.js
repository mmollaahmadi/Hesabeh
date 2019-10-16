import React from "react";

import Navbar from "../common/navbar/navbar";
import Footer from "../common/footer/footer";
import GroupProfile from "./group-profile.js";
import GroupUser from './group-users'
import {
  Card,
  CardBody,
  CardHeader,
  Container, Row
} from "reactstrap";

class GroupDashboardPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar isLogin="true" />

        <main className="profile-page pb-5" ref="main">
        <div className="my-body">
          <Container>
            <GroupProfile />

            <Card className=' shadow mt-0'>
              <CardHeader>
                کاربران
              </CardHeader>
              <CardBody>
                <Row className='m-0'>
                  <GroupUser/>
                  <GroupUser/>
                  <GroupUser/>
                  <GroupUser/>
                </Row>
              </CardBody>
            </Card>

              <div className="landing-position-relative">
                <section className="section pt-0 pb-200">

                </section>
              </div>
          </Container>

        </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default GroupDashboardPage;
