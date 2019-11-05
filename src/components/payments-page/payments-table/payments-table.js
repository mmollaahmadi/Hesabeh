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
      allCheckBoxesChecked: false,
      checkBoxesStatusList: []
    };
    this.updateCheckBoxesStatusList = this.updateCheckBoxesStatusList.bind(this);
    this.isAnyCheckBoxTrue = this.isAnyCheckBoxTrue.bind(this);
    this.handleAllCheckedChange = this.handleAllCheckedChange.bind(this);
    this.allCheckBoxesChecked = this.allCheckBoxesChecked.bind(this);
    this.getCheckedStatus = this.getCheckedStatus.bind(this);
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
              buttonLink="/add-new-payment"/>
              <TableFilters data={FILTERS}/>
              <Row className="justify-content-center py-1">
                <PaymentsTableHeader
                allCheckBoxesChecked={this.state.allCheckBoxesChecked}
                handleAllCheckedChange={this.handleAllCheckedChange}
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
