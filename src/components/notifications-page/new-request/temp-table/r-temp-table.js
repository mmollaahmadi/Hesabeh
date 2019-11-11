import React from "react";
import {
  Card,
  Container,
  CardHeader,
  CardBody,
  Row,
} from "reactstrap";
import RTempTableRow from "./r-temp-table-row.js";
import TableTools from "../../../common/table-tools/table-tools";
import RTempTableHeader from "./r-temp-table-header";

class RTempTable extends React.Component {
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
    this.props.requirements.forEach(requirement => {
      _checkedList.push({
        id: requirement.id,
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
    let requirements = [];

    this.props.requirements.forEach(requirement => {
      requirements.push(<RTempTableRow
        data={requirement}
        checked={this.getCheckedStatus(requirement.id)}
        updateCheckBoxesStatusList={this.updateCheckBoxesStatusList}
        />);
    });
    return (
    <>
              <TableTools
              isAnyChecked={this.isAnyCheckBoxTrue()}
              buttonTitle="افزودن هزینه"
              buttonLink="/add-new-payment"
              />
              <Row className="w-100 justify-content-center py-1">
                <RTempTableHeader
                allCheckBoxesChecked={this.state.allCheckBoxesChecked}
                handleAllCheckedChange={this.handleAllCheckedChange}
                />
                {requirements}
              </Row>
          </>
    );
  }
}

export default RTempTable;
