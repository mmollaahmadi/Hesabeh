import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Row,
  Col
} from "reactstrap";
import GroupsTableRow from "./my-groups-table-row.js";
import TableCardHeader from "../common/table-card-header/table-card-header";

class GroupsTable extends React.Component {
  render() {
    let myGroups = [];
    this.props.myGroups.forEach(group => {
      myGroups.push(<GroupsTableRow dataGroup={group} />);
    });
    return (
      <section className="section pt-0">
        <Container>
          <Card className="card-profile shadow mt-5">
            <CardHeader>
              <TableCardHeader title="" buttonTitle="ایجاد گروه جدید" buttonLink="/create-new-group"/>
            </CardHeader>
            <CardBody>
              <Row className="justify-content-center p-5">
                <Col sm="12" className="notifications-table">
                  {myGroups}
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Container>
      </section>
    );
  }
}

export default GroupsTable;
