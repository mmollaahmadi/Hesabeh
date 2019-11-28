import React from "react";
import "../../../../assets/css/custom.css";
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
import SelectionUsers from '../../../common/selection-users/selection-users'
import DefaultExample from '../../../my-components/uploader-file/example'
// import PaymentsTable from '../payments-table/payments-table'
import TempTable from './temp-table/temp-table'
import SelectionLabels from '../../../common/selection-labels/selection-labels'
import {getGroupsOfUsers, getLabelsOfUsers} from "../../../../utils/apiUtils";

class AddPaymentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentID:0,
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
      paymentSuppliers: {
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
      temporaryAddedPayments: [],
      consumersCollapse: false,
      saveInputsValue: false,
      isStepOne: true,

      usersOfGroupsList: [],
      usersOfSelectedGroupsList: [],
      isAnyGroupSelected: false,
      isAnyUserSelected: false,
      isSelectedConsumers: false,

      groups: [],
      temporaryGroups: [],
      labels: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectConsumers = this.handleSelectConsumers.bind(this);
    this.handleSaveInputValueCheckbox = this.handleSaveInputValueCheckbox.bind(this);
    this.handleAddPaymentClick = this.handleAddPaymentClick.bind(this);
    this.setLabels = this.setLabels.bind(this);
    this.setConsumers = this.setConsumers.bind(this);
    this.setSuppliers = this.setSuppliers.bind(this);
    this.setSelectedDay = this.setSelectedDay.bind(this);
    this.setFiles = this.setFiles.bind(this);
    this.calculateConsumersShares = this.calculateConsumersShares.bind(this);
    AOS.init();
    this.dateToString = this.dateToString.bind(this);
    this.getReadyLabels = this.getReadyLabels.bind(this);
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

  setSuppliers(users) {
    this.setState({
      paymentSuppliers: {
        ...this.state.paymentSuppliers,
        value: users,
      },
    });
  }

  setConsumers(users) {
    this.setState({
      paymentConsumers: {
        ...this.state.paymentConsumers,
        value: users,
      },
    });
  }

  dateToString(date){
    return (date.year + '/' + date.month + '/' + date.day);
  }
  getReadyLabels(labelsID){
    let labels = [];
    this.state.labels.forEach(label => {
      if(labelsID.includes(label.id))
        labels.push(label);
    });
    return labels;
  }

  handleAddPaymentClick() {
    let payments = this.state.temporaryAddedPayments;
    payments.push({
      id: this.state.paymentID,
      name: this.state.paymentName.value,
      value: this.state.paymentCost.value,
      description: this.state.paymentDescription.value,
      date: this.dateToString(this.state.paymentDate.value),
      labels: this.getReadyLabels(this.state.paymentLabels.value),
      consumers: this.state.paymentConsumers.value,
      suppliers: this.state.paymentSuppliers.value,
      pictures: this.state.paymentPictures.value,
    });

    // this.resetInputs();
    this.setState({
      temporaryAddedPayments: payments,
      paymentID: this.state.paymentID + 1,
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
      paymentLabels: {
        ...this.state.paymentLabels,
        value: (!this.state.paymentLabels.isSave ? [] : this.state.paymentLabels.value)
      },
      paymentSuppliers: {
        ...this.state.paymentSuppliers,
        value: (!this.state.paymentSuppliers.isSave ? [] : this.state.paymentSuppliers.value)
      },
      paymentConsumers: {
        ...this.state.paymentConsumers,
        value: (!this.state.paymentConsumers.isSave ? [] : this.state.paymentConsumers.value)
      },
      paymentPictures: {
        ...this.state.paymentPictures,
        value: (!this.state.paymentPictures.isSave ? [] : this.state.paymentPictures.value)
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
      paymentLabels: {
        ...this.state.paymentLabels,
        isSave: !this.state.saveInputsValue
      },
      paymentSuppliers: {
        ...this.state.paymentSuppliers,
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
      let _groupsList = this.state.groups;
      _groupsList.forEach(group => {
        group.users.forEach(user => {
          user.selected = user.checked;
        });
      });
      this.setState({
        groups: _groupsList,
        isSelectedConsumers: true,
        consumersCollapse: false
      });
    }
  }

  calculateConsumersShares() {
    // let sumOfShares = 0;
    // this.state.paymentConsumers.forEach(consumer => {
    //   sumOfShares += consumer.share;
    // });
  }

  handleInputChange(event) {
    let name = event.target.name;
    let value = event.target.value;

    if (event.target.name === 'paymentCost') {
      this.calculateConsumersShares();
    }

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

  componentDidMount() {
    let _groups = [];
    let _labels = [];
    if (this.props.currentUser) {
      _labels = getLabelsOfUsers(this.props.currentUser.id);
      _groups = getGroupsOfUsers(this.props.currentUser.id);
      /*
      group:{
        id
        name
        username
        users:[
          {
            id
          }...
        ]
      }
      * */
    }

    this.setState({
      labels: _labels,
      groups: _groups,
    });
  }

  render() {
    let payments = this.state.temporaryAddedPayments;
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
                              type={'number'}
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
                        labels={this.state.labels}
                        selectedLabels={this.state.paymentLabels.value}
                        title={'برچسبها:'}
                        justify={'right'}
                        setLabels={this.setLabels}
                        hasClose={false}
                      />

                      <SelectionUsers
                        title={'*تهیه کنندگان:'}
                        currentUser={this.props.currentUser}
                        groups={this.state.groups}
                        selectedUsers={this.state.paymentSuppliers.value}
                        setUsers={this.setSuppliers}
                        suppliersOrConsumers={'suppliers'}
                      />
                      <SelectionUsers
                        title={'*مصرف کنندگان:'}
                        currentUser={this.props.currentUser}
                        groups={this.state.groups}
                        selectedUsers={this.state.paymentConsumers.value}
                        setUsers={this.setConsumers}
                        suppliersOrConsumers={'consumers'}
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
