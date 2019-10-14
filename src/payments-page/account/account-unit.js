import React from "react";
import { Row, Col, Badge } from "reactstrap";

class AccountUnit extends React.Component {
  render() {
    return (
      <Col lg="3" sm="6" xs="12" className="m-0 d-flex justify-content-center">
        <Row className="justify-content-center learning-card">
          <Col xs="12">
            <img
              className="rounded-circle statistic-circle-image"
              top
              src={this.props.imageUri}
              alt=""
            />
          </Col>
          <Col xs="12" className="mt-4 account-status-text">
            <Badge className="account-status-title" color="danger">
              {this.props._text}
            </Badge>
            <h3 className="account-status-value">{this.props.cost} تومان</h3>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default AccountUnit;
