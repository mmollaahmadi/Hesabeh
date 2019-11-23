import React from "react";
import {Row, Col} from "reactstrap";
import AOS from 'aos';

class AccountUnit extends React.Component {
  constructor() {
    super();
    AOS.init();
  }

  render() {
    let accountStatusBgColor = 'green';
    if (this.props._text === "میزان مصرف گروهی")
      accountStatusBgColor = 'orange';
    if (this.props._text === "وضعیت نهایی")
      accountStatusBgColor = 'yellow';

    return (
      <Col data-aos="fade-up"
           data-aos-duration="1000"
           data-aos-delay="50"
           lg="3" xs="12" md='6'
           className="m-0 d-flex justify-content-center">
        <Row className='py-1 justify-content-center learning-card'>
          <Col xs="12 mt-3">
            <img
              className="rounded-circle account-circle-image"
              top
              src={this.props.imageUri}
              alt=""
            />
          </Col>
          <Col xs="12" className="account-status-text mt-4 d-flex justify-content-center">
            <span className={`account-status-title ${accountStatusBgColor}`}>
              <p className={'m-0'}>{this.props._text}</p>
            </span>
          </Col>
          <Col xs="12" className="mt-2 account-status-text">
            <h3
              className={`account-status-value account-status-value-${accountStatusBgColor}`}>
              {this.props.cost} تومان</h3>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default AccountUnit;
