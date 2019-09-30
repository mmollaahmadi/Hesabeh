import React from "react";

import Navbar from "../common/navbar/navbar";
import Footer from "../common/footer/footer";
import GroupsTable from './groups-table.js';

class MyGroupsPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar isLogin="true" />


          <main className="profile-page pb-5" ref="main">
        <div className="my-body">
            <GroupsTable />
            </div>
          </main>


        <Footer />
      </div>
    );
  }
}

export default MyGroupsPage;
