import React from "react";
import { Row, } from "reactstrap";
import PaymentsTableRow from "../../payments-table/payments-table-row.js";
// import PaymentsTableHeader from "../../payments-table/payments-table-header";
import TableTools from '../../../../common/table-tools/table-tools'
class TempTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCheckBoxesChecked: false,
      checkBoxesStatusList: []
    };
    this.updateCheckBoxesStatusList = this.updateCheckBoxesStatusList.bind(
      this
    );
    this.isAnyCheckBoxTrue = this.isAnyCheckBoxTrue.bind(this);
    this.handleAllCheckedChange = this.handleAllCheckedChange.bind(this);
    this.allCheckBoxesChecked = this.allCheckBoxesChecked.bind(this);
    this.getCheckedStatus = this.getCheckedStatus.bind(this);
  }
  componentDidMount() {
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

    this.props.payments.forEach(payment => {
      payments.push(
        <PaymentsTableRow
          data={payment}
          checked={this.getCheckedStatus(payment.id)}
          updateCheckBoxesStatusList={this.updateCheckBoxesStatusList}
        />
      );
    });
    return (
      <>
      <TableTools
        hasSearch={false}
        isAnyChecked={this.isAnyCheckBoxTrue()}
        buttonTitle="تایید و افزودن"
        buttonLink="/add-new-payment"
      />
      <Row className="w-100 justify-content-center py-1">
        {/*<PaymentsTableHeader
          allCheckBoxesChecked={this.state.allCheckBoxesChecked}
          handleAllCheckedChange={this.handleAllCheckedChange}
        />*/}
        {payments}
      </Row>
      </>
    );
  }
}

export default TempTable;
