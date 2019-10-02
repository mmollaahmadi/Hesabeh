import React from "react";
import { Row, Col, Button } from "reactstrap";
import Chip from "../common/chip/chip.js";

class NotificationsTableRow extends React.Component {
  render() {
    let dateCol = null;
    let requestCol = null;
    let actionCol = null;
    const rowData = this.props.rowData;

    if (rowData.type === "buy-list") {
      dateCol = <span>{rowData.dateRequest}</span>;
      requestCol = (
        <>
          <span className="user-sender">
            <Chip
              haveCloseButton="false"
              avatarSrc={require("../assets/img/users/user01.jpg")}
              label={rowData.sender}
              // onDelete={() => this.deleteUser()}
            />
          </span>
          یک لیست نیازمندی در گروه
          <span className="target-group">
            <Chip
              haveCloseButton="false"
              avatarSrc={require("../assets/img/users/user01.jpg")}
              label={rowData.targetGroup}
              // onDelete={() => this.deleteUser()}
            />
          </span>
          ایجاد کرده است.
        </>
      );
      actionCol = (
        <Button className="notification-table-row-btn" color="primary">
          مشاهده لیست
        </Button>
      );
    } else if (rowData.type === "join-to-my-group") {
      dateCol = <span>{rowData.dateRequest}</span>;
      requestCol = (
        <>
          <span className="user-sender">
            <Chip
              haveCloseButton="false"
              avatarSrc={require("../assets/img/users/user01.jpg")}
              label={rowData.sender}
              // onDelete={() => this.deleteUser()}
            />
          </span>
          درخواست پیوستن به گروه
          <span className="target-group">
            <Chip
              haveCloseButton="false"
              avatarSrc={require("../assets/img/users/user01.jpg")}
              label={rowData.targetGroup}
              // onDelete={() => this.deleteUser()}
            />
          </span>
          را دارد.
        </>
      );
      actionCol = (
        <>
          <Button className="notification-table-row-btn" color="primary">
            قبول
          </Button>
          <Button className="notification-table-row-btn" color="default">
            رد
          </Button>
        </>
      );
    } else if (rowData.type === "join-me-to-other-group") {
      dateCol = <span>{rowData.dateRequest}</span>;
      requestCol = (
        <>
          شما درخواست پیوستن به گروه
          <span className="target-group">
            <Chip
              haveCloseButton="false"
              avatarSrc={require("../assets/img/users/user01.jpg")}
              label={rowData.targetGroup}
              // onDelete={() => this.deleteUser()}
            />
          </span>
          را از
          <span className="user-sender">
            <Chip
              haveCloseButton="false"
              avatarSrc={require("../assets/img/users/user01.jpg")}
              label={rowData.sender}
              // onDelete={() => this.deleteUser()}
            />
          </span>
          دارید.
        </>
      );
      actionCol = (
        <Button className="notification-table-row-btn" color="default">
          لغو درخواست
        </Button>
      );
    } else if (rowData.type === "disjoin-from-my-group") {
      dateCol = <span className="date-request">{rowData.dateRequest}</span>;
      requestCol = (
        <>
          <span className="user-sender">
            <Chip
              haveCloseButton="false"
              avatarSrc={require("../assets/img/users/user01.jpg")}
              label={rowData.sender}
              // onDelete={() => this.deleteUser()}
            />
          </span>
          درخواست تسویه حساب و خروج از گروه
          <span className="target-group">
            <Chip
              haveCloseButton="false"
              avatarSrc={require("../assets/img/users/user01.jpg")}
              label={rowData.targetGroup}
              // onDelete={() => this.deleteUser()}
            />
          </span>
          را دارد.
        </>
      );
      actionCol = (
        <>
          <Button className="notification-table-row-btn" color="primary">
            قبول
          </Button>
          <Button className="notification-table-row-btn" color="default">
            رد
          </Button>
        </>
      );
    } else if (rowData.type === "disjoin-me-from-other-group") {
      dateCol = <span className="date-request">{rowData.dateRequest}</span>;
      requestCol = (
        <>
          شما درخواست تسویه حساب و خروج از گروه
          <span className="target-group">
            <Chip
              haveCloseButton="false"
              avatarSrc={require("../assets/img/users/user01.jpg")}
              label={rowData.targetGroup}
              // onDelete={() => this.deleteUser()}
            />
          </span>
          را از
          <span className="user-sender">
            <Chip
              haveCloseButton="false"
              avatarSrc={require("../assets/img/users/user01.jpg")}
              label={rowData.sender}
              // onDelete={() => this.deleteUser()}
            />
          </span>
          دارید.
        </>
      );
      actionCol = (
        <Button className="notification-table-row-btn" color="default">
          لغو درخواست
        </Button>
      );
    } else {
      requestCol = <Col lg="8"></Col>;
      actionCol = <Col lg="4"></Col>;
    }

    return (
      <Row className="notifications-table-row">
        <Col lg="1" className="date-request">
          {dateCol}
        </Col>
        <Col lg="9" className="">
          {requestCol}
        </Col>
        <Col lg="2" className="justify-content-center d-flex my-auto">
          {actionCol}
        </Col>
        <Col sm="11" className="ntr-hr"></Col>
      </Row>
    );
  }
}

export default NotificationsTableRow;
