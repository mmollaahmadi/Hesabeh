import React from "react";
import {Col, Row, Badge} from "reactstrap";
import Chip from "../../../my-components/chip/chip";

class MyGroupsTableRow extends React.Component {
  constructor(props){
    super(props);
    this.state = {isChecked:false};
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
  }
  componentDidUpdate(prevProps,prevState){
    if(prevProps.checked !== this.props.checked && this.props.checked){
      this.setState({isChecked: true});
    }
    if(prevProps.checked !== this.props.checked && !this.props.checked){
      this.setState({isChecked: false});
    }
  }

  handleCheckBoxChange(){
    this.props.updateCheckBoxesStatusList(this.props.dataGroup.id);
    this.setState({
      isChecked: !this.state.isChecked
    });
  }
  render() {
    let members = [];
    this.props.dataGroup.members.forEach(member => {
      members.push(
        <Chip
          link="/mollaahmadi.ir"
          haveCloseButton="false"
          avatarSrc={require("../../../../assets/img/users/user01.jpg")}
          label={member.username}
          class='mx-1'
          // onDelete={() => this.deleteUser()}
        />
      );
    });
    return (
      <Col xs='12' className={`px-2 p-lg-0 m-1 m-lg-0 ${this.state.isChecked ? 'checked' : 'un-checked'}`}>
        <Row className="m-0">
          <Col xs='12' lg='auto'
               className="table-row-col justify-content-lg-center check-width px-lg-0">
            <Badge className='d-lg-none ml-auto date'>{this.props.dataGroup.dateCreation}</Badge>
            <div
              className="p-0 px-1 custom-control custom-control-alternative custom-checkbox">
              <input
                className="custom-control-input"
                id={this.props.dataGroup.id}
                type="checkbox"
                onChange={this.handleCheckBoxChange}
                checked={this.state.isChecked}
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
            <span className='d-lg-none ml-2 title'>نام گروه: </span>
            <Row className="consumers">
              <Chip
                link="/group-dashboard"
                haveCloseButton="false"
                avatarSrc={require("../../../../assets/img/users/user01.jpg")}
                label={this.props.dataGroup.username}
                // onDelete={() => this.deleteUser()}
              />
            </Row>
          </Col>

          <Col xs='auto' lg="2" className="table-row-col justify-content-lg-center my-auto mx-0">
            <span className='d-lg-none ml-2 title'>بودجه: </span>
            <span>{this.props.dataGroup.budget}</span>
          </Col>

          <Col xs='12'
               className={`d-lg-none table-row-col justify-content-lg-center my-auto ${!this.props.dataGroup.description ? 'd-none' : ''}`}>
            <span className='d-lg-none ml-2 title'>توضیح: </span>
            <span>{this.props.dataGroup.description}</span>
          </Col>

          <Col lg="4" className="table-row-col justify-content-lg-center my-auto flex-grow-1">
            <span className='d-lg-none ml-2 w-auto title'> کاربران: </span>
            <Row className="consumers">{members}</Row>
          </Col>

          <Col sm="12" className="table-row-line"/>
        </Row>
      </Col>
    );
  }
}

export default MyGroupsTableRow;
