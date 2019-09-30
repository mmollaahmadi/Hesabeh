import React from "react";

import Navbar from "../common/navbar/navbar";
import Footer from "../common/footer/footer";
import Account from "./account.js";
import PaimentsTable from "./payments-table.js";
import Title from "../common/title/title.js";

class PaymentsPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar isLogin="true" />

        <div className="my-body">
          <Title text="حساب من" />
          <Account />
          <PaimentsTable />
        </div>

        <Footer />
      </div>
    );
  }
}

export default PaymentsPage;
