import React from "react";
import {
  Card,
  Container,
  CardHeader,
  CardBody,
  Row,
  Button,
  Modal,
  Col,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup
} from "reactstrap";
import { Link } from "react-router-dom";
import PaymentsTableRow from "./payments-table-row.js";
import TableTools from "../../common/table-tools/table-tools";
import TableFilters from "../../common/table-filters/table-filters";
import PaymentsTableHeader from "./payments-table-header";
import {FILTERS} from '../../../constants/constants'

class PaymentsTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      allCheckBoxesChecked: false,
      checkBoxesStatusList: [],
      editModalShow: false,
      paymentIDForEdit:'',
    };
    this.updateCheckBoxesStatusList = this.updateCheckBoxesStatusList.bind(this);
    this.isAnyCheckBoxTrue = this.isAnyCheckBoxTrue.bind(this);
    this.handleAllCheckedChange = this.handleAllCheckedChange.bind(this);
    this.allCheckBoxesChecked = this.allCheckBoxesChecked.bind(this);
    this.getCheckedStatus = this.getCheckedStatus.bind(this);
    this.toggleEditPaymentModal = this.toggleEditPaymentModal.bind(this);
  }
toggleEditPaymentModal(){
  this.setState({
    editModalShow: !this.state.editModalShow,
  });
}
  componentDidMount(){
    let _checkedList = [];
    this.props.payments.forEach(payment => {
      _checkedList.push({
        id: payment.id,
        checked: false
      });
    });
    this.setState({
      checkBoxesStatusList: _checkedList
    });
  }

  updateCheckBoxesStatusList(id){
    let _checkedList = this.state.checkBoxesStatusList;
    _checkedList.forEach(el => {
      if(el.id === id){
        el.checked = !el.checked
      }
    });
    this.setState({
      checkBoxesStatusList: _checkedList,
      allCheckBoxesChecked: this.allCheckBoxesChecked(_checkedList)
    });
  }
  allCheckBoxesChecked(list){
    let flag = true;
    this.state.checkBoxesStatusList.forEach(el => {
      if(!el.checked)
        flag = false;
    });
    return flag;
  }

  isAnyCheckBoxTrue(){
    let _checkedList = this.state.checkBoxesStatusList;
    let flag = false;
    _checkedList.forEach(el => {
      if(el.checked === true){
        flag = true;
      }
    });
    return flag;
  }

handleAllCheckedChange(){
  let _checkedList = this.state.checkBoxesStatusList;
  _checkedList.forEach(el => {
      el.checked = !this.state.allCheckBoxesChecked
  });
  this.setState({
    allCheckBoxesChecked: !this.state.allCheckBoxesChecked,
    checkBoxesStatusList: _checkedList,
  });
}
getCheckedStatus(id){
  let flag = false;
  this.state.checkBoxesStatusList.forEach(el => {
    if(el.id == id)
      flag = el.checked;
  });
  return flag;
}

  render() {
    let payments = [];

    this.props.payments.forEach(payment => {
      payments.push(<PaymentsTableRow
        data={payment}
        checked={this.getCheckedStatus(payment.id)}
        updateCheckBoxesStatusList={this.updateCheckBoxesStatusList}
        onClick={this.toggleEditPaymentModal}
        />);
    });
    return (
      <section className="section pt-0">
        <Container>
          <Card data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="card-profile shadow mt-4">
            <CardHeader>
              هزینه‌ها
            </CardHeader>
            <CardBody>
              <TableTools
              isAnyChecked={this.isAnyCheckBoxTrue()}
              buttonTitle="افزودن هزینه"
              buttonLink="/add-new-payment"
              // handleDelete={this.handleDelete}
              />
              <TableFilters data={FILTERS}/>
              <Row className="justify-content-center py-1">
                <PaymentsTableHeader
                allCheckBoxesChecked={this.state.allCheckBoxesChecked}
                handleAllCheckedChange={this.handleAllCheckedChange}
                />
                {payments}
              </Row>
              <Modal
                className="modal-dialog-centered"
                isOpen={this.state.editModalShow}
                toggle={() => this.toggleEditPaymentModal()}
              >
                <div className="modal-body p-0">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-transparent p-1">
                      <div className="text-muted  mt-3 mb-2">
                        <h5 className="my-modal-header">
                          ویرایش اطلاعات کاربری
                        </h5>
                      </div>
                    </CardHeader>
                    <CardBody className=" py-lg-3">
                      <Form role="form" className="audit-form">
                        <Row className="text-center justify-content-center">
                          <Col lg="10">
                            <FormGroup className="mb-3">
                              <InputGroup className="input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="ni ni-email-83" />
                                  </InputGroupText>
                                </InputGroupAddon>

                                <Input
                                  className="audit-input"
                                  value="mollaahmadimohammad@gmail.com"
                                  type="email"
                                />
                              </InputGroup>
                            </FormGroup>

                            <FormGroup className="mb-3">
                              <InputGroup className="input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="fa fa-user" />
                                  </InputGroupText>
                                </InputGroupAddon>

                                <Input
                                  className="audit-input"
                                  value="محمد ملااحمدی"
                                  type="email"
                                />
                              </InputGroup>
                            </FormGroup>

                            <FormGroup className="mb-3">
                              <InputGroup className="input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="fa fa-phone" />
                                  </InputGroupText>
                                </InputGroupAddon>

                                <Input
                                  className="audit-input"
                                  value="۰۹۱۸۳۶۹۴۸۵۸"
                                />
                              </InputGroup>
                            </FormGroup>

                            <FormGroup>
                              <Row className="justify-item-center d-flex">
                                <Col>
                                  <Button
                                    className="profile-modal-btn"
                                    color="primary"
                                    to="/dashboard"
                                    tag={Link}
                                  >
                                    ثبت تغییرات
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
                            </FormGroup>
                          </Col>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>
                </div>
              </Modal>
            </CardBody>
          </Card>
        </Container>
      </section>
    );
  }
}

export default PaymentsTable;
