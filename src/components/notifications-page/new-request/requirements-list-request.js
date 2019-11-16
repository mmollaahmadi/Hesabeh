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
import UserGroupAccount from "../../common/user-group-account/user-group-account";
import SelectionUsers from "../../common/selection-users/selection-users";
import DefaultExample from '../../my-account-page/add-new-payment/example'
import RTempTable from './temp-table/r-temp-table'

class RequirementsListRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderNameAndDescription: {
        placeholder: "نام و توضیحات نیازمندی",
        value: ""
      },
      orderSupplier: {
        value: []
      },
      orderPictures: {
        value: []
      },
      requirements:[]
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddRequirementClick = this.handleAddRequirementClick.bind(this);
    this.setFiles = this.setFiles.bind(this);
  }
handleAddRequirementClick(){
  let requirements = this.state.requirements;
  requirements.push({
    name: this.state.orderNameAndDescription.value,
    consumers:this.state.orderSupplier.value,
    pictures:this.state.orderPictures.value,
  });

  // this.resetInputs();
  this.setState({
    requirements:requirements,
    orderNameAndDescription: {
      ...this.state.orderNameAndDescription,
      value: ''
    },
    // orderSupplier: {
    //   ...this.state.orderSupplier,
    //   value: []
    // },
    orderPictures: {
      value:[]
    },
  });
}
setFiles(files){
  this.setState({
    orderPictures:{
      value:files
    }
  });
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

    let requirements = this.state.requirements;
    let tempTableRequirements = null;
    if(requirements.length === 0){
        tempTableRequirements = (
          <p className="nothing">هیچ نیازمندی ای ضافه نشده است.</p>
        );
    }
    else {
      tempTableRequirements = (
        <RTempTable requirements={requirements}/>
      );
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
                  <SelectionUsers
                    currentUser={this.props.currentUser}
                    title={"*مخاطبین:"}
                  />

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
                          placeholder={this.state.orderNameAndDescription.placeholder}
                          type="text"
                          name="orderNameAndDescription"
                          value={this.state.orderNameAndDescription.value}
                          onChange={this.handleInputChange}
                        />
                      </InputGroup>
                    </FormGroup>
                  </Col>

                  <Col lg="12" className="m-0 mt-2" id="image-upload-body">
                    <div className="example">
                      {/*<Dropzone onFilesAdded={console.log} />*/}
                       <DefaultExample setFiles={this.setFiles}/>
                    </div>
                  </Col>

                  <Col lg="12" className="m-0">
                    <Collapse isOpen={this.state.consumersCollapse}></Collapse>
                  </Col>

                  <Row className="m-0 mt-3 d-flex justify-content-center w-100">
                    {/*<Col
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
                    </Col>*/}
                    <Col
                      lg="auto"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <Button
                        className="payments-btn-lv2"
                        color="primary"
                        href="#pablo"
                        onClick={this.handleAddRequirementClick}
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
