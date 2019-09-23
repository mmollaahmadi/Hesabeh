import React from "react";

import Navbar from "../common/navbar/navbar";
import Footer from "../common/footer/footer";
import Cover from "../common/cover/cover.js";
import NotificationsTable from './notifications-table.js';

class NotificationsPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar isLogin="true" />

        <div className="">
          <main className="profile-page pb-5" ref="main">
            <Cover />
            <NotificationsTable />
          </main>
        </div>

        <Footer />
      </div>
    );
  }
}

export default NotificationsPage;
