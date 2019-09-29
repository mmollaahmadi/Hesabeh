import React from "react";

import Navbar from "../common/navbar/navbar";
import Footer from "../common/footer/footer";
import Account from "./account.js";
import PaimentsTable from "./payments-table.js";

class PaymentsPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar isLogin="true" />

        <main className="profile-page pb-5" ref="main">
          <div className="my-body">
            <Account />
            <PaimentsTable />
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

export default PaymentsPage;
