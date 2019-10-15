import React from "react";
import { Row, Col, Button } from "reactstrap";
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
      <>
        <Col lg='12' className='d-lg-block d-none p-0'>
          <Row className="notification-table-row m-0">
            <Col className="payments-table-row-col px-0 check-width">
              <div
                className="p-0 px-1 custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin1"
                  type="checkbox"
                />
                <label
                  className="custom-control-label pr-1"
                  htmlFor=" customCheckLogin11"
                >
                  <span className="signin-modal-text mr-3">
                  </span>
                </label>
              </div>
            </Col>

            <Col lg="1" className="payments-table-row-col date-request">
              <span>{dateCol}</span>
            </Col>
            <Col lg="8" className="">
              {requestCol}
            </Col>
            <Col lg="2" className="payments-table-header-col my-auto flex-grow-1">
              {actionCol}
            </Col>

            <Col sm="12" className="payments-table-row-line"/>
          </Row>
        </Col>





        <Col sm='6' xs='12' className='d-lg-none m-3'>
          <Row className="notification-table-row m-0">
            <Col xs='12' className="payments-table-row-col-xs check-width">
              <span className='ml-auto'>{dateCol}</span>
              <div
                className="p-0 px-1 custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin11"
                  type="checkbox"
                />
                <label
                  className="custom-control-label pr-1"
                  htmlFor=" customCheckLogin11"
                >
                  <span className="signin-modal-text mr-3">
                  </span>
                </label>
              </div>
            </Col>

            <Col xs='12' className=" payments-table-row-col-xs my-auto">
              <span className='ml-2'>درخواست: </span>
              <span>
                  {requestCol}
                </span>
            </Col>


            <Col lg="12" className="payments-table-header-col my-auto flex-grow-1">
              {actionCol}
            </Col>

            <Col sm="12" className="payments-table-row-line"/>
          </Row>
        </Col>

    </>



    );
  }
}

export default NotificationsTableRow;
