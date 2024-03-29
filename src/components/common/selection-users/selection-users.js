import React from "react";
import {
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardBody,
  Modal
} from "reactstrap";

import GroupUnit from "./group-unit";
import UserUnit from "./user-unit";
import AOS from 'aos'
import {animateCSS} from "../../../utils/animationUtils";
import './selection-users.css'
import UserShare from "../user-share/user-share";
import {getUser} from "../../../utils/apiUtils";

class SelectionUsers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectUsersModal: false,
      isStepOneInModal: true,

      groups: [],
      temporaryGroups: [],
      // usersOfGroupsList: [],
      // usersOfSelectedGroupsList: [],
      //
      // selectedUsers: [],

      isAnyGroupSelected: false,
      isAnyUserSelected: false,
      isSelectedUser: false,
    };

    this.handleBackOrNextStep = this.handleBackOrNextStep.bind(this);
    this.myCallBack = this.myCallBack.bind(this);
    this.updateSelectedGroupsList = this.updateSelectedGroupsList.bind(this);
    this.updateSelectedUsersList = this.updateSelectedUsersList.bind(this);
    // this.updateUsersOfSelectedGroupsList = this.updateUsersOfSelectedGroupsList.bind(
    //   this
    // );
    this.handleSelectUsers = this.handleSelectUsers.bind(this);
    this.handleSelectAllConsumersOfGroups = this.handleSelectAllConsumersOfGroups.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.updateSelectedUserShare = this.updateSelectedUserShare.bind(this);
    AOS.init();

  }

  handleBackOrNextStep() {
    let fadeAnimation = "fadeOut";
    if (this.state.isStepOneInModal) {
      animateCSS(".selectGroupCardHeader", fadeAnimation);
      animateCSS(".selectGroupCardBody", fadeAnimation, this.myCallBack);
      // this.updateUsersOfSelectedGroupsList();
    } else {
      animateCSS(".selectUsersCardHeader", fadeAnimation);
      animateCSS(".selectUsersCardBody", fadeAnimation, this.myCallBack);
    }
  }

  myCallBack() {
    let fadeInAnimation = "fadeIn";
    if (this.state.isStepOneInModal) {
      this.setState({
        isStepOneInModal: false
      });
      animateCSS(".selectUsersCardHeader", fadeInAnimation);
      animateCSS(".selectUsersCardBody", fadeInAnimation);
    } else {
      this.setState({
        isStepOneInModal: true
      });
      animateCSS(".selectGroupCardHeader", fadeInAnimation);
      animateCSS(".selectGroupCardBody", fadeInAnimation);
    }
  }

  toggleModal() {
    this.setState({
      selectUsersModal: !this.state.selectUsersModal,
    });
  }

  // componentDidMount() {
  // because the parent group change in componentDidUpdate this function do not work
  // }

  componentDidUpdate(prevProps, prevState) {
    //in real this will work once
    let _groupsList = [];
    if (prevProps.groups !== this.props.groups) {
      this.props.groups.forEach(group => {
        let usersList = [];
        group.users.forEach(user => {
          let u = getUser(user.id);
          usersList.push({
            ...u,
            checked: false,
            selected: false,
            shareNumber: 1,
            shareTuman: 0,
          });
        });
        _groupsList.push({
          ...group,
          users: usersList,
          checked: false
        });
      });

      this.setState({
        groups: _groupsList,
        temporaryGroups: _groupsList,
        // doesReset: !this.props.doesReset,
      });
    }

    // control save check box
    if (prevProps.selectedUsers !== this.props.selectedUsers) {
      let _groups = [];
      this.state.groups.forEach(group => {
        let _users = [];
        group.users.forEach(user => {

          let flag = false;
          this.props.selectedUsers.forEach(su => {
            if (su.groupID === group.id && su.id === user.id) {
              _users.push(su);
              flag = true;
            }
          });

          if (!flag) {
            _users.push({
              ...user,
              checked: false,
              selected: false,
              shareNumber: 1,
              shareTuman: 0,
            });
          }

        });
        _groups.push({
          ...group,
          users: _users,
        });
      });
      this.setState({
        groups: _groups,
        temporaryGroups: _groups,
      });
    }
  }

  handleSelectAllConsumersOfGroups() {
    let selectedUsers = [];
    if (this.state.isAnyGroupSelected) {
      let _groupsList = this.state.temporaryGroups;
      _groupsList.forEach(group => {
        group.users.forEach(user => {
          user.checked = group.checked;
          user.selected = group.checked;
          if (user.selected)
            selectedUsers.push({
              ...user,
              groupID: group.id,
            });
        });
      });
      if (this.props.setUsers) {
        this.props.setUsers(selectedUsers);
      }
      this.setState({
        groups: _groupsList,
        isSelectedUser: true,
        selectUsersModal: false
      });
    }
  }

  handleSelectUsers() {
    let _selectedUsers = [];
    if (this.state.isAnyGroupSelected && this.state.isAnyUserSelected) {
      let _groupsList = this.state.temporaryGroups;
      _groupsList.forEach(group => {
        group.users.forEach(user => {
          user.selected = user.checked;
          if (user.selected)
            _selectedUsers.push({
              ...user,
              groupID: group.id,
            });
        });
      });
      if (this.props.setUsers) {
        this.props.setUsers(_selectedUsers);
      }
      this.setState({
        groups: _groupsList,
        isSelectedUser: true,
        selectUsersModal: false
      });
    }
  }

  updateSelectedGroupsList(id) {
    let _groupsList = this.state.temporaryGroups;
    let _isAnyGroupSelected = false;

    _groupsList.forEach(group => {
      if (group.id === id) {
        group.checked = !group.checked;
      }
      if (group.checked)
        _isAnyGroupSelected = true;
    });
    this.setState({
      temporaryGroups: _groupsList,
      isAnyGroupSelected: _isAnyGroupSelected
    });
  }

  updateSelectedUsersList(id) {
    let _groupsList = this.state.temporaryGroups;
    let _isAnyUserSelected = false;

    _groupsList.forEach(group => {
      if (group.checked) {
        group.users.forEach(user => {
          if (user.id === id)
            user.checked = !user.checked;

          if (user.checked)
            _isAnyUserSelected = true;
        });
      }
    });
    this.setState({
      temporaryGroups: _groupsList,
      isAnyUserSelected: _isAnyUserSelected
    });
  }

  updateSelectedUserShare(groupID, userID, share) {
    let _groupsList = [];

    this.state.temporaryGroups.forEach(group => {

      if (group.id === groupID) {

        let usersList = [];
        group.users.forEach(user => {
          if (user.id === userID) {
            // let u = getUser(user.id);
            usersList.push({
              ...user,
              shareNumber: share,
            });
          } else {
            usersList.push(user);
          }
        });
        _groupsList.push({
          ...group,
          users: usersList,
        });
      } else {
        _groupsList.push(group);
      }

    });

    this.setState({
      temporaryGroups: _groupsList,
      isAnyUserSelected: true,
      // selectedUsers: this.props.selectedUsers,
    });
  }

  // updateUsersOfSelectedGroupsList() {
  //
  //   let _groups = [];
  //   this.state.temporaryGroups.forEach(group => {
  //     let _users = [];
  //
  //     if (group.checked) {
  //       group.users.forEach(u => {
  //         _users.push({
  //           ...u,
  //           checked: true,
  //           selected: true,
  //         });
  //       });
  //     } else {
  //       _users = group.users;
  //     }
  //
  //     _groups.push({
  //       ...group,
  //       users: _users
  //     });
  //   });
  //   this.setState({
  //     temporaryGroups: _groups
  //   });
  // }

  render() {
    let _groups = this.state.groups;
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
              groupID={group.id}
              user={user}
              imageUri={require("../../../assets/img/theme/team-4-800x800.jpg")}

              hasShareInput={true}

              updateSelectedUsersList={this.updateSelectedUsersList}
              updateSelectedUserShare={this.updateSelectedUserShare}
            />
          );
        });
      }
    });
    let consumers = [];
    if (this.state.groups) {
      this.state.groups.forEach(group => {
        group.users.forEach(user => {
          if (user.selected) {
            consumers.push(user);
          }
        });
      });
    }

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
            className={`btn btn-icon payments-btn-lv2 mt-0 ${this.props.suppliersOrConsumers === 'consumers' ? 'add-consumer-btn' : ''}`}
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
            isOpen={this.state.selectUsersModal}
            toggle={this.toggleModal}
          >
            <div className="modal-body p-0">
              <Card className="bg-secondary shadow border-0">
                <CardHeader className="bg-transparent p-1">
                  {/* <Row className="justify-content-center"> */}
                  <div className="text-muted  mt-3 mb-2">
                    <h5
                      className={`selectGroupCardHeader my-modal-header ${
                        this.state.isStepOneInModal ? "" : "d-none"
                      }`}
                    >
                      انتخاب گروه
                    </h5>
                    <h5
                      className={`selectUsersCardHeader my-modal-header ${
                        this.state.isStepOneInModal ? "d-none" : ""
                      }`}
                    >
                      انتخاب کاربران
                    </h5>
                  </div>
                  {/* </Row> */}
                </CardHeader>
                <CardBody
                  className={`selectGroupCardBody px-lg-3 py-lg-3 ${
                    this.state.isStepOneInModal ? "" : "d-none"
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
                        onClick={this.toggleModal}
                      >
                        بیخیال
                      </Button>
                    </Col>
                  </Row>
                </CardBody>
                <CardBody
                  className={`selectUsersCardBody px-lg-3 py-lg-3 ${
                    this.state.isStepOneInModal ? "d-none" : ""
                  }`}
                >
                  <Row className={"groups m-0"}>{users}</Row>
                  <Row className="text-center my-4">
                    <Col>
                      <Button
                        className="tight-btn"
                        color="primary"
                        disabled={!this.state.isAnyUserSelected}
                        onClick={this.handleSelectUsers}
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
                        onClick={this.toggleModal}
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
