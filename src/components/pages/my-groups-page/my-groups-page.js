import React from "react";
import MyGroupsTable from "./my-groups-table/my-groups-table.js";

const MYGROUPS = [
  {
    id: "1",
    dateCreation: 'دوشنبه 98/07/10',
    username: "khabgah-keshavarz",
    budget: "540000 تومان",
    members: [
      {
        id: "1",
        username: "mollaahmdi"
      },
      {
        id: "2",
        username: "saadat"
      }
    ],
    status: "30000 تومان بدهکار"
  },
  {
    id: "2",
    dateCreation: 'دوشنبه 98/07/10',
    username: "همکاران شرکت",
    budget: "540000 تومان",
    members: [
      {
        id: "1",
        username: "mollaahmdi"
      },
      {
        id: "2",
        username: "saadat"
      },
      {
        id: "3",
        username: "ali"
      }
    ],
    status: "30000 تومان بدهکار"
  }
];

class MyGroupsPage extends React.Component {
  render() {
    return (
      <div className="my-body">
        <MyGroupsTable
          currentUser={this.props.currentUser}
          myGroups={MYGROUPS}
        />
      </div>
    );
  }
}

export default MyGroupsPage;
