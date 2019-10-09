import React from "react";

import Navbar from "../common/navbar/navbar";
import Footer from "../common/footer/footer";
import GroupProfile from "./group-profile.js";

import {
  Container
} from "reactstrap";

class GroupDashboardPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar isLogin="true" />

        <div className="">
          <main className="profile-page pb-5" ref="main">

            <GroupProfile />
            <Container>
              <div className="landing-position-relative">
                <section className="section pt-0 pb-200">

                </section>
              </div>
            </Container>
          </main>
        </div>

        <Footer />
      </div>
    );
  }
}

export default GroupDashboardPage;
