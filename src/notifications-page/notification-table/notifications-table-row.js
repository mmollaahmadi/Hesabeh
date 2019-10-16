import React from "react";
import {Row, Col, Button} from "reactstrap";
import Chip from "../../common/chip/chip.js";

class NotificationsTableRow extends React.Component {
  render() {

    let requestCol = null;
    let actionCol = null;
    const rowData = this.props.rowData;

    let dateCol = <span>{rowData.dateRequest}</span>;

    if (rowData.type === "buy-list") {
      requestCol = (
        <>
          <span className="user-sender">
            <Chip
              link="/mollaahmadi.ir"
              haveCloseButton="false"
              avatarSrc={require("../../assets/img/users/user01.jpg")}
              label={rowData.sender}
              // onDelete={() => this.deleteUser()}
            />
          </span>
          یک لیست نیازمندی در گروه
          <span className="target-group">
            <Chip
              haveCloseButton="false"
              avatarSrc={require("../../assets/img/users/user01.jpg")}
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
      requestCol = (
        <>
          <span className="user-sender">
            <Chip
              haveCloseButton="false"
              avatarSrc={require("../../assets/img/users/user01.jpg")}
              label={rowData.sender}
              // onDelete={() => this.deleteUser()}
            />
          </span>
          درخواست پیوستن به گروه
          <span className="target-group">
            <Chip
              haveCloseButton="false"
              avatarSrc={require("../../assets/img/users/user01.jpg")}
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
      requestCol = (
        <>
          شما درخواست پیوستن به گروه
          <span className="target-group">
            <Chip
              haveCloseButton="false"
              avatarSrc={require("../../assets/img/users/user01.jpg")}
              label={rowData.targetGroup}
              // onDelete={() => this.deleteUser()}
            />
          </span>
          را از
          <span className="user-sender">
            <Chip
              haveCloseButton="false"
              avatarSrc={require("../../assets/img/users/user01.jpg")}
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

      requestCol = (
        <>
          <span className="user-sender">
            <Chip
              haveCloseButton="false"
              avatarSrc={require("../../assets/img/users/user01.jpg")}
              label={rowData.sender}
              // onDelete={() => this.deleteUser()}
            />
          </span>
          درخواست تسویه حساب و خروج از گروه
          <span className="target-group">
            <Chip
              haveCloseButton="false"
              avatarSrc={require("../../assets/img/users/user01.jpg")}
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

      requestCol = (
        <>
          شما درخواست تسویه حساب و خروج از گروه
          <span className="target-group">
            <Chip
              haveCloseButton="false"
              avatarSrc={require("../../assets/img/users/user01.jpg")}
              label={rowData.targetGroup}
              // onDelete={() => this.deleteUser()}
            />
          </span>
          را از
          <span className="user-sender">
            <Chip
              haveCloseButton="false"
              avatarSrc={require("../../assets/img/users/user01.jpg")}
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
      requestCol = <Col lg="8"/>;
      actionCol = <Col lg="4"/>;
    }

    return (
      <Col xs='12' className='px-2 p-lg-0 m-1 m-lg-0'>
        <Row className="m-0">
          <Col xs='12' lg='auto'
               className="table-row-col justify-content-lg-center check-width px-lg-0">
            <span className='d-lg-none ml-auto'>{dateCol}</span>
            <div
              className="p-0 px-1 custom-control custom-control-alternative custom-checkbox">
              <input
                className="custom-control-input"
                id={rowData.id}
                type="checkbox"
              />
              <label
                className="custom-control-label pr-1"
                htmlFor={rowData.id}
              >
                  <span className="signin-modal-text mr-3">
                  </span>
              </label>
            </div>
          </Col>

          <Col lg="1" className="d-none d-lg-flex table-row-col date-request">
            <span>{dateCol}</span>
          </Col>

          <Col xs='12' lg="8" className="table-row-col my-auto">
            <span className='d-lg-none ml-2'>درخواست: </span>
            <span>
                  {requestCol}
                </span>
          </Col>


          <Col xs="12" lg="2" className="table-row-col justify-content-end justify-content-lg-center my-auto flex-grow-1">
            {actionCol}
          </Col>

          <Col sm="12" className="table-row-line"/>
        </Row>
      </Col>
    );
  }
}

export default NotificationsTableRow;
