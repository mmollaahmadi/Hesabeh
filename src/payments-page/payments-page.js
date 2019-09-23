import React from "react";

import Navbar from "../common/navbar/navbar";
import Footer from "../common/footer/footer";
import Account from "./account.js";
import Cover from "../common/cover/cover.js";
import PaimentsTable from "./payments-table.js";

class PaymentsPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar isLogin="true" />

        <div className="">
          <main className="profile-page pb-5" ref="main">
            <Cover />
            <Account />
            <PaimentsTable />
          </main>
        </div>

        <Footer />
      </div>
    );
  }
}

export default PaymentsPage;
