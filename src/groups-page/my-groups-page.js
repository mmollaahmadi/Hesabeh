import React from "react";

import Navbar from "../common/navbar/navbar";
import Footer from "../common/footer/footer";
import GroupsTable from "./groups-table.js";
import Title from '../common/title/title.js';

class MyGroupsPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar isLogin="true" />

        <div className="my-body">
          <Title text="گروه ها" />
          <GroupsTable />
        </div>

        <Footer />
      </div>
    );
  }
}

export default MyGroupsPage;
