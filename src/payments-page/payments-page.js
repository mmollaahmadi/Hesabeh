import React from "react";

import NavBar from "../common/navbar/navbar";
import Footer from "../common/footer/footer";
import Account from "./account/account.js";
import PaymentsTable from "./payments-table/payments-table.js";
import Title from "../common/title/title.js";

const PAYMENTS = [
  {
    id: "1",
    name: "شامپو تخم مرغی",
    value: "5400 تومان",
    date: "شنبه 98/03/21",
    group: "اتاق 401 کشاورز",
    consumers: [
      {
        username: "mohammad",
        sahm: "1",
        value: "2700 تومان"
      },
      {
        username: "saadat",
        sahm: "1",
        value: "2700 تومان"
      }
    ]
  },
  {
    id: "2",
    name: "برنج",
    value: "5400 تومان",
    date: "شنبه 98/03/21",
    group: "اتاق 401 کشاورز",
    consumers: [
      {
        username: "mohammad",
        sahm: "1",
        value: "2700 تومان"
      },
      {
        username: "saadat",
        sahm: "1",
        value: "2700 تومان"
      }
    ]
  }
];
class PaymentsPage extends React.Component {
  render() {
    return (
      <div>
        <NavBar isLogin="true" />

        <div className="my-body">
          <Title text="حساب من" />
          <Account />
          <PaymentsTable payments={PAYMENTS} />
        </div>

        <Footer />
      </div>
    );
  }
}

export default PaymentsPage;
