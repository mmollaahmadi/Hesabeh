import React from "react";
import {Link} from "react-router-dom";
import {
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardBody,
  Modal
} from "reactstrap";
import Chip from "../../my-components/chip/chip";
import GroupUnit from "./group-unit";
import UserUnit from "./user-unit";
import AOS from 'aos'
import {animateCSS} from "../../../utils/animationUtils";
import './selection-users.css'
import UserShare from "../user-share/user-share";

class SelectionUsers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      consumersCollapse: false,
      saveInputsValue: false,
      isStepOne: true,
      groupsList: [],
      usersOfGroupsList: [],
      usersOfSelectedGroupsList: [],
      selectedUsers: [],
      isAnyGroupSelected: false,
      isAnyUserSelected: false,
      isSelectedConsumers: false
    };

    this.handleBackOrNextStep = this.handleBackOrNextStep.bind(this);
    this.myCallBack = this.myCallBack.bind(this);
    this.updateSelectedGroupsList = this.updateSelectedGroupsList.bind(this);
    this.updateSelectedUsersList = this.updateSelectedUsersList.bind(this);
    this.updateUsersOfSelectedGroupsList = this.updateUsersOfSelectedGroupsList.bind(
      this
    );
    this.handleSelectConsumers = this.handleSelectConsumers.bind(this);
    this.handleSelectAllConsumersOfGroups = this.handleSelectAllConsumersOfGroups.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    AOS.init();

  }

  handleSelectAllConsumersOfGroups() {
    let selectedUsers = this.state.selectedUsers;
    if (this.state.isAnyGroupSelected) {
      let _groupsList = this.state.groupsList;
      _groupsList.forEach(group => {
        group.users.forEach(user => {
          user.checked = group.checked;
          user.selected = group.checked;
          if (user.selected)
            selectedUsers.push(user);
        });
      });
      if (this.props.setUsers) {
        this.props.setUsers(selectedUsers);
      }
      this.setState({
        selectedUsers: selectedUsers,
        groupsList: _groupsList,
        isSelectedConsumers: true,
        consumersCollapse: false
      });
    }
  }

  handleSelectConsumers() {
    let _selectedUsers = this.state.selectedUsers;
    if (this.state.isAnyGroupSelected && this.state.isAnyUserSelected) {
      let _groupsList = this.state.groupsList;
      _groupsList.forEach(group => {
        group.users.forEach(user => {
          user.selected = user.checked;
          if (user.selected)
            _selectedUsers.push(user);
        });
      });
      if (this.props.setUsers) {
        this.props.setUsers(_selectedUsers);
      }
      this.setState({
        selectedUsers: _selectedUsers,
        groupsList: _groupsList,
        isSelectedConsumers: true,
        consumersCollapse: false
      });
    }
  }

  componentDidMount() {
    let groupsList = [];
    this.props.currentUser.groups.forEach(group => {
      let usersList = [];
      group.users.forEach(user => {
        usersList.push({
          ...user,
          checked: false,
          selected: false,
          // shareNumber: 0,
          // shareTuman: 0,
        });
      });
      groupsList.push({
        ...group,
        users: usersList,
        checked: false
      });
    });

    let _selectedUsers = this.state.selectedUsers;
    _selectedUsers.push(this.props.currentUser);

    this.setState({
      groupsList: groupsList,
      selectedUsers: _selectedUsers,
    });
  }

  handleBackOrNextStep() {
    let fadeAnimation = "fadeOut";
    if (this.state.isStepOne) {
      animateCSS(".selectGroupCardHeader", fadeAnimation);
      animateCSS(".selectGroupCardBody", fadeAnimation, this.myCallBack);
      this.updateUsersOfSelectedGroupsList();
    } else {
      animateCSS(".selectUsersCardHeader", fadeAnimation);
      animateCSS(".selectUsersCardBody", fadeAnimation, this.myCallBack);
    }
  }

  myCallBack() {
    let fadeInAnimation = "fadeIn";
    if (this.state.isStepOne) {
      this.setState({
        isStepOne: false
      });
      animateCSS(".selectUsersCardHeader", fadeInAnimation);
      animateCSS(".selectUsersCardBody", fadeInAnimation);
    } else {
      this.setState({
        isStepOne: true
      });
      animateCSS(".selectGroupCardHeader", fadeInAnimation);
      animateCSS(".selectGroupCardBody", fadeInAnimation);
    }
  }

  toggleModal(){
    this.setState({
      consumersCollapse: !this.state.consumersCollapse,
    });
  }

  updateSelectedGroupsList(id) {
    let _groupsList = this.state.groupsList;
    _groupsList.forEach(group => {
      if (group.id === id) {
        group.checked = !group.checked;
      }
    });

    let _isAnyGroupSelected = false;
    _groupsList.forEach(group => {
      if (group.checked) {
        _isAnyGroupSelected = true;
      }
    });
    this.setState({
      groupsList: _groupsList,
      isAnyGroupSelected: _isAnyGroupSelected
    });
  }

  updateSelectedUsersList(id) {
    let _groupsList = this.state.groupsList;
    let _isAnyUserSelected = false;

    _groupsList.forEach(group => {
      if (group.checked) {
        group.users.forEach(user => {
          if (user.id === id) {
            user.checked = !user.checked;
          }
          if (user.checked) _isAnyUserSelected = true;
        });
      }
    });
    this.setState({
      groupsList: _groupsList,
      isAnyUserSelected: _isAnyUserSelected
    });
  }

  updateUsersOfSelectedGroupsList() {
    let _users = [];
    this.state.groupsList.forEach(group => {
      if (group.checked) {
        group.users.forEach(u => {
          _users.push(u);
        });
      }
    });
    this.setState({
      usersOfSelectedGroupsList: _users
    });
  }

  render() {
    let _groups = this.state.groupsList;
    let groups = [];
    let users = [];
    _groups.forEach(group => {
      groups.push(
        <GroupUnit
          group={group}
          imageUri={require("../../../assets/img/theme/team-4-800x800.jpg")}
          updateSelectedGroupsList={this.updateSelectedGroupsList}
        />
      );
      if (group.checked) {
        group.users.forEach(user => {
          users.push(
            <UserUnit
              hasShareInput={true}
              user={user}
              imageUri={require("../../../assets/img/theme/team-4-800x800.jpg")}
              updateSelectedUsersList={this.updateSelectedUsersList}
            />
          );
        });
      }
    });
    let consumers = this.state.selectedUsers;
    // if (this.state.isSelectedConsumers) {
    //   this.state.groupsList.forEach(group => {
    //     group.users.forEach(user => {
    //       if (user.selected) {
    //         consumers.push(
    //           user
    //         );
    //       }
    //     });
    //   });
    // }

    return (
      <Col lg="12" className="m-0 mt-3">
        <Row className="m-0 d-flex justify-content-right">
          <p className="p-0 mx-3 my-auto consumers-text">
            {this.props.title}
          </p>
          <UserShare
            users={consumers}
            suppliersOrConsumers={this.props.suppliersOrConsumers}
            onlyAvatar={false}
            deletable={true}
          />
          <Button
            className={`btn btn-icon payments-btn-lv2 mt-0 ${this.props.suppliersOrConsumers === 'consumers' ?'add-consumer-btn' : ''}`}
            type="button"
            color="dark-green"
            onClick={() =>
              this.toggleModal("consumersCollapse")
            }
          >
            <span className="btn-inner--icon">
              <i className="fa fa-user-plus"/>
            </span>
            {/*<span className="btn-inner--text">مصرف کنندگان</span>*/}
          </Button>

          <Modal
            className="modal-dialog-centered"
            isOpen={this.state.consumersCollapse}
            toggle={this.toggleModal}
          >
            <div className="modal-body p-0">
              <Card className="bg-secondary shadow border-0">
                <CardHeader className="bg-transparent p-1">
                  {/* <Row className="justify-content-center"> */}
                  <div className="text-muted  mt-3 mb-2">
                    <h5
                      className={`selectGroupCardHeader my-modal-header ${
                        this.state.isStepOne ? "" : "d-none"
                      }`}
                    >
                      انتخاب گروه
                    </h5>
                    <h5
                      className={`selectUsersCardHeader my-modal-header ${
                        this.state.isStepOne ? "d-none" : ""
                      }`}
                    >
                      انتخاب کاربران
                    </h5>
                  </div>
                  {/* </Row> */}
                </CardHeader>
                <CardBody
                  className={`selectGroupCardBody px-lg-3 py-lg-3 ${
                    this.state.isStepOne ? "" : "d-none"
                  }`}
                >
                  <Row className={"groups m-0"}>{groups}</Row>
                  <Row className="text-center my-4">
                    <Col>
                      <Button
                        className="tight-btn"
                        // className={'continueBtn profile-modal-btn'}
                        color="primary"
                        disabled={
                          !this.state.isAnyGroupSelected
                        }
                        onClick={this.handleBackOrNextStep}
                      >
                        مرحله بعد
                      </Button>
                      <Button
                        className="tight-btn"
                        // className={'continueBtn profile-modal-btn'}
                        color="primary"
                        disabled={
                          !this.state.isAnyGroupSelected
                        }
                        onClick={this.handleSelectAllConsumersOfGroups}
                      >
                        انتخاب
                      </Button>
                      <Button
                        className="tight-btn"
                        color="default"
                        to="/dashboard"
                        tag={Link}
                      >
                        بیخیال
                      </Button>
                    </Col>
                  </Row>
                </CardBody>
                <CardBody
                  className={`selectUsersCardBody px-lg-3 py-lg-3 ${
                    this.state.isStepOne ? "d-none" : ""
                  }`}
                >
                  <Row className={"groups m-0"}>{users}</Row>
                  <Row className="text-center my-4">
                    <Col>
                      <Button
                        className="tight-btn"
                        color="primary"
                        disabled={!this.state.isAnyUserSelected}
                        onClick={this.handleSelectConsumers}
                      >
                        انتخاب
                      </Button>
                      <Button
                        className="tight-btn"
                        color="default"
                        onClick={this.handleBackOrNextStep}
                      >
                        بازگشت
                      </Button>
                      <Button
                        className="tight-btn"
                        color="default"
                        to="/dashboard"
                        tag={Link}
                      >
                        بیخیال
                      </Button>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </Modal>
        </Row>
      </Col>
    );
  }
}

export default SelectionUsers;
