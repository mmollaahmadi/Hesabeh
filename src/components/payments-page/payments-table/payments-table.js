import React from "react";
import {
  Card,
  Container,
  CardHeader,
  CardBody,
  Row,
} from "reactstrap";
import PaymentsTableRow from "./payments-table-row.js";
import TableTools from "../../common/table-tools/table-tools";
import TableFilters from "../../common/table-filters/table-filters";
import PaymentsTableHeader from "./payments-table-header";
import {FILTERS} from '../../../constants/constants'

class PaymentsTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      allCheckboxesStatus: false,
      checkboxesStatusList: []
    };
    this.updateCheckboxesStatusList = this.updateCheckboxesStatusList.bind(this);
    this.areAllCheckBoxes = this.areAllCheckBoxes.bind(this);
    this.isAnyCheckBoxChecked = this.isAnyCheckBoxChecked.bind(this);
    this.handleAllCheckboxesStatusChange = this.handleAllCheckboxesStatusChange.bind(this);
    this.getCheckStatus = this.getCheckStatus.bind(this);
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
      checkboxesStatusList: _checkedList
    });
  }

  updateCheckboxesStatusList(id){
    let _checkedList = this.state.checkboxesStatusList;
    _checkedList.forEach(el => {
      if(el.id === id){
        el.checked = !el.checked
      }
    });
    this.setState({
      checkboxesStatusList: _checkedList,
      allCheckboxesStatus: this.areAllCheckBoxes(_checkedList)
    });
  }
  areAllCheckBoxes(list){
    let flag = true;
    list.forEach(item => {
      if(!item.checked)
        flag = false;
    });
    return flag;
  }

  isAnyCheckBoxChecked(){
    let _checkedList = this.state.checkboxesStatusList;
    let flag = false;
    _checkedList.forEach(el => {
      if(el.checked === true){
        flag = true;
      }
    });
    return flag;
  }

handleAllCheckboxesStatusChange(){
  let _checkedList = this.state.checkboxesStatusList;
  _checkedList.forEach(el => {
      el.checked = !this.state.allCheckboxesStatus
  });
  this.setState({
    checkboxesStatusList: _checkedList,
    allCheckboxesStatus: !this.state.allCheckboxesStatus
  });
}
getCheckStatus(id){
  let _checkedList = this.state.checkboxesStatusList;
  let status = false;
  _checkedList.forEach(el => {
    if(el.id === id)
      status = el.checked
  });
  return status;
}
  render() {
    let payments = [];

    this.props.payments.forEach(payment => {
      payments.push(<PaymentsTableRow        
        checkedStatus={this.getCheckStatus(payment.id)}
        data={payment}
        updateCheckboxesStatusList={this.updateCheckboxesStatusList}
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
              isAnyChecked={this.isAnyCheckBoxChecked()}
              buttonTitle="افزودن هزینه"
              buttonLink="/add-new-payment"/>
              <TableFilters data={FILTERS}/>
              <Row className="justify-content-center py-1">
                <PaymentsTableHeader
                handleAllCheckboxesStatusChange={this.handleAllCheckboxesStatusChange}
                allCheckboxesStatus={this.state.allCheckboxesStatus}
                />
                {payments}
              </Row>
            </CardBody>
          </Card>
        </Container>
      </section>
    );
  }
}

export default PaymentsTable;
