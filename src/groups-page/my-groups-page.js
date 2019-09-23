import React from "react";

import Navbar from "../common/navbar/navbar";
import Footer from "../common/footer/footer";
import Cover from "../common/cover/cover.js";
import GroupsTable from './groups-table.js';

class MyGroupsPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar isLogin="true" />

        <div className="">
          <main className="profile-page pb-5" ref="main">
            <Cover />
            <GroupsTable />
          </main>
        </div>

        <Footer />
      </div>
    );
  }
}

export default MyGroupsPage;
