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
} from "reactstrap";
import PaymentsTableRow from "./payments-table-row.js";
import TableTools from "../../../common/table-tools/table-tools";
import TableFilters from "../../../common/table-filters/table-filters";
import { FILTERS } from "../../../../constants/constants";
import Masonry from "react-masonry-css";
import {getdefaultOrders, getLabelsOfUsers, getPaymentsOfUsers} from "../../../../utils/apiUtils";

const breakpointColumnsObj = {
  default: 4,
  1900: 3,
  992: 2,
  767: 1
};

class PaymentsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels:[],
      payments:[],
      defaultOrders:1,
      allCheckBoxesChecked: false,
      checkBoxesStatusList: [],
      deleteModal: false,
      paymentIDForDelete: ""
    };
    this.updateCheckBoxesStatusList = this.updateCheckBoxesStatusList.bind(
      this
    );
    this.isAnyCheckBoxTrue = this.isAnyCheckBoxTrue.bind(this);
    this.handleAllCheckedChange = this.handleAllCheckedChange.bind(this);
    this.allCheckBoxesChecked = this.allCheckBoxesChecked.bind(this);
    this.getCheckedStatus = this.getCheckedStatus.bind(this);
    this.handleDeleteModal = this.handleDeleteModal.bind(this);
    this.selectSort = this.selectSort.bind(this);
  }
  selectSort(ID) {
    this.setState({
      defaultOrders: {
        ...this.state.defaultOrders,
        paymentsDefaultOrder:ID,
      }
    });
  };

  handleDeleteModal(id) {
    this.setState({
      deleteModal: !this.state.deleteModal,
      paymentIDForDelete: id,
    });
  }
  componentDidMount() {
    let _labels=[];
    let _payments=[];
    let _defaultOrders=1;
    if(this.props.currentUser){
      _labels = getLabelsOfUsers(this.props.currentUser.id);
      _payments = getPaymentsOfUsers(this.props.currentUser.id);
      _defaultOrders = getdefaultOrders(this.props.currentUser.id);
    }


    let _checkedList = [];
    _payments.forEach(payment => {
      _checkedList.push({
        id: payment.id,
        checked: false
      });
    });
    this.setState({
      labels: _labels,
      payments:_payments,
      defaultOrders: _defaultOrders,
      checkBoxesStatusList: _checkedList
    });
  }

  updateCheckBoxesStatusList(id) {
    let _checkedList = this.state.checkBoxesStatusList;
    _checkedList.forEach(el => {
      if (el.id === id) {
        el.checked = !el.checked;
      }
    });
    this.setState({
      checkBoxesStatusList: _checkedList,
      allCheckBoxesChecked: this.allCheckBoxesChecked(_checkedList)
    });
  }
  allCheckBoxesChecked(list) {
    let flag = true;
    this.state.checkBoxesStatusList.forEach(el => {
      if (!el.checked) flag = false;
    });
    return flag;
  }

  isAnyCheckBoxTrue() {
    let _checkedList = this.state.checkBoxesStatusList;
    let flag = false;
    _checkedList.forEach(el => {
      if (el.checked === true) {
        flag = true;
      }
    });
    return flag;
  }

  handleAllCheckedChange() {
    let _checkedList = this.state.checkBoxesStatusList;
    _checkedList.forEach(el => {
      el.checked = !this.state.allCheckBoxesChecked;
    });
    this.setState({
      allCheckBoxesChecked: !this.state.allCheckBoxesChecked,
      checkBoxesStatusList: _checkedList
    });
  }
  getCheckedStatus(id) {
    let flag = false;
    this.state.checkBoxesStatusList.forEach(el => {
      if (el.id === id) flag = el.checked;
    });
    return flag;
  }

  render() {
    let payments = [];

    this.state.payments.forEach(payment => {
      payments.push(
        <PaymentsTableRow
          data={payment}
          checked={this.getCheckedStatus(payment.id)}
          updateCheckBoxesStatusList={this.updateCheckBoxesStatusList}
          handleDeleteModal={this.handleDeleteModal}
        />
      );
    });
    return (
      <section className="section pt-0">
        <Container>
          <Card
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="card-profile shadow mt-4"
          >
            <CardHeader>هزینه‌ها</CardHeader>
            <CardBody>
              <TableTools
                isAnyChecked={this.isAnyCheckBoxTrue()}
                buttonTitle="افزودن هزینه"
                buttonLink="/add-new-payment"
                // handleDelete={this.handleDelete}
              />
              <TableFilters
                currentUser={this.props.currentUser}
                filters={FILTERS}
                _selectedFilterID={this.state.defaultOrders.paymentsDefaultOrder}
                selectSort={this.selectSort}
                labels={this.state.labels}
              />
            </CardBody>
          </Card>

          <Row className="justify-content-start py-1">
            {/*<PaymentsTableHeader
                allCheckBoxesChecked={this.state.allCheckBoxesChecked}
                handleAllCheckedChange={this.handleAllCheckedChange}
                />*/}
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {payments}
            </Masonry>
          </Row>

        </Container>
        <Modal
          className="modal-dialog-centered"
          isOpen={this.state.deleteModal}
          toggle={() => this.handleDeleteModal('')}
        >
          <div className="modal-body p-0">
            <Card className="bg-secondary shadow border-0">
              <CardHeader className="bg-transparent p-1">
                <div className="text-muted  mt-3 mb-2">
                  <h5 className="my-modal-header">
                    آیا مطمئنید؟
                  </h5>
                </div>
              </CardHeader>
              <CardBody className=" py-lg-3">
                <Form role="form" className="audit-form">
                  <Row className="text-center justify-content-center">
                    <Col lg="10">
                      <FormGroup>
                        <Row className="justify-item-center d-flex">
                          <Col>
                            <p>{this.state.paymentIDForDelete}</p>
                            <Button
                              className="tight-btn"
                              color="primary"
                            >
                              مطمئنم
                            </Button>
                            <Button
                              className="tight-btn"
                              color="default"
                              onClick={() => this.handleDeleteModal('')}
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
      </section>
    );
  }
}

export default PaymentsTable;
