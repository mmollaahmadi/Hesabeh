import React, {useState} from "react";
import "../assets/css/custom.css";
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
  InputGroup, Card, CardHeader, CardBody, Collapse
} from "reactstrap";
import NavBar from "../common/navbar/navbar.js";
import Footer from "../common/footer/footer.js";
import Chip from "../common/chip/chip";
import './payments-page.css';
import DatePicker from 'react-persian-calendar-date-picker';

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

    };

    this.handleInputChange = this.handleInputChange.bind(this);
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



  render() {

    const payments = this.state;
    let tempTablePayments = (<p className='nothing'>هیچ هزینه ای اضافه نشده است.</p>);
    if (payments.length > 0) {
      tempTablePayments = <p>hihhihhi</p>;
    }

    return (
      <div>
        <NavBar isLogin="true"/>

        <div className="my-body">
          <section className="section pt-0">
            <Container>
              <Card className="card-profile shadow mt-5">
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


                                  <App/>

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
                                avatarSrc={require("../assets/img/users/user01.jpg")}
                                label="محمد ملااحمدی"
                                // onDelete={() => this.deleteUser()}
                              />
                              <Chip
                                class="mb-2 ml-2"
                                haveCloseButton="true"
                                avatarSrc={require("../assets/img/users/user01.jpg")}
                                label="محمد ملااحمدی"
                                // onDelete={() => this.deleteUser()}
                              />
                              <Chip
                                class="mb-2 ml-2"
                                haveCloseButton="true"
                                avatarSrc={require("../assets/img/users/user01.jpg")}
                                label="محمد ملااحمدی"
                                // onDelete={() => this.deleteUser()}
                              />
                              <Button className="btn btn-icon payments-btn-lv2"
                                      type="button"
                                      color="dark-green">
                                <span className="btn-inner--icon">
                                  <i className="fa fa-user-plus"/>
                                </span>
                                {/*<span className="btn-inner--text">مصرف کنندگان</span>*/}
                              </Button>
                            </Row>

                          </Col>


                          <Col lg="12" className="m-0">
                            <div className='drag-pic'>
                              <p className='m-0 add-image-text'>افزودن تصویر</p>
                              <Button className="btn btn-icon payments-btn-lv2"
                                      type="button"
                                      color="dark-green">
                                <span className="btn-inner--icon">
                                  <i className="fa fa-camera"/>
                                </span>
                                {/*<span className="btn-inner--text">افزودن عکس</span>*/}
                              </Button>
                            </div>
                          </Col>

                          <Col lg="12" className="m-0">
                            <Collapse isOpen={this.state.consumersCollapse}>

                            </Collapse>
                          </Col>

                          <Row className="m-0 d-flex justify-content-center w-100">
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
                                className="payments-btn-lv2"
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
              <Card className='mt-5 shadow'>
                <CardHeader>
                  هزینهها
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
          </section>
        </div>

        <Footer/>
      </div>
    );
  }
}
const App = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  return (
    <DatePicker
      selectedDay={selectedDay}
      onChange={setSelectedDay}
      colorPrimary="#01cd9a"
      calendarClassName="custom-calendar"
      calendarTodayClassName="custom-today-day"
      inputPlaceholder="انتخاب روز"
    />
  );
};
export default AddPaymentPage;
