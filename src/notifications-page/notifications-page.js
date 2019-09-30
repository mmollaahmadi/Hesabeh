import React from "react";

import Navbar from "../common/navbar/navbar";
import Footer from "../common/footer/footer";
import NotificationsTable from './notifications-table.js';

class NotificationsPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar isLogin="true" />

          <main className="profile-page pb-5" ref="main">
      <div className="my-body">
            <NotificationsTable />
            </div>
          </main>


        <Footer />
      </div>
    );
  }
}

export default NotificationsPage;
