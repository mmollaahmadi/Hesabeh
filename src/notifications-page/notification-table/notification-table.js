import React from "react";
import { Row } from "reactstrap";
import NotificationTableRow from "./notification-table-row.js";

class NotificationTable extends React.Component {
  render() {
    const rows = [];
    this.props.data.forEach(row => {
      rows.push(<NotificationTableRow data={row} />);
    });
    return <Row className="notification-table">{rows}</Row>;
  }
}

export default NotificationTable;
