import React from 'react';
import {Row, Col, Button} from 'reactstrap'
import Chip from '../../common/chip/chip'

class PaymentsTableRow extends React.Component {
  render() {

    let consumers = [];
    this.props.data.consumers.forEach(consumer => {
      consumers.push(<Chip
        link="/mollaahmadi.ir"
        haveCloseButton="false"
        avatarSrc={require("../../assets/img/users/user01.jpg")}
        label={consumer.username}
        class='mb-1 mx-1'
        // onDelete={() => this.deleteUser()}
      />);
    });
    return (
      <>
        <Col lg='12' className='d-lg-block d-none p-0'>
          <Row className="notification-table-row m-0">
            <Col className="notifications-table-row-col px-0 check-width">
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

            <Col lg="1" className="notifications-table-row-col date-request">
              <span>{this.props.data.date}</span>
            </Col>
            <Col lg="3" className=" notifications-table-row-col my-auto">
          <span>
            {this.props.data.name}
          </span>
            </Col>
            <Col lg="2" className="notifications-table-row-col my-auto">
              <span>{this.props.data.value}</span>
            </Col>

            <Col lg="3" className="notifications-table-row-col my-auto">
              <span className="user-sender">
                <Chip
                  link="/mollaahmadi.ir"
                  haveCloseButton="false"
                  avatarSrc={require("../../assets/img/users/user01.jpg")}
                  label={this.props.data.group}
                  // onDelete={() => this.deleteUser()}
                />
              </span>
            </Col>

            <Col lg="2" className="notifications-table-row-col my-auto flex-grow-1">
              <Row className="consumers">{consumers}</Row>
            </Col>

            <Col sm="12" className="notification-table-row-line"/>
          </Row>
        </Col>

        <Col sm='6' xs='12' className='d-lg-none m-3'>
          <Row className="notification-table-row m-0">
            <Col xs='12' className="notifications-table-row-col-xs check-width">
              <span className='ml-auto'>{this.props.data.date}</span>
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

            <Col xs='6' className=" notifications-table-row-col-xs my-auto">
                <span className='ml-2'>نام: </span>
                <span>
                  {this.props.data.name}
                </span>
              </Col>
            <Col xs='6' className="notifications-table-row-col-xs my-auto">
              <span className='ml-2'>قیمت: </span>
              <span>{this.props.data.value}</span>
            </Col>
            <Col xs='12' className="notifications-table-row-col-xs my-auto">
              <span className='ml-2'>توضیح: </span>
              <span>{this.props.data.description}</span>
            </Col>
            <Col xs='12' className="notifications-table-row-col-xs my-auto">
              <span className='ml-2'>انجام دهندگان: </span>

                <Chip
                  link="/mollaahmadi.ir"
                  haveCloseButton="false"
                  avatarSrc={require("../../assets/img/users/user01.jpg")}
                  label={this.props.data.group}
                  // onDelete={() => this.deleteUser()}
                />

            </Col>

            <Col lg="2" className="notifications-table-row-col-xs my-auto flex-grow-1">
              <span className='ml-2 w-auto'>مصرف کنندگان: </span>
              <Row className="mx-0 consumers">{consumers}</Row>
            </Col>

            <Col sm="12" className="notification-table-row-line"/>
          </Row>
        </Col>


      </>
    );
  }
}

export default PaymentsTableRow;
