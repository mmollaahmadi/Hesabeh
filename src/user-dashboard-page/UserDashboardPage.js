import React from "react";

import Navbar from "../common/navbar/Navbar";
import Footer from "../common/footer/Footer";

import Profile from "./Profile.js";
import RequestsAndReposts from "./RequestsAndReposts.js";
import Cover from "../common/cover/Cover.js";

class UserDashboardPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar isLogin="true" />
        
        <div className="">
          <main className="profile-page pb-5" ref="main">
            <Cover />

            <Profile />

            <RequestsAndReposts />
          </main>
        </div>

        <Footer />
      </div>
    );
  }
}

export default UserDashboardPage;
