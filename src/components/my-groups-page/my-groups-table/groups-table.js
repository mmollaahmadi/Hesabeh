import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Row,
} from "reactstrap";
import MyGroupsTableRow from "./my-groups-table-row.js";
import TableTools from "../../common/table-tools/table-tools";
import MyGroupsTableHeader from "./my-groups-table-header";
import AOS from 'aos'
import TableFilters from "../../common/table-filters/table-filters";
import {FILTERS} from '../../../constants/constants'
class GroupsTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      allCheckBoxesChecked: false,
      checkBoxesStatusList: []
    };
    AOS.init();

    this.updateCheckBoxesStatusList = this.updateCheckBoxesStatusList.bind(this);
    this.isAnyCheckBoxTrue = this.isAnyCheckBoxTrue.bind(this);
    this.handleAllCheckedChange = this.handleAllCheckedChange.bind(this);
    this.allCheckBoxesChecked = this.allCheckBoxesChecked.bind(this);
    this.getCheckedStatus = this.getCheckedStatus.bind(this);
  }
  componentDidMount(){
    let _checkedList = [];
    this.props.myGroups.forEach(group => {
      _checkedList.push({
        id: group.id,
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
    if(el.id === id)
      flag = el.checked;
  });
  return flag;
}
  render() {
    let myGroups = [];
    this.props.myGroups.forEach(group => {
      myGroups.push(<MyGroupsTableRow
        dataGroup={group}
        checked={this.getCheckedStatus(group.id)}
        updateCheckBoxesStatusList={this.updateCheckBoxesStatusList}
        />);
    });
    return (

        <Container>
          <Card data-aos="fade-up"
               data-aos-duration="1000"
               data-aos-delay="50"
               className="card-profile shadow mt-5">
            <CardHeader>
            لیست گروه ها
            </CardHeader>
            <CardBody>
              <TableTools
              isAnyChecked={this.isAnyCheckBoxTrue()}
              buttonTitle="ایجاد گروه جدید"
              buttonLink="/create-new-group"

              />
              <TableFilters filters={FILTERS}/>
              <Row className="justify-content-center py-1">
                <MyGroupsTableHeader
                allCheckBoxesChecked={this.state.allCheckBoxesChecked}
                handleAllCheckedChange={this.handleAllCheckedChange}
                />
                {myGroups}
              </Row>
            </CardBody>
          </Card>
        </Container>

    );
  }
}

export default GroupsTable;
