import React from "react";
import "../../../assets/css/custom.css";
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
} from "reactstrap";
import "../my-account-page.css";
import DatePicker from "react-persian-calendar-date-picker";
import AOS from "aos";
import SelectionUsers from '../../common/selection-users/selection-users'
import DefaultExample from './example'
// import PaymentsTable from '../payments-table/payments-table'
import TempTable from './temp-table/temp-table'
import SelectionLabels from '../../common/selection-labels/selection-labels'

class AddPaymentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentName: {
        placeholder: "نام هزینه",
        value: "",
        isSave: false
      },
      paymentCost: {
        placeholder: "میزان هزینه به تومان",
        value: "",
        isSave: false
      },
      paymentDescription: {
        placeholder: "توضیحات",
        value: "",
        isSave: false
      },
      paymentDate: {
        placeholder: "امروز",
        value: "",
        isSave: false
      },
      paymentLabels: {
        value: [],
        isSave: false
      },
      paymentConsumers: {
        value: [],
        isSave: false
      },
      paymentPictures: {
        value: [],
        isSave: false
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
    this.handleSelectConsumers = this.handleSelectConsumers.bind(this);
    this.handleSaveInputValueCheckbox = this.handleSaveInputValueCheckbox.bind(this);
    this.resetInputs = this.resetInputs.bind(this);
    this.handleAddPaymentClick = this.handleAddPaymentClick.bind(this);
    this.setLabels = this.setLabels.bind(this);
    this.setUsers = this.setUsers.bind(this);
    this.setSelectedDay = this.setSelectedDay.bind(this);
    this.setFiles = this.setFiles.bind(this);
    AOS.init();
  }

  setFiles(files) {
    this.setState({
      paymentPictures: {
        ...this.state.paymentPictures,
        value: files
      }
    });
  }

  setSelectedDay(value) {
    this.setState({
      paymentDate: {
        ...this.state.paymentDate,
        value: value
      }
    });
  }

  setLabels(labels) {
    this.setState({
      paymentLabels: {
        ...this.state.paymentLabels,
        value: labels,
      },
    });
  }

  setUsers(users) {
    this.setState({
      paymentConsumers: {
        ...this.state.paymentConsumers,
        value: users,
      },
    });
  }

  handleAddPaymentClick() {
    let payments = this.state.payments;
    payments.push({
      name: this.state.paymentName.value,
      value: this.state.paymentCost.value,
      description: this.state.paymentDescription.value,
      date: this.state.paymentDate.value,
      consumers: this.state.paymentConsumers.value,
      suppliers: this.state.paymentConsumers.value,
      pictures: this.state.paymentPictures.value,
    });

    // this.resetInputs();
    this.setState({
      payments: payments,
      paymentName: {
        ...this.state.paymentName,
        value: (!this.state.paymentName.isSave ? '' : this.state.paymentName.value)
      },
      paymentCost: {
        ...this.state.paymentCost,
        value: (!this.state.paymentCost.isSave ? '' : this.state.paymentCost.value)
      },
      paymentDescription: {
        ...this.state.paymentDescription,
        value: (!this.state.paymentDescription.isSave ? '' : this.state.paymentDescription.value)
      },
      paymentDate: {
        ...this.state.paymentDate,
        value: (!this.state.paymentDate.isSave ? '' : this.state.paymentDate.value)
      },
      paymentConsumers: {
        ...this.state.paymentConsumers,
        value: (!this.state.paymentConsumers.isSave ? [] : this.state.paymentConsumers.value)
      },
      paymentPictures: {
        ...this.state.paymentPictures,
        value: (!this.state.paymentPictures.isSave ? '' : this.state.paymentPictures.value)
      },
    });
  }

  resetInputs() {
    this.setState({
      paymentName: {
        ...this.state.paymentName,
        value: (!this.state.paymentName.isSave ? '' : this.state.paymentName.value)
      },
      paymentCost: {
        ...this.state.paymentCost,
        value: (!this.state.paymentCost.isSave ? '' : this.state.paymentCost.value)
      },
      paymentDescription: {
        ...this.state.paymentDescription,
        value: (!this.state.paymentDescription.isSave ? '' : this.state.paymentDescription.value)
      },
      paymentDate: {
        ...this.state.paymentDate,
        value: (!this.state.paymentDate.isSave ? '' : this.state.paymentDate.value)
      },
      paymentConsumers: {
        ...this.state.paymentConsumers,
        value: (!this.state.paymentConsumers.isSave ? '' : this.state.paymentConsumers.value)
      },
      paymentPictures: {
        ...this.state.paymentPictures,
        value: (!this.state.paymentPictures.isSave ? '' : this.state.paymentPictures.value)
      },
    });
  }

  handleSaveInputValueCheckbox() {
    this.setState({
      saveInputsValue: !this.state.saveInputsValue,
      paymentName: {
        ...this.state.paymentName,
        isSave: ((this.state.paymentName.value !== '' && !this.state.saveInputsValue))
      },
      paymentCost: {
        ...this.state.paymentCost,
        isSave: ((this.state.paymentCost.value !== '' && !this.state.saveInputsValue))
      },
      paymentDescription: {
        ...this.state.paymentDescription,
        isSave: !this.state.saveInputsValue
      },
      paymentDate: {
        ...this.state.paymentDate,
        isSave: !this.state.saveInputsValue
      },
      paymentConsumers: {
        ...this.state.paymentConsumers,
        isSave: !this.state.saveInputsValue
      },
      paymentPictures: {
        ...this.state.paymentPictures,
        isSave: !this.state.saveInputsValue
      },
    });
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
        groupsList: _groupsList,
        isSelectedConsumers: true,
        consumersCollapse: false
      });
    }
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

  render() {
    let payments = this.state.payments;
    let tempTablePayments = null;
    if (payments.length === 0) {
      tempTablePayments = (
        <p className="nothing">هیچ هزینه ای اضافه نشده است.</p>
      );
    } else {
      tempTablePayments = (
        <TempTable payments={payments}/>
      );
    }
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
                                <i className="fa fa-shopping-basket"/>
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
                                <i className="fa fa-usd"/>
                              </InputGroupText>
                            </InputGroupAddon>

                            <Input
                              className="audit-input"
                              placeholder={this.state.paymentCost.placeholder}
                              name="paymentCost"
                              value={this.state.paymentCost.value}
                              onChange={this.handleInputChange}
                            />
                          </InputGroup>
                        </FormGroup>
                      </Col>
                      <Col lg="4" className="m-0">
                        <FormGroup className="mb-3 ">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="fa fa-calendar"/>
                              </InputGroupText>
                            </InputGroupAddon>
                            {/*<PersianCalendar />*/}
                            <DatePicker
                              selectedDay={this.state.paymentDate.value}
                              onChange={this.setSelectedDay}
                              colorPrimary="#01cd9a"
                              calendarClassName="custom-calendar"
                              calendarTodayClassName="custom-today-day"
                              inputPlaceholder="انتخاب روز"
                              // renderInput={renderCustomInput}
                              // inputClassName='input-group-alternative1'
                            />
                          </InputGroup>
                        </FormGroup>
                      </Col>
                      <Col lg="12" className="m-0">
                        <FormGroup className="mb-2 p-0">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="fa fa-edit"/>
                              </InputGroupText>
                            </InputGroupAddon>

                            <Input
                              className="audit-input"
                              placeholder={this.state.paymentDescription.placeholder}
                              name="paymentDescription"
                              value={this.state.paymentDescription.value}
                              onChange={this.handleInputChange}
                              type="email"
                            />
                          </InputGroup>
                        </FormGroup>
                      </Col>

                      <SelectionLabels
                        currentUser={this.props.currentUser}
                        title={'*برچسبها:'}
                        justify={'right'}
                        setLabels={this.setLabels}
                        hasClose={false}
                      />
                      <SelectionUsers
                        currentUser={this.props.currentUser}
                        title={'*مصرف کنندگان:'}
                        setUsers={this.setUsers}
                      />

                      <Col lg="12" className="m-0 mt-2" id="image-upload-body">
                        <div className="example w-100">
                          {/*<Dropzone onFilesAdded={console.log} />*/}
                          <DefaultExample setFiles={this.setFiles}/>
                        </div>
                      </Col>

                      <Row className="m-0 mt-3 d-flex justify-content-center w-100">
                        <Col
                          lg="auto"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <div className="custom-control custom-control-alternative custom-checkbox">
                            <input
                              className="custom-control-input"
                              id=" saveInputsValueCheckbox"
                              type="checkbox"
                              checked={this.saveInputsValue}
                              onChange={this.handleSaveInputValueCheckbox}
                            />
                            <label
                              className="custom-control-label pr-1"
                              htmlFor=" saveInputsValueCheckbox"
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
                            onClick={this.handleAddPaymentClick}
                            name="email"
                          >
                            افزودن هزینه
                          </Button>
                        </Col>
                      </Row>
                    </Row>

                    <Card

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

export default AddPaymentPage;
