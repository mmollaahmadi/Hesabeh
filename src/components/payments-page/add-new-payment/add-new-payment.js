import React, {useState} from "react";
import "../../../assets/css/custom.css";
import {Link} from "react-router-dom";
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
  InputGroup, Card, CardHeader, CardBody, Collapse, Modal
} from "reactstrap";
import Chip from "../../common/chip/chip";
import Dropzone from "../../common/dropzone/dropzone";
import '../payments-page.css';
import DatePicker from 'react-persian-calendar-date-picker';
import AOS from 'aos'
import GroupUnit from "./group-unit";
import DefaultExample from './example.js';

class AddPaymentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentName: {
        placeholder: 'نام هزینه',
        value: '',
      },
      paymentCost: {
        placeholder: 'میزان هزینه به تومان',
        value: '',
      },
      paymentDescription: {
        placeholder: 'توضیحات',
        value: '',
      },
      paymentDate: {
        placeholder: 'امروز',
        value: '',
      },
      paymentConsumers: {
        value: [],
      },
      paymentPicture: {
        value: []
      },
      payments: [],
      consumersCollapse: false,
      saveInputsValue: false,
      isStepOne: true

    };


    this.handleInputChange = this.handleInputChange.bind(this);
    this.animateCSS = this.animateCSS.bind(this);
    this.handleBackOrNextStep = this.handleBackOrNextStep.bind(this);
    this.myCallBack = this.myCallBack.bind(this);
    AOS.init();
  }
  handleBackOrNextStep(){
    let fadeAnimation = 'fadeOut';
    if(this.state.isStepOne){
      this.animateCSS('.selectGroupCardHeader', fadeAnimation);
      this.animateCSS('.selectGroupCardBody', fadeAnimation, this.myCallBack);
    }
    else{
      this.animateCSS('.selectUsersCardHeader', fadeAnimation);
        this.animateCSS('.selectUsersCardBody', fadeAnimation, this.myCallBack);
    }
  }

  myCallBack(){
    let fadeInAnimation = 'fadeIn';
    let fadeAnimation = 'fadeOut';
    if(this.state.isStepOne) {
      this.setState({
        isStepOne: false
      });
      this.animateCSS('.selectUsersCardHeader', fadeInAnimation);
      this.animateCSS('.selectUsersCardBody', fadeInAnimation);
    }else {
      this.setState({
        isStepOne: true
      });
      this.animateCSS('.selectGroupCardHeader', fadeInAnimation);
      this.animateCSS('.selectGroupCardBody', fadeInAnimation);
    }
  };
  animateCSS(element, animationName, callback) {
    const node = document.querySelector(element);

      node.classList.add('animated', animationName);

      function handleAnimationEnd() {
        node.classList.remove('animated', animationName);
        node.removeEventListener('animationend', handleAnimationEnd);

        if (typeof callback === 'function') callback()
      }

      node.addEventListener('animationend', handleAnimationEnd)

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

    // Dropzone class:
    var myDropzone = new Dropzone("div#myId", { url: "/file/post"});

    const payments = this.state;
    let tempTablePayments = (<p className='nothing'>هیچ هزینه ای اضافه نشده است.</p>);
    if (payments.length > 0) {
      tempTablePayments = <p>hihhihhi</p>;
    }

    const dragBody = document.getElementById('image-upload-body');

    return (
      <div className="my-body">

        <Container>
          <Card data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="50"
                className="card-profile shadow mt-5">
            <CardHeader>
              افزودن هزینه جدید
            </CardHeader>
            <CardBody>
              <Row className="justify-content-center py-5">
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
                              name='paymentName'
                              value={this.state.paymentName.value}
                              onChange={this.handleInputChange}
                            />
                          </InputGroup>
                        </FormGroup>
                      </Col>
                      <Col lg="4" className="m-0">
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon className='input-prepend' addonType="prepend">
                              <InputGroupText>
                                <i className="fa fa-usd"/>
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
                                <i className="fa fa-calendar"/>
                              </InputGroupText>
                            </InputGroupAddon>
                            <PersianCalendar/>
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
                              type="email"
                            />
                          </InputGroup>
                        </FormGroup>
                      </Col>
                      <Col lg="12" className="m-0 mt-3">
                        <Row className="m-0 d-flex justify-content-right">
                          <p className='p-0 mx-3 consumers-text'>مصرف‌کنندگان: </p>
                          <Chip
                            class="mb-2 ml-2"
                            haveCloseButton="true"
                            avatarSrc={require("../../../assets/img/users/user01.jpg")}
                            label="محمد ملااحمدی"
                            // onDelete={() => this.deleteUser()}
                          />
                          <Chip
                            class="mb-2 ml-2"
                            haveCloseButton="true"
                            avatarSrc={require("../../../assets/img/users/user01.jpg")}
                            label="محمد ملااحمدی"
                            // onDelete={() => this.deleteUser()}
                          />
                          <Chip
                            class="mb-2 ml-2"
                            haveCloseButton="true"
                            avatarSrc={require("../../../assets/img/users/user01.jpg")}
                            label="محمد ملااحمدی"
                            // onDelete={() => this.deleteUser()}
                          />
                          <Button className="btn btn-icon payments-btn-lv2"
                                  type="button"
                                  color="dark-green"
                                  onClick={() => this.toggleModal('consumersCollapse')}
                          >
                                <span className="btn-inner--icon">
                                  <i className="fa fa-user-plus"/>
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
                                    <h5 className={`selectGroupCardHeader my-modal-header ${this.state.isStepOne ? '' : 'd-none'}`}>
                                      انتخاب گروه
                                    </h5>
                                    <h5 className={`selectUsersCardHeader my-modal-header ${this.state.isStepOne ? 'd-none' : ''}`}>
                                      انتخاب کاربران
                                    </h5>
                                  </div>
                                  {/* </Row> */}
                                </CardHeader>
                                <CardBody className={`selectGroupCardBody px-lg-3 py-lg-3 ${this.state.isStepOne ? '' : 'd-none'}`}>
                                  <Row className={'groups m-0'}>
                                    <GroupUnit imageUri={require("../../../assets/img/theme/team-4-800x800.jpg")}
                                               groupName={'خوابگاه کشاورز'}/>
                                    <GroupUnit imageUri={require("../../../assets/img/theme/team-4-800x800.jpg")}
                                               groupName={'خوابگاه کشاورز'}/>
                                    <GroupUnit imageUri={require("../../../assets/img/theme/team-4-800x800.jpg")}
                                               groupName={'خوابگاه کشاورز'}/>
                                  </Row>
                                    <Row className="text-center my-4">
                                      <Col>
                                        <Button
                                          className='profile-modal-btn'
                                          // className={'continueBtn profile-modal-btn'}
                                          color="primary"
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
                                <CardBody className={`selectUsersCardBody px-lg-3 py-lg-3 ${this.state.isStepOne ? 'd-none' : ''}`}>
                                  <Row className={'groups m-0'}>
                                    <GroupUnit imageUri={require("../../../assets/img/theme/team-4-800x800.jpg")}
                                               groupName={'خوابگاه کشاورز'}/>
                                    <GroupUnit imageUri={require("../../../assets/img/theme/team-4-800x800.jpg")}
                                               groupName={'خوابگاه کشاورز'}/>

                                  </Row>
                                  <Row className="text-center my-4">
                                    <Col>
                                      <Button
                                        className='profile-modal-btn'
                                        color="primary"

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


                      <Col lg="12" className="m-0 mt-2" id='image-upload-body'>

                          <div className="example">
                          <Dropzone onFilesAdded={console.log} />
                            {/* <DefaultExample ii={dragBody}/>                            */}
                          </div>

                      </Col>

                      <Col lg="12" className="m-0">
                        <Collapse isOpen={this.state.consumersCollapse}>

                        </Collapse>
                      </Col>

                      <Row className="m-0 mt-3 d-flex justify-content-center w-100">
                        <Col lg="auto"
                             className="d-flex align-items-center justify-content-center">
                          <div
                            className="custom-control custom-control-alternative custom-checkbox">
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
                        <Col lg="auto"
                             className="d-flex align-items-center justify-content-center">
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
                  </Form>
                </Col>
              </Row>
            </CardBody>
          </Card>
          <Card data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="50"
                className='mt-5 shadow'>
            <CardHeader>
              هزینه‌های اضافه شده
            </CardHeader>
            <CardBody>

              <FormGroup>
                <Row className="p-0 d-flex mt-3 d-flex justify-content-center">
                  <Col className="lg-6 m-0">
                    <Button
                      className="mr-0 mb-2 audit-button"
                      color="primary"
                      to="/payments"
                      tag={Link}
                    >
                      ثبت و ذخیره نهایی
                    </Button>
                  </Col>
                  <Col className="lg-6 m-0">
                    <Button
                      className="audit-button"
                      color="default"
                      href="#pablo"
                      onClick={() => this.toggle("password")}
                      name="email"
                    >
                      بازگشت
                    </Button>
                  </Col>
                </Row>
              </FormGroup>
              <Row className='m-0 d-flex justify-content-center'>
                {tempTablePayments}
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
