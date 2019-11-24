import React from "react";
import { Card, CardHeader, CardBody, Container, Row } from "reactstrap";
import NotificationsTableHeader from "./notifications-table-header";
import NotificationsTableRow from "./notifications-table-row.js";
import TableTools from "../../../common/table-tools/table-tools";
import TableFilters from "../../../common/table-filters/table-filters";
import AOS from "aos";
import { NOTIFICATIONS_FILTERS } from "../../../../constants/constants";

class NotificationsTable extends React.Component {
  constructor(props) {
    super(props);
    // this.state={
    //   dateCol: null,
    //   requestCol: null,
    //   actionCol: null
    // };
    this.state = {
      allCheckBoxesChecked: false,
      checkBoxesStatusList: []
    };
    this.updateCheckBoxesStatusList = this.updateCheckBoxesStatusList.bind(
      this
    );
    this.isAnyCheckBoxTrue = this.isAnyCheckBoxTrue.bind(this);
    this.handleAllCheckedChange = this.handleAllCheckedChange.bind(this);
    this.allCheckBoxesChecked = this.allCheckBoxesChecked.bind(this);
    this.getCheckedStatus = this.getCheckedStatus.bind(this);
    AOS.init();
    // this.createReuestColumnAndActionColumn = this.createReuestColumnAndActionColumn.bind(this);
  }
  componentDidMount() {
    let _checkedList = [];
    this.props.notifications.forEach(notification => {
      _checkedList.push({
        id: notification.id,
        checked: false
      });
    });
    this.setState({
      checkBoxesStatusList: _checkedList
    });
  }

  updateCheckBoxesStatusList(id) {
    let _checkedList = this.state.checkBoxesStatusList;
    _checkedList.forEach(el => {
      if (el.id === id) {
        el.checked = !el.checked;
      }
    });
    this.setState({
      checkBoxesStatusList: _checkedList,
      allCheckBoxesChecked: this.allCheckBoxesChecked(_checkedList)
    });
  }
  allCheckBoxesChecked(list) {
    let flag = true;
    this.state.checkBoxesStatusList.forEach(el => {
      if (!el.checked) flag = false;
    });
    return flag;
  }

  isAnyCheckBoxTrue() {
    let _checkedList = this.state.checkBoxesStatusList;
    let flag = false;
    _checkedList.forEach(el => {
      if (el.checked === true) {
        flag = true;
      }
    });
    return flag;
  }

  handleAllCheckedChange() {
    let _checkedList = this.state.checkBoxesStatusList;
    _checkedList.forEach(el => {
      el.checked = !this.state.allCheckBoxesChecked;
    });
    this.setState({
      allCheckBoxesChecked: !this.state.allCheckBoxesChecked,
      checkBoxesStatusList: _checkedList
    });
  }
  getCheckedStatus(id) {
    let flag = false;
    this.state.checkBoxesStatusList.forEach(el => {
      if (el.id === id) flag = el.checked;
    });
    return flag;
  }

