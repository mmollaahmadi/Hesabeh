import React from "react";
import Account from "./account/account.js";
import PaymentsTable from "./payments-table/payments-table.js";

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
      },
      {
        username: "saadat",
        sahm: "1",
        value: "2700 تومان"
      },
      {
        username: "saadat",
        sahm: "1",
        value: "2700 تومان"
      },
      {
        username: "saadat",
        sahm: "1",
        value: "2700 تومان"
      },
      {
        username: "saadat",
        sahm: "1",
        value: "2700 تومان"
      },
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
  constructor(props){
    super(props);
  }
  render() {
    let labels=[];
    this.props.currentUser.labels.forEach(label => {
      labels.push(label);
    });
    return (
      <div className="my-body">
        <Account/>
        <PaymentsTable
          payments={PAYMENTS}
          labels={labels}
        />
      </div>
    );
  }
}

export default PaymentsPage;
