import React from "react";
import { Col, Button } from "reactstrap";
class UserGroupAccount extends React.Component {
  render() {
    return (
      <Col sm="auto">
        <img
          alt="..."
          className="rounded-circle img-center img-fluid user-group-account-image"
          src={require("../../assets/img/users/user01.jpg")}
        />
        <Button color="link" className="user-group-account-username">
          {this.props.username}@
        </Button>
      </Col>
    );
  }
}

export default UserGroupAccount;
