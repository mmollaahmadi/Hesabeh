import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";
import NotificationsTableHeader from './notifications-table-header'
import NotificationsTableRow from "./notifications-table-row.js";
import TableTools from "../../common/table-tools/table-tools";

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
      rows.push(<NotificationsTableRow rowData={row}/>);
    });

    return (
      <section className="section pt-0">
        <Container>
          <Card className="card-profile shadow mt-5">
            <CardHeader>

            </CardHeader>
            <CardBody>
              <TableTools buttonTitle="ایجاد درخواست" buttonLink="/create-new-request"/>
              <Row className="justify-content-center py-5">
                <NotificationsTableHeader/>
                {rows}
              </Row>
            </CardBody>
          </Card>
        </Container>
      </section>
    );
  }
}

export default NotificationsTable;
