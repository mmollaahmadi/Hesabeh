import React from "react";
import {
  Row,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Collapse
} from "reactstrap";
import Chip from "../../common/chip/chip";
import UserGroupAccount from "../../common/user-group-account/user-group-account";
import Dropzone from "../../common/dropzone/dropzone";
import ChooseUsers from "../../common/choose-users/choose-users";

class RequirementsListRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderName: {
        placeholder: "نام سفارش",
        value: ""
      },
      orderDescription: {
        placeholder: "توضیحات",
        value: ""
      },
      orderSupplier: {
        value: []
      },
      orderPicture: {
        value: []
      },
      requirements:[]
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
    const groups = [];
    this.props.groups.forEach(group => {
      groups.push(<UserGroupAccount username={group.username} />);
    });

    const requirements = this.state;
    let tempTableRequirements = (
      <p className="nothing">هیچ هزینه ای اضافه نشده است.</p>
    );
    if (requirements.length > 0) {
      tempTableRequirements = <p>hihhihhi</p>;
    }

    return (
      <Card
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="50"
        className="card-profile shadow mt-5"
      >
        <CardHeader>ایجاد لیست نیازمندی</CardHeader>
        <CardBody>
          <Row className="justify-content-center">
            <Col sm="12" className="notifications-table">
              <Form role="form" className="audit-form">
                {/*<Row className="mb-3 d-flex justify-content-right">
                </Row>*/}

                <Row className=" m-0 text-center justify-content-center">
                  <ChooseUsers
                    currentUser={this.props.currentUser}
                    title={"*مخاطبین:"}
                  />

                  <Col lg="5" className="m-0">
                    <FormGroup className="mb-3">
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>

                        <Input
                          className="audit-input"
                          placeholder={this.state.orderName.placeholder}
                          name="orderName"
                          value={this.state.orderName.value}
                          onChange={this.handleInputChange}
                        />
                      </InputGroup>
                    </FormGroup>
                  </Col>

                  <Col lg="7" className="m-0">
                    <FormGroup className="mb-2 p-0">
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-edit" />
                          </InputGroupText>
                        </InputGroupAddon>

                        <Input
                          className="audit-input"
                          placeholder={this.state.orderDescription.placeholder}
                          type="email"
                        />
                      </InputGroup>
                    </FormGroup>
                  </Col>

                  <Col lg="12" className="m-0 mt-2" id="image-upload-body">
                    <div className="example">
                      <Dropzone onFilesAdded={console.log} />
                      {/* <DefaultExample ii={dragBody}/>                            */}
                    </div>
                  </Col>
                  {/*<Col lg="12" className="m-0">
                    <div className='drag-pic'>
                      <p className='m-0'>افزودن تصویر</p>
                      <Button className="btn btn-icon payments-btn-lv2"
                              type="button"
                              color="dark-green">
                                                                <span className="btn-inner--icon">
                                                                  <i className="fa fa-camera"/>
                                                                </span>
                        //<span className="btn-inner--text">افزودن عکس</span>
                      </Button>
                    </div>
                  </Col>*/}

                  <Col lg="12" className="m-0">
                    <Collapse isOpen={this.state.consumersCollapse}></Collapse>
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
                        className="payments-btn-lv2"
                        color="primary"
                        href="#pablo"
                        onClick={() => this.toggle("password")}
                        name="email"
                      >
                        افزودن نیازمندی
                      </Button>
                    </Col>
                  </Row>
                </Row>

                <Card                
                  className="mt-5 shadow"
                >
                  <CardHeader>نیازمندیهای اضافه شده</CardHeader>
                  <CardBody>
                  <Row className="m-0 d-flex justify-content-center">
                    {tempTableRequirements}
                  </Row>
                  </CardBody>
                </Card>



              </Form>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default RequirementsListRequest;
