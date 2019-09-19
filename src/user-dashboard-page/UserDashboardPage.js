import React from "react";

import Navbar from "../common/navbar/Navbar";
import Footer from "../common/footer/Footer";

import Profile from "./Profile.js";
import RequestsAndReposts from "./RequestsAndReposts.js";
import Cover from "../common/cover/Cover.js";
import Accordion from "../common/accordion/accordion.js";

class UserDashboardPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar isLogin="true" />

        <div className="">
          <main className="profile-page pb-5" ref="main">
            <Cover />

            <Profile />
            
          </main>
        </div>
          <div className="landing-position-relative">

          <section className="section section-lg pb-200">

          <Accordion open={1}>
            <Accordion.Item>
              <Accordion.Header>اطلاعات حساب کاربری</Accordion.Header>
              <Accordion.Body>some body</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item>
              <Accordion.Header>some header</Accordion.Header>
              <Accordion.Body>some body</Accordion.Body>
            </Accordion.Item>

          </Accordion>
          </section>
        </div>

        <Footer />
      </div>
    );
  }
}

export default UserDashboardPage;
