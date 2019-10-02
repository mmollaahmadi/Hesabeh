import React from "react";
import { Col, Button, Row } from "reactstrap";
import Chip from "../common/chip/chip";

class MyGroupsTableRow extends React.Component {
  render() {
    let members = [];
    this.props.dataGroup.memebers.forEach(member => {
      members.push(
        <Chip
          link="/mollaahmadi.ir"
          haveCloseButton="false"
          avatarSrc={require("../assets/img/users/user01.jpg")}
          label={member.username}
          // onDelete={() => this.deleteUser()}
        />
      );
    });
    return (
      <Row className="notifications-table-row">
        <Col lg="1" className="date-request">
          <span>{this.props.dataGroup.dateCreation}</span>
        </Col>
        <Col lg="4" className="">
          <span className="user-sender">
            <Chip
              link="/mollaahmadi.ir"
              haveCloseButton="false"
              avatarSrc={require("../assets/img/users/user01.jpg")}
              label={this.props.dataGroup.username}
              // onDelete={() => this.deleteUser()}
            />
          </span>
        </Col>
        <Col lg="1" className="justify-content-center d-flex my-auto">
          <span>{this.props.dataGroup.budget}</span>;
        </Col>
        <Col lg="4" className="justify-content-center d-flex my-auto">
          <span className="user-sender">{members}</span>
        </Col>
        <Col lg="2" className="justify-content-center d-flex my-auto">
          <Button className="notification-table-row-btn" color="primary">
            قبول
          </Button>
          <Button className="notification-table-row-btn" color="default">
            رد
          </Button>
        </Col>
        <Col sm="11" className="ntr-hr"></Col>
      </Row>
    );
  }
}

export default MyGroupsTableRow;
