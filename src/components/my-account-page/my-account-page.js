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
    labels:[
      {
        id:'1',
        name:'برچسب',
        color: {
          r:'20',
          g:'200',
          b:'20',
          a:'1'
        },
        isTextColorDark:true
      },
    ],
    description:'اگه کسی خواست استفاده کنه',
    consumers: [
      {
        username: "mohammad",
        share: "1",
        value: "2700 تومان"
      },
      {
        username: "saadat",
        share: "1",
        value: "2700 تومان"
      }
    ],
    suppliers:[
      {
        username: "mohammad",
        share: "1",
        value: "2700 تومان"
      },
      {
        username: "saadat",
        share: "1",
        value: "2700 تومان"
      }
    ],
    pictures:[
      {
        url:'../../../assets/img/theme/team-4-800x800.jpg'
      },
      {
        url:'../../../assets/img/theme/team-4-800x800.jpg'
      },
    ],
  },
  {
    id: "2",
    name: "برنج",
    value: "5400 تومان",
    date: "شنبه 98/03/21",
    group: "اتاق 401 کشاورز",
    description:'',
    labels:[],
    consumers: [
      {
        username: "mohammad",
        share: "1",
        value: "2700 تومان"
      },
      {
        username: "saadat",
        share: "1",
        value: "2700 تومان"
      },
      {
        username: "saadat",
        share: "1",
        value: "2700 تومان"
      },
      {
        username: "saadat",
        share: "1",
        value: "2700 تومان"
      },
      {
        username: "saadat",
        share: "1",
        value: "2700 تومان"
      },
      {
        username: "saadat",
        share: "1",
        value: "2700 تومان"
      },
    ],
    suppliers:[
      {
        username: "mohammad",
        share: "1",
        value: "2700 تومان"
      },
      {
        username: "saadat",
        share: "1",
        value: "2700 تومان"
      }
    ],
    pictures:[
      {
        url:'../../../assets/img/theme/team-4-800x800.jpg'
      },
      {
        url:'../../../assets/img/theme/team-4-800x800.jpg'
      },
    ],
  },
  {
    id: "2",
    name: "برنج",
    value: "5400 تومان",
    date: "شنبه 98/03/21",
    group: "اتاق 401 کشاورز",
    description:'',
    labels:[
      {
        id:'1',
        name:'برچسب ۱',
        color: {
          r:'20',
          g:'200',
          b:'20',
          a:'1'
        },
        isTextColorDark:true
      },
      {
        id:'1',
        name:'برچسب ۲',
        color: {
          r:'20',
          g:'200',
          b:'20',
          a:'1'
        },
        isTextColorDark:true
      },
    ],
    consumers: [
      {
        username: "mohammad",
        share: "1",
        value: "2700 تومان"
      }
    ],
    suppliers:[
      {
        username: "mohammad",
        share: "1",
        value: "2700 تومان"
      },
      {
        username: "saadat",
        share: "1",
        value: "2700 تومان"
      }
    ],
    pictures:[

    ],
  },
  {
    id: "2",
    name: "برنج",
    value: "5400 تومان",
    date: "شنبه 98/03/21",
    group: "اتاق 401 کشاورز",
    description:'',
    labels:[],
    consumers: [
      {
        username: "mohammad",
        share: "1",
        value: "2700 تومان"
      }
    ],
    suppliers:[
      {
        username: "mohammad",
        share: "1",
        value: "2700 تومان"
      }
    ],
    pictures:[
    ],
  },
  {
    id: "2",
    name: "برنج",
    value: "5400 تومان",
    date: "شنبه 98/03/21",
    group: "اتاق 401 کشاورز",
    description:'',
    labels:[],
    consumers: [
      {
        username: "mohammad",
        share: "1",
        value: "2700 تومان"
      },
      {
        username: "saadat",
        share: "1",
        value: "2700 تومان"
      }
    ],
    suppliers:[
      {
        username: "mohammad",
        share: "1",
        value: "2700 تومان"
      }
    ],
    pictures:[],
  }
];

class MyAccountPage extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    let labels=[];
    if(this.props.currentUser.labels){
      this.props.currentUser.labels.forEach(label => {
        labels.push(label);
      });
    }

    return (
      <div className="my-body">
        <Account/>
        <PaymentsTable
          payments={PAYMENTS}
          labels={labels}
          currentUser={this.props.currentUser}
        />
      </div>
    );
  }
}

export default MyAccountPage;
