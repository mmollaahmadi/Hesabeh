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
      allChecked: false,
      checkedList: []
    };
    this.updateCheckedList = this.updateCheckedList.bind(this);
    this.isAnyChecked = this.isAnyChecked.bind(this);
    this.handleAllChecked = this.handleAllChecked.bind(this);
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
      checkedList: _checkedList
    });
  }

  updateCheckedList(id){
    let _checkedList = this.state.checkedList;
    _checkedList.forEach(el => {
      if(el.id === id){
        el.checked = !el.checked
      }
    });
    this.setState({
      checkedList: _checkedList,
      allChecked: false
    });
  }

  isAnyChecked(){
    // if(this.state.allChecked === true) return true;

    let _checkedList = this.state.checkedList;
    let flag = false;
    _checkedList.forEach(el => {
      if(el.checked === true){
        flag = true;
      }
    });
    return flag;
  }

handleAllChecked(){
  this.setState({
    allChecked: !this.state.allChecked
  });
}
  render() {
    let payments = [];

    this.props.payments.forEach(payment => {
      payments.push(<PaymentsTableRow
        allChecked={this.state.allChecked}
        data={payment}
        updateCheckedList={this.updateCheckedList}/>);
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
              isAnyChecked={this.isAnyChecked()}
              buttonTitle="افزودن هزینه"
              buttonLink="/add-new-payment"/>
              <TableFilters data={FILTERS}/>
              <Row className="justify-content-center py-1">
                <PaymentsTableHeader handleAllChecked={this.handleAllChecked}/>
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
