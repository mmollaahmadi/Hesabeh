import React from "react";

import Navbar from "../common/navbar/Navbar";
import Footer from "../common/footer/Footer";
import Cover from "../common/cover/Cover.js";
import GroupsTable from './GroupsTable.js';

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
