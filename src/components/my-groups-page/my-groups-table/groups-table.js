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
    AOS.init();
  }
  render() {
    let myGroups = [];
    this.props.myGroups.forEach(group => {
      myGroups.push(<MyGroupsTableRow dataGroup={group}/>);
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
              <TableTools buttonTitle="ایجاد گروه جدید" buttonLink="/create-new-group"/>
              <TableFilters data={FILTERS}/>
              <Row className="justify-content-center py-1">
                <MyGroupsTableHeader/>
                {myGroups}
              </Row>
            </CardBody>
          </Card>
        </Container>

    );
  }
}

export default GroupsTable;
