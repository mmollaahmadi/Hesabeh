import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";

import NotificationsTableRow from "./notifications-table-row.js";
import TableCardHeader from "../common/table-card-header/table-card-header";

class NotificationsTable extends React.Component {
  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  render() {
    const rows = [];
    this.props.data.forEach(row => {
      rows.push(<NotificationsTableRow rowData={row} />);
    });

    return (
      <section className="section pt-0">
        <Container>
          <Card className="card-profile shadow mt-5">
            <CardHeader>
              <TableCardHeader title="" buttonTitle="ایجاد درخواست" buttonLink="/create-new-request"/>
            </CardHeader>
            <CardBody>
              <Row className="justify-content-center py-5">
                <Col sm="12" className="notifications-table">
                  {rows}
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Container>
      </section>
    );
  }
}

export default NotificationsTable;
