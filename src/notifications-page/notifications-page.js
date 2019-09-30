import React from "react";

import Navbar from "../common/navbar/navbar";
import Footer from "../common/footer/footer";
import NotificationsTable from "./notifications-table.js";
import Title from "../common/title/title.js";

class NotificationsPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar isLogin="true" />

        <div className="my-body">
          <Title text="اعلام ها" />
          <NotificationsTable />
        </div>

        <Footer />
      </div>
    );
  }
}

export default NotificationsPage;
