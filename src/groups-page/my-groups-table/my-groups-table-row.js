import React from "react";
import {Col, Button, Row} from "reactstrap";
import Chip from "../../common/chip/chip";

class MyGroupsTableRow extends React.Component {
  render() {
    let members = [];
    this.props.dataGroup.memebers.forEach(member => {
      members.push(
        <Chip
          link="/mollaahmadi.ir"
          haveCloseButton="false"
          avatarSrc={require("../../assets/img/users/user01.jpg")}
          label={member.username}
          class='mx-1'
          // onDelete={() => this.deleteUser()}
        />
      );
    });
    return (
      <>
        <Col lg='12' className='d-lg-block d-none p-0'>
          <Row className="my-groups-table-row">
            <Col className="payments-table-row-col px-0 check-width">
              <div
                className="p-0 px-1 custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin11111"
                  type="checkbox"
                />
                <label
                  className="custom-control-label pr-1"
                  htmlFor=" customCheckLogin11111"
                >
                  <span className="signin-modal-text mr-3">
                  </span>
                </label>
              </div>
            </Col>
            <Col lg="1" className="date-request">
              <span>{this.props.dataGroup.dateCreation}</span>
            </Col>
            <Col lg="3" className="justify-content-center d-flex my-auto">
              <Row className="consumers">
                <Chip
                  link="/mollaahmadi.ir"
                  haveCloseButton="false"
                  avatarSrc={require("../../assets/img/users/user01.jpg")}
                  label={this.props.dataGroup.username}
                  // onDelete={() => this.deleteUser()}
                />
              </Row>
            </Col>
            <Col lg="2" className="justify-content-center d-flex my-auto">
              <span>{this.props.dataGroup.budget}</span>
            </Col>
            <Col lg="4" className="payments-table-row-col flex-grow-1 my-auto">
              <Row className="consumers">{members}</Row>
            </Col>

            <Col sm="12" className="payments-table-row-line"/>
          </Row>
        </Col>




        <Col sm='6' xs='12' className='d-lg-none m-3'>
          <Row className="notification-table-row m-0">
            <Col xs='12' className="payments-table-row-col-xs check-width">
              <span className='ml-auto'>{this.props.dataGroup.dateCreation}</span>
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

            <Col xs='auto' className=" payments-table-row-col-xs my-auto ml-2">
              <span className='ml-2'>نام گروه: </span>
              <Row className="consumers">
                <Chip
                  link="/mollaahmadi.ir"
                  haveCloseButton="false"
                  avatarSrc={require("../../assets/img/users/user01.jpg")}
                  label={this.props.dataGroup.username}
                  // onDelete={() => this.deleteUser()}
                />
              </Row>
            </Col>
            <Col className="payments-table-row-col-xs my-auto flex-grow-1">
              <span className='ml-2'>بودجه: </span>
              <span>{this.props.dataGroup.budget}</span>
            </Col>
            <Col xs='12' className="payments-table-row-col-xs my-auto">
              <span className='ml-2'>توضیح: </span>
              <span>{this.props.dataGroup.description}</span>
            </Col>


            <Col lg="2" className="payments-table-row-col-xs my-auto flex-grow-1">
              <span className='ml-2 w-auto'> کاربران: </span>
              <Row className="consumers">{members}</Row>
            </Col>

            <Col sm="12" className="payments-table-row-line"/>
          </Row>
        </Col>

      </>
    );
  }
}

export default MyGroupsTableRow;
