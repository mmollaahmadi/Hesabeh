import React from "react";
import NotificationsTable from "./notification-table/notifications-table.js";

const DATA = [
  {
    id: "1",
    dateRequest: "شنبه 98/05/02",
    sender: "mollaahmadi",
    type: "buy-list",
    targetGroup: "mollaahmadi-family",
    buyList: [
      {
        id: "1",
        name: "شامپو تخم مرغی صحت",
        description: "نداشت نگیر"
      },
      {
        id: "2",
        name: "سس گوجه فرنگی",
        description: "فقط دلپذیر باشه ها"
      }
    ]
  },
  {
    id: "2",
    dateRequest: "شنبه 98/05/02",
    sender: "mahlagha",
    type: "join-to-my-group",
    targetGroup: "hamsayeha",
    buyList: []
  },
  {
    id: "3",
    dateRequest: "شنبه 98/05/02",
    sender: "ali",
    type: "join-me-to-other-group",
    targetGroup: "itc",
    buyList: []
  },
  {
    id: "4",
    dateRequest: "شنبه 98/05/02",
    sender: "sepanta",
    type: "disjoin-from-my-group",
    targetGroup: "khabgah",
    buyList: []
  },
  {
    id: "5",
    dateRequest: "شنبه 98/05/02",
    sender: "mahlagha",
    type: "disjoin-me-from-other-group",
    targetGroup: "غضنفر و دوستان",
    buyList: []
  }
];

class NotificationsPage extends React.Component {
  render() {
    return (
      <div className="my-body">
        <NotificationsTable notifications={DATA}/>
      </div>
    );
  }
}

export default NotificationsPage;
