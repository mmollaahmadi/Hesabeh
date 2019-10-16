import React from "react";
import {Col, Row} from "reactstrap";
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
      <Col xs='12' className='px-2 p-lg-0 m-1 m-lg-0'>
        <Row className="m-0">
          <Col xs='12' lg='auto'
               className="table-row-col justify-content-lg-center check-width px-lg-0">
            <span className='d-lg-none ml-auto'>{this.props.dataGroup.dateCreation}</span>
            <div
              className="p-0 px-1 custom-control custom-control-alternative custom-checkbox">
              <input
                className="custom-control-input"
                id={this.props.dataGroup.id}
                type="checkbox"
              />
              <label
                className="custom-control-label pr-1"
                htmlFor={this.props.dataGroup.id}
              >
                  <span className="signin-modal-text mr-3">
                  </span>
              </label>
            </div>
          </Col>

          <Col lg="1" className="d-none d-lg-flex table-row-col justify-content-lg-center date-request">
            <span>{this.props.dataGroup.dateCreation}</span>
          </Col>

          <Col xs='auto' lg="3" className="table-row-col justify-content-lg-center my-auto ">
            <span className='d-lg-none ml-2'>نام گروه: </span>
            <Row className="consumers">
              <Chip
                link="/group-dashboard"
                haveCloseButton="false"
                avatarSrc={require("../../assets/img/users/user01.jpg")}
                label={this.props.dataGroup.username}
                // onDelete={() => this.deleteUser()}
              />
            </Row>
          </Col>

          <Col xs='auto' lg="2" className="table-row-col justify-content-lg-center my-auto mx-0">
            <span className='d-lg-none ml-2'>بودجه: </span>
            <span>{this.props.dataGroup.budget}</span>
          </Col>

          <Col xs='12' className="d-lg-none table-row-col justify-content-lg-center my-auto">
            <span className='d-lg-none ml-2'>توضیح: </span>
            <span>{this.props.dataGroup.description}</span>
          </Col>

          <Col lg="4" className="table-row-col justify-content-lg-center my-auto flex-grow-1">
            <span className='d-lg-none ml-2 w-auto'> کاربران: </span>
            <Row className="consumers">{members}</Row>
          </Col>

          <Col sm="12" className="table-row-line"/>
        </Row>
      </Col>
    );
  }
}

export default MyGroupsTableRow;
