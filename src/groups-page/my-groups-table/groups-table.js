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

class GroupsTable extends React.Component {
  render() {
    let myGroups = [];
    this.props.myGroups.forEach(group => {
      myGroups.push(<MyGroupsTableRow dataGroup={group}/>);
    });
    return (
      <section className="section pt-0">
        <Container>
          <Card className="card-profile shadow mt-5">
            <CardHeader>
            </CardHeader>
            <CardBody>
              <TableTools buttonTitle="ایجاد گروه جدید" buttonLink="/create-new-group"/>
              <Row className="justify-content-center px-2">
                <MyGroupsTableHeader/>
                {myGroups}
              </Row>
            </CardBody>
          </Card>
        </Container>
      </section>
    );
  }
}

export default GroupsTable;
