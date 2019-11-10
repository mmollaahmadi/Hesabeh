import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  InputGroupAddon,
  InputGroupText,
  Button,
  FormGroup,
  Form,
  Input,
  InputGroup,
  Card,
  CardHeader,
  CardBody,
  Collapse,
  Modal
} from "reactstrap";
import Chip from "../../common/chip/chip";
import GroupUnit from "./group-unit";
import UserUnit from "./user-unit";
import AOS from 'aos'

class ChooseUsers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      consumersCollapse: false,
      saveInputsValue: false,
      isStepOne: true,
      groupsList: [],
      usersOfGroupsList: [],
      usersOfSelectedGroupsList: [],
      isAnyGroupSelected: false,
      isAnyUserSelected: false,
      isSelectedConsumers: false
    };

    this.animateCSS = this.animateCSS.bind(this);
    this.handleBackOrNextStep = this.handleBackOrNextStep.bind(this);
    this.myCallBack = this.myCallBack.bind(this);
    this.updateSelectedGroupsList = this.updateSelectedGroupsList.bind(this);
    this.updateSelectedUsersList = this.updateSelectedUsersList.bind(this);
    this.updateUsersOfSelectedGroupsList = this.updateUsersOfSelectedGroupsList.bind(
      this
    );
    this.handleSelectConsumers = this.handleSelectConsumers.bind(this);
    AOS.init();

  }
  handleSelectConsumers() {
    if (this.state.isAnyGroupSelected && this.state.isAnyUserSelected) {
      let _groupsList = this.state.groupsList;
      _groupsList.forEach(group => {
        group.users.forEach(user => {
          user.selected = user.checked;
        });
      });
      this.setState({
        groupsList:_groupsList,
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
          selected: false
        });
      });
      groupsList.push({
        ...group,
        users: usersList,
        checked: false
      });
    });
    this.setState({
      groupsList: groupsList
    });
  }
  handleBackOrNextStep() {
    let fadeAnimation = "fadeOut";
    if (this.state.isStepOne) {
      this.animateCSS(".selectGroupCardHeader", fadeAnimation);
      this.animateCSS(".selectGroupCardBody", fadeAnimation, this.myCallBack);
      this.updateUsersOfSelectedGroupsList();
    } else {
      this.animateCSS(".selectUsersCardHeader", fadeAnimation);
      this.animateCSS(".selectUsersCardBody", fadeAnimation, this.myCallBack);
    }
  }

  myCallBack() {
    let fadeInAnimation = "fadeIn";
    if (this.state.isStepOne) {
      this.setState({
        isStepOne: false
      });
      this.animateCSS(".selectUsersCardHeader", fadeInAnimation);
      this.animateCSS(".selectUsersCardBody", fadeInAnimation);
    } else {
      this.setState({
        isStepOne: true
      });
      this.animateCSS(".selectGroupCardHeader", fadeInAnimation);
      this.animateCSS(".selectGroupCardBody", fadeInAnimation);
    }
  }
  animateCSS(element, animationName, callback) {
    const node = document.querySelector(element);

    node.classList.add("animated", animationName);

    function handleAnimationEnd() {
      node.classList.remove("animated", animationName);
      node.removeEventListener("animationend", handleAnimationEnd);

      if (typeof callback === "function") callback();
    }

    node.addEventListener("animationend", handleAnimationEnd);
  }
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state],
      isStepOne: true
    });
  };
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
              user={user}
              imageUri={require("../../../assets/img/theme/team-4-800x800.jpg")}
              updateSelectedUsersList={this.updateSelectedUsersList}
            />
          );
        });
      }
    });
    let consumers = [];
    if (this.state.isSelectedConsumers) {
      this.state.groupsList.forEach(group => {
        group.users.forEach(user => {
          if (user.selected) {
            consumers.push(
              <Chip
                class="mb-2 ml-2"
                haveCloseButton="true"
                avatarSrc={require("../../../assets/img/users/user01.jpg")}
                label={user.name}
                // onDelete={() => this.deleteUser()}
              />
            );
          }
        });
      });
    }

    return(
      <Col lg="12" className="m-0 mt-3">
        <Row className="m-0 d-flex justify-content-right">
          <p className="p-0 mx-3 my-auto consumers-text">
            {this.props.title}
          </p>
          {consumers}
          <Button
            className="btn btn-icon payments-btn-lv2 mt-0"
            type="button"
            color="dark-green"
            onClick={() =>
              this.toggleModal("consumersCollapse")
            }
          >
            <span className="btn-inner--icon">
              <i className="fa fa-user-plus" />
            </span>
            {/*<span className="btn-inner--text">مصرف کنندگان</span>*/}
          </Button>

          <Modal
            className="modal-dialog-centered"
            isOpen={this.state.consumersCollapse}
            toggle={() => this.toggleModal("consumersCollapse")}
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
                        className="profile-modal-btn"
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
                        className="profile-modal-btn"
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
                        className="profile-modal-btn"
                        color="primary"
                        disabled={!this.state.isAnyUserSelected}
                        onClick={this.handleSelectConsumers}
                      >
                        انتخاب
                      </Button>
                      <Button
                        className="profile-modal-btn"
                        color="default"
                        onClick={this.handleBackOrNextStep}
                      >
                        بازگشت
                      </Button>
                      <Button
                        className="profile-modal-btn"
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

export default ChooseUsers;
