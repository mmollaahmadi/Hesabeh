import React, { useState } from "react";
import "../../../assets/css/custom.css";
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
import Dropzone from "../../common/dropzone/dropzone";
import "../payments-page.css";
import DatePicker from "react-persian-calendar-date-picker";
import AOS from "aos";
import GroupUnit from "./group-unit";
import UserUnit from "./user-unit";
import ChooseUsers from '../../common/choose-users/choose-users'
import DefaultExample from './example'
class AddPaymentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentName: {
        placeholder: "نام هزینه",
        value: ""
      },
      paymentCost: {
        placeholder: "میزان هزینه به تومان",
        value: ""
      },
      paymentDescription: {
        placeholder: "توضیحات",
        value: ""
      },
      paymentDate: {
        placeholder: "امروز",
        value: ""
      },
      paymentConsumers: {
        value: []
      },
      paymentPicture: {
        value: []
      },
      payments: [],
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

    this.handleInputChange = this.handleInputChange.bind(this);
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
      // usersOfGroupsList: usersList
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
    // let fadeAnimation = 'fadeOut';
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
  handleInputChange(event) {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({
      [name]: {
        ...this.state[name],
        value: value
      }
    });
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
    // let _groups = this.props.currentUser.groups;
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
    // Dropzone class:
    // var myDropzone = new Dropzone("div#myId", { url: "/file/post"});

    const payments = this.state;
    let tempTablePayments = (
      <p className="nothing">هیچ هزینه ای اضافه نشده است.</p>
    );
    if (payments.length > 0) {
      tempTablePayments = <p>hihhihhi</p>;
    }

    const dragBody = document.getElementById('image-upload-body');

    return (
      <div className="my-body">
        <Container>
          <Card
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="50"
            className="card-profile shadow mt-5"
          >
            <CardHeader>افزودن هزینه جدید</CardHeader>
            <CardBody>
              <Row className="justify-content-center py-2">
                <Col sm="12" className="notifications-table">
                  <Form role="form" className="audit-form">
                    <Row className=" m-0 text-center justify-content-center">
                      <Col lg="4" className="m-0">
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="fa fa-shopping-basket" />
                              </InputGroupText>
                            </InputGroupAddon>

                            <Input
                              className="audit-input"
                              placeholder={this.state.paymentName.placeholder}
                              name="paymentName"
                              value={this.state.paymentName.value}
                              onChange={this.handleInputChange}
                            />
                          </InputGroup>
                        </FormGroup>
                      </Col>
                      <Col lg="4" className="m-0">
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon
                              className="input-prepend"
                              addonType="prepend"
                            >
                              <InputGroupText>
                                <i className="fa fa-usd" />
                              </InputGroupText>
                            </InputGroupAddon>

                            <Input
                              className="audit-input"
                              placeholder={this.state.paymentCost.placeholder}
                            />
                          </InputGroup>
                        </FormGroup>
                      </Col>
                      <Col lg="4" className="m-0">
                        <FormGroup className="mb-3 ">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="fa fa-calendar" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <PersianCalendar />
                          </InputGroup>
                        </FormGroup>
                      </Col>
                      <Col lg="12" className="m-0">
                        <FormGroup className="mb-2 p-0">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="fa fa-edit" />
                              </InputGroupText>
                            </InputGroupAddon>

                            <Input
                              className="audit-input"
                              placeholder={
                                this.state.paymentDescription.placeholder
                              }
                              type="email"
                            />
                          </InputGroup>
                        </FormGroup>
                      </Col>

                      <ChooseUsers currentUser={this.props.currentUser} title={'*مصرف کنندگان:'} />

                      <Col lg="12" className="m-0 mt-2" id="image-upload-body">
                        <div className="example w-100">
                          {/*<Dropzone onFilesAdded={console.log} />*/}
                           <DefaultExample ii={dragBody}/>
                        </div>
                      </Col>

                      <Col lg="12" className="m-0">
                        <Collapse
                          isOpen={this.state.consumersCollapse}
                        ></Collapse>
                      </Col>

                      <Row className="m-0 mt-3 d-flex justify-content-center w-100">
                        <Col
                          lg="auto"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <div className="custom-control custom-control-alternative custom-checkbox">
                            <input
                              className="custom-control-input"
                              id=" customCheckLogin"
                              type="checkbox"
                            />
                            <label
                              className="custom-control-label pr-1"
                              htmlFor=" customCheckLogin"
                            >
                              <span className="signin-modal-text mr-4">
                                ذخیره مقادیر ورودی
                              </span>
                            </label>
                          </div>
                        </Col>
                        <Col
                          lg="auto"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <Button
                            className=""
                            color="primary"
                            href="#pablo"
                            onClick={() => this.toggle("password")}
                            name="email"
                          >
                            افزودن هزینه
                          </Button>
                        </Col>
                      </Row>
                    </Row>

                    <Card
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="50"
                      className="mt-5 shadow"
                    >
                      <CardHeader>هزینه‌های اضافه شده</CardHeader>
                      <CardBody>
                        <Row className="m-0 d-flex justify-content-center">
                          {tempTablePayments}
                        </Row>
                      </CardBody>
                    </Card>

                  </Form>
                </Col>
              </Row>
            </CardBody>
          </Card>

        </Container>
      </div>
    );
  }
}

const PersianCalendar = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  // render regular HTML input element
  // const renderCustomInput = ({ ref, onFocus, onBlur }) => (
  //   <input
  //     readOnly
  //     ref={ref} // necessary
  //     onFocus={onFocus} // necessary
  //     onBlur={onBlur} // necessary
  //     className="input-group-alternative1" // a styling class
  //   />
  // );

  return (
    <DatePicker
      selectedDay={selectedDay}
      onChange={setSelectedDay}
      colorPrimary="#01cd9a"
      calendarClassName="custom-calendar"
      calendarTodayClassName="custom-today-day"
      inputPlaceholder="انتخاب روز"
      // renderInput={renderCustomInput}
      // inputClassName='input-group-alternative1'
    />
  );
};
export default AddPaymentPage;
