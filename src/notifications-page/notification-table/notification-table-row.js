import React from "react";
import { Row, Col } from "reactstrap";

class NotificationTableRow extends React.Component {
  render() {

    let requestCol = null;
    let actionCol = null;
    const rowData = this.props.data;

    if(rowData.type === "buy-list"){
      requestCol = (
        <Col sm="auto">
        <p>{rowData.sender}
        یک لیست نیازمندی در گروه
        {rowData.targetGroup}
        ایجاد کرده است.
        </p></Col>
      );
      actionCol = <Col></Col>;
    }else if (rowData.type === "join-to-my-group") {

    }else if (rowData.type === "join-me-to-other-group") {

    }else if (rowData.type === "disjoin-from-my-group") {

    }else if (rowData.type === "disjoin-me-from-other-group") {

    }else{
      requestCol = <Col></Col>;
      actionCol = <Col></Col>;
    }

    return (
      <Row className="notification-table">
        {requestCol}
        {actionCol}
      </Row>
    );
  }
}

export default NotificationTableRow;
