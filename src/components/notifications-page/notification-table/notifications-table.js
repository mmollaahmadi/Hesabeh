import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row
} from "reactstrap";
import NotificationsTableHeader from './notifications-table-header'
import NotificationsTableRow from "./notifications-table-row.js";
import TableTools from "../../common/table-tools/table-tools";
import AOS from 'aos';

class NotificationsTable extends React.Component {
  constructor(props){
    super(props);
    AOS.init();
  }

  render() {
    const rows = [];
    this.props.data.forEach(row => {
      rows.push(<NotificationsTableRow rowData={row}/>);
    });

    return (

        <Container>
          <Card data-aos="fade-up"
               data-aos-duration="1000"
               data-aos-delay="50"
          className="card-profile shadow mt-5">
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

    );
  }
}

export default NotificationsTable;
