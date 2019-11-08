import React from "react";
import {
  Card,
  Container,
  CardHeader,
  CardBody,
  Row,
} from "reactstrap";
import TableTools from "../table-tools/table-tools";
import TableFilters from "../table-filters/table-filters";
import MyTableHeader from "./my-table-header";
import MyTableRow from "./my-table-row"

class MyTable extends React.Component {
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
    let rows = [];

    this.props.data.rows.forEach(row => {
      rows.push(<MyTableRow
        checkedStatus={this.getCheckStatus(row.id)}
        data={row}
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
              {this.props.data.title}
            </CardHeader>
            <CardBody>
              <TableTools
              isAnyChecked={this.isAnyCheckBoxChecked()}
              buttonTitle={this.props.data.toolsButton.title}
              buttonLink={this.props.data.toolsButton.link}
              />
              <TableFilters data={this.props.data.filters}/>
              <Row className="justify-content-center py-1">
                <MyTableHeader
                columns = {this.props.data.header.columns}
                handleAllCheckboxesStatusChange={this.handleAllCheckboxesStatusChange}
                allCheckboxesStatus={this.state.allCheckboxesStatus}
                />
                {rows}
              </Row>
            </CardBody>
          </Card>
        </Container>
      </section>
    );
  }
}

export default MyTable;