  // createReuestColumnAndActionColumn(){
  //   let requestCol = null;
  //   let actionCol = null;
  //   const rowData = NT_DATA.rows;
  //
  //   let dateCol = <span>{NT_DATA.rows}</span>;
  //
  //   if (rowData.type === "buy-list") {
  //     requestCol = (
  //       <>
  //         <span className="user-sender">
  //           <Chip
  //             link="/mollaahmadi.ir"
  //             haveCloseButton="false"
  //             avatarSrc={require("../../../assets/img/users/user01.jpg")}
  //             label={rowData.sender}
  //             // onDelete={() => this.deleteUser()}
  //           />
  //         </span>
  //         یک لیست نیازمندی در گروه
  //         <span className="target-group">
  //           <Chip
  //             haveCloseButton="false"
  //             avatarSrc={require("../../../assets/img/users/user01.jpg")}
  //             label={rowData.targetGroup}
  //             // onDelete={() => this.deleteUser()}
  //           />
  //         </span>
  //         ایجاد کرده است.
  //       </>
  //     );
  //     actionCol = (
  //       <Button className="notification-table-row-btn" color="primary">
  //         مشاهده لیست
  //       </Button>
  //     );
  //   } else if (rowData.type === "join-to-my-group") {
  //     requestCol = (
  //       <>
  //         <span className="user-sender">
  //           <Chip
  //             haveCloseButton="false"
  //             avatarSrc={require("../../../assets/img/users/user01.jpg")}
  //             label={rowData.sender}
  //             // onDelete={() => this.deleteUser()}
  //           />
  //         </span>
  //         درخواست پیوستن به گروه
  //         <span className="target-group">
  //           <Chip
  //             haveCloseButton="false"
  //             avatarSrc={require("../../../assets/img/users/user01.jpg")}
  //             label={rowData.targetGroup}
  //             // onDelete={() => this.deleteUser()}
  //           />
  //         </span>
  //         را دارد.
  //       </>
  //     );
  //     actionCol = (
  //       <>
  //         <Button className="notification-table-row-btn" color="primary">
  //           قبول
  //         </Button>
  //         <Button className="notification-table-row-btn" color="default">
  //           رد
  //         </Button>
  //       </>
  //     );
  //   } else if (rowData.type === "join-me-to-other-group") {
  //     requestCol = (
  //       <>
  //         شما درخواست پیوستن به گروه
  //         <span className="target-group">
  //           <Chip
  //             haveCloseButton="false"
  //             avatarSrc={require("../../../assets/img/users/user01.jpg")}
  //             label={rowData.targetGroup}
  //             // onDelete={() => this.deleteUser()}
  //           />
  //         </span>
  //         را از
  //         <span className="user-sender">
  //           <Chip
  //             haveCloseButton="false"
  //             avatarSrc={require("../../../assets/img/users/user01.jpg")}
  //             label={rowData.sender}
  //             // onDelete={() => this.deleteUser()}
  //           />
  //         </span>
  //         دارید.
  //       </>
  //     );
  //     actionCol = (
  //       <Button className="notification-table-row-btn" color="default">
  //         لغو درخواست
  //       </Button>
  //     );
  //   } else if (rowData.type === "disjoin-from-my-group") {
  //
  //     requestCol = (
  //       <>
  //         <span className="user-sender">
  //           <Chip
  //             haveCloseButton="false"
  //             avatarSrc={require("../../../assets/img/users/user01.jpg")}
  //             label={rowData.sender}
  //             // onDelete={() => this.deleteUser()}
  //           />
  //         </span>
  //         درخواست تسویه حساب و خروج از گروه
  //         <span className="target-group">
  //           <Chip
  //             haveCloseButton="false"
  //             avatarSrc={require("../../../assets/img/users/user01.jpg")}
  //             label={rowData.targetGroup}
  //             // onDelete={() => this.deleteUser()}
  //           />
  //         </span>
  //         را دارد.
  //       </>
  //     );
  //     actionCol = (
  //       <>
  //         <Button className="notification-table-row-btn" color="primary">
  //           قبول
  //         </Button>
  //         <Button className="notification-table-row-btn" color="default">
  //           رد
  //         </Button>
  //       </>
  //     );
  //   } else if (rowData.type === "disjoin-me-from-other-group") {
  //
  //     requestCol = (
  //       <>
  //         شما درخواست تسویه حساب و خروج از گروه
  //         <span className="target-group">
  //           <Chip
  //             haveCloseButton="false"
  //             avatarSrc={require("../../../assets/img/users/user01.jpg")}
  //             label={rowData.targetGroup}
  //             // onDelete={() => this.deleteUser()}
  //           />
  //         </span>
  //         را از
  //         <span className="user-sender">
  //           <Chip
  //             haveCloseButton="false"
  //             avatarSrc={require("../../../assets/img/users/user01.jpg")}
  //             label={rowData.sender}
  //             // onDelete={() => this.deleteUser()}
  //           />
  //         </span>
  //         دارید.
  //       </>
  //     );
  //     actionCol = (
  //       <Button className="notification-table-row-btn" color="default">
  //         لغو درخواست
  //       </Button>
  //     );
  //   } else {
  //     requestCol = <Col lg="8"/>;
  //     actionCol = <Col lg="4"/>;
  //   }
  //
  //   this.setState({
  //     dateCol: dateCol,
  //     requestCol: requestCol,
  //     actionCol: actionCol
  //   });
  // }
  // componentDidMount(){
  // this.createReuestColumnAndActionColumn();
  // }
  render() {
    const rows = [];
    this.props.notifications.forEach(row => {
      rows.push(
        <NotificationsTableRow
          updateCheckBoxesStatusList={this.updateCheckBoxesStatusList}
          checked={this.getCheckedStatus(row.id)}
          rowData={row}
        />
      );
    });

    return (
      <Container>
        <Card
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="50"
          className="card-profile shadow mt-5"
        >
          <CardHeader>لیست اعلام ها</CardHeader>
          <CardBody>
            <TableTools
              isAnyChecked={this.isAnyCheckBoxTrue()}
              buttonTitle="ایجاد درخواست"
              buttonLink="/create-new-request"
            />
            <TableFilters
              currentUser={this.props.currentUser}
              filters={NOTIFICATIONS_FILTERS}
            />
            <Row className="justify-content-center py-1">
              <NotificationsTableHeader
                allCheckBoxesChecked={this.state.allCheckBoxesChecked}
                handleAllCheckedChange={this.handleAllCheckedChange}
              />
              {rows}
            </Row>
          </CardBody>
        </Card>
      </Container>
    );
  }
}

export default NotificationsTable;
