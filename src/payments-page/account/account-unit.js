import React from "react";
import { Row, Col, Badge } from "reactstrap";
import AOS from 'aos';

class AccountUnit extends React.Component {

  componentDidMount() {
    AOS.refresh();
  }
  componentWillMount() {
    AOS.init();
  }

  render() {
    let accountStatusBgColor='orange';
    if(this.props._text === "میزان مصرف گروهی")
      accountStatusBgColor = 'green';
    if(this.props._text === "وضعیت نهایی")
      accountStatusBgColor = 'yellow';

    return (
      <Col data-aos="fade-up"
           data-aos-duration="1000"
           data-aos-delay="50"
           lg="3" xs="12" md='6'
           className="m-0 d-flex justify-content-center">
        <Row className={`justify-content-center learning-card ${accountStatusBgColor}`}>
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
